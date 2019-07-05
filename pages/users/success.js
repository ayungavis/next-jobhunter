import React, { Component } from "react"
import { Layout, Row, Col, Typography, Result, Button, Icon, Steps } from "antd"
import { connect } from "react-redux"
import Link from "next/link"

import Navbar from "../../components/navbar"

class UserSuccess extends Component {
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
								extra={
									<Button type='primary' size='large'>
										<Link href='/'>
											<a>Ke Beranda</a>
										</Link>
									</Button>
								}
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
