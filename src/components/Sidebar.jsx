import { useEffect } from "react";

function Sidebar({ sidebarRef, setSidebarOpen }) {
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

	return (
		<>
			<ul
				ref={sidebarRef}
				// className="h-screen w-min flex flex-col pt-14 gap-3 px-10 bg-gray-900 text-blue-50 text-xl"
				className={`h-screen w-min flex flex-col pt-14 gap-3 px-10 bg-gray-900 text-blue-50 text-xl transition-transform transition-duration-1000 transform ${
					setSidebarOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<li>All</li>
				<li>National</li>
				<li>International</li>
				<li>Business</li>
				<li>Science</li>
				<li>Sports</li>
				<li>Technology</li>
				<li>World</li>
				<li>Startups</li>
				<li>Politics</li>
				<li>Automobile</li>
				<li>Entertainment</li>
			</ul>
		</>
	);
}

export default Sidebar;
