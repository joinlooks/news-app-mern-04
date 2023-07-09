import { useEffect, useRef, useState } from "react";
import NewsPage from "./components/NewsPage";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const sidebarRef = useRef(null);

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
						/>
						<NewsPage />
					</>
				) : (
					<Sidebar
						sidebarRef={sidebarRef}
						isSidebarOpen={isSidebarOpen}
						setSidebarOpen={setSidebarOpen}
					/>
				)}
			</div>
		</>
	);
}

export default App;
