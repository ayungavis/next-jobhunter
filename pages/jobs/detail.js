import React, { Component } from "react"
import { Layout, Row, Col, Typography, Icon, Button, Card } from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import cookie from "js-cookie"
import Router, { withRouter } from "next/router"

import Navbar from "../../components/navbar"
import { getVacancyInfo } from "../../redux/actions/vacancies"
import initialize from "../../utils/initialize"

class JobDetail extends Component {
	constructor() {
		super()
		this.state = {
			token: cookie.get("token")
		}
	}

	static async getInitialProps(ctx) {
		await initialize(ctx)
	}

	componentWillMount() {
		this.getVacancyInfo()
	}

	getVacancyInfo() {
		this.props.dispatch(getVacancyInfo(this.props.router.query.job_id, this.state.token))
	}

	renderList() {
		for (let i = 0; i < 10; i++) {
			const { Text } = Typography
			return (
				<Card style={{ width: "100%", marginBottom: "20px" }} hoverable={true}>
					<Row gutter={20}>
						<Col span={4} justify='center' align='middle' type='flex'>
							<img src='../static/images/icon.png' alt='photo' width={80} />
						</Col>
						<Col span={14} justify='start' align='top' type='flex'>
							<Text style={{ fontSize: 24, color: "black" }} strong>
								<Link href='/jobs/detail'>
									<a>Full Stack Developer</a>
								</Link>
							</Text>
							<br />
							<Text style={{ fontSize: 16 }} strong>
								Tokopedia <Icon type='safety-certificate' theme='twoTone' />
							</Text>
							<br />
							<Text type='secondary' style={{ fontSize: 14 }}>
								<Icon type='environment' /> Jakarta, Indonesia ·{" "}
								<Icon type='wallet' /> 6.000.000 - 10.000.000 IDR/bulan
							</Text>
							<br />
							<br />
							<Text type='secondary'>
								Diposting 4 hari lalu · Lamar sebelum 30 Juli 2019
							</Text>
						</Col>
						<Col span={6} justify='center' align='middle' type='flex'>
							<Button size='large' type='primary' block>
								Lamar
							</Button>
							<Button size='large' type='link'>
								<Icon type='star' /> Simpan
							</Button>
						</Col>
					</Row>
				</Card>
			)
		}
	}

	render() {
		const { Content } = Layout
		const { Title, Text } = Typography
		return (
			<Layout>
				<Navbar isLoggedIn={this.props.auth.isLogin} />
				<Content>
					<img
						src='../../static/images/company-header.jpg'
						style={{ width: "100%", height: "220px" }}
					/>
					<Row justify='space-around' type='flex'>
						<Col span={20}>
							<img
								src='../../static/images/company-logo.png'
								style={{
									width: "120px",
									height: "120px",
									background: "grey",
									borderRadius: "5px",
									position: "absolute",
									top: "-40px",
									boxShadow: "0 10px 30px 0 rgba(187, 187, 187, 0.5)"
								}}
							/>
						</Col>
						<Col span={8} style={{ marginLeft: "120px", marginTop: "10px" }}>
							<Text style={{ fontSize: 24, color: "black" }} strong>
								{this.props.vacancies.item.job_position}
							</Text>
							<br />
							<Text style={{ fontSize: 16 }} strong>
								{this.props.vacancies.item.companies_name}{" "}
								<Icon type='safety-certificate' theme='twoTone' />
							</Text>
							<br />
							<Text type='secondary' style={{ fontSize: 14 }}>
								<Icon type='environment' /> {this.props.vacancies.item.job_city},{" "}
								{this.props.vacancies.item.job_country} · <Icon type='wallet' />{" "}
								{this.props.vacancies.item.start_salary_job} -{" "}
								{this.props.vacancies.item.end_salary_job} IDR/bulan
							</Text>
							<br />
							<br />
							<Text type='secondary'>
								{/* Diposting 4 hari lalu ·  */}Lamar sebelum{" "}
								{this.props.vacancies.item.closing_date}
							</Text>
						</Col>
						<Col
							span={4}
							style={{
								marginTop: "-30px",
								justifyContent: "center",
								alignItems: "center",
								display: "flex"
							}}
						>
							<Button
								size='large'
								type='primary'
								onClick={() =>
									Router.push(
										`/jobs/confirmation?job_id=${
											this.props.vacancies.item.job_id
										}`
									)
								}
								block
							>
								Lamar Sekarang
							</Button>
						</Col>
					</Row>
					<Row justify='center' type='flex' gutter={24} style={{ marginTop: "50px" }}>
						<Col span={14}>
							<Card hoverable>
								<Title level={4}>Deskripsi Pekerjaan</Title>
								<Text>
									{this.props.vacancies.item.job_description}
									<br />
									<br />
								</Text>
								<Title level={4}>Minimum Kualifikasi</Title>
								<Text>{this.props.vacancies.item.job_qualification}</Text>
							</Card>
							<Card hoverable style={{ marginTop: "20px" }}>
								<Title level={4}>Tentang Perusahaan</Title>
								<Text>
									{this.props.vacancies.item.companies_description}
									<br />
									<br />
								</Text>
								<Row>
									<Col span={12}>
										<Text style={{ fontSize: 16, color: "black" }} strong>
											Website
											<br />
										</Text>
										<Text>
											<Link
												href={this.props.vacancies.item.companies_website}
											>
												<a>{this.props.vacancies.item.companies_website}</a>
											</Link>
										</Text>
									</Col>
									<Col span={12}>
										<Text style={{ fontSize: 16, color: "black" }} strong>
											Kategori
											<br />
										</Text>
										<Text>-</Text>
									</Col>
								</Row>
							</Card>
						</Col>
						<Col span={6}>
							<Card hoverable>
								<Text style={{ fontSize: 18, color: "black" }} strong>
									Tipe Pekerjaan
									<br />
								</Text>
								<Text>
									{this.props.vacancies.item.job_types_name}
									<br />
									<br />
								</Text>
								<Text style={{ fontSize: 18, color: "black" }} strong>
									Tingkat Pekerjaan
									<br />
								</Text>
								<Text>
									{this.props.vacancies.item.job_levels_name}
									<br />
									<br />
								</Text>
								<Text style={{ fontSize: 18, color: "black" }} strong>
									Kategori
									<br />
								</Text>
								<Text>
									{this.props.vacancies.item.job_categories_name}
									<br />
									<br />
								</Text>
								<Text style={{ fontSize: 18, color: "black" }} strong>
									Pendidikan Tearkhir
									<br />
								</Text>
								<Text>{this.props.vacancies.item.educational_levels_name}</Text>
							</Card>
						</Col>
					</Row>
					<Row justify='center' type='flex' style={{ marginTop: "50px" }}>
						<Col span={2} />
						<Col span={14}>
							<Title level={4}>Orang Juga Melihat</Title>
							{this.renderList()}
						</Col>
						<Col span={8} />
					</Row>
				</Content>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		vacancies: state.vacancies,
		users: state.users
	}
}

const RouterJobDetail = withRouter(JobDetail)

export default connect(mapStateToProps)(RouterJobDetail)
