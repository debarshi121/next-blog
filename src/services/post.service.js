export const getPosts = async (page) => {
	const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed");
	}

	return res.json();
};
