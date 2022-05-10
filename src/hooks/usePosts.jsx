
import { useMemo } from "react";
import { sort } from "./../sort";



const useSortedPosts = (posts, selectSort) => {
	const sortedPosts = useMemo(() => {
		if (selectSort !== "") {
			return sort({ selectSort, posts });
		}
		return posts;
	}, [selectSort, posts]);

	return sortedPosts;
};


export const usePosts = ({posts, selectSort, searchForm}) => {
	const sortedPosts = useSortedPosts(posts,selectSort);

    const searchedAndSortedPosts = useMemo(() => {
            return sortedPosts.filter((post) =>
              post.title.toLowerCase().includes(searchForm.toLowerCase())
            );
          }, [searchForm, sortedPosts]);

	return searchedAndSortedPosts;
};