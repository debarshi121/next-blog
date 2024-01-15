"use client";

import React, {useState} from "react";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";

const Humburger = () => {
	const [open, setOpen] = useState(false);
	const isAuthenticated = false;
	return (
		<div className="flex-1 flex justify-end lg:hidden">
			<IoMdMenu onClick={() => setOpen(true)} className="w-8 h-8 -mt-1 block lg:hidden" />

			{open && (
				<div className="flex-1 flex items-center flex-col gap-3 lg:hidden w-full absolute bg-white h-screen">
					<ThemeToggle />
					<Link href={"/"}>Home</Link>
					<Link href={"/"}>Contact</Link>
					<Link href={"/"}>About</Link>
					{!isAuthenticated ? (
						<Link href={"/"}>Login</Link>
					) : (
						<>
							<Link href={"/write"}>Write</Link>
							<span>Logout</span>
						</>
					)}
					<IoMdClose onClick={() => setOpen(false)} className="absolute right-3 -top-1 h-8 w-8" />
				</div>
			)}
		</div>
	);
};

export default Humburger;
