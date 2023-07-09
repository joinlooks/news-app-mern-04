import { useEffect, useRef, useState } from "react";
import NewsPage from "./components/NewsPage";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const sidebarRef = useRef(null);
	const [allNews, setAllNews] = useState([]);
	const [category, setCategory] = useState("general");

	async function bringNews(category) {
		// business
		// entertainment
		// general
		// health
		// science
		// sports
		// technology

		const url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
		try {
			const response = await (await fetch(url)).json();
			setAllNews(response.articles);
			// console.log(response.articles);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		bringNews(category);
	}, [category]);

	return (
		<>
			<div
				ref={sidebarRef}
				className="bg-gradient-to-r from-blue-50 to-blue-200 relative"
			>
				{!isSidebarOpen ? (
					<>
						<Topbar
							setSidebarOpen={setSidebarOpen}
							isSidebarOpen={isSidebarOpen}
							category={category}
							setCategory={setCategory}
						/>
						<NewsPage allNews={allNews} />
					</>
				) : (
					<Sidebar
						sidebarRef={sidebarRef}
						isSidebarOpen={isSidebarOpen}
						setSidebarOpen={setSidebarOpen}
						category={category}
						setCategory={setCategory}
					/>
				)}
			</div>
		</>
	);
}

export default App;
