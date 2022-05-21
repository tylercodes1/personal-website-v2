import React from "react";

export default function Nav({ links = [] }) {
	return (
		<nav>
			Nav
			{links.map((e, i) => (
				<li key={e + i}>{e}</li>
			))}
		</nav>
	);
}
