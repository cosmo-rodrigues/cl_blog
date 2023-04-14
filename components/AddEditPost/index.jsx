import React, { useState } from 'react'
import { Container } from './styles'
import { Input, InputTextContent, RowRight, SubTitle, Title } from '../../style/globalStyles'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux';


export default function AddEditPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");

  const [isEdit, setIsedit] = useState(false);
  const [id, setId] = useState(null);

  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();

  const handleAddPost = () => {
    dispatch(addPost({ id: posts.length + 1 , title, description }))
    setTitle("")
    setDescription("")
  }

  return (
    <Container>
      <Title>What’s on your mind?</Title>

      <SubTitle>TItle</SubTitle>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Hello world'
      />

      <SubTitle>Content</SubTitle>
      <InputTextContent
        value={description}
        placeholder='Content here'
        onChange={(e) => setDescription(e.target.value)}
      />

      <RowRight>
        {/* <div className={`d-flex`}>
          <Button title='Cancel' color='white-btn' />
        </div> */}
        <Button 
          title='Enter' 
          color='blue'
          onClick={() => {handleAddPost()}}
         />

 
         {/* {posts.length > 0 ? posts.map(post => <div key={post.id}>
          <p>{post.title}</p>
          <button onClick={() => {
            setIsedit(true)
            setId(post.id)}
          }>Edit</button>
          
          <button onClick={() => dispatch(deletePost(post.id))}>del</button>
          </div>
         ):'nothing here'} */}
      
      </RowRight>
    </Container>
  )
}
