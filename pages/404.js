import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 5000);
	}, []);

	return (
		<div>
			<h3>Oops you're on the wrong page...</h3>
			Go to <Link href="/">Homepage</Link>
			<p>We're redirecting you to Homepage in a few seconds...</p>
		</div>
	);
};

export default NotFound;
