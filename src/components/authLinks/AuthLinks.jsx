"use client";
import Link from "next/link";
import React from "react";

const AuthLinks = () => {
	const isAuthenticated = false;
	return (
		<>
			<div>
				{!isAuthenticated ? (
					<Link href={"/login"}>Login</Link>
				) : (
					<>
						<Link href={"/write"}>Write</Link>
						<span>Logout</span>
					</>
				)}
			</div>
		</>
	);
};

export default AuthLinks;
