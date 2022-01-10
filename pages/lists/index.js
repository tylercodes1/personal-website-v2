export default function Lists(props) {
	console.log(props, props.id, props.color, props.image);
	return (
		<>
			<div>lists</div>
			{/* <div>{props}</div> */}
			<div>{props.id}</div>
			<div>{props.color}</div>
			<div>{props.image}</div>
		</>
	);
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
