import NewsCard from "./NewsCard";

function NewsPage({ allNews }) {
	return (
		<>
			<div className="max-w-6xl xl:mx-auto pt-10 sm:grid lg:grid-cols-3 md:grid-cols-2 mx-5 gap-5 flex flex-col pb-14">
				{allNews &&
					allNews.map((news, index) => <NewsCard key={index} news={news} />)}
			</div>
		</>
	);
}

export default NewsPage;
