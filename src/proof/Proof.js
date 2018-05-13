/**
 * Created by thomas on 5/12/18.
 */
import React, { Component } from 'react';
import './Proof.css';
import sha256 from 'crypto-js/sha256';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';


class Proof extends Component {
	state = {
		client_public_key: '',
		org_public_key: '',
		timestamp: '',
		proof_id: '',
		hash: '',
		proof: ''
	};
	render() {
		const props = this.state;
		return (
			<div>
				<div className="form-wrapper">
					<form className="step-2-form" onSubmit={this.sendHash}>
						<FormGroup
							controlId="formBasicText"
							// validationState={this.getValidationState()}
						>
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
						{/*<input type="text" name="client_public_key" placeholder="Public key" value={props.client_public_key}  onChange={this.handleChange} />*/}
						{/*<input type="text" name="org_public_key" placeholder="Organization key" value={props.org_public_key}  onChange={this.handleChange} />*/}
						{/*<input type="date" name="timestamp" value={props.timestamp} onChange={this.handleChange} />*/}
						<button type="submit">Send to chainpoint</button>
					</form>
				</div>
				<div className="info-wrapper">
					<p className="proof-info">
						Hash : {this.state.hash}
						Proof : {this.state.proof}
					</p>
				</div>
			</div>
			
		);
	}
	
	handleChange = (e) => {
		const {target} = e;
		const value = target.value;
		const name = target.name;
		this.setState({[name]: value});
		this.generateHash();
	};
	
	generateHash = () => {
	 // let date = this.state.timestamp.toLocaleDateString();
	 let proof = this.state.client_public_key + " " +  this.state.org_public_key + " " + this.state.timestamp.toString();
   const new_hash = sha256(proof).toString();
		
		this.setState({hash: new_hash,proof: proof});
	}
	sendHash = () => {
		chainpointClient.submitHashes(this.state.hash);
	}
}

export default Proof;


// async function runIt (hash) {
// 	// A few sample SHA-256 proofs to anchor
// 	// let hashes = ['1d2a9e92b561440e8d27a21eed114f7018105db00262af7d7087f7dea9986b0a',
// 	// 	'2d2a9e92b561440e8d27a21eed114f7018105db00262af7d7087f7dea9986b0a',
// 	// 	'3d2a9e92b561440e8d27a21eed114f7018105db00262af7d7087f7dea9986b0a']
// 	let hashes = [hash];
//
// 	// Submit each hash to three randomly selected Nodes
// 	let proofHandles = await chp.submitHashes(hashes)
// 	console.log("Submitted Proof Objects: Expand objects below to inspect.")
// 	console.log(proofHandles)
//
// 	// Wait for Calendar proofs to be available
// 	console.log("Sleeping 12 seconds to wait for proofs to generate...")
// 	await new Promise(resolve => setTimeout(resolve, 12000))
//
// 	// Retrieve a Calendar proof for each hash that was submitted
// 	let proofs = await chp.getProofs(proofHandles)
// 	console.log("Proof Objects: Expand objects below to inspect.")
// 	console.log(proofs)
//
// 	// Verify every anchor in every Calendar proof
// 	let verifiedProofs = await chp.verifyProofs(proofs)
// 	console.log("Verified Proof Objects: Expand objects below to inspect.")
// 	console.log(verifiedProofs)
// }