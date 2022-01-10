import { useRouter } from "next/router";

export default function ListItem({ testItem }) {
	const router = useRouter();
	const { id } = router.query;
	console.log(testItem);
	return (
		<>
			<h1>hello {id}</h1>
			<div>{testItem}</div>
			{/* <img src={testItem.image}></img> */}
		</>
	);
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { id: "testy" } }],
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	console.log(params);
	const req = await fetch(`http://localhost:3000/test.json`);
	const data = await req.json();
	console.log(data);
	return {
		props: {
			id: "test",
			color: "green",
			image: "https://i1.wp.com/cutetropolis.com/wp-content/uploads/1364158346_these_funny_animals_1168_640_23.jpg?ssl=1",
		},
	};
}
