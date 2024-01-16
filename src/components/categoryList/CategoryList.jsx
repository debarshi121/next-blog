import clsx from "clsx";
import Image from "next/image";
import React from "react";

const CategoryList = () => {
	const data = [
		{
			imgSrc: "/categories/coding.jpg",
			name: "Coding",
			bgColor: "bg-blue-100",
		},
		{
			imgSrc: "/categories/fashion.png",
			name: "Fashion",
			bgColor: "bg-green-100",
		},
		{
			imgSrc: "/categories/tour.jpg",
			name: "Tour",
			bgColor: "bg-red-100",
		},
		{
			imgSrc: "/categories/coding.jpg",
			name: "Food",
			bgColor: "bg-yellow-100",
		},
		{
			imgSrc: "/categories/fashion.png",
			name: "Festival",
			bgColor: "bg-indigo-100",
		},
		{
			imgSrc: "/categories/tour.jpg",
			name: "Finance",
			bgColor: "bg-lime-100",
		},
	];
	return (
		<div className="mt-10">
			<h3 className="text-2xl font-bold">Popular Categories</h3>
			<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
				{data.map((item) => (
					<div key={item.name} className={clsx("rounded-lg flex items-center justify-center py-3 gap-2", item.bgColor)}>
						<Image src={item.imgSrc} width={50} height={50} alt={item.name} className="rounded-full w-8 h-8 border"></Image>
						<span className="font-semibold text-sm dark:text-gray-700">{item.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
