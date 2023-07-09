import { useEffect } from "react";

function Sidebar({ isSidebarOpen, sidebarRef, setSidebarOpen, setCategory }) {
	useEffect(() => {
		// Function to handle outside clicks
		function handleClickOutside(event) {
			if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
				setSidebarOpen(false);
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);

		// Cleanup the event listener on unmount
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function changeCategory(category) {
		setCategory(category);
		setSidebarOpen(false);
	}

	return (
		<>
			<ul
				ref={sidebarRef}
				// className="h-screen w-min flex flex-col pt-14 gap-3 px-10 bg-gray-900 text-blue-50 text-xl"
				className={`h-screen w-min flex flex-col pt-14 gap-3 px-10 bg-gray-900 text-blue-50 text-xl transition-transform transition-duration-1000 transform ${
					setSidebarOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<li className="text-4xl my-2">BriefIt</li>
				<li
					className="hover:text-blue-100 cursor-pointer"
					onClick={() => changeCategory("general")}
				>
					<button>General</button>
				</li>
				<li
					className="hover:text-blue-100 cursor-pointer"
					onClick={() => changeCategory("health")}
				>
					<button>Health</button>
				</li>
				<li
					className="hover:text-blue-100 cursor-pointer"
					onClick={() => changeCategory("science")}
				>
					<button>Science</button>
				</li>
				<li
					className="hover:text-blue-100 cursor-pointer"
					onClick={() => changeCategory("business")}
				>
					<button>Business</button>
				</li>
				<li
					className="hover:text-blue-100 cursor-pointer"
					onClick={() => changeCategory("sports")}
				>
					<button>Sports</button>
				</li>
				<li
					className="hover:text-blue-100 cursor-pointer"
					onClick={() => changeCategory("technology")}
				>
					<button>Technology</button>
				</li>
				<li
					className="hover:text-blue-100 cursor-pointer"
					onClick={() => changeCategory("entertainment")}
				>
					<button>Entertainment</button>
				</li>
			</ul>
		</>
	);
}

export default Sidebar;
