import React from "react";

import Link from "next/link";

import "./Nav.scss";

export default function Nav({ links = [] }) {
	return (
		<nav>
			{links.map((e, i) => (
				<Link href={e.link} key={e + i}>
					{e.name}
				</Link>
			))}
		</nav>
	);
}
