import React, { Component } from "react"
import { Layout, Row, Col, Typography, Result, Button, Icon, Steps } from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import Router from "next/router"

import Navbar from "../../components/navbar"
import initialize from "../../utils/initialize"

class UserSuccess extends Component {
	static async getInitialProps(ctx) {
		await initialize(ctx)
	}

	handleToJob() {
		Router.push("/jobs/search")
	}

	handleToDashboard() {
		Router.push("/users/feed")
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
									status='finish'
									title='Verifikasi'
									icon={<Icon type='safety-certificate' />}
								/>
								<Step
									status='process'
									title='Selesai'
									icon={<Icon type='check-circle' />}
								/>
							</Steps>
						</Col>
					</Row>
					<Row justify='center' align='middle' type='flex' style={{ marginTop: "30px" }}>
						<Col span={12}>
							<Result
								status='success'
								title='Selamat, kamu sudah selesai melamar!'
								subTitle='Tunggu perusahaan untuk memberikan respon terhadap lamaranmu.'
								extra={[
									<Button key='jobs' type='primary' onClick={this.handleToJob}>
										Lihat Pekerjaan Lainya
									</Button>,
									<Button key='feed' onClick={this.handleToDashboard}>
										Kembali ke Beranda
									</Button>
								]}
							/>
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
		vacancies: state.vacancies,
		users: state.users
	}
}

export default connect(mapStateToProps)(UserSuccess)
