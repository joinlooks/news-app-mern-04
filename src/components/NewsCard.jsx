function NewsCard() {
	return (
		<>
			<div className="bg-gradient-to-r from-white to-blue-50 p-4 drop-shadow-xl rounded-lg">
				<img
					className="h-52 w-full object-cover mb-2 rounded-lg drop-shadow-md"
					src="https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/07_jul/6_thu/img_1688652368755_633.jpg"
					alt="Modern building architecture"
				/>
				<h1 className="text-3xl text-blue-950">
					Earth's temperature hits record high for 3rd straight day
				</h1>
				<div className="text-blue-700 font-extrabold my-1">
					by Sakshita Khosla
				</div>
				<p className="text-blue-800 text-lg leading-snug">
					Earth's average temperature hit a record high for the third day in a
					row on Wednesday (July 5), as per the University of Maine's Climate
					Reanalyzer tool. The average global temperature recorded yesterday was
					17.18°C, matching the record high set the previous day (July 4). On
					July 3, Earth's average temperature hit 17.01°C, smashing the previous
					record set in 2016.
				</p>
			</div>
		</>
	);
}

export default NewsCard;
