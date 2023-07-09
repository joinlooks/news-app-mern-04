function Topbar({ isSidebarOpen, setSidebarOpen, category, setCategory }) {
	function toggleSidebar() {
		setSidebarOpen(isSidebarOpen === true ? false : true);
		console.log("clicked");
	}

	function capitalizeFirstLetter(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	return (
		<>
			<nav className="sticky w-full sm:h-20 h-16 top-0 left-0 flex justify-start lg:justify-center items-center bg-gradient-to-r from-blue-50/90 to-blue-300/10 bg-opacity-80 gap-5 text-blue-950 p-4 drop-shadow-lg z-10 backdrop-filter backdrop-blur-lg">
				<button
					onClick={toggleSidebar}
					className="lg:hidden hover:bg-gradient-to-r from-blue-50/90 to-blue-300/10 p-1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
				<h1 className="text-4xl flex hover:text-blue-900 cursor-pointer">
					<div className="lg:block hidden">BriefIt&nbsp;</div>{" "}
					{capitalizeFirstLetter(category)}
				</h1>
				<ul className="hidden lg:flex justify-center items-center gap-3 text-xl overflow-x-auto">
					<li
						className="hover:text-blue-900 cursor-pointer"
						onClick={() => setCategory("general")}
					>
						<button>General</button>
					</li>
					<li
						className="hover:text-blue-900 cursor-pointer"
						onClick={() => setCategory("health")}
					>
						<button>Health</button>
					</li>
					<li
						className="hover:text-blue-900 cursor-pointer"
						onClick={() => setCategory("science")}
					>
						<button>Science</button>
					</li>
					<li
						className="hover:text-blue-900 cursor-pointer"
						onClick={() => setCategory("business")}
					>
						<button>Business</button>
					</li>
					<li
						className="hover:text-blue-900 cursor-pointer"
						onClick={() => setCategory("sports")}
					>
						<button>Sports</button>
					</li>
					<li
						className="hover:text-blue-900 cursor-pointer"
						onClick={() => setCategory("technology")}
					>
						<button>Technology</button>
					</li>
					<li
						className="hover:text-blue-900 cursor-pointer"
						onClick={() => setCategory("entertainment")}
					>
						<button>Entertainment</button>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Topbar;
