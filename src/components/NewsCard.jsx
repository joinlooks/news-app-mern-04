function NewsCard({ news }) {
	const { author, content, description, title, url, urlToImage } = news;

	return (
		<>
			<div className="bg-gradient-to-r from-white to-blue-50 p-4 drop-shadow-xl rounded-lg">
				<img
					className="h-52 w-full object-cover mb-2 rounded-lg drop-shadow-md"
					src={urlToImage}
					alt="Not available"
				/>
				<h1 className="text-3xl text-blue-950">{title ? title : "No title"}</h1>
				<div className="text-blue-700 font-extrabold my-1">
					by {author ? author : "Unknown"}
				</div>
				<p className="text-blue-800 text-lg leading-snug">
					{description ? description : "Description not available"}
				</p>
				<p className="text-blue-800 text-lg leading-snug">
					{content ? content : "Content not available"}
				</p>
			</div>
		</>
	);
}

export default NewsCard;
