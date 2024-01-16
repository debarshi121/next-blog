import React from "react";
import MenuPosts from "./menuPosts/MenuPosts";
import MenuCategories from "./menuCategories/MenuCategories";

const Menu = () => {
	return (
		<div className="w-full lg:w-4/12 hidden lg:block">
			<h5 className="text-gray-500 text-sm">What&apos;s hot</h5>
			<h3 className="font-semibold text-2xl">Most Popular</h3>
			<MenuPosts />
			<h5 className="text-gray-500 mt-10 text-sm">Discover by topic</h5>
			<h3 className="font-semibold text-2xl">Categories</h3>
			<MenuCategories />
			<h5 className="text-gray-500 mt-10 text-sm">Good to read</h5>
			<h3 className="font-semibold text-2xl">Editor&apos;s Pick</h3>
			<MenuPosts displayImage={true} />
		</div>
	);
};

export default Menu;
