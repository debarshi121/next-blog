"use client";

import {useRouter} from "next/navigation";
import React from "react";

const Pagination = ({page, hasPrev, hasNext}) => {
	const router = useRouter();
	return (
		<div className="flex justify-between mt-10">
			<button className="bg-red-500 rounded text-white max-w-fit px-3 py-1 disabled:bg-red-700" disabled={!hasPrev} onClick={() => router.push(`?page=${page - 1}`)}>
				Previous
			</button>
			<button className="bg-red-500 rounded text-white max-w-fit px-3 py-1 disabled:bg-red-700" disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
