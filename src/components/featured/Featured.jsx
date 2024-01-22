import Image from "next/image";
import React from "react";

const Featured = () => {
	return (
		<div className="mt-10">
			<h1 className="text-5xl font-semibold">Hey, welcome to NextBlog!</h1>
			<h3 className="text-3xl font-normal mt-3">Discover some finely crafted stories & blogs for you.</h3>
			<div className="flex flex-col lg:flex-row mt-10 gap-5">
				<div className="flex-1">
					<Image src="/1.webp" width={600} height={400} alt="" className="w-full rounded"></Image>
				</div>
				<div className="flex-1">
					<h2 className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, rem nesciunt!</h2>
					<p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea expedita ratione enim pariatur, quod dolorem, tenetur reprehenderit soluta, iste sunt distinctio. Expedita veniam commodi nisi doloribus voluptatibus adipisci perferendis.</p>
					<button className="bg-gray-200 rounded px-3 py-2 mt-3 font-medium dark:text-gray-800">Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
