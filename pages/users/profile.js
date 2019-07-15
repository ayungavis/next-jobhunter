import React, { Component } from "react"
import {
	Layout,
	Row,
	Col,
	Typography,
	Card,
	Button,
	Icon,
	Avatar,
	Divider,
	Modal,
	Form,
	Input
} from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import cookie from "js-cookie"

import Navbar from "../../components/navbar"
import ProfileHeader from "../../components/profile/header"
import initialize from "../../utils/initialize"
import { getUserInfo } from "../../redux/actions/users"
import { getUserAchievementInfo } from "../../redux/actions/users/achievements"
import { getUserEducationInfo } from "../../redux/actions/users/educations"
import { getUserJobInfo } from "../../redux/actions/users/jobs"
import { getUserLanguageInfo } from "../../redux/actions/users/languages"
import { getUserOrganizationInfo } from "../../redux/actions/users/organizations"
import { getUserProjectInfo } from "../../redux/actions/users/projects"
import { getUserSocialInfo } from "../../redux/actions/users/socials"
import { getUserVolunteerInfo } from "../../redux/actions/users/volunteers"
import { getUserSkillInfo } from "../../redux/actions/users/skills"

class UserProfile extends Component {
	constructor() {
		super()
		this.state = {
			token: cookie.get("token")
		}
	}

	static async getInitialProps(ctx) {
		await initialize(ctx)
	}

	componentDidMount() {
		this.getUserInfo()
		this.getUserAchievementInfo()
		this.getUserEducationInfo()
		this.getUserJobInfo()
		this.getUserLanguageInfo()
		this.getUserOrganizationInfo()
		this.getUserProjectInfo()
		this.getUserSocialInfo()
		this.getUserVolunteerInfo()
		this.getUserSkillInfo()
	}

	getUserInfo() {
		this.props.dispatch(getUserInfo(this.props.auth.data.user.id, this.state.token))
	}

	getUserAchievementInfo() {
		this.props.dispatch(getUserAchievementInfo(this.props.auth.data.user.id, this.state.token))
	}

	getUserEducationInfo() {
		this.props.dispatch(getUserEducationInfo(this.props.auth.data.user.id, this.state.token))
	}

	getUserJobInfo() {
		this.props.dispatch(getUserJobInfo(this.props.auth.data.user.id, this.state.token))
	}

	getUserLanguageInfo() {
		this.props.dispatch(getUserLanguageInfo(this.props.auth.data.user.id, this.state.token))
	}

	getUserOrganizationInfo() {
		this.props.dispatch(getUserOrganizationInfo(this.props.auth.data.user.id, this.state.token))
	}

	getUserProjectInfo() {
		this.props.dispatch(getUserProjectInfo(this.props.auth.data.user.id, this.state.token))
	}

	getUserSocialInfo() {
		this.props.dispatch(getUserSocialInfo(this.props.auth.data.user.id, this.state.token))
	}

	getUserVolunteerInfo() {
		this.props.dispatch(getUserVolunteerInfo(this.props.auth.data.user.id, this.state.token))
	}

	getUserSkillInfo() {
		this.props.dispatch(getUserSkillInfo(this.props.auth.data.user.id, this.state.token))
	}

	renderAbout() {
		const { Title, Paragraph } = Typography
		return (
			<Card hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={22}>
						<Title level={3}>Tentang</Title>
					</Col>
					<Col span={2} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Button type='link' shape='circle' icon='form' />
					</Col>
				</Row>
				<Paragraph ellipsis={{ rows: 3, expandable: true }}>
					{this.props.users.item.profile_description}
				</Paragraph>
			</Card>
		)
	}

