import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({item}) => {
	return (
		<div className="flex gap-10">
			<div className="flex-1">
				<Image src="/1.webp" alt="" width={500} height={500} className="w-full rounded"></Image>
			</div>
			<div className="flex-1 flex flex-col gap-3">
				<div>
					<span>12 Jan, 2024 - </span>
					<span className="text-red-400">{}</span>
				</div>
				<Link href="/">
					<h2 className="font-medium text-xl">{item.title}</h2>
				</Link>
				<p>{item.desc}</p>
				<button className="border-b max-w-fit border-red-300 text-sm">Read More</button>
			</div>
		</div>
	);
};

export default Card;
