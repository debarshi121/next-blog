import Image from "next/image";
import React from "react";

const Comment = () => {
	return (
		<div className="mt-10">
			<h3 className="font-semibold text-2xl">Comments</h3>
			<div className="flex gap-5 mt-5">
				<textarea placeholder="write a comment..." className="w-10/12 bg-gray-200 p-2 rounded"></textarea>
				<div>
					<button className="bg-green-700 text-white px-5 py-2 rounded max-w-fit">Post</button>
				</div>
			</div>
			<div className="mt-10 flex flex-col gap-5">
				{Array.from({length: 5}).map((item, i) => (
					<div key={i} className="flex flex-col gap-2">
						<div className="flex gap-3 items-center">
							<Image src="/1.webp" alt="" width={50} height={50} className="rounded-full h-12 w-12 border-2 dark:border-gray-700" />
							<div className="flex flex-col">
								<span className="font-semibold">John Doe</span>
								<span className="text-sm">12 Jan, 2024</span>
							</div>
						</div>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reprehenderit cumque porro quia vero rem mollitia. Laborum harum porro animi impedit non! Iusto dolorum optio repellendus, vitae culpa qui voluptates.</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Comment;
