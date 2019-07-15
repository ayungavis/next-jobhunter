import React, { Component } from "react"
import { Layout, Typography, Row, Col, Form, Input, Icon, Button } from "antd"
import { connect } from "react-redux"
import Router from "next/router"

import Navbar from "../components/navbar"
import { getStatus } from "../redux/actions/auth"
import { searchVacancy } from "../redux/actions/vacancies"

class Landing extends Component {
	constructor() {
		super()
		this.state = {
			loading: false
		}
	}

	static async getInitialProps(ctx) {
		if (ctx.req) {
			const token = await ctx.req.headers.cookie
			if (token) {
				const action = getStatus(token.split("=")[1])
				ctx.store.dispatch(action)
				return action.payload
					.then(payload => {
						ctx.res.writeHead(302, {
							Location: "/"
						})
						ctx.res.end()
					})
					.catch(err => {})
			}
		}
	}

	handleSearch = () => {
		this.props.dispatch(searchVacancy(this.refs.search.state.value)).then(res => {
			Router.push(`/jobs/search?query=${this.refs.search.state.value}`)
		})
	}

	render() {
		const { Content } = Layout
		const { Title, Text } = Typography
		const { getFieldDecorator } = this.props.form
		return (
			<Layout>
				<Navbar isLoggedIn={this.props.isLoggedIn} color='transparent' />
				<Content>
					<Row
						justify='center'
						type='flex'
						style={{
							backgroundImage: `url('../static/images/dot.svg')`,
							height: "600px",
							paddingTop: "80px"
						}}
					>
						<Col
							span={12}
							md={12}
							xs={24}
							style={{
								paddingLeft: "100px",
								paddingTop: "100px",
								paddingRight: "100px"
							}}
						>
							<Title style={{ color: "#01478D" }}>
								Temukan pekerjaan impianmu di sini!
							</Title>
							<Col span={20} style={{ marginTop: "10px" }}>
								<Form>
									<Form.Item>
										<Input
											size='large'
											ref='search'
											placeholder='Cari judul pekerjaan atau perusahaan'
											prefix={
												<Icon type='search' style={{ color: "#000000" }} />
											}
											allowClear
										/>
									</Form.Item>
									<Form.Item style={{ marginTop: "50px" }}>
										<Button
											type='default'
											htmlType='submit'
											size='large'
											style={{ background: "#01478D" }}
											loading={this.props.vacancies.isLoading}
											onClick={this.handleSearch}
										>
											<Text style={{ color: "white" }}>Cari Pekerjaan</Text>
											<Icon type='right' style={{ color: "white" }} />
										</Button>
									</Form.Item>
								</Form>
							</Col>
						</Col>
						<Col span={12} md={12} xs={24}>
							<img
								src='../static/images/landing.svg'
								alt='landing-picture'
								width='600px'
							/>
						</Col>
					</Row>
					{/* <Row
						justify='center'
						align='middle'
						type='flex'
						gutter={24}
						style={{ background: "#FAF9F7", height: "520px" }}
					>
						<Col span={6}>
							<Title level={2}>Saran pencarian pekerjaan untuk anda</Title>
						</Col>
						<Col span={14}>
							<Text>Test</Text>
						</Col>
					</Row> */}
				</Content>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		vacancies: state.vacancies
	}
}

const WrappedLanding = Form.create()(Landing)

export default connect(mapStateToProps)(WrappedLanding)
