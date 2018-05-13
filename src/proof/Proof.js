import React, { Component } from 'react';
import './Proof.css';
import sha256 from 'crypto-js/sha256';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';


class Proof extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			// value: '',
			client_public_key: '',
			org_public_key: '',
			timestamp: '',
			proof_id: '',
			hash: ''
		};
	}

	// getValidationState() {
	// 	const length = this.state.value.length;
	// 	if (length > 10) return 'success';
	// 	else if (length > 5) return 'warning';
	// 	else if (length > 0) return 'error';
	// 	return null;
	// }

	// handleChange(e) {
	// 	this.setState({ value: e.target.value });
	// }

	handleChange = (e) => {
		const {target} = e;
		const value = target.value;
		const name = target.name;
		this.setState({[name]: value});
		this.generateHash();
	};
	
	generateHash = () => {
	 let hash = this.state.client_public_key + this.state.org_public_key + this.state.timestamp.toString();
   const new_hash = sha256(hash).toString();
	 this.setState({hash: new_hash});
	}
	render() {
		const props = this.state;
		return (
			<form>
				<FormGroup
					controlId="formBasicText"
					// validationState={this.getValidationState()}
				>
					<ControlLabel>Working example with validation</ControlLabel>
					<FormControl
						type="text"
						name="client_public_key"
						value={props.client_public_key}
						placeholder="Public key"
						onChange={this.handleChange}
					/>
					<FormControl
						type="text"
						name="org_public_key"
						value={this.state.org_public_key}
						placeholder="Organization key"
						onChange={this.handleChange}
					/>
					<FormControl
						type="date"
						name="timestamp"
						value={this.state.timestamp}
						placeholder="Enter text"
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
					<HelpBlock>Validation is based on string length.</HelpBlock>
				</FormGroup>
				<div className="info-wrapper">
					<p className="proof-info">
						Hash : {props.hash}
					</p>
				</div>
			</form>




		);
	}
}
export default Proof;
