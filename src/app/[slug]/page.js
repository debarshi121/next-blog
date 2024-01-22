import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";
import "@/app/[slug]/post.css";
import Comment from "@/components/comment/Comment";

const page = () => {
	return (
		<div className="mt-10">
			<div className="flex flex-col lg:flex-row gap-10">
				<div className="flex-1 flex flex-col gap-5 lg:gap-10">
					<h1 className="text-3xl font-semibold">Advice From a Software Engineer With 8 Years of Experience</h1>
					<div className="flex gap-3 items-center">
						<Image src="/1.webp" alt="" width={50} height={50} className="rounded-full h-12 w-12 border-2 dark:border-gray-700" />
						<div className="flex flex-col">
							<span className="font-semibold">John Doe</span>
							<span className="text-sm">12 Jan, 2024</span>
						</div>
					</div>
				</div>
				<div className="flex-1">
					<Image src="/1.webp" alt="" width={500} height={400} className="w-full rounded" />
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-10 mt-10">
				<div className="flex-1">
					<section id="content">
						<p>Hello, and welcome!</p>
						<p>My name is Benoit. I have been a software engineer for the past eight and a half years. I stayed at my previous (and first) company for seven and a half years, then I joined a new one in early 2022.</p>
						<p>This article comes from a recent self-reflection on the things I wish I had started doing earlier in my career and the things I wish I had done differently.</p>
						<p>What I am sharing here may be useful to any junior to mid-level developer who wishes to improve and progress toward the title of senior and beyond. Table of Contents</p>
						<p>My name is Benoit. I have been a software engineer for the past eight and a half years. I stayed at my previous (and first) company for seven and a half years, then I joined a new one in early 2022.</p>
						<p>This article comes from a recent self-reflection on the things I wish I had started doing earlier in my career and the things I wish I had done differently.</p>
						<p>What I am sharing here may be useful to any junior to mid-level developer who wishes to improve and progress toward the title of senior and beyond. Table of Contents</p>
					</section>
					<Comment />
				</div>
				<Menu />
			</div>
		</div>
	);
};

export default page;
