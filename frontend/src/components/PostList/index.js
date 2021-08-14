import React, { useEffect, useState } from 'react';
import ReactMarkdown  from 'react-markdown';
import {Link, useLocation, useHistory} from 'react-router-dom';
import { Container,LoadingContent, TitleContent, Title } from './styles';
import { get, deletePost } from '../../utils/api.js'
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math'
import { usePost } from '../../hooks/PostProvider.js';
import ReactLoading from 'react-loading';
const PostList = () => {

    const [isFetching, setIsFetching] = useState(true);
    const [posts, setPosts] = useState([]);
    const [view,setView] = useState(true);
    const location = useLocation();
    const history = useHistory();
    const { handleSelectPost } = usePost();
    

    const fetchPosts = async () =>{
        const posts = await get('/api/posts');
        setPosts(posts);
        setIsFetching(false);
    }
    
    useEffect(() => {
        if(location.pathname === "/admin/list"){
            setView(false);
        }
      fetchPosts();
    }, [location.pathname ]);

    const handleNavigate = (url, data) =>{
        handleSelectPost(data);
        history.push(
            {
                pathname: url,
                
            })
    }

    const handleDelete = async (id)=>{
        setIsFetching(true);
        await deletePost(`/api/posts/${id}`);
        handleSelectPost(null);
        await fetchPosts();
      }

    const renderPosts = () =>{
        if(posts.length<=0) return <Title>No posts created</Title>;
        
        return posts.map((post)=>(
        <Container key={post._id}>
            <TitleContent>
                <span></span>
                <Title>
                    {post.title}
                </Title>
                {view ?
                    <Link
                    onClick={()=>handleNavigate(`/${post.category.name}/${post.title}`, post)}
                   
                    >
                        View
                    </Link>
                :
                    <div>
                        <Link 
                        onClick={()=>handleNavigate("/admin/edit", post)}
                    
                        >
                            Edit
                        </Link>
                        <button onClick={()=>handleDelete(post._id)}>
                            Delete
                        </button>
                    </div>
                }
                
            </TitleContent>
            <ReactMarkdown 
          
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeRaw]} children={post.content} />
        </Container>
        ));

    }
  return (
      isFetching ?
      <LoadingContent >
        <ReactLoading color="#ff7" height={'10%'} width={'10%'} /> 
      </LoadingContent> :
      renderPosts()
  )
}

export default PostList

