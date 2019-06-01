import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { routes } from './constants/routes';
import './App.css';

const Routes = () => (
	<div style = {{ display: 'flex' }}>
		<div style = {{ padding: '10px', width: '20%', background: '#f0f0f0' }}>
			<ul style = {{ listStyleType: 'none', padding: 0 }}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/components">Components</Link></li>
			</ul>
		</div>

			<div style = {{ flex: 1, padding: '10px' }}>
				{ routes.map ((route, index) => (
					<Route
						key = { index }
						path = { route.path }
						exact = { route.exact }
						component = { route.main }
					/>
				))}
			</div>
	</div>
);

export default Routes;
