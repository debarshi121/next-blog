"use client";

import React, {useContext, useEffect, useState} from "react";
import {FaMoon} from "react-icons/fa";
import {IoMdSunny} from "react-icons/io";
import clsx from "clsx";
import {useTheme} from "next-themes";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const {resolvedTheme, setTheme} = useTheme();

	useEffect(() => setMounted(true), []);

	const toggle = () => {
		resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
	};

	if (!mounted) {
		return <div className="rounded-3xl w-12 h-6 bg-gray-100"></div>;
	} else {
		return (
			<div onClick={toggle} className={clsx("bg-gray-100 w-12 h-6 rounded-3xl flex cursor-pointer items-center justify-between border border-gray-300 relative dark:bg-gray-900")}>
				<FaMoon className="text-white w-3 h-3 ml-1" />
				<div className={clsx("w-4 h-4 bg-gray-900 rounded-full absolute dark:bg-gray-100", resolvedTheme === "dark" ? "right-1" : "left-1")}></div>
				<IoMdSunny className="text-yellow-500 w-4 h-4 mr-1" />
			</div>
		);
	}
};

export default ThemeToggle;
