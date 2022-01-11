import Head from "next/head";

export default function Lists(props) {
	console.log(props, props.id, props.color, props.image);
	return (
		<>
			<Head>
				<title>
					{props.id} {props.color}
				</title>
			</Head>
			<div>lists</div>
			{/* <div>{props}</div> */}
			<div>{props.id}</div>
			<div>{props.color}</div>
			<div>{props.image}</div>
		</>
	);
}
export async function getStaticProps({ params }) {
	console.log(`http://${process.env.REACT_APP_HOSTNAME}/test.json`);
	const req = await fetch(
		`http://${process.env.REACT_APP_HOSTNAME}/test.json`
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
