import React, { Component } from "react"
import { Layout, Row, Col, Typography, Form, Steps, Icon, Card, Avatar, Button } from "antd"
import { connect } from "react-redux"
import Link from "next/link"

import Navbar from "../../components/navbar"

class UserProfile extends Component {
	static async getInitialProps() {}

	render() {
		const { Content } = Layout
		const { Step } = Steps
		const { Title, Text } = Typography
		const { getFieldDecorator } = this.props.form
		return (
			<Layout>
				<Navbar isLoggedIn={this.props.auth.isLogin} />
				<Content>
					<Row justify='center' align='middle' type='flex' style={{ height: "150px" }}>
						<Col span={12}>
							<Steps>
								<Step
									status='process'
									title='Resume'
									icon={<Icon type='idcard' />}
								/>
								<Step
									status='wait'
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
					<Row justify='space-around' type='flex' gutter={24}>
						<Col span={20}>
							<Col md={16}>
								<Card title='Informasi Kontak' hoverable>
									<Col span={6} justify='center' type='flex'>
										<Avatar size={120} icon='user' />
									</Col>
									<Col span={18}>
										<Title level={3}>John Doe</Title>
										<Text style={{ lineHeight: "26px" }}>
											<Icon type='environment' /> Jakarta, Indonesia
											<br />
											<Icon type='mail' /> johndoe@mail.com
											<br />
											<Icon type='phone' /> +62 85732405860
										</Text>
										<br />
										<Button
											type='default'
											size='large'
											style={{ marginTop: "30px" }}
										>
											Edit Informasi
										</Button>
									</Col>
								</Card>
								<Button
									type='primary'
									size='large'
									style={{ marginTop: "30px" }}
									block
								>
									Submit Profil
								</Button>
							</Col>
							<Col md={8}>
								<Card title='Bagian Yang Diperlukan' hoverable />
							</Col>
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

const WrappedUserProfile = Form.create()(UserProfile)

export default connect(mapStateToProps)(WrappedUserProfile)
