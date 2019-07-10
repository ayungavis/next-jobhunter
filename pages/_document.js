import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
					<link rel='stylesheet/less' type='text/css' href='../static/less/style.less' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
