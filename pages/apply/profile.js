import React, { Component } from "react"
import {
	Layout,
	Row,
	Col,
	Typography,
	Form,
	Steps,
	Icon,
	Card,
	Avatar,
	Button,
	Modal,
	Input
} from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import cookie from "js-cookie"
import Router, { withRouter } from "next/router"

import Navbar from "../../components/navbar"
import { getUserInfo, updateUser } from "../../redux/actions/users"
import initialize from "../../utils/initialize"

class ApplyProfile extends Component {
	constructor() {
		super()
		this.state = {
			visible: false,
			token: cookie.get("token")
		}
	}

	static async getInitialProps(ctx) {
		await initialize(ctx)
	}

	componentDidMount() {
		this.getUserInfo()
	}

	getUserInfo() {
		this.props.dispatch(getUserInfo(this.props.auth.data.user.id, this.state.token))
	}

	showModal = () => {
		this.setState({ visible: true })
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props
					.dispatch(
						updateUser(this.state.token, {
							id: this.props.users.item.user_id,
							first_name: values.first_name,
							last_name: values.last_name,
							username: this.props.users.item.username,
							email: values.email,
							password: this.props.users.item.user_password
						})
					)
					.then(res => {
						this.setState({ visible: false })
						this.props.dispatch(
							getUserInfo(this.props.users.item.user_id, this.state.token)
						)
					})
			}
		})
	}

	handleCancel = () => {
		this.setState({ visible: false })
	}

	handleNext = () => {
		Router.push(`/apply/verification?job_id=${this.props.router.query.job_id}`)
	}

	renderEditInformation(item) {
		const { getFieldDecorator } = this.props.form
		return (
			<Form layout='vertical' onSubmit={this.handleSubmit}>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item label='First Name' hasFeedback>
							{getFieldDecorator("first_name", {
								rules: [
									{
										required: true,
										message: "Please input first name!"
									}
								],
								initialValue: this.props.users.item.user_first_name
							})(<Input placeholder='First name' />)}
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label='Last Name' hasFeedback>
							{getFieldDecorator("last_name", {
								rules: [
									{
										required: true,
										message: "Please input last name!"
									}
								],
								initialValue: this.props.users.item.user_last_name
							})(<Input placeholder='Last name' />)}
						</Form.Item>
					</Col>
				</Row>
				<Form.Item label='email' hasFeedback>
					{getFieldDecorator("email", {
						rules: [
							{
								required: true,
								message: "Please input email!"
							},
							{
								type: "email",
								message: "Please input a valid email!"
							}
						],
						initialValue: this.props.users.item.user_email
					})(<Input placeholder='Email' />)}
				</Form.Item>
			</Form>
		)
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
										<Avatar
											size={120}
											src={this.props.users.item.profile_photo_profile}
										/>
									</Col>
									<Col span={18}>
										<Title level={4}>
											{this.props.users.item.user_first_name}{" "}
											{this.props.users.item.user_last_name}
										</Title>
										<Text style={{ lineHeight: "26px" }}>
											<Icon type='environment' />{" "}
											{this.props.users.item.contact_city},{" "}
											{this.props.users.item.contact_country}
											<br />
											<Icon type='mail' /> {this.props.users.item.user_email}
											<br />
											<Icon type='phone' /> +62 85732405860
										</Text>
										<br />
										<Button
											type='default'
											size='large'
											style={{ marginTop: "30px" }}
											onClick={this.showModal}
										>
											Edit Informasi
										</Button>
									</Col>
								</Card>
								<Button
									type='primary'
									size='large'
									style={{ marginTop: "30px" }}
									onClick={this.handleNext}
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
					<Modal
						title='Edit Informasi'
						visible={this.state.visible}
						onOk={this.handleSubmit}
						onCancel={this.handleCancel}
						confirmLoading={this.props.users.isLoading}
					>
						{this.renderEditInformation(this.props.users.item)}
					</Modal>
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

const WrappedApplyProfile = Form.create()(ApplyProfile)
const RouterApplyProfile = withRouter(WrappedApplyProfile)

export default connect(mapStateToProps)(RouterApplyProfile)
