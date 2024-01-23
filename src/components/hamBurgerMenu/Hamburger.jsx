"use client";

import React, {useState} from "react";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

const Humburger = () => {
	const [open, setOpen] = useState(false);
	const {status} = useSession();
	return (
		<div className="flex-1 flex justify-end items-center lg:hidden">
			<IoMdMenu onClick={() => setOpen(true)} className="w-8 h-8 block lg:hidden" />

			{open && (
				<div className="flex-1 flex p-5 items-center flex-col gap-5 lg:hidden w-full fixed min-h-screen inset-0 bg-white dark:bg-gray-900">
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
							<Link href={"/"}>Login</Link>
						</>
					)}
					<IoMdClose onClick={() => setOpen(false)} className="absolute right-3 top-3.5 h-8 w-8" />
				</div>
			)}
		</div>
	);
};

export default Humburger;
