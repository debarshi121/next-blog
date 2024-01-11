import React from "react";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
	return (
		<div className="flex py-5">
			<div className="flex gap-1 text-xl flex-1">
				<FaFacebookSquare />
				<FaInstagramSquare />
				<FaLinkedin />
				<FaTwitterSquare />
			</div>
			<div className="text-2xl flex-1 flex justify-center font-bold">NextBlog</div>
			<div className="flex-1 flex gap-3">
				<ThemeToggle />
				<Link href={"/"}>Home</Link>
				<Link href={"/"}>Contact</Link>
				<Link href={"/"}>About</Link>
				<AuthLinks />
			</div>
		</div>
	);
};

export default Navbar;
