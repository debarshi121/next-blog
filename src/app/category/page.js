import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";

const page = () => {
	return (
		<div className="mt-10">
			<h1 className="text-xl font-semibold bg-red-400 text-white px-5 py-2 rounded-3xl max-w-fit">Coding</h1>
			<div className="flex gap-10 mt-10">
				<CardList />
				<Menu />
			</div>
		</div>
	);
};

export default page;
