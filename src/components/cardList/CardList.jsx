import React from "react";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import {getPosts} from "@/services/post.service";

const CardList = async ({page}) => {
	const {posts, count} = await getPosts(page);

	const POST_PER_PAGE = 2;

	const hasPrev = POST_PER_PAGE * (page - 1) > 0;
	const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

	return (
		<div className="w-full lg:w-8/12">
			<h1 className="text-2xl font-semibold">Recent Posts</h1>
			<div className="flex flex-col gap-10 mt-10">
				{posts.map((item) => (
					<Card item={item} key={item._id} />
				))}
			</div>
			<Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
		</div>
	);
};

export default CardList;
