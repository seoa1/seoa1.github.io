import { blogs } from '../blogPosts';

export function load({ params }) {
	const blog = blogs.find((blog) => blog.slug === params.slug);

	return {
		blog
	};
}
