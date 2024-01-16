import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = ({displayImage}) => {
	return (
		<section className="mt-5 flex flex-col gap-5">
			{Array.from({length: 5}).map((item, i) => (
				<div key={i} className="flex gap-3 items-center">
					{displayImage && <Image src="/3.webp" width={50} height={50} alt="" className="rounded-full w-14 h-14 border-2 dark:border-gray-700"></Image>}
					<div className="gap-1 flex-1 flex flex-col">
						<div className="bg-red-400 text-white rounded-xl max-w-fit px-2 text-sm">Travel</div>
						<Link href="/">
							<h3 className="font-semibold">Advice From a Software Engineer With 8 Years of Experience</h3>
						</Link>
						<div className="text-sm">
							<span className="font-semibold">John Doe </span>
							<span> - 10 Jan, 2024</span>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default MenuPosts;
