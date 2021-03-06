import { Provider } from "react-redux"
import App, { Container } from "next/app"
import Head from "next/head"
import withRedux from "next-redux-wrapper"

import initStore from "../redux/store"

export default withRedux(initStore, { debug: true })(
	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			return {
				pageProps: {
					...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
				}
			}
		}

		render() {
			const { Component, pageProps, store } = this.props
			return (
				<Container>
					<Head>
						<title>Jobhunter</title>
					</Head>
					<Provider store={store}>
						<Component {...pageProps} />
					</Provider>
				</Container>
			)
		}
	}
)
