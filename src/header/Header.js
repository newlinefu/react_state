import React from 'react';
import './header.css';
import Logo from './Logo';
import NavHeader from './NavHeader';
import Subscribe from './Subscribe';

export default class Header extends React.Component{
	constructor(props) {
		super(props);
		this.state = {header: 'normal'};
	}
	
	componentDidMount() {
		this.timerCounter = setInterval(this.setState.bind(this, (state, props) => {
				return state.header === 'normal' ? {header: 'subscribe'} : {header: 'normal'};
			}), 3000);
	}

	componentWillUnmount() {
		clearInterval(this.timerCounter);
	}

	render() {
		if(this.state.header === 'normal')
			return (
				<header className = 'header'>
					<Logo logoText = 'MyFirstApp'></Logo>
					<NavHeader navItems = { ['Home', 'Contacts', 'Products', 'Help'] }></NavHeader>
				</header>
			);
		else 
			return (
				<header className = 'header'>
					<Subscribe></Subscribe>
				</header>
			);
	}
}