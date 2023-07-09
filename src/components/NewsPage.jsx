import { useEffect } from "react";
import NewsCard from "./NewsCard";

const url = `https://inshorts-news.vercel.app`;

function NewsPage() {
	useEffect(() => {}, []);

	return (
		<>
			<div className="max-w-6xl xl:mx-auto pt-10 sm:grid lg:grid-cols-3 md:grid-cols-2 mx-5 gap-5 flex flex-col pb-14">
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</div>
		</>
	);
}

export default NewsPage;
