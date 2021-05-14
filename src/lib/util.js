const slugRegex = /([\w-]+)\.(jpg|png)/i;

export async function getAllPosts(globArr) {
	const postPromises = [];

	for (let [path, resolver] of Object.entries(globArr)) {
		const match = path.match(slugRegex);

		if (!match || !match[1]) continue;

		// const slug = match[1];
        const slug = match[0];
		const promise = resolver().then((post) => [
			slug,
            {
                post
            }
		]);
		postPromises.push(promise);
	}

	return Promise.all(postPromises);
}

