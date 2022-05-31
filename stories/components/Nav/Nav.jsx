import { TKLink } from "../TkLink/TKLink";

import styles from "./Nav.module.scss";

export default function Nav({ links = [] }) {
	return (
		<nav className={styles.nav}>
			{links.map((e, i) => (
				<TKLink href={e.link} key={e + i} name={e.name} />
			))}
		</nav>
	);
}
