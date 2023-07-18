import { blogs } from './blogPosts';

export function load() {
	return {
		summaries: blogs.map((blog) => ({
			slug: blog.slug,
			title: blog.title
		}))
	};
}
