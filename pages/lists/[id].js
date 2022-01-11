import { useRouter } from "next/router";

export default function ListItem({ testItem }) {
	const router = useRouter();
	const { id } = router.query;
	console.log(process.env.REACT_APP_HOSTNAME);
	console.log(process.env);
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
		paths: [{ params: { id: "test" } }],
		fallback: "blocking",
	};
}

export async function getStaticProps({ params }) {
	const req = await fetch(
		`http://${process.env.REACT_APP_HOSTNAME}/${params.id}.json`
	);

	let data;
	try {
		data = await req.json();
	} catch (e) {
		data = "";
	}

	if (!data)
		return {
			notFound: true,
		};

	return {
		props: {
			id: "test",
			color: "green",
			image: "https://i1.wp.com/cutetropolis.com/wp-content/uploads/1364158346_these_funny_animals_1168_640_23.jpg?ssl=1",
		},
	};
}
