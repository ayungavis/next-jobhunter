import React, { Component } from "react"
import { Layout, Row, Col, Menu, Avatar, Form, Input, Icon, Button } from "antd"
import Link from "next/link"
import Router from "next/router"

import { removeCookie } from "../utils/cookie"

class Navbar extends Component {
	constructor() {
		super()
		this.state = {
			current: ""
		}
	}

	handleClick = e => {
		this.setState({ current: e.key })
	}

	handleLogout = () => {
		removeCookie("token")
		Router.push("/login")
	}

	render() {
		const { Header } = Layout
		const { SubMenu } = Menu
		const { getFieldDecorator } = this.props.form
		return (
			<Header style={{ borderBottom: "0.15px solid #E4E4E4", background: this.props.color }}>
				<Row justify='space-around' type='flex'>
					<Col span={23}>
						<Row justify='space-between' type='flex'>
							<Col span={12} md={12} xs={24}>
								<Link href='/'>
									<a>
										{this.props.isLoggedIn ? (
											<img
												src='../static/images/icon.png'
												alt='logo'
												width='40px'
											/>
										) : (
											<img src='../static/images/logo.png' alt='logo' />
										)}
									</a>
								</Link>
							</Col>
							{this.props.isLoggedIn ? (
								<Menu
									mode='horizontal'
									onClick={this.handleClick}
									selectedKeys={[this.state.current]}
									style={{
										lineHeight: "49px",
										borderBottom: "0.15px solid #E4E4E4"
									}}
								>
									<Menu.Item key='1'>
										<Link href='/'>
											<a>Dashboard</a>
										</Link>
									</Menu.Item>
									<Menu.Item key='2'>
										<Link href='/landing'>
											<a>Landing</a>
										</Link>
									</Menu.Item>
									<SubMenu
										title={<Avatar style={{ marginBottom: "12px" }}>U</Avatar>}
									>
										<Menu.Item key='3'>Profile</Menu.Item>
										<Menu.Item key='4' onClick={this.handleLogout}>
											Logout
										</Menu.Item>
									</SubMenu>
								</Menu>
							) : (
								<Col
									span={12}
									md={12}
									xs={0}
									style={{
										textAlign: "right",
										height: 50,
										display: "flex",
										justifyContent: "flex-end"
									}}
								>
									<div style={{ width: "fit-content", margin: "auto 0px" }}>
										<Link href='/register'>
											<a style={{ marginRight: "20px" }}>
												Bergabung Sekarang
											</a>
										</Link>
										<Button type='primary' size='large'>
											<Link href='/login'>
												<a>
													<strong>Masuk</strong>
												</a>
											</Link>
										</Button>
									</div>
								</Col>
							)}
						</Row>
					</Col>
				</Row>
			</Header>
		)
	}
}

const WrappedNavbar = Form.create()(Navbar)

export default WrappedNavbar
