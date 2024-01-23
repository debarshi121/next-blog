"use client";

import React from "react";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import Hamburger from "../hamBurgerMenu/Hamburger";
import {signOut, useSession} from "next-auth/react";

const Navbar = () => {
	const {status} = useSession();
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
				{status === "authenticated" ? (
					<>
						<Link href={"/write"}>Write</Link>
						<span className="cursor-pointer" onClick={() => signOut()}>
							Logout
						</span>
					</>
				) : (
					<>
						<Link href={"/login"}>Login</Link>
					</>
				)}
			</div>
			<Hamburger />
		</div>
	);
};

export default Navbar;
