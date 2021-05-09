import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
		<ul className="nav nav-tabs p-2">
			<li className="nav-item">
				<Link
					to="/"
					className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
				>
					<i className="fas fa-home"></i> About
				</Link>
			</li>

			<li className="nav-item">
				<Link
					to="/discover"
					className={
						location.pathname === '/discover' ? 'nav-link active' : 'nav-link'
					}
				>
					<i className="fas fa-compass"></i> Discover
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/search"
					className={
						location.pathname === '/search' ? 'nav-link active' : 'nav-link'
					}
				>
					<i className="fas fa-search"></i> Search
				</Link>
			</li>
		</ul>
	);
}

export default NavTabs;
