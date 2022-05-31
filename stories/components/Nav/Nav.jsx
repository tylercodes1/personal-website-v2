import "./Nav.scss";
import { TKLink } from "../TkLink/TKLink";

export default function Nav({ links = [] }) {
	return (
		<nav>
			{links.map((e, i) => (
				<TKLink href={e.link} key={e + i} name={e.name} />
			))}
		</nav>
	);
}
