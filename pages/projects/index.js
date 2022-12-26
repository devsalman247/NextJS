export async function getStaticProps() {
	const data = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await data.json();
	return {
		props: { posts },
	};
}

const Projects = ({ posts }) => {
	return (
		<>
			<div>
				You can see my projects here <br />
				For testing i'm displaying fake posts data for now...
			</div>
			{posts.slice(0, 9).map((post) => (
				<div>
					<h3>userId: {post.userId}</h3> <br />
					postId: {post.id} <br />
					title: {post.title}
				</div>
			))}
		</>
	);
};

export default Projects;
