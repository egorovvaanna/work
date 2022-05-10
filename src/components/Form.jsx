import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./../store/todoSlice";
import{ useInput} from './../hooks/useInput';
import styled from "styled-components";

export const FormModal = ({ visibleModal, setVisibleModal }) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({ title: "", body: "", author: "" });
  const [varning, setVarning] = useState(false);
  const title = useInput('h', true)
  const author = useInput('h', true)
  const inputRef = useRef();

  console.log(author);
  useEffect(() => {
    if (visibleModal === true) inputRef.current.focus();
  }, [visibleModal]);

  const handleClick = (e) => {
    e.preventDefault();

    if ( post.title === "" || post.author === "" ) {
      setVisibleModal(true);
      setVarning("Enter all required fields")
      return;
    }
    dispatch(addPost({ ...post }));
    setPost({ title: "", body: "", author: "" });
    setVisibleModal(false);
    setVarning(false);
  };

  return (
    <Form>
      {title.error && <span style={{ color: 'red'}}>{title.error}</span>}
      <Input ref={inputRef}
      {...title}
      error={title.error}
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        label="Title"
        placeholder="Title"/>


      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        label="Tetx"
        placeholder="Tetx"
      />
            {author .error && <span style={{ color: 'red'}}>{author .error}</span>}
           <Input 
        {...author}
        error={author.error}
        onChange={(e) => setPost({ ...post, author: e.target.value })}
        value={post.author}
        label="Author"
        placeholder="Author"
        /> 


      <button
        onClick={handleClick}
        className="btn">
        Send Post
      </button>
    </Form>
  );
};

const Input = styled.input`
  padding: 10px;
  color: #5b5b5b;
  background: papayawhip;
  border: none;
  outline: ${(props) => (props.error != null ? "2px solid red;" : "none")};
  border-radius: 3px;
  margin-bottom: 10px;
  min-width: 100%;
  font-size: 22px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px  #943d2c;
  }
`;

const Form = styled.form`
  color: gray;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: transparent;
`;