	renderActivity() {
		const { Title, Text } = Typography
		return (
			<Card style={{ marginTop: "30px" }} hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={18}>
						<Title level={3}>Aktivitas</Title>
					</Col>
					<Col span={6} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Text style={{ color: "grey" }}>
							251 teman ·{" "}
							<Link>
								<a>
									<strong>Lihat Semua</strong>
								</a>
							</Link>
						</Text>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Row style={{ marginTop: "15px", marginBottom: "15px" }}>
							<Col span={5}>
								<Avatar size={52} icon='user' />
							</Col>
							<Col span={19} style={{ verticalAlign: "center" }}>
								<Text style={{ fontSize: 16, fontWeight: "bold" }}>
									What an achievement <br />
								</Text>
								<Text>Wahyu adi memberikan komtentar</Text>
							</Col>
						</Row>
						<Row style={{ marginTop: "15px", marginBottom: "15px" }}>
							<Col span={5}>
								<Avatar size={52} icon='user' />
							</Col>
							<Col span={19} style={{ verticalAlign: "center" }}>
								<Text style={{ fontSize: 16, fontWeight: "bold" }}>
									What an achievement <br />
								</Text>
								<Text>Wahyu adi memberikan komtentar</Text>
							</Col>
						</Row>
					</Col>
					<Col span={12}>
						<Row style={{ marginTop: "15px", marginBottom: "15px" }}>
							<Col span={5}>
								<Avatar size={52} icon='user' />
							</Col>
							<Col span={19} style={{ verticalAlign: "center" }}>
								<Text style={{ fontSize: 16, fontWeight: "bold" }}>
									What an achievement <br />
								</Text>
								<Text>Wahyu adi memberikan komtentar</Text>
							</Col>
						</Row>
						<Row style={{ marginTop: "15px", marginBottom: "15px" }}>
							<Col span={5}>
								<Avatar size={52} icon='user' />
							</Col>
							<Col span={19} style={{ verticalAlign: "center" }}>
								<Text style={{ fontSize: 16, fontWeight: "bold" }}>
									What an achievement <br />
								</Text>
								<Text>Wahyu adi memberikan komtentar</Text>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row justify='center' type='flex' style={{ marginTop: "10px" }}>
					<Button type='link' block>
						Lihat Semua
					</Button>
				</Row>
			</Card>
		)
	}

	renderJob() {
		const { Title, Text, Paragraph } = Typography
		const { userJobs } = this.props
		return userJobs.data ? (
			<Card style={{ marginTop: "30px" }} hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={22}>
						<Title level={3}>Pengalaman Kerja</Title>
					</Col>
					<Col span={2} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Button type='link' shape='circle' icon='plus' />
					</Col>
				</Row>
				{userJobs.data.map((item, key) => (
					<Row style={{ marginTop: "10px" }}>
						<Col>
							<Row>
								<Col span={20}>
									<Text style={{ fontSize: 16, fontWeight: "bold" }}>
										{item.potition}
									</Text>
								</Col>
								<Col
									span={4}
									style={{
										justifyContent: "flex-end",
										display: "flex"
									}}
								>
									<Button type='link' shape='circle' icon='delete' />
									<Button type='link' shape='circle' icon='form' />
								</Col>
							</Row>
							<Paragraph>
								<Text style={{ fontSize: 16, marginTop: "5px" }}>
									{item.company} <br />
								</Text>
								<Text>
									{item.start_month} {item.start_year} -{" "}
									{item.end_month || "sekarang"} {item.end_year} <br />
								</Text>
								<Text style={{ color: "grey" }}>
									{item.location} <br />
								</Text>
								<Paragraph style={{ marginTop: "10px" }}>
									{item.description}
								</Paragraph>
							</Paragraph>
						</Col>
					</Row>
				))}
			</Card>
		) : (
			<div />
		)
	}

	renderEducation() {
		const { Title, Text, Paragraph } = Typography
		const { userEducations } = this.props
		return userEducations.data ? (
			<Card hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={22}>
						<Title level={3}>Pendidikan</Title>
					</Col>
					<Col span={2} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Button type='link' shape='circle' icon='plus' />
					</Col>
				</Row>
				{userEducations.data.map((item, key) => (
					<Row style={{ marginTop: "10px" }}>
						<Col>
							<Row>
								<Col span={20}>
									<Text style={{ fontSize: 16, fontWeight: "bold" }}>
										{item.school_name}
									</Text>
								</Col>
								<Col
									span={4}
									style={{
										justifyContent: "flex-end",
										display: "flex"
									}}
								>
									<Button type='link' shape='circle' icon='delete' />
									<Button type='link' shape='circle' icon='form' />
								</Col>
							</Row>
							<Row>
								<Text style={{ fontSize: 16, marginTop: "5px" }}>
									{item.degree} · {item.field_of_study}
									<br />
								</Text>
								<Text>
									{item.start_year} - {item.end_year || "sekarang"} <br />
								</Text>
								<Paragraph style={{ marginTop: "10px" }}>
									{item.description}
								</Paragraph>
							</Row>
						</Col>
					</Row>
				))}
			</Card>
		) : (
			<div />
		)
	}

	renderSkill() {
		const { Title, Text, Paragraph } = Typography
		const { userSkills } = this.props
		return userSkills.data ? (
			<Card style={{ marginTop: "30px" }} hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={22}>
						<Title level={3}>Skill</Title>
					</Col>
					<Col span={2} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Button type='link' shape='circle' icon='plus' />
					</Col>
				</Row>
				{userSkills.data.map((item, key) => (
					<Row style={{ marginTop: "10px" }}>
						<Col span={2}>
							<Button shape='circle' icon='plus' />
						</Col>
						<Col
							span={22}
							style={{
								justifyContent: "flex-start",
								alignContent: "center",
								display: "flex",
								marginLeft: "-20px",
								height: "100%"
							}}
						>
							<Text style={{ fontSize: "16px", fontWeight: "bold" }}>
								{item.name_of_skill ? item.name_of_skill : item.skill_name}
							</Text>
						</Col>
					</Row>
				))}
			</Card>
		) : (
			<div />
		)
	}

	renderOrganization() {
		const { Title, Text, Paragraph } = Typography
		const { userOrganizations } = this.props
		return userOrganizations.data ? (
			<Card style={{ marginTop: "30px" }} hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={22}>
						<Title level={3}>Organisasi</Title>
					</Col>
					<Col span={2} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Button type='link' shape='circle' icon='plus' />
					</Col>
				</Row>
				{userOrganizations.data.map((item, key) => (
					<Row style={{ marginTop: "10px" }}>
						<Col>
							<Row>
								<Col span={20}>
									<Text style={{ fontSize: 16, fontWeight: "bold" }}>
										{item.name_of_organitation}
									</Text>
								</Col>
								<Col
									span={4}
									style={{
										justifyContent: "flex-end",
										display: "flex"
									}}
								>
									<Button type='link' shape='circle' icon='delete' />
									<Button type='link' shape='circle' icon='form' />
								</Col>
							</Row>
							<Row>
								{item.associated_with ? (
									<Text style={{ fontSize: 14, marginTop: "5px" }}>
										{item.associated_with}
										<br />
									</Text>
								) : (
									<div />
								)}
								<Text>
									{item.start_month} {item.start_year} -{" "}
									{item.end_month || "sekarang"} {item.end_year} <br />
								</Text>
								<Paragraph style={{ marginTop: "10px" }}>
									{item.description}
								</Paragraph>
							</Row>
						</Col>
					</Row>
				))}
			</Card>
		) : (
			<div />
		)
	}

	renderVolunteer() {
		const { Title, Text, Paragraph } = Typography
		const { userVolunteers } = this.props
		return userVolunteers.data ? (
			<Card hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={22}>
						<Title level={3}>Volunteer</Title>
					</Col>
					<Col span={2} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Button type='link' shape='circle' icon='plus' />
					</Col>
				</Row>
				{userVolunteers.data.map((item, key) => (
					<Row style={{ marginTop: "10px" }}>
						<Col>
							<Row>
								<Col span={20}>
									<Text style={{ fontSize: 16, fontWeight: "bold" }}>
										{item.user_volunteers_role}
									</Text>
								</Col>
								<Col
									span={4}
									style={{
										justifyContent: "flex-end",
										display: "flex"
									}}
								>
									<Button type='link' shape='circle' icon='delete' />
									<Button type='link' shape='circle' icon='form' />
								</Col>
							</Row>
							<Row>
								<Text style={{ fontSize: 14, marginTop: "5px" }}>
									{item.name_of_volunteer} · {item.volunteer_type_name}
									<br />
								</Text>
								<Text>
									{item.user_volunteers_start_month}{" "}
									{item.user_volunteers_start_year} -{" "}
									{item.user_volunteers_end_month || "sekarang"}{" "}
									{item.user_volunteers_end_year} <br />
								</Text>
								<Paragraph style={{ marginTop: "10px" }}>
									{item.user_volunteers_description}
								</Paragraph>
							</Row>
						</Col>
					</Row>
				))}
			</Card>
		) : (
			<div />
		)
	}

	renderAchievement() {
		const { Title, Text, Paragraph } = Typography
		const { userAchievements } = this.props
		return userAchievements.data ? (
			<Card style={{ marginTop: "30px" }} hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={22}>
						<Title level={3}>Penghargaan</Title>
					</Col>
					<Col span={2} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Button type='link' shape='circle' icon='plus' />
					</Col>
				</Row>
				{userAchievements.data.map((item, key) => (
					<Row style={{ marginTop: "10px" }}>
						<Col>
							<Row>
								<Col span={20}>
									<Text style={{ fontSize: 16, fontWeight: "bold" }}>
										{item.name_of_achievement}
									</Text>
								</Col>
								<Col
									span={4}
									style={{
										justifyContent: "flex-end",
										display: "flex"
									}}
								>
									<Button type='link' shape='circle' icon='delete' />
									<Button type='link' shape='circle' icon='form' />
								</Col>
							</Row>
							<Row>
								<Text style={{ fontSize: 14, marginTop: "5px" }}>
									{item.appreciator} · {item.release_month} {item.release_year}
									<br />
								</Text>
								<Paragraph style={{ marginTop: "10px" }}>
									{item.description}
								</Paragraph>
							</Row>
						</Col>
					</Row>
				))}
			</Card>
		) : (
			<div />
		)
	}

	renderProject() {
		const { Title, Text, Paragraph } = Typography
		const { userProjects } = this.props
		return userProjects.data ? (
			<Card hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={22}>
						<Title level={3}>Proyek</Title>
					</Col>
					<Col span={2} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Button type='link' shape='circle' icon='plus' />
					</Col>
				</Row>
				{userProjects.data.map((item, key) => (
					<Row style={{ marginTop: "10px" }}>
						<Col>
							<Row>
								<Col span={20}>
									<Text style={{ fontSize: 16, fontWeight: "bold" }}>
										{item.name_of_project}
									</Text>
								</Col>
								<Col
									span={4}
									style={{
										justifyContent: "flex-end",
										display: "flex"
									}}
								>
									<Button type='link' shape='circle' icon='delete' />
									<Button type='link' shape='circle' icon='form' />
								</Col>
							</Row>
							<Row>
								<Text style={{ marginTop: "5px" }}>
									{item.start_month} {item.start_year} -{" "}
									{item.end_month || "sekarang"} {item.end_year} <br />
								</Text>
								<Paragraph style={{ marginTop: "10px" }}>
									{item.description}
								</Paragraph>
								{item.url_project ? (
									<Link href={item.url_project}>
										<a>Lihat Proyek</a>
									</Link>
								) : (
									<div />
								)}
							</Row>
						</Col>
					</Row>
				))}
			</Card>
		) : (
			<div />
		)
	}

	renderLanguage() {
		const { Title, Text } = Typography
		const { userLanguages } = this.props
		return userLanguages.data ? (
			<Card hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={22}>
						<Title level={3}>Bahasa</Title>
					</Col>
					<Col span={2} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Button type='link' shape='circle' icon='plus' />
					</Col>
				</Row>
				{userLanguages.data.map((item, key) => (
					<Row style={{ marginTop: "10px" }}>
						<Col>
							<Row>
								<Col span={20}>
									<Text style={{ fontSize: 16, fontWeight: "bold" }}>
										{item.languange}
									</Text>
								</Col>
								<Col
									span={4}
									style={{
										justifyContent: "flex-end",
										display: "flex"
									}}
								>
									<Button type='link' shape='circle' icon='delete' />
									<Button type='link' shape='circle' icon='form' />
								</Col>
							</Row>
							<Row>
								<Text style={{ marginTop: "5px" }}>
									{item.level}
									<br />
								</Text>
							</Row>
						</Col>
					</Row>
				))}
			</Card>
		) : (
			<div />
		)
	}

