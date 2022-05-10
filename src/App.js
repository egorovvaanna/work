import "./App.css";

import { useState, useEffect } from "react";
import { Posts } from "./components/Posts";
import { FormModal } from "./components/Form";
import { Modal } from "./components/Modal/Modal";
import { FilterPosts } from "./components/FilterPosts";
import { usePosts } from "./hooks/usePosts";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "./store/todoSlice";


function App() {
  const [selectSort, setSelectSort] = useState("");
  const [searchForm, setSearchForm] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("posts"))
      dispatch(setPosts(JSON.parse(localStorage.getItem("posts"))));
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const searchedAndSortedPosts = usePosts({ posts, selectSort, searchForm });

  return (
    <div className="App">
      <FilterPosts
        selectSort={selectSort}
        setSelectSort={setSelectSort}
        searchForm={searchForm}
        setSearchForm={setSearchForm}
        setVisibleModal={setVisibleModal}
      />
      <Posts posts={searchedAndSortedPosts} />

      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        <FormModal
          posts={searchedAndSortedPosts}
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
        />
      </Modal>
    </div>
  );
}

export default App;
