/**
 * Created by mahesh on 5/12/18.
 */
import React, { Component } from 'react';
import './Clockin.css';
import sha256 from 'crypto-js/sha256';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Clockin extends Component {
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
            <div className="well" style={wellStyles}>
                <Button bsStyle="primary" bsSize="large" block>
                    Clock in
    </Button>
                <Button bsSize="large" block>
                    Clock out
    </Button>
            </div>

        );
    }

    handleChange = (e) => {
        const { target } = e;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
        this.generateHash();
    };

    generateHash = () => {
        let hash = this.state.client_public_key + this.state.org_public_key + this.state.timestamp.toString();
        const new_hash = sha256(hash).toString();
        this.setState({ hash: new_hash });
    }
}

export default Clockin;


const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
/*
const buttonsInstance = (
  <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block>
      Block level button
    </Button>
    <Button bsSize="large" block>
      Block level button
    </Button>
  </div>
);

render(buttonsInstance);
*/