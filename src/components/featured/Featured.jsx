import Image from "next/image";
import React from "react";

const Featured = () => {
	return (
		<div className="mt-10">
			<h1 className="text-6xl font-bold">Hey, welcome to NextBlog!</h1>
			<h3 className="text-4xl font-normal mt-3">Discover some finely crafted stories & blogs for you.</h3>
			<div className="flex flex-col md:flex-row mt-10 gap-5">
				<div className="flex-1">
					<Image src="/1.webp" width={500} height={500} alt="" className="w-full"></Image>
				</div>
				<div className="flex-1">
					<h2 className="font-semibold text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, rem nesciunt!</h2>
					<p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea expedita ratione enim pariatur, quod dolorem, tenetur reprehenderit soluta, iste sunt distinctio. Expedita veniam commodi nisi doloribus voluptatibus adipisci perferendis.</p>
				</div>
			</div>
		</div>
	);
};

export default Featured;
