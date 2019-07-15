import React, { Component } from "react"
import { Layout, Row, Col, Typography, Card, Button, Avatar } from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import Router, { withRouter } from "next/router"

import Navbar from "../../components/navbar"
import initialize from "../../utils/initialize"

class JobConfirmation extends Component {
	static async getInitialProps(ctx) {
		await initialize(ctx)
	}

	handleApplyJob = () => {
		Router.push(`/apply/profile?job_id=${this.props.router.query.job_id}`)
	}

	handleCreateProfile = () => {
		Router.push(`/register?job_id=${this.props.router.query.job_id}`)
	}

	render() {
		const { Content } = Layout
		const { Title, Text } = Typography
		return (
			<Layout style={{ background: "#FAF9F7" }}>
				<Navbar isLoggedIn={this.props.auth.isLogin} />
				<Content>
					<Row justify='center' type='flex' style={{ marginTop: "80px" }}>
						<Col span={8}>
							<Card hoverable style={{ textAlign: "center" }}>
								<Title level={4}>Mulai lamar dengan profil Jobhuntermu</Title>
								<Avatar
									size={96}
									icon='user'
									style={{ marginTop: "10px", marginBottom: "10px" }}
								/>
								<Text>
									<br />
									Dengan profil Jobhunter, Anda dapat melamar berbagai lowongan
									pekerjaan hanya dengan sekali klik! Perusahaan hanya bisa
									melihat profil Jobhunter Anda jadi usahakan profil Anda lengkap
									dan menarik.
									<br />
								</Text>
								{this.props.auth.isLogin ? (
									<Button
										type='primary'
										size='large'
										onClick={this.handleApplyJob}
										style={{ marginTop: "20px" }}
										block
									>
										Lamar Dengan Profil Jobhunter Saya
									</Button>
								) : (
									<Button
										type='primary'
										size='large'
										onClick={this.handleCreateProfile}
										style={{ marginTop: "20px" }}
										block
									>
										Buat Profil Jobhunter Anda
									</Button>
								)}
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
		vacancies: state.vacancies,
		users: state.users
	}
}

const RouterJobConfirmation = withRouter(JobConfirmation)

export default connect(mapStateToProps)(RouterJobConfirmation)
