import React, { Component } from "react"
import { Layout, Row, Col, Typography, Icon, Button, Card } from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import Router from "next/link"

import Navbar from "../../components/navbar"

class JobDetail extends Component {
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
							<Text
								style={{ fontSize: 24, marginLeft: "-10px", color: "black" }}
								strong
							>
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

	handleApplyJob = () => {
		Router.push("/jobs/confirmation")
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
								Full Stack Developer
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
						<Col
							span={4}
							style={{
								marginTop: "-30px",
								justifyContent: "center",
								alignItems: "center",
								display: "flex"
							}}
						>
							<Button size='large' type='primary' onClick={this.handleApplyJob} block>
								Lamar Sekarang
							</Button>
						</Col>
					</Row>
					<Row justify='center' type='flex' gutter={24} style={{ marginTop: "50px" }}>
						<Col span={14}>
							<Card hoverable>
								<Title level={4}>Deskripsi Pekerjaan</Title>
								<Text>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
									et itaque necessitatibus expedita nostrum, rerum pariatur
									aliquid ullam ratione vitae! Perferendis ipsum quo officia
									soluta laboriosam voluptatum, cumque asperiores reiciendis!
									<br />
									<br />
								</Text>
								<Title level={4}>Minimum Kualifikasi</Title>
								<Text>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
									et itaque necessitatibus expedita nostrum, rerum pariatur
									aliquid ullam ratione vitae! Perferendis ipsum quo officia
									soluta laboriosam voluptatum, cumque asperiores reiciendis!
								</Text>
							</Card>
							<Card hoverable style={{ marginTop: "20px" }}>
								<Title level={4}>Tentang Perusahaan</Title>
								<Text>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
									et itaque necessitatibus expedita nostrum, rerum pariatur
									aliquid ullam ratione vitae! Perferendis ipsum quo officia
									soluta laboriosam voluptatum, cumque asperiores reiciendis!
									<br />
									<br />
								</Text>
								<Row>
									<Col span={12}>
										<Text style={{ fontSize: 16, color: "black" }} strong>
											Website
											<br />
										</Text>
										<Text style={{ marginLeft: "-10px" }}>
											<Link href=''>
												<a>http://www.website.com</a>
											</Link>
										</Text>
									</Col>
									<Col span={12}>
										<Text style={{ fontSize: 16, color: "black" }} strong>
											Kategori
											<br />
										</Text>
										<Text>Business</Text>
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
									Full Time
									<br />
									<br />
								</Text>
								<Text style={{ fontSize: 18, color: "black" }} strong>
									Tingkat Pekerjaan
									<br />
								</Text>
								<Text>
									Fresh Graduate
									<br />
									<br />
								</Text>
								<Text style={{ fontSize: 18, color: "black" }} strong>
									Kategori
									<br />
								</Text>
								<Text>
									IT and Software
									<br />
									<br />
								</Text>
								<Text style={{ fontSize: 18, color: "black" }} strong>
									Pendidikan Tearkhir
									<br />
								</Text>
								<Text>Strata 1 (S1)</Text>
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

export default connect(mapStateToProps)(JobDetail)
