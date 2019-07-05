import React, { Component } from "react"
import { Layout } from "antd"
import { connect } from "react-redux"

import { getStatus } from "../redux/actions/auth"
import Landing from "./landing"

import "../static/less/style.less"

class Index extends Component {
	constructor() {
		super()
	}

	static async getInitialProps(ctx) {
		if (ctx.isServer) {
			if (ctx.req) {
				const token = await ctx.req.headers.cookie
				if (token) {
					const action = await getStatus(token.split("=")[1])
					ctx.store.dispatch(action)
					return action.payload
						.then(payload => {
							ctx.res.writeHead(302, {
								Location: "/users/feed"
							})
							ctx.res.end()
						})
						.catch(err => {
							ctx.res.writeHead(302, {
								Location: "/"
							})
							ctx.res.end()
						})
				}
			}
		}
	}

	render() {
		return (
			<div>
				{this.props.auth.isLoading ? (
					Route.push("/users/feed")
				) : (
					<Landing isLoggedIn={this.props.auth.isLoading} />
				)}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Index)
