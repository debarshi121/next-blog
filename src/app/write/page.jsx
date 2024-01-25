"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, {useState} from "react";
import {FaImage, FaUpload} from "react-icons/fa";
import {FaPlus} from "react-icons/fa6";
import {MdOutlineOndemandVideo} from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WritePage = () => {
	const {status} = useSession();
	const router = useRouter();
    const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	useEffect(() => {
		if (status === "authenticated") {
			router.push("/");
		}
	}, [status, router]);

	if (status === "loading") return <div>Loading...</div>;


	return (
		<div className="flex flex-col gap-5 mt-10">
			<input type="text" className="border border-gray-300 rounded py-2 px-3" placeholder="Your awesome title here!" />
			<div className="flex gap-5 mt-5">
				<button onClick={() => setOpen(!open)} className="w-8 h-8 rounded-full border-2 cursor-pointer border-gray-400">
					<FaPlus className="mx-auto my-auto w-5 h-5 text-gray-400" />
				</button>
				{open && (
					<div className="flex gap-5">
						<button className="w-8 h-8 rounded-full border-2 cursor-pointer border-green-500">
							<FaImage className="mx-auto my-auto w-4 h-4 text-green-500" />
						</button>
						<button className="w-8 h-8 rounded-full border-2 cursor-pointer border-green-500">
							<FaUpload className="mx-auto my-auto w-4 h-4 text-green-500" />
						</button>
						<button className="w-8 h-8 rounded-full border-2 cursor-pointer border-green-500">
							<MdOutlineOndemandVideo className="mx-auto my-auto w-4 h-4 text-green-500" />
						</button>
					</div>
				)}
			</div>
			<ReactQuill theme="snow" className="h-80" value={value} onChange={setValue} placeholder="Write your story here..." />
		</div>
	);
};

export default WritePage;
