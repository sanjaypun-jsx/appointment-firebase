import './App.css';
import Homepage from './Components/Form';
import firebase from 'firebase';
import Admin from './Components/Admin';
import Landing from './Screens/Landing';
import { StylesProvider } from '@material-ui/core';
import Header from './Components/Header';
import Docs from './Screens/Docs';
import Description from './Screens/Description';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const firebaseConfig = {
	apiKey: 'AIzaSyCWB_d_1DC4oidrGCFVlrhgJFjlLmCWt0w',
	authDomain: 'appointment-a480b.firebaseapp.com',
	databaseURL: 'https://appointment-a480b.firebaseio.com',
	projectId: 'appointment-a480b',
	storageBucket: 'appointment-a480b.appspot.com',
	messagingSenderId: '855241258733',
	appId: '1:855241258733:web:6c61c44087619e7a60fee4',
	measurementId: 'G-QG54RQ3PGZ',
};

firebase.initializeApp(firebaseConfig);

function App() {
	return (
		<div className='App' style={{ fontFamily: 'Roboto' }}>
			<StylesProvider injectFirst>
				<Router>
					<Header />
					<Switch>
						<Route path='/' exact component={Landing} />
						<Route path='/docs' component={Docs} />
						<Route path='/form' component={Description} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
}

export default App;
