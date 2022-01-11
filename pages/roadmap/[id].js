import { useRouter } from "next/router";

export default function RoadmapItem() {
	const router = useRouter();
	const { name } = router.query;
	console.log(name);
	return <div>{name}</div>;
}
