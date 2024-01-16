import clsx from "clsx";
import React from "react";

const MenuCategories = () => {
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
		<div className="flex gap-2 mt-5 flex-wrap w-full">
			{data.map((item, i) => (
				<div key={i} className={clsx("rounded-lg max-w-fit px-3 py-1 text-gray-700 font-semibold text-sm", item.bgColor)}>
					{item.name}
				</div>
			))}
		</div>
	);
};

export default MenuCategories;
