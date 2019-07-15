import React, { PureComponent } from "react"
import Fab from "@material-ui/core/Fab"
import CloseIcon from "@material-ui/icons/Close"
import Modal from "@material-ui/core/Modal"
import CircularProgress from "@material-ui/core/CircularProgress"
import { withStyles, IconButton, Typography, Button } from "@material-ui/core"
import AddPhotoAlternate from "@material-ui/icons/AddPhotoAlternate"
import { ModalContainer, ModalTitle, ContainerModalLoading } from "./styled"
import { bindActionCreators } from "redux"
import { toast } from "react-toastify"
import { toastConfig } from "../../../utils/config"
import { connect } from "react-redux"
import { updateProfileApi } from "../../../redux/sagas/profileSaga/api"
import { updateAvatarEmployer } from "../../../redux/sagas/profileSaga/actions"

const styles = theme => ({
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: 20,
		outline: "none"
	},
	margin: {
		margin: theme.spacing.unit
	},
	modalHeader: {
		position: "relative",
		paddingBottom: 10
	},
	btnClose: {
		position: "absolute",
		top: -15,
		right: 0
	},
	menu: {
		width: 200
	},
	modalFooter: {
		textAlign: "center",
		paddingBottom: 20
	},
	button: {
		borderRadius: "20px",
		paddingLeft: theme.spacing.unit * 2,
		paddingRight: theme.spacing.unit * 2
	}
})

class FormAddSummary extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isRequesting: false,
			avatar: null,
			imagePreviewUrl: ""
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	isDisableSubmit = () => {
		const { avatar } = this.state
		if (!avatar) {
			return true
		}
	}

	onFormSubmit(e) {
		e.preventDefault()
		const { avatar, imagePreviewUrl } = this.state
		const formData = new FormData()
		formData.append("avatar", avatar)
		this.setState({ isRequesting: true })
		updateProfileApi(formData)
			.then(response => {
				this.setState({ isRequesting: false })
				this.props.updateAvatarEmployer(response)
				this.props.onCloseModal()
				toast.success("Upload Avatar Success", toastConfig)
				this.props.getCallback(imagePreviewUrl)
			})
			.catch(error => {
				this.setState({ isRequesting: false })
				if (error.response && error.response.data && error.response.data.detail) {
					toast.error(error.response.data.detail, toastConfig)
				} else {
					toast.error("Can not Upload Avatar. Try again !", toastConfig)
				}
			})
	}

	onChange(e) {
		e.preventDefault()
		if (e.target.files[0]) {
			if (e.target.files[0].size > 2000000) {
				toast.error("Maximum File Upload Size is 2mb !", toastConfig)
			} else {
				let reader = new FileReader()
				let file = e.target.files[0]
				reader.onloadend = () => {
					this.setState({
						avatar: file,
						imagePreviewUrl: reader.result
					})
				}

				reader.readAsDataURL(file)
			}
		}
	}

	render() {
		const isDisableSubmit = this.isDisableSubmit()
		const { onCloseModal, classes } = this.props
		const { isRequesting } = this.state
		let { imagePreviewUrl } = this.state
		let $imagePreview = null
		if (imagePreviewUrl) {
			$imagePreview = (
				<img
					src={imagePreviewUrl}
					alt='Preview_Image'
					style={{
						width: "50%",
						height: "50%",
						marginTop: 7,
						marginBottom: 15
					}}
				/>
			)
		} else {
			$imagePreview = (
				<div className='previewTest' style={{ marginTop: 50, marginBottom: 60 }}>
					Please select an Image for Preview
				</div>
			)
		}

		return (
			<div className={classes.paper}>
				<Modal open={isRequesting} disableBackdropClick disableEscapeKeyDown>
					<ContainerModalLoading>
						<CircularProgress color='inherit' />
						<Typography variant='h6' id='modal-title'>
							Uploading Avatar...
						</Typography>
					</ContainerModalLoading>
				</Modal>

				<ModalContainer>
					<div className={classes.modalHeader}>
						<ModalTitle>Upload Avatar</ModalTitle>
						<IconButton
							style={{ outline: "none" }}
							className={classes.btnClose}
							onClick={onCloseModal}
						>
							<CloseIcon />
						</IconButton>
					</div>
					<br />
					<div className='modal-body'>
						<Button
							variant='contained'
							size='small'
							color='default'
							component='label'
							className={classes.button}
							style={{
								backgroundColor: "#FFE7E7"
							}}
						>
							<AddPhotoAlternate className={classes.rightIcon} />
							&nbsp;Click Here for Upload
							<input
								type='file'
								onChange={this.onChange}
								style={{ display: "none" }}
								accept='.jpg , .jpeg , .png'
							/>
						</Button>
					</div>
					{$imagePreview}
					<div className={classes.modalFooter}>
						<Fab
							variant='extended'
							size='medium'
							color='secondary'
							aria-label='Save'
							style={{
								width: 290,
								height: 45,
								borderRadius: 30,
								marginBottom: -20
							}}
							disabled={isDisableSubmit}
							onClick={this.onFormSubmit}
						>
							Save
						</Fab>
					</div>
				</ModalContainer>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateAvatarEmployer }, dispatch)
}

export default connect(
	null,
	mapDispatchToProps
)(withStyles(styles)(FormAddSummary))
