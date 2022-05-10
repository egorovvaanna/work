import { Fragment } from "react";
import { PostItem } from "./PostItem";

export const Posts = ({ posts }) => {
  return (
    <Fragment>
      {posts.map((post) => (
        <PostItem
          title={post.title}
          body={post.body}
          author={post.author}
          id={post.id}
          date={post.date}
          key={post.id}
        />
      ))}
    </Fragment>
  );
};
