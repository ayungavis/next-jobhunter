import React, { Component } from "react"
import {
	Typography,
	Icon,
	Row,
	Col,
	Layout,
	Form,
	Input,
	Button,
	Card,
	Checkbox,
	Select,
	Affix,
	Collapse
} from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import cookie from "js-cookie"
import Router from "next/router"

import Navbar from "../../components/navbar"
import { getStatus } from "../../redux/actions/auth"
import { getVacancy } from "../../redux/actions/vacancies"

const datePosts = ["Past 24 hours", "Past Week", "Past Month", "Any Time"]
const experienceLevels = ["Entry Level", "Associate", "Mid-Senior Level", "Director", "Executive"]
const jobTypes = ["Full-time", "Part-time", "Contract", "Temporary", "Internship"]
const neededSkills = ["PHP", "JavaScript", ".NET", "Python", "Golang"]
const educationLevels = ["Senior High School", "Diploma", "Bachelor", "Master", "Doctor"]

class JobSearch extends Component {
	constructor() {
		super()
		this.state = {
			search: 0,
			filter: 80,
			token: cookie.get("token")
		}
	}

	static async getInitialProps(ctx) {
		if (ctx.req) {
			const token = await ctx.req.headers.cookie
			if (token) {
				const action = getStatus(token.split("=")[1])
				const vacancies = getVacancy(token.split("=")[1])
				ctx.store.dispatch(action)
				ctx.store.dispatch(vacancies)
				return action.payload.then(payload => {}).catch(err => {})
			}
		}
	}

	componentWillMount() {
		this.getVacancy()
	}

	getVacancy() {
		this.props.dispatch(getVacancy(this.state.token))
	}

	renderDatePost() {
		return <Checkbox.Group options={datePosts} style={checkboxStyle} />
	}

	renderExperienceLevel() {
		return <Checkbox.Group options={experienceLevels} style={checkboxStyle} />
	}

	renderJobType() {
		return <Checkbox.Group options={jobTypes} style={checkboxStyle} />
	}

	renderNeededSkill() {
		return <Checkbox.Group options={neededSkills} style={checkboxStyle} />
	}

	renderEducationLevel() {
		return <Checkbox.Group options={educationLevels} style={checkboxStyle} />
	}

	renderList() {
		const { Text } = Typography
		return this.props.vacancies.data.map((item, key) => (
			<Card
				style={{ width: "100%", marginBottom: "20px" }}
				hoverable={true}
				loading={item.loading}
			>
				<Row gutter={20}>
					<Col span={4} justify='center' align='middle' type='flex'>
						<img src='../static/images/icon.png' alt='photo' width={80} />
					</Col>
					<Col span={14} justify='start' align='top' type='flex'>
						<Text style={{ fontSize: 24, color: "black" }} strong>
							<Link href={`/jobs/detail?job_id=${item.job_id}`}>
								<a>{item.job_position}</a>
							</Link>
						</Text>
						<br />
						<Text style={{ fontSize: 16 }} strong>
							{item.companies_name} <Icon type='safety-certificate' theme='twoTone' />
						</Text>
						<br />
						<Text type='secondary' style={{ fontSize: 14 }}>
							<Icon type='environment' /> {item.job_city}, {item.job_country} ·{" "}
							<Icon type='wallet' /> {item.start_salary_job} - {item.end_salary_job}{" "}
							IDR/bulan
						</Text>
						<br />
						<br />
						<Text type='secondary'>
							{/* Diposting 4 hari lalu ·  */}Lamar sebelum {item.closing_date}
						</Text>
					</Col>
					<Col span={6} justify='center' align='middle' type='flex'>
						<Button
							size='large'
							type='primary'
							onClick={() => Router.push(`/jobs/confirmation?job_id=${item.job_id}`)}
							block
						>
							Lamar
						</Button>
						<Button size='large' type='link'>
							<Icon type='star' /> Simpan
						</Button>
					</Col>
				</Row>
			</Card>
		))
	}

	/* handleApplyJob = id => {
		Router.push(`/jobs/confirmation?job_id=${id}`)
	} */

	render() {
		const { Content } = Layout
		const { Option } = Select
		const { Panel } = Collapse
		const { Title, Text } = Typography
		const { getFieldDecorator } = this.props.form
		return (
			<Layout style={{ background: "#FAF9F7" }}>
				<Navbar isLoggedIn={this.props.auth.isLogin} />
				<Content>
					<div style={{ marginTop: "50px" }} />
					<Affix offsetTop={this.state.search}>
						<Row
							justify='center'
							align='middle'
							type='flex'
							style={{ height: "60px", background: "#FAF9F7" }}
						>
							<Col span={18}>
								<Form onSubmit={this.handleSearch}>
									<Row justify='space-between' type='flex' style={{}}>
										<Col md={20}>
											<Input
												size='large'
												placeholder='Cari judul pekerjaan atau perusahaan'
												prefix={
													<Icon
														type='search'
														style={{ color: "#000000" }}
													/>
												}
											/>
										</Col>
										<Col md={3}>
											<Button
												size='large'
												type='primary'
												htmlType='submit'
												block
											>
												Cari
											</Button>
										</Col>
									</Row>
								</Form>
							</Col>
						</Row>
					</Affix>
					<Row
						justify='space-around'
						type='flex'
						gutter={24}
						style={{ marginTop: "50px" }}
					>
						<Col span={20}>
							<Col md={6}>
								{/* <Affix offsetTop={this.state.filter}> */}
								<Collapse defaultActiveKey={["1"]} expandIconPosition='right'>
									<Panel header='Tanggal Diposting' key='1'>
										{this.renderDatePost()}
									</Panel>
									<Panel header='Tingkat Kerja' key='2'>
										{this.renderExperienceLevel()}
									</Panel>
									<Panel header='Fungsi Kerja' key='3'>
										{this.renderJobType()}
									</Panel>
									<Panel header='Jenjang Pendidikan' key='4'>
										{this.renderEducationLevel()}
									</Panel>
									<Panel header='Skill Yang Dibutuhkan' key='5'>
										{this.renderNeededSkill()}
									</Panel>
								</Collapse>
								{/* </Affix> */}
							</Col>
							<Col md={18}>{this.renderList()}</Col>
						</Col>
					</Row>
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

const WrappedJobSearch = Form.create()(JobSearch)

export default connect(mapStateToProps)(WrappedJobSearch)

const checkboxStyle = {
	display: "block",
	lineHeight: "30px"
}
