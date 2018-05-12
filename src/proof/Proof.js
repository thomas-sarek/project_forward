/**
 * Created by thomas on 5/12/18.
 */
import React, { Component } from 'react';
import './Proof.css';

class Proof extends Component {
	render() {
		return (
			<div>
				<div className="form-wrapper">
					<form className="step-2-form" onSubmit={this.submit}>
						<input type="datetime" name="firstName" placeholder="First Name"  onChange={this.handleChange} />
						{/*<input type="date" name="firstName" placeholder="First Name" value={Time.now()} onChange={this.handleChange} />*/}
						<button type="submit" hidden>Submit</button>
					</form>
				</div>
				<div className="info-wrapper">
					<p className="proof-info">
						To get started, select a date and time for
					</p>
				</div>
			</div>
			
		);
	}
	
	handleChange = (e) => {
		const {target} = e;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		
		this.setState({[name]: value});
	};
	
}

export default Proof;
