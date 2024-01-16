import React from "react";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const CardList = () => {
	return (
		<div className="w-full lg:w-8/12">
			<h1 className="text-2xl font-semibold">Recent Posts</h1>
			<div className="flex flex-col gap-10 mt-10">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Pagination />
		</div>
	);
};

export default CardList;
