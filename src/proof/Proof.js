/**
 * Created by thomas on 5/12/18.
 */
import React, { Component } from 'react';
import './Proof.css';
import sha256 from 'crypto-js/sha256';

class Proof extends Component {
	state = {
		client_public_key: '',
		org_public_key: '',
		timestamp: '',
		proof_id: '',
		hash: ''
	};
	render() {
		const props = this.state;
		return (
			<div>
				<div className="form-wrapper">
					<form className="step-2-form" onSubmit={this.submit}>
						<input type="text" name="client_public_key" placeholder="Public key" value={props.client_public_key}  onChange={this.handleChange} />
						<input type="text" name="org_public_key" placeholder="Organization key" value={props.org_public_key}  onChange={this.handleChange} />
						<input type="date" name="timestamp" value={props.timestamp}  onChange={this.handleChange} />
						{/*<input type="date" name="firstName" placeholder="First Name" value={Time.now()} onChange={this.handleChange} />*/}
						<button type="submit">Submit</button>
					</form>
				</div>
				<div className="info-wrapper">
					<p className="proof-info">
						Hash : {props.hash}
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
	 let hash = this.state.client_public_key + this.state.org_public_key + this.state.timestamp.toString();
   const new_hash = sha256(hash).toString();
	 this.setState({hash: new_hash});
	}
}

export default Proof;
