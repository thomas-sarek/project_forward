import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Proof from './proof/Proof';
import Clockin from './clockin/Clockin';
import registerServiceWorker from './registerServiceWorker';

class Root extends React.Component {
	constructor(){
		super();
	}
	
	render() {
		// const {login, logout, isLoggedIn, isAuthorized, addMessage} = this;
		// const {splashMessage} = this.state;
		return (
			<BrowserRouter>
				<div className="page">
					
					<Switch>
						<Route exact path="/" component={App} />
						{/*<Route exact path="/onboarding" component={ClientOnBoarding} />*/}
						<Route path='/proof' component={Proof} />
						<Route path='/clockin' component={Clockin} />
						{/*<PublicRoute exact path="/login" authed={isLoggedIn()}*/}
						             {/*component={Login} componentProps={{login, role: 'admin'}} />*/}
						
						{/*<PrivateRoute exact path='/logout' authed={isLoggedIn()}*/}
						              {/*component={Logout} componentProps={{logout}} />*/}
						
						{/*<Route component={NotFound}/>*/}
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
	
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
