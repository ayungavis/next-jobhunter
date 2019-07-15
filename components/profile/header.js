import React, { Component } from "react"
import {
    Layout, 
    Row, 
    Col, 
    Typography, 
    Button, 
    Icon, 
    Avatar, 
    Menu, 
    Dropdown, 
    Modal,
    Form,
    Input 
} from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import cookie from "js-cookie"

import { getUserInfo, updateUser } from "../../redux/actions/users"

class ProfileHeader extends Component {
    constructor() {
        super()
        this.state = {
            current: "",
            visible: false,
            token: cookie.get("token")
        }
    }

    componentDidMount() {
        this.getUserInfo()
    }

    getUserInfo() {
        this.props.dispatch(getUserInfo(this.props.profile.user_id, this.state.token))
    }

    handleClickMenu = e => {
        this.setState({ current: e.key })
    }

    renderDropdownMenu() {
        return (
            <Menu>
                <Menu.Item key='1'>
                    <Link href='/users/profile'>
                        <a>
                            <Icon type='user' /> Profil
                            </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link href='/users/activity'>
                        <a>
                            <Icon type='fire' /> Aktivitas
                            </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key='3'>
                    <Link href='/users/document'>
                        <a>
                            <Icon type='folder' /> Dokumen
                            </a>
                    </Link>
                </Menu.Item>
            </Menu>
        )
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
                        this.props.dispatch(getUserInfo(this.props.users.item.user_id, this.state.token))
                    })
            }
        })
    }

    showModal = () => {
        this.setState({ visible: true })
    }

    handleCancel = () => {
        this.setState({ visible: false })
    }

    render() {
        const { Content } = Layout
        const { Text } = Typography
        return (
            <Content>
                <Row
                    style={{
                        width: "100%",
                        height: "250px",
                        backgroundSize: "cover",
                        backgroundImage: `url(${this.props.profile.profile_photo_header})`
                    }}
                />
                <Row
                    style={{
                        top: 60,
                        width: "100%",
                        height: "250px",
                        position: "absolute",
                        background:
                            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,0.35) 100%)"
                    }}
                />
                <Row
                    justify='center'
                    type='flex'
                    gutter={24}
                    style={{
                        height: "60px",
                        background: "white",
                        boxShadow: "0 5px 10px 0 rgba(187, 187, 187, 0.15)"
                    }}
                >
                    <Col span={4} style={{ justifyContent: "center", display: "flex" }}>
                        <Avatar
                            size={156}
                            src={this.props.profile.profile_photo_profile}
                            style={{
                                position: "absolute",
                                zIndex: 1,
                                top: -80,
                                border: "5px solid white"
                            }}
                        />
                    </Col>
                    <Col span={10}>
                        <div style={{ position: "absolute", top: -75, left: -20 }}>
                            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
                               {this.props.profile.user_first_name} {this.props.profile.user_last_name} <br />
                            </Text>
                            <Text style={{ color: "white", fontSize: 18 }}>
                                {this.props.profile.profile_headline}
                                </Text>
                        </div>
                        <Menu
                            onClick={this.handleClickMenu}
                            selectedKeys={[this.state.current]}
                            mode='horizontal'
                            style={{
                                marginLeft: "-30px",
                                lineHeight: "59px",
                                borderBottom: "0px"
                            }}
                        >
                            <Menu.Item key='1'>
                                <Link href='/users/profile'>
                                    <a>
                                        <Icon type='user' /> Profil
                                        </a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='2'>
                                <Link href='/users/activity'>
                                    <a>
                                        <Icon type='fire' /> Aktivitas
                                        </a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='3'>
                                <Link href='/users/document'>
                                    <a>
                                        <Icon type='folder' /> Dokumen
                                        </a>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col
                        span={6}
                        style={{
                            justifyContent: "flex-end",
                            alignItems: "center",
                            display: "flex"
                        }}
                    >
                        <Dropdown overlay={this.renderDropdownMenu} trigger={["click"]}>
                            <Button type='primary' size='large'>
                                Tambah Bagian Profil <Icon type='down' />
                            </Button>
                        </Dropdown>
                        <Button size='large' onClick={this.showModal} style={{ marginLeft: "20px" }}>
                            Edit Profil
                        </Button>
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
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const WrappedProfileHeader = Form.create()(ProfileHeader)

export default connect(mapStateToProps)(WrappedProfileHeader)