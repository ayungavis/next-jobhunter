import React, { Component } from "react"
import { Layout, Typography, Row, Col, Card } from "antd"
import { connect } from "react-redux"
import cookie from "js-cookie"

import Navbar from "../components/navbar"
import Navigation from "../components/navigation"
import initialize from "../utils/initialize"

import "../static/less/style.less"

class Index extends Component {
	constructor() {
		super()
		this.state = {
			isLoggedIn: false,
			token: cookie.get("token")
		}
	}

	static async getInitialProps(ctx) {
		await initialize(ctx)
	}

	render() {
		const { Content } = Layout
		const { Title, Text } = Typography
		return (
			<Layout>
				<Navbar isLoggedIn={this.props.auth.isLogin} />
				<Navigation icon='user' text='Dashboard' />
				<Row justify='space-around' type='flex'>
					<Col
						span={20}
						style={{ paddingTop: "30px", paddingBottom: "30px", minHeight: "500px" }}
					>
						<Title>Dashboard</Title>
						<Content>
							<Row gutter={16}>
								<Col span={6} md={6} sm={12} xs={24}>
									<Card
										hoverable
										cover={
											<img
												alt='image1'
												style={{ width: "100%" }}
												src='/static/images/hotel-1.jpg'
											/>
										}
									>
										<Card.Meta
											title='Hotels'
											description='burger with patty and cheese'
										/>
									</Card>
								</Col>
								<Col span={6} md={6} sm={12} xs={24}>
									<Card
										hoverable
										cover={
											<img
												alt='image2'
												style={{ width: "100%" }}
												src='/static/images/hotel-2.jpg'
											/>
										}
									>
										<Card.Meta
											title='Rooms'
											description='burger on white ceramic plate'
										/>
									</Card>
								</Col>
								<Col span={6} md={6} sm={12} xs={24}>
									<Card
										hoverable
										cover={
											<img
												alt='image3'
												style={{ width: "100%" }}
												src='/static/images/hotel-3.jpg'
											/>
										}
									>
										<Card.Meta
											title='Room Types'
											description='burger with tomato and onion'
										/>
									</Card>
								</Col>
								<Col span={6} md={6} sm={12} xs={24}>
									<Card
										hoverable
										cover={
											<img
												alt='image4'
												style={{ width: "100%" }}
												src='/static/images/hotel-4.jpg'
											/>
										}
									>
										<Card.Meta
											title='Bookings'
											description='burger with vegetables'
										/>
									</Card>
								</Col>
							</Row>
						</Content>

						{/* <Row gutter={24} style={{ marginTop: "30px" }}>
							<Col span={12} md={12}>
								<Title level={3}>List of Hotels</Title>
								<Card />
							</Col>
							<Col span={12} md={12}>
								<Title level={3}>List of Bookings</Title>
							</Col>
						</Row> */}
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

export default connect(mapStateToProps)(Index)
