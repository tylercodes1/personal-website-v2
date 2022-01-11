import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Tyler Kim - Full Stack Web Developer 2022</title>
				<meta
					name="description"
					content="I'm a full stack web developer who can help you build a website from the ground up."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Hi, I&apos;m Tyler,
					<br /> But you can call me any time!
				</h1>
			</main>
		</div>
	);
}
