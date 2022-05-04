import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Tyler Kim - Full Stack Web Developer 2022</title>
				<meta
					name="description"
					content="My name is Tyler Kim. I'm a full stack web developer with 1 year of experience. I'm currently at Blue Nile, and I love furthering my craft. I can also help you build a website from the ground up."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Hi, I&apos;m Tyler,
					<br /> but you can call me any time!
				</h1>
			</main>
		</div>
	);
}
