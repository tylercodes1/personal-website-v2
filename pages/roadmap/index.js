import { useRouter } from "next/router";

export default function Roadmap() {
	const router = useRouter();
	const { name } = router.query;
	return <div>Roadmap List</div>;
}
