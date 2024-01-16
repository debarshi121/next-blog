import React from "react";

const Pagination = () => {
	return (
		<div className="flex justify-between mt-10">
			<button className="bg-red-500 rounded text-white max-w-fit px-3 py-1">Previous</button>
			<button className="bg-red-500 rounded text-white max-w-fit px-3 py-1">Next</button>
		</div>
	);
};

export default Pagination;
