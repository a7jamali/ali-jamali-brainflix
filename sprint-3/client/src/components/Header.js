import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import Avatar from "../assets/Photos/Mohan-muruge.jpg";
import Upload from "../assets/Icons/SVG/Icon-upload.svg";


export default class Header extends Component {
	render() {
	return (
		<header className="header">
			<Link to={`/`} className="header__logo">
				<img src={Logo} className="header__logo-image" alt="brainflix logo"/>
			</Link>
			<div className="header__nav">
				<input type="search" placeholder="Search" className="header__bar"></input>
				<Link to={`/Uploader`} className="header__search-button">
				<button className="header__button" type="button">
					<img className="header__button-icon" src={Upload} alt="upload" />
					Upload
				</button>
				</Link>
				<img src={Avatar} alt="avatar" className="header__avatar" />
			</div>
		</header>
	);
}}