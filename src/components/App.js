import React, { Component } from 'react';
import axios from 'axios';

import '../stylesheets/App.scss';
import Button from './Button';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			songs: [],
		};
	}

	componentDidMount() {
		axios
			.get('https://s3.us-west-1.amazonaws.com/coding-exercise/songs')
			.then(({ data }) => this.setState({ songs: data }));
	}

	render() {
		console.log('this.state.songs :', this.state.songs);

		return (
			<div className="App">
				<header className="App-header">
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<button className="btn" onClick={() => alert('I am globally styled')}>
						I am button 1 - Press Me
					</button>
					<Button />
				</header>
			</div>
		);
	}
}

export default App;
