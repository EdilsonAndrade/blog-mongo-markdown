import React, {useState, useEffect} from 'react';
import { Container, LoadingContent, EditionContainer, Category, Title , CalendarArea, Content, SaveButton, Error} from './styles';
import { useHistory } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { usePost } from '../../hooks/PostProvider';
import { savePost } from '../../utils/api.js'
import ReactLoading from 'react-loading';

function PostEditor() {
  const [isFetching, setIsFetching] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Technology')
  const [error,setError] = useState(false);
  const [id,setId] = useState(null);
  const [date, setDate] = useState(new Date());
  const history = useHistory();

  const { post } = usePost();

  useEffect(()=>{
    
    if(post){
      setTitle(post.title);
      setContent(post.content);
      setCategory(post.category.name);
      setId(post._id);
      if(post.created_at){
        setDate(new Date(post.created_at));
      }
    }
  },[post])

 
  const handleSavePost =async () =>{
   
    setError(false);
    if(title.length <=0 || content.length <=0){
      setError(true);
    }else{
      setIsFetching(true);
      await savePost('/api/posts/create', {
        title,
        content,
        category,
        id,
        date
      });
      

      setTitle('');
      setContent('');
      setDate(new Date());
      history.push('/admin/list');
    }

   
      
  }

  return (
    isFetching ?
    <LoadingContent >
    <ReactLoading color="#ff7" height={'10%'} width={'10%'} /> 
  </LoadingContent>
  :
    <Container>
      <EditionContainer >
       <p>Category</p>
        <Category 
          value={category}
          onChange={(e)=>setCategory(e.target.value)} >
          <option>Technology</option>
          <option>Travel</option>
          <option>Car</option>
          <option>Sport</option>
        </Category>
        <p>Title</p>
        <Title 
          value={title}
          error={error}
          placeholder="Title"  
          onChange={(e)=>setTitle(e.target.value)} 
        />
        <p>Markdown Content</p>
        <Content
          value={content}
          error={error}
          onChange={(e)=>setContent(e.target.value)}
        ></Content>
        <SaveButton 
          onClick={handleSavePost}
        > 
          Save
        </SaveButton>
        {error ? <Error>All fields are required!</Error> :null}
      
    </EditionContainer>
    <CalendarArea>
        <p>Creation Date</p>
        <Calendar
        value={date}
        onChange={setDate}
        defaultValue={date}
        />
        </CalendarArea>
    </Container>
    
  )
}

export default PostEditor;