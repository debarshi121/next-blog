import React from "react";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="flex flex-col md:flex-row mt-10 py-5 gap-10">
			<div className="flex-1 flex flex-col gap-5">
				<h2 className="font-bold text-2xl">NextBlog</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam, delectus modi ut corrupti magnam cupiditate consequuntur autem quos id repudiandae dignissimos quia, ex iste architecto minus? Dolore, quasi inventore.</p>
				<div className="flex gap-1 text-xl flex-1">
					<FaFacebookSquare />
					<FaInstagramSquare />
					<FaLinkedin />
					<FaTwitterSquare />
				</div>
			</div>
			<div className="w-4/12 flex gap-10">
				<div className="flex-1 flex flex-col">
					<h4 className="font-bold">Links</h4>
					<ul className="text-sm flex flex-col gap-1 mt-5">
						<li>Home</li>
						<li>Blogs</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="flex-1">
					<h4 className="font-bold">Tags</h4>
					<ul className="text-sm flex flex-col gap-1 mt-5">
						<li>Home</li>
						<li>Blogs</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="flex-1">
					<h4 className="font-bold">Social</h4>
					<ul className="text-sm flex flex-col gap-1 mt-5">
						<li>Home</li>
						<li>Blogs</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
