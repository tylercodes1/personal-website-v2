import Link from "next/link";

export const TKLink = ({ href = "", key = "", name }) => {
	// internal
	if (href.includes(process.env.DOMAIN))
		return (
			<Link href={href} key={key}>
				{name}
			</Link>
		);

	// external
	return (
		<a target="_blank" rel="noreferrer" href={href} key={key}>
			{name}
		</a>
	);
};
