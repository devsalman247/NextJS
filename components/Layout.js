import Link from "next/link";

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<h3>
					<Link href="/">Home</Link>
					<Link href="/projects" style={{ marginLeft: "10px" }}>
						Projects
					</Link>
					<Link href="/about" style={{ marginLeft: "10px" }}>
						About
					</Link>
				</h3>
			</header>
			{children}
			<footer style={{ marginTop: "10px" }}>
				<small>@Copyright 2022</small>
			</footer>
		</>
	);
};

export default Layout;
