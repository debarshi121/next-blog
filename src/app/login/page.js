"use client";

import React, {useEffect} from "react";
import {FaFacebook, FaGithub, FaGoogle} from "react-icons/fa";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const Login = () => {
	const {status} = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "authenticated") {
			router.push("/");
		}
	}, [status, router]);

	if (status === "loading") return <div>Loading...</div>;

	if (status === "unauthenticated") {
		return (
			<div className="flex flex-col justify-center items-center my-20">
				<div className="bg-white shadow-lg p-12 w-full md:w-6/12 lg:w-4/12 dark:bg-gray-800 rounded">
					<div className="text-center w-full font-bold text-3xl text-gray-600 dark:text-gray-200">LOGIN</div>

					<div className="w-full flex flex-col gap-5 mt-5">
						<button className="bg-red-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-red-600 duration-100 ease-in-out">
							<FaGoogle />
							Sign-in with Google
						</button>
						<button className="bg-blue-600 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-700 duration-100 ease-in-out">
							<FaFacebook />
							Sign-in with Facebook
						</button>
						<button onClick={() => signIn("github")} className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-gray-800 duration-100 ease-in-out">
							<FaGithub />
							Sign-in with Github
						</button>
					</div>
				</div>
			</div>
		);
	}
};

export default Login;
