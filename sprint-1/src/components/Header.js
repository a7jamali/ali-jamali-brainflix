import React from "react";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import Avatar from "../assets/Photos/Mohan-muruge.jpg";
import Upload from "../assets/Icons/SVG/Icon-upload.svg";
export default function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<img
					src={Logo}
					className="header__logo-image"
					alt="brainflix logo"
				/>
			</div>
			<div className="header__nav">
				<input
					type="search"
					placeholder="Search"
					className="header__bar"
				></input>
				<button className="header__button" type="button">
					<img className="header__button-icon" src={Upload} alt="upload" />
					Upload
				</button>
				<img src={Avatar} alt="avatar" className="header__avatar" />
			</div>
		</header>
	);
}