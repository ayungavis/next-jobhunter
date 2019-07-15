import React, { Component } from "react"
import {
	Layout,
	Row,
	Col,
	Typography,
	Card,
	Avatar,
	Icon,
	Divider,
	Input,
	Form,
	Button,
	Upload,
	message
} from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import cookie from "js-cookie"

import Navbar from "../../components/navbar"
import initialize from "../../utils/initialize"
import { getUserInfo } from "../../redux/actions/users"

const documentProps = {
	name: "file",
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	headers: {
		authorization: "authorization-text"
	},
	onChange(info) {
		if (info.file.status !== "uploading") {
			console.log(info.file, info.fileList)
		}
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`)
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`)
		}
	}
}

const imageProps = {
	name: "file",
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	headers: {
		authorization: "authorization-text"
	},
	onChange(info) {
		if (info.file.status !== "uploading") {
			console.log(info.file, info.fileList)
		}
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`)
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`)
		}
	}
}

const videoProps = {
	name: "file",
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	headers: {
		authorization: "authorization-text"
	},
	onChange(info) {
		if (info.file.status !== "uploading") {
			console.log(info.file, info.fileList)
		}
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`)
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`)
		}
	}
}

const awardProps = {
	name: "file",
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	headers: {
		authorization: "authorization-text"
	},
	onChange(info) {
		if (info.file.status !== "uploading") {
			console.log(info.file, info.fileList)
		}
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`)
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`)
		}
	}
}

class UserFeed extends Component {
	constructor() {
		super()
		this.state = {
			token: cookie.get("token")
		}
	}
	static async getInitialProps(ctx) {
		await initialize(ctx)
	}

	componentWillMount() {
		this.getUserInfo()
	}

	getUserInfo() {
		this.props.dispatch(getUserInfo(this.props.auth.data.user.id, this.state.token))
	}

	renderProfileContainer() {
		const { Title, Text } = Typography
		return (
			<Card
				cover={
					<img
						src={this.props.users.item.profile_photo_header}
						alt='profile-background'
						style={{ width: "100%" }}
					/>
				}
				hoverable
			>
				<Avatar
					size={120}
					src={this.props.users.item.profile_photo_profile}
					style={{
						position: "absolute",
						top: 30,
						left: 75,
						border: "4px solid white"
					}}
				/>
				<Row justify='center' type='flex' style={{ marginTop: "60px" }}>
					<Col style={{ textAlign: "center", alignSelf: "center" }}>
						<Title level={3}>
							{this.props.users.item.user_first_name}{" "}
							{this.props.users.item.user_last_name}
						</Title>
						<Text style={{ fontSize: 16, color: "grey" }}>
							{this.props.users.item.profile_headline}
						</Text>
					</Col>
				</Row>
				<Row
					justify='center'
					type='flex'
					gutter={24}
					style={{ marginTop: "25px", textAlign: "center" }}
				>
					<Col span={8}>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							281 <br />
						</Text>
						<Text>Posting</Text>
					</Col>
					<Col span={8}>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							126 <br />
						</Text>
						<Text>Teman</Text>
					</Col>
					<Col span={8}>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							27 <br />
						</Text>
						<Text>Lamaran</Text>
					</Col>
				</Row>
				<Divider />
				<Row
					style={{
						marginTop: "25px",
						paddingLeft: "15px",
						paddingRight: "10px",
						lineHeight: "28px"
					}}
				>
					<Link>
						<a style={{ fontSize: 16, fontWeight: "bold" }}>
							<Icon type='profile' theme='filled' /> Perbarui Profil
						</a>
					</Link>
					<br />
					<Link>
						<a style={{ fontSize: 16, fontWeight: "bold" }}>
							<Icon type='folder' theme='filled' /> Unggah Dokumen
						</a>
					</Link>
					<br />
					<Link>
						<a style={{ fontSize: 16, fontWeight: "bold" }}>
							<Icon type='contacts' theme='filled' /> Tambah Teman
						</a>
					</Link>
					<br />
					<Link>
						<a style={{ fontSize: 16, fontWeight: "bold" }}>
							<Icon type='flag' theme='filled' /> Pasang Lowongan
						</a>
					</Link>
				</Row>
			</Card>
		)
	}

	renderFormStatus() {
		const { TextArea } = Input
		return (
			<Card hoverable>
				<Form>
					<Form.Item>
						<TextArea
							autosize={{ minRows: 3, maxRows: 10 }}
							placeholder='Apa yang Anda pikirkan?'
						/>
					</Form.Item>
					<Row justify='space-between' type='flex' gutter={20}>
						<Col span={18}>
							<Row justify='start' type='flex'>
								<Upload {...documentProps}>
									<Button>
										<Icon type='file' /> Dokumen
									</Button>
								</Upload>
								<Upload {...imageProps}>
									<Button style={{ marginLeft: "10px" }}>
										<Icon type='picture' /> Gambar
									</Button>
								</Upload>
								<Upload {...videoProps}>
									<Button style={{ marginLeft: "10px" }}>
										<Icon type='video-camera' /> Video
									</Button>
								</Upload>
								<Upload {...awardProps}>
									<Button style={{ marginLeft: "10px" }}>
										<Icon type='crown' /> Penghargaan
									</Button>
								</Upload>
							</Row>
						</Col>
						<Col span={4}>
							<Button type='primary' style={{ float: "right", width: 80 }}>
								Post
							</Button>
						</Col>
					</Row>
				</Form>
			</Card>
		)
	}

	renderStatus() {
		const { Text, Paragraph } = Typography
		return (
			<Card style={{ marginTop: "20px" }} hoverable>
				<Row>
					<Col span={2}>
						<Avatar shape='square' size={52} icon='user' />
					</Col>
					<Col span={16}>
						<div style={{ marginLeft: "10px" }}>
							<Text style={{ fontSize: 18, fontWeight: "bold" }}>
								Ivana Hani <br />
							</Text>
							<Text style={{ color: "grey" }}>Fullstack Developer</Text>
						</div>
					</Col>
					<Col span={6} style={{ textAlign: "right" }}>
						<Icon type='ellipsis' style={{ fontSize: 24 }} />
						<Text>
							<br /> 26 menit yang lalu
						</Text>
					</Col>
				</Row>
				<Row style={{ marginTop: "15px" }}>
					<Paragraph ellipsis={{ rows: 3, expandable: true }}>
						Ant Design, a design language for background applications, is refined by Ant
						UED Team. Ant Design, a design language for background applications, is
						refined by Ant UED Team. Ant Design, a design language for background
						applications, is refined by Ant UED Team. Ant Design, a design language for
						background applications, is refined by Ant UED Team. Ant Design, a design
						language for background applications, is refined by Ant UED Team. Ant
						Design, a design language for background applications, is refined by Ant UED
						Team.
					</Paragraph>
					<img
						src='../../static/images/feed-picture.png'
						alt='feed-picture'
						width='100%'
					/>
				</Row>
				<Row style={{ marginTop: "15px" }}>
					<Col span={24}>
						<Button type='link' size='large'>
							<Icon type='heart' /> <Text>Suka</Text>
						</Button>
						<Button type='link' size='large' style={{ marginLeft: "10px" }}>
							<Icon type='message' /> <Text>Komentar</Text>
						</Button>
						<Button type='link' size='large' style={{ marginLeft: "10px" }}>
							<Icon type='share-alt' /> <Text>Bagikan</Text>
						</Button>
					</Col>
				</Row>
			</Card>
		)
	}

	render() {
		const { Content } = Layout
		return (
			<Layout style={{ background: "#FAF9F7" }}>
				<Navbar isLoggedIn={this.props.auth.isLogin} />
				<Content>
					<Row justify='center' type='flex' gutter={20} style={{ marginTop: "30px" }}>
						<Col span={5}>{this.renderProfileContainer()}</Col>
						<Col span={14}>
							{this.renderFormStatus()}
							{this.renderStatus()}
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
		users: state.users
	}
}

export default connect(mapStateToProps)(UserFeed)
