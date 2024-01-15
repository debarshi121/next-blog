import React from "react";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import Hamburger from "../hamBurgerMenu/Hamburger";

const Navbar = () => {
	return (
		<div className="flex py-5 items-center">
			<div className="flex gap-1 text-xl flex-1">
				<FaFacebookSquare />
				<FaInstagramSquare />
				<FaLinkedin />
				<FaTwitterSquare />
			</div>
			<div className="text-2xl flex-1 flex justify-center font-bold">NextBlog</div>
			<div className="flex-1 hidden justify-end gap-3 lg:flex">
				<ThemeToggle />
				<Link href={"/"}>Home</Link>
				<Link href={"/"}>Contact</Link>
				<Link href={"/"}>About</Link>
				<AuthLinks />
			</div>
			<Hamburger />
		</div>
	);
};

export default Navbar;
