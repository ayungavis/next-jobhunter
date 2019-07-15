import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';
import {
  withStyles, 
  Paper, 
  TextField,
  AppBar, 
  Grid,
  Tab, 
  Tabs, 
  Typography, 
  Button, 
  IconButton,
  InputAdornment
} from '@material-ui/core';

import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";

import deepOrange from '@material-ui/core/colors/deepOrange';

import DashboardLayout from '../../components/Dashboard/Layout';
import {
	Container, 
	FormContainer, 
	Label, 
	ConnectButton, 
	SocialNetwork,
	WrapperIntegration, 
	WrapperSocialNetwork, 
	ImageSN, 
	ConnectedButton
} from './styled';
import GeneralInfo from './GeneralInfo';
import Billing from './Billing'
import ModalUploadImage from "./UploadImage"

import { requestTwitterToken, requestTwitterAccessToken } from "../../redux/sagas/socialNetworkSaga/actions";

import FacebookIcon from '../../assets/FacebookIcon.svg';
import GoogleMyBusiness from '../../assets/GoogleMyBusiness.svg';
import InstagramIcon from '../../assets/InstagramIcon.svg';
import LinkedinIcon from '../../assets/LinkedinIcon.svg';
import TwitterIcon from '../../assets/TwitterIcon.svg';
import LinkedinPage from '../../assets/LinkedinPage.svg';
import FacebookGroupIcon from '../../assets/FacebookGroupIcon.svg';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	typography: {
		paddingBottom: theme.spacing.unit * 2,
		fontWeight: 'bold',
	},
	paper: {
		padding: theme.spacing.unit * 5,
		textAlign: 'left',
		color: theme.palette.text.secondary,
		margin: '0 40px',
	},
	chip: {
		margin: theme.spacing.unit * 1,
	},
	card: {
		minWidth: 275,
		paddingLeft: theme.spacing.unit * 4,
		paddingRight: theme.spacing.unit * 4,
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 1,
	},
	topTypography: {
		fontSize: 13,
		// textAlign: 'left',
		paddingTop: theme.spacing.unit * 1,
		paddingLeft: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 1,
	},
	nameTopTypography: {
		fontWeight: 900,
		textAlign: 'left',
		paddingTop: theme.spacing.unit * 1,
		paddingLeft: theme.spacing.unit * 2,
	},
	pos: {
		marginBottom: 12,
	},
	avatar: {
		margin: 10,
	},
	mainAvatar: {
		margin: 10,
		width: 130,
		height: 130,
		color: '#fff',
		backgroundColor: deepOrange[600],
	},
	notifAvatar: {
		marginLeft: 10,
		width: 48,
		height: 48,
		color: '#fff',
		backgroundColor: deepOrange[600],
	},
	notifProfile: {
		marginBottom: 5,
	},
	btnEditProfile: {
	},
	smallCustomIcon: {
		fontSize: 15,
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	indicator: {
		backgroundColor: "blue",
		height: '4px !important',
	},
	textField: {
		width: 280,
	},
	longTextField: {
		width: 588,
	},
	shortTextField: {
		width: 84,
	},
	imageLayout: {
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex'
	},
	imageContainer: {
		width: 250,
		height: 170,
		background: 'red',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		display: 'flex',
	},
	deleteButton: {
		marginTop: '-30px',
		marginRight: '-40px',
	},
});


function TabContainer(props) {
  return (
		<Grid
			container
			direction="row"
			justify="flex-start"
			alignItems="baseline"
		>
			<Typography component="div" style={{ paddingTop: 8 * 3, paddingBottom: 8 * 3, width: '100%' }}>
				{props.children}
			</Typography>
		</Grid>
  );
}

const socialNetworks = [
	{ icon: FacebookIcon, label: 'Facebook Page', connected: false },
	{ icon: FacebookGroupIcon, label: 'Facebook Group', connected: false },
	{ icon: TwitterIcon, label: 'Twitter', connected: false },
	{ icon: LinkedinIcon, label: 'Linkedin Profile', connected: false },
	{ icon: LinkedinPage, label: 'Linkedin Page', connected: false },
	{ icon: InstagramIcon, label: 'Instagram', connected: false },
	{ icon: GoogleMyBusiness, label: 'Google My Business', connected: false },
]

const images = ['1', '2', '3']

class Settings extends Component {
  constructor(props) {
		super(props);
		this.state = {
				activeTab: 0,
				oauthTokenSecret: '',
				socialNetworks,
				dialogUploadImage: false,
		};
	}
	
	componentDidMount() {
		this.props.requestProfile((data) => {
			const { socialNetworks: newSocialNetworksData } = this.state;
			const { employer: { social_account: { linkedin, twitter } } } = data;
			if (twitter) {
				newSocialNetworksData.find(item => item.label === 'Twitter').connected = true;
				this.setState({ socialNetworks: newSocialNetworksData });
			}
		});
	}

  handleChangeTab = (event, newValue) => {
		this.setState({ activeTab: newValue })
  }

  handleDelete() {
		alert('You clicked the delete icon.');
  }

  handleChange = id => {
		this.setState((prevState) => {
			return ({
			[id]: !prevState[id],
			});
		})
  };
  
  handleChangeInput = name => event => {
		this.setState({ [name]: event.target.value });
	};

  openPopup() {
		const left = window.screen.width / 2 - 520 / 2;
		const top = window.screen.height / 2 - 570 / 2;

		return window.open(
			"", "",
				`toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,
					width=520, height=570, top=${top}, left=${left}`
		);
  }

  polling(popup) {
		const polling = setInterval(() => {
			if (!popup || popup.closed || popup.closed === undefined) {
			clearInterval(polling);
			this.props.onFailure(new Error("Popup has been closed by user"));
			}

			const closeDialog = () => {
			clearInterval(polling);
			popup.close();
			};

			try {
			if (
				!popup.location.hostname.includes("api.twitter.com") &&
				!popup.location.hostname == ""
			) {
				if (popup.location.search) {
				const query = new URLSearchParams(popup.location.search);

				const oauthToken = query.get("oauth_token");
				const oauthVerifier = query.get("oauth_verifier");

				closeDialog();
				return this.getOauthToken(oauthVerifier, oauthToken);
				} else {
				closeDialog();
				return this.props.onFailure(
					new Error(
					"OAuth redirect has occurred but no query or hash parameters were found. " +
						"They were either not set during the redirect, or were removed—typically by a " +
						"routing library—before Twitter react component could read it."
					)
				);
				}
			}
			} catch (error) {
			// Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
			// A hack to get around same-origin security policy errors in IE.
			}
		}, 500);
  }

  getOauthToken(oAuthVerifier, oauthToken) {
		const { oauthTokenSecret } = this.state;
		const { requestTwitterAccessToken } = this.props;
		const params = {
			"request_token": {
				"oauth_token": oauthToken,
				"oauth_token_secret": oauthTokenSecret,
				"oauth_callback_confirmed": true,
			},
			"oauth_verifier": oAuthVerifier
		};
		requestTwitterAccessToken(params, (data) => {
			console.log(data);
		}, (error) => {
			console.log(error);
		})

	}

	handleConnectSocialNetWork = (name) => {
		const { requestTwitterToken } = this.props;
		const popup = this.openPopup();
		if (name === 'Twitter') {
			requestTwitterToken((data) => {
				const { request_token: { oauth_token_secret: oauthTokenSecret } } = data;
				this.setState({ oauthTokenSecret });
		popup.location = data.redirect_url;
		this.polling(popup);
			})
		}
	}
 
	renderIntegrationContent() {
		return (
			<FormContainer>
				<div style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 22, margin: '22px 0', marginLeft: 40 }}>Social Posting</div>
				<WrapperIntegration>
					{
						socialNetworks.map(item => (
							<WrapperSocialNetwork key={item.label}>
								<SocialNetwork>
									<ImageSN src={item.icon} />
									{item.label}
								</SocialNetwork>
								{
									item.connected ? (
										<ConnectedButton>Connected</ConnectedButton>
									) : (
										<ConnectButton onClick={() => this.handleConnectSocialNetWork(item.label)}
										>Connect</ConnectButton>
									)
								}
							</WrapperSocialNetwork>
						))
					}
				</WrapperIntegration>
			</FormContainer>
		);
	}

	toggleUploadImage = () => {
		const { dialogUploadImage } = this.state
		this.setState({ dialogUploadImage: !dialogUploadImage })
	}

	getImage = (dataFromChild) => {
		images.push(dataFromChild)
	}
	
	renderImage = () => {
		const { classes } = this.props
		return images.map((item, key) => (
			<Col className={classes.imageLayout}>
				<div id={key} className={classes.imageContainer}>
					<IconButton className={classes.deleteButton}>
						<ClearIcon className={classes.smallCustomIcon} />
					</IconButton>
				</div>
			</Col>
		))
	}

  render() {
		const {
			classes,
			profile,
		} = this.props;
		const { activeTab, description, dialogUploadImage } = this.state;
		console.log(this.props.company)
		return (
			<DashboardLayout title="Settings" topTypography="Settings" active="settings">
				<GeneralInfo profile={profile}/>
				<Container className={classes.root} >
					<AppBar position="static" style={{ backgroundColor: 'white', color: 'black', zIndex: 2 }}>
						<Tabs
							value={activeTab}
							onChange={this.handleChangeTab}
							classes={{ indicator: classes.indicator }}
							centered
						>
							<Tab label="Company" style={{ outline: 'none' }} />
							<Tab label="Billing" style={{ outline: 'none' }} />
							<Tab label="Classified" style={{ outline: 'none' }} />
							<Tab label="Headhunting" style={{ outline: 'none' }} />
							<Tab label="Integration" style={{ outline: 'none' }} />
						</Tabs>
					</AppBar>
					{activeTab === 0 &&
						<FormContainer style={{ padding: 20 }}>
							<TabContainer>
								<Paper className={classes.paper}>
									<Typography className={classes.typography} variant="h5" component="h3">
										About
									</Typography>
									<FormContainer>
										<Row style={{ marginTop: 16 }}>
											<Col xs={4} md={4} style={{ textAlign: 'right' }}>
												<Label>Company Name: </Label>
											</Col>
											<Col xs={8} md={8} style={{ textAlign: 'left' }}>
												<TextField
													className={classes.longTextField}
													value={this.state.name}
													onChange={this.handleChangeInput('name')}
													name="name"
													placeholder="Your company name"
													InputProps={{
														endAdornment: (
															<InputAdornment position="end" style={{ color: 'gray' }}>
																<EditIcon>edit</EditIcon>
															</InputAdornment>
														),
													}}
												/>
											</Col>
										</Row>
					
										<Row style={{ marginTop: 16 }}>
											<Col xs={4} md={4} style={{ textAlign: 'right' }}>
												<Label>Address: </Label>
											</Col>
											<Col xs={8} md={8} style={{ textAlign: 'left' }}>
												<TextField
													className={classes.longTextField}
													value={this.state.address}
													onChange={this.handleChangeInput('address')}
													name="address"
													placeholder="Your company address"
													InputProps={{
														endAdornment: (
															<InputAdornment position="end" style={{ color: 'gray' }}>
																<EditIcon>edit</EditIcon>
															</InputAdornment>
														),
													}}
												/>
											</Col>
										</Row>
					
										<Row style={{ marginTop: 16 }}>
											<Col xs={4} md={4} style={{ textAlign: 'right' }}>
												<Label>Industry: </Label>
											</Col>
											<Col xs={8} md={8} style={{ textAlign: 'left' }}>
												<TextField
													className={classes.longTextField}
													value={this.state.industry}
													onChange={this.handleChangeInput('industry')}
													name="industry"
													placeholder="E - Commerce"
													InputProps={{
														endAdornment: (
															<InputAdornment position="end" style={{ color: 'gray' }}>
																<EditIcon>edit</EditIcon>
															</InputAdornment>
														),
													}}
												/>
											</Col>
										</Row>
					
										<Row style={{ marginTop: 16 }}>
											<Col xs={4} md={4} style={{ textAlign: 'right' }}>
												<Label>Company Logo: </Label>
											</Col>
											<Col xs={8} md={8} style={{ textAlign: 'left' }}>
												<TextField
													className={classes.textField}
													value={this.state.name}
													onChange={this.handleChangeInput('name')}
													name="name"
													placeholder="Frontend Developer"
													InputProps={{
														endAdornment: (
															<InputAdornment position="end" style={{ color: 'gray' }}>
																<EditIcon>edit</EditIcon>
															</InputAdornment>
														),
												}}
												/>
											</Col>
										</Row>
					
										<Row style={{ marginTop: 16 }}>
											<Col xs={4} md={4} style={{ textAlign: 'right' }}>
												<Label>No. of Employees: </Label>
											</Col>
											<Col xs={8} md={8} style={{ textAlign: 'left' }}>
												<TextField
													className={classes.textField}
													value={this.state.number_of_employee}
													onChange={this.handleChangeInput('number_of_employee')}
													name="number_of_employee"
													placeholder="50-150"
													InputProps={{
														endAdornment: (
															<InputAdornment position="end" style={{ color: 'gray' }}>
																<EditIcon>edit</EditIcon>
															</InputAdornment>
														),
													}}
												/>
											</Col>
										</Row>
					
										<Row style={{ marginTop: 16 }}>
											<Col xs={4} md={4} style={{ textAlign: 'right' }}>
												<Label>Website: </Label>
											</Col>
											<Col xs={8} md={8} style={{ textAlign: 'left' }}>
												<TextField
													className={classes.textField}
													value={this.state.website}
													onChange={this.handleChangeInput('website')}
													name="website"
													placeholder="http://company-name.com"
													InputProps={{
														endAdornment: (
															<InputAdornment position="end" style={{ color: 'gray' }}>
																<EditIcon>edit</EditIcon>
															</InputAdornment>
														),
													}}
												/>
											</Col>
										</Row>

										<Row style={{ marginTop: 16 }}>
											<Col xs={4} md={4} style={{ textAlign: 'right' }}>
												<Label>Facebook: </Label>
											</Col>
											<Col xs={8} md={8} style={{ textAlign: 'left' }}>
												<TextField
													className={classes.textField}
													value={this.state.facebook}
													onChange={this.handleChangeInput('facebook')}
													name="facebook"
													placeholder="www.facebook.com/username"
													InputProps={{
														endAdornment: (
															<InputAdornment position="end" style={{ color: 'gray' }}>
																<EditIcon>edit</EditIcon>
															</InputAdornment>
														),
													}}
												/>
											</Col>
										</Row>

										<Row style={{ marginTop: 16 }}>
											<Col xs={4} md={4} style={{ textAlign: 'right' }}>
												<Label>Instagram: </Label>
											</Col>
											<Col xs={8} md={8} style={{ textAlign: 'left' }}>
												<TextField
													className={classes.textField}
													value={this.state.instagram}
													onChange={this.handleChangeInput('instagram')}
													name="instagram"
													placeholder="www.instagram.com/username"
													InputProps={{
														endAdornment: (
															<InputAdornment position="end" style={{ color: 'gray' }}>
																<EditIcon>edit</EditIcon>
															</InputAdornment>
														),
													}}
												/>
											</Col>
										</Row>

										<Row style={{ marginTop: 16 }}>
											<Col xs={4} md={4} style={{ textAlign: 'right' }}>
												<Label>Shart Description of Company: </Label>
											</Col>
											<Col xs={8} md={8} style={{ textAlign: 'left' }}>
												<TextField
													fullWidth
													name="description"
													value={this.state.instagram}
													onChange={this.handleChangeInput('description')}
													placeholder="Describe your company"
													style={{ fontSize: 16 }}
													multiline
													rows="6"
													variant="outlined"
												/>
												<div>{description ? description.length : 0}/300 characters remaining</div>
											</Col>
										</Row>
									</FormContainer>
								</Paper>
							</TabContainer>

							<TabContainer>
								<Paper className={classes.paper}>
									<Typography className={classes.typography} variant="h5" component="h3">
										Benefits
									</Typography>
									<FormContainer>
										<Row style={{ marginTop: 16 }}>
											<Col xs={4} md={4} style={{ textAlign: 'right' }}></Col>
											<Col xs={8} md={8} style={{ textAlign: 'left' }}>
												<div style={{ fontSize: 22, color: '#000', marginBottom: 22 }}>Perks and Benefits</div>
												<div style={{ display: 'flex' }}>
													<TextField
														className={classes.shortTextField}
														value={this.state.benefits}
														onChange={this.handleChangeInput('benefits')}
														name="benefits"
														placeholder="Benefits"
													/>
													<span style={{ margin: '13px 22px 0 0' }}> : </span>
													<TextField
														className={classes.shortTextField}
														value={this.state.minBenefit}
														onChange={this.handleChangeInput('minBenefit')}
														name="minBenefit"
														placeholder="min"
													/>
													<span style={{ margin: '13px 22px 0 22px' }}> - </span>
													<TextField
														className={classes.shortTextField}
														value={this.state.maxBenefit}
														onChange={this.handleChangeInput('maxBenefit')}
														name="maxBenefit"
														placeholder="max"
													/>
												</div>
												<div style={{ fontSize: 22, color: '#000', margin: '22px 0' }}>Why we so good?</div>
												<TextField
													fullWidth
													name="description"
													onChange={this.handleChangeInput('description')}
													placeholder="Highlight the point that people would like to work at your company"
													style={{ fontSize: 16 }}
													multiline
													rows="6"
													variant="outlined"
												/>
											</Col>
										</Row>
									</FormContainer>
								</Paper>
							</TabContainer>

							<TabContainer>
								<Paper className={classes.paper}>
									<Typography className={classes.typography} variant="h5" component="h3">
										Culture
									</Typography>
									<FormContainer>
										<Row style={{ marginTop: 16 }}>
											<Col xs={12} md={12} style={{ textAlign: 'center' }}>
												<Typography
													className={classes.topTypography}
													variant="subtitle1"
													color="textPrimary"
												>
													Upload up to three pictures to show your company culture: {"  "}
													<Button 
														size="small" 
														variant="outlined" 
														component="span" 
														className={classes.button}
														onClick={this.toggleUploadImage}
													>
														Upload
	  											</Button>
													<ModalUploadImage
														isOpenModal={dialogUploadImage}
														onCloseModal={this.toggleUploadImage}
														onImageUpload={this.getImage}
													/>
												</Typography>
											</Col>
										</Row>
										<Row style={{ marginTop: 50 }}>
											{this.renderImage()}
										</Row>
									</FormContainer>
								</Paper>
							</TabContainer>
						</FormContainer>
					}
					{activeTab === 1 &&
						<TabContainer>
							<Paper className={classes.paper}>
							<Billing />
							</Paper>
						</TabContainer>
					}
					{activeTab === 2 && <TabContainer>Classified</TabContainer>}
					{activeTab === 3 && <TabContainer>Headhunting</TabContainer>}
					{activeTab === 4 && this.renderIntegrationContent()}
				</Container>
			</DashboardLayout>
		);
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
	{
		requestTwitterToken,
		requestTwitterAccessToken,
	}, dispatch);
};

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(Settings)
);