import React from "react";
import {FaMoon} from "react-icons/fa";
import {IoMdSunny} from "react-icons/io";

const ThemeToggle = () => {
	return (
		<div className="bg-gray-900 w-12 h-6 rounded-3xl flex cursor-pointer items-center justify-between relative">
			<FaMoon className="text-white w-3 h-3 ml-1" />
			<div className="w-4 h-4 bg-white rounded-full absolute left-1"></div>
			<IoMdSunny className="text-yellow-500 w-4 h-4 mr-1" />
		</div>
	);
};

export default ThemeToggle;
