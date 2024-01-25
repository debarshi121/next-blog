import {getCategories} from "@/services/category.service";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const CategoryList = async () => {
	const data = await getCategories();
	const bgClass = ["bg-red-100", "bg-blue-100", "bg-yellow-100", "bg-lime-100"];
	return (
		<div className="mt-10">
			<h3 className="text-2xl font-bold">Popular Categories</h3>
			<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
				{data.map((item, i) => (
					<div key={item.title} className={clsx("rounded-lg flex items-center justify-center py-3 gap-2", bgClass[i])}>
						<Image src={`/categories/${item.img}`} width={50} height={50} alt={item.title} className="rounded-full w-8 h-8 border"></Image>
						<span className="font-semibold text-sm dark:text-gray-700">{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
