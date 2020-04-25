import React from 'react';

export default function NavHeader(props) {
	return (
		<nav className="navigation_header">
			{!props.navItem &&
			props.navItems.map( item => <a href="#s" className="header_nav_item" key={item}>{item}</a>)}
		</nav>
	);
}