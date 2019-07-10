import React, { Component } from "react"
import { Layout, Row, Col, Typography, Steps, Icon, Card, Button } from "antd"
import { connect } from "react-redux"
import Router, { withRouter } from "next/router"

import Navbar from "../../components/navbar"
import initialize from "../../utils/initialize"
class UserVerification extends Component {
	constructor() {
		super()
		this.state = {
			token: ""
		}
	}

	static async getInitialProps(ctx) {
		await initialize(ctx)
	}

	handleNext = () => {
		Router.push(`/apply/success?job_id=${this.props.router.query.job_id}`)
	}

	handleBack = () => {
		Router.push(`/apply/profile?job_id=${this.props.router.query.job_id}`)
	}

	render() {
		const { Content } = Layout
		const { Step } = Steps
		const { Title, Text } = Typography
		return (
			<Layout>
				<Navbar isLoggedIn={this.props.auth.isLogin} />
				<Content>
					<Row justify='center' align='middle' type='flex' style={{ height: "150px" }}>
						<Col span={12}>
							<Steps>
								<Step
									status='finish'
									title='Resume'
									icon={<Icon type='idcard' />}
								/>
								<Step
									status='process'
									title='Verifikasi'
									icon={<Icon type='safety-certificate' />}
								/>
								<Step
									status='wait'
									title='Selesai'
									icon={<Icon type='check-circle' />}
								/>
							</Steps>
						</Col>
					</Row>
					<Row justify='center' align='middle' type='flex' style={{ marginTop: "30px" }}>
						<Col span={8}>
							<Card
								hoverable
								style={{
									height: 260,
									justifyContent: "center",
									textAlign: "center",
									display: "flex"
								}}
							>
								<Title level={3}>Verifikasi Data</Title>
								<Text>Apakah data yang ada masukkan sudah benar?</Text>
								<br />
								<Button
									type='primary'
									size='large'
									block
									style={{ marginTop: "30px" }}
									onClick={this.handleNext}
								>
									Benar dan Lanjutkan
								</Button>
								<Button
									type='default'
									size='large'
									block
									style={{ marginTop: "20px" }}
									onClick={this.handleBack}
								>
									Kembali
								</Button>
							</Card>
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
		vacancies: state.auth,
		users: state.users
	}
}

const RouterUserVerification = withRouter(UserVerification)

export default connect(mapStateToProps)(RouterUserVerification)
