import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
	return (
		<div className="flex gap-10">
			<div className="flex-1">
				<Image src="/2.webp" alt="" width={500} height={500} className="w-full rounded"></Image>
			</div>
			<div className="flex-1 flex flex-col gap-3">
				<div>
					<span>12 Jan, 2024 - </span>
					<span className="text-red-400">CODING</span>
				</div>
				<Link href="/">
					<h2 className="font-medium text-xl">Advice From a Software Engineer With 8 Years of Experience</h2>
				</Link>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum minima nam corrupti est...</p>
				<button className="border-b max-w-fit border-red-300 text-sm">Read More</button>
			</div>
		</div>
	);
};

export default Card;
