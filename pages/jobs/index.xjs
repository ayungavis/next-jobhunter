import React, { PureComponent } from "react"

import { Modal } from "@material-ui/core"
import FormUploadImage from "./FormUploadImage"
import DialogContent from "@material-ui/core/DialogContent"

class UploadImage extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {}
	}

	getAvatar = dataFromChild => {
		this.props.onAvatarChange(dataFromChild)
	}

	render() {
		const { isOpenModal, onCloseModal } = this.props
		return (
			<Modal
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'
				open={isOpenModal}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "15px"
				}}
			>
				<DialogContent style={{ flex: "none" }}>
					{isOpenModal ? (
						<FormUploadImage onCloseModal={onCloseModal} getCallback={this.getAvatar} />
					) : null}
				</DialogContent>
			</Modal>
		)
	}
}

export default UploadImage
