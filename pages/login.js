import React, { Component } from "react"
import { Typography, Icon, Row, Col, Layout, Form, Input, Button, Checkbox, message } from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import Router, { withRouter } from "next/router"

import { getStatus, postLogin } from "../redux/actions/auth"
import { setCookie } from "../utils/cookie"

class Login extends Component {
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
						postLogin({
							email: values.email,
							password: values.password
						})
					)
					.then(res => {
						this.setState({ loading: false })
						setCookie("token", this.props.auth.data.token)
						this.props.router.query.job_id
							? Router.push(`/apply/profile?job_id=${this.props.router.query.job_id}`)
							: Router.push("/users/feed")
						// message.success("Berhasil masuk.")
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
									<Title>Welcome back!</Title>
									<Text>
										Untuk tetap terhubung dengan kami silahkan masuk dengan
										informasi pribadimu menggunakan email dan password 🔔
									</Text>
									<Content style={{ paddingTop: "30px" }}>
										<Form onSubmit={this.handleSubmit} className='login-form'>
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
												<Row justify='space-between' type='flex'>
													{getFieldDecorator("remember", {
														valuePropName: "checked",
														initialValue: false
													})(<Checkbox>Remember me</Checkbox>)}
													<Link href=''>
														<a className='login-form-forgot'>
															Forgot password
														</a>
													</Link>
												</Row>
												<Row>
													<Button
														type='primary'
														htmlType='submit'
														className='login-form-button'
														size='large'
														loading={this.state.loading}
														onClick={this.enterLoading}
														block
													>
														Log in
													</Button>
												</Row>
												<Row justify='center' type='flex'>
													<div>
														Or{" "}
														{this.props.router.query.job_id ? (
															<Link
																href={`/register?job_id=${
																	this.props.router.query.job_id
																}`}
															>
																<a>register now!</a>
															</Link>
														) : (
															<Link href='/register'>
																<a>register now!</a>
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

const WrappedLogin = Form.create()(Login)
const RouterLogin = withRouter(WrappedLogin)

export default connect(mapStateToProps)(RouterLogin)
