import React, { Component } from "react"
import { Typography, Icon, Row, Col, Layout, Form, Input, Button, message } from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import Router, { withRouter } from "next/router"

import { getStatus, postRegister } from "../redux/actions/auth"
import { setCookie } from "../utils/cookie"

class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			iconLoading: false
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

	enterLoading = () => {
		this.setState({ loading: true })
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props
					.dispatch(
						postRegister({
							first_name: values.first_name,
							last_name: values.last_name,
							username: values.username,
							email: values.email,
							password: values.password
						})
					)
					.then(res => {
						setCookie("token", this.props.auth.data.token)
						this.props.router.query.job_id
							? Router.push(`/apply/profile?job_id=${this.props.router.query.job_id}`)
							: Router.push("/")
					})
			}
		})
	}

	render() {
		const { Content } = Layout
		const { Title, Text } = Typography
		const { getFieldDecorator } = this.props.form
		return (
			<Layout>
				<Row justify='center' align='middle' type='flex'>
					<Col
						md={12}
						lg={6}
						style={{
							padding: "50px",
							minHeight: "100%",
							minWidth: "100%"
						}}
					>
						<Content>
							<Row>
								<Col md={12} lg={12}>
									<Link href='/'>
										<a>
											<img src='../static/images/logo.png' alt='logo' />
										</a>
									</Link>
									<img
										src='../static/images/login.png'
										alt='login-picture'
										style={{ marginTop: "50px" }}
									/>
								</Col>

								<Col
									md={12}
									lg={12}
									style={{
										paddingTop: "80px",
										paddingLeft: "120px",
										paddingRight: "50px"
									}}
								>
									<Title>Pendaftaran Akun</Title>
									<Text>
										Untuk bisa menggunakan fitur kami silahkan mendaftar akun
										baru terlebih dahulu menggunakan informasi yang benar ☕
									</Text>
									<Content style={{ paddingTop: "30px" }}>
										<Form onSubmit={this.handleSubmit} className='login-form'>
											<Row gutter={20}>
												<Col span={12}>
													<Form.Item hasFeedback>
														{getFieldDecorator("first_name", {
															rules: [
																{
																	required: true,
																	message:
																		"Please input first name!"
																}
															]
														})(
															<Input
																prefix={
																	<Icon
																		type='line'
																		style={{
																			color: "rgba(0,0,0,.25)"
																		}}
																	/>
																}
																placeholder='First name'
															/>
														)}
													</Form.Item>
												</Col>
												<Col span={12}>
													<Form.Item hasFeedback>
														{getFieldDecorator("last_name", {
															rules: [
																{
																	required: true,
																	message:
																		"Please input last name!"
																}
															]
														})(
															<Input
																prefix={
																	<Icon
																		type='line'
																		style={{
																			color: "rgba(0,0,0,.25)"
																		}}
																	/>
																}
																placeholder='Last name'
															/>
														)}
													</Form.Item>
												</Col>
											</Row>
											<Form.Item hasFeedback>
												{getFieldDecorator("username", {
													rules: [
														{
															required: true,
															message: "Please input your username!"
														}
													]
												})(
													<Input
														prefix={
															<Icon
																type='user'
																style={{ color: "rgba(0,0,0,.25)" }}
															/>
														}
														placeholder='Username'
													/>
												)}
											</Form.Item>
											<Form.Item hasFeedback>
												{getFieldDecorator("email", {
													rules: [
														{
															type: "email",
															message: "Please input a valid email!"
														},
														{
															required: true,
															message: "Please input your email!"
														}
													]
												})(
													<Input
														prefix={
															<Icon
																type='mail'
																style={{ color: "rgba(0,0,0,.25)" }}
															/>
														}
														placeholder='Email'
													/>
												)}
											</Form.Item>
											<Form.Item hasFeedback>
												{getFieldDecorator("password", {
													rules: [
														{
															required: true,
															message: "Please input your password!"
														}
													]
												})(
													<Input.Password
														prefix={
															<Icon
																type='lock'
																style={{ color: "rgba(0,0,0,.25)" }}
															/>
														}
														type='password'
														placeholder='Password'
													/>
												)}
											</Form.Item>

											<Form.Item>
												<Row>
													<Button
														type='primary'
														htmlType='submit'
														className='login-form-button'
														size='large'
														loading={this.props.auth.isLoading}
														onClick={this.enterLoading}
														block
													>
														Register
													</Button>
												</Row>
												<Row justify='center' type='flex'>
													<div>
														Or{" "}
														{this.props.router.query.job_id ? (
															<Link
																href={`/login?job_id=${
																	this.props.router.query.job_id
																}`}
															>
																<a>login now!</a>
															</Link>
														) : (
															<Link href='/login'>
																<a>login now!</a>
															</Link>
														)}
													</div>
												</Row>
											</Form.Item>
										</Form>
									</Content>
								</Col>
							</Row>
						</Content>
					</Col>
				</Row>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

const WrappedRegister = Form.create()(Register)
const RouterRegister = withRouter(WrappedRegister)

export default connect(mapStateToProps)(RouterRegister)