	renderContact() {
		const { Title, Text } = Typography
		const { userSocials } = this.props
		return (
			<Card hoverable>
				<Row justify='space-between' type='flex'>
					<Col span={22}>
						<Title level={3}>Kontak</Title>
					</Col>
					<Col span={2} style={{ justifyContent: "flex-end", display: "flex" }}>
						<Button type='link' shape='circle' icon='form' />
					</Col>
				</Row>
				<Row>
					<Col>
						<Row style={{ marginBottom: "10px" }}>
							<Col span={20}>
								<Text style={{ fontSize: 16, fontWeight: "bold" }}>
									Alamat Asli
								</Text>
							</Col>
							<Col
								span={4}
								style={{
									justifyContent: "flex-end",
									display: "flex"
								}}
							/>
						</Row>
						<Row>
							<Col span={4}>
								<Icon type='environment' style={{ fontSize: 20 }} />
							</Col>
							<Col span={20}>
								<Text>
									{this.props.users.item.contact_address}
									<br />
									{this.props.users.item.contact_city},{" "}
									{this.props.users.item.contact_state} <br />
									{this.props.users.item.contact_country}{" "}
									{this.props.users.item.contact_zip_code}
								</Text>
							</Col>
						</Row>
						<Divider />
						<Row style={{ marginBottom: "10px" }}>
							<Col span={20}>
								<Text style={{ fontSize: 16, fontWeight: "bold" }}>
									Alamat Domisili
								</Text>
							</Col>
							<Col
								span={4}
								style={{
									justifyContent: "flex-end",
									display: "flex"
								}}
							/>
						</Row>
						<Row>
							<Col span={4}>
								<Icon type='environment' style={{ fontSize: 20 }} />
							</Col>
							<Col span={20}>
								<Text>
									{this.props.users.item.contact_domicile_address} <br />
									{this.props.users.item.contact_domicile_city},{" "}
									{this.props.users.item.contact_domicile_state} <br />
									{this.props.users.item.contact_domicile_country}{" "}
									{this.props.users.item.contact_domicile_zip_code}
								</Text>
							</Col>
						</Row>
						{userSocials.data ? (
							<div>
								<Divider />
								<Row style={{ marginBottom: "10px" }}>
									<Col span={20}>
										<Text style={{ fontSize: 16, fontWeight: "bold" }}>
											Sosial Media
										</Text>
									</Col>
									<Col
										span={4}
										style={{
											justifyContent: "flex-end",
											display: "flex"
										}}
									/>
								</Row>
								{userSocials.data.map((item, key) => (
									<Row style={{ marginBottom: "10px" }}>
										<Col span={4}>
											<Icon
												type={item.social_media_icon}
												style={{ fontSize: 20 }}
											/>
										</Col>
										<Col span={20}>
											<Link href={`https://${item.user_social_media_url}`}>
												<a>{item.user_social_media_url}</a>
											</Link>
										</Col>
									</Row>
								))}
							</div>
						) : (
							<div />
						)}
					</Col>
				</Row>
			</Card>
		)
	}

	render() {
		const { Content } = Layout
		const { Title, Text, Paragraph } = Typography
		return (
			<Layout style={{ background: "#FAF9F7" }}>
				<Navbar isLoggedIn={this.props.auth.isLogin} />
				<Content>
					<ProfileHeader profile={this.props.users.item} />
					<Row justify='center' type='flex' gutter={20} style={{ marginTop: "50px" }}>
						<Col span={14}>
							{this.renderAbout()}
							{this.renderActivity()}
							{this.renderJob()}
							{this.renderEducation()}
							{this.renderSkill()}
							{this.renderOrganization()}
							{this.renderVolunteer()}
							{this.renderAchievement()}
							{this.renderProject()}
							{this.renderLanguage()}
						</Col>
						<Col span={6}>{this.renderContact()}</Col>
					</Row>
				</Content>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		users: state.users,
		userAchievements: state.userAchievements,
		userEducations: state.userEducations,
		userJobs: state.userJobs,
		userLanguages: state.userLanguages,
		userOrganizations: state.userOrganizations,
		userProjects: state.userProjects,
		userSocials: state.userSocials,
		userVolunteers: state.userVolunteers,
		userSkills: state.userSkills
	}
}

const WrappedUserProfile = Form.create()(UserProfile)

export default connect(mapStateToProps)(WrappedUserProfile)
