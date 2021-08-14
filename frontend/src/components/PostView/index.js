import React from 'react';
import ReactMarkdown  from 'react-markdown';
import { Container, TitleContent, Title } from './styles';
import { usePost } from '../../hooks/PostProvider';
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math'
const PostView = () => {

     
    const { post } = usePost();
 
    const renderPost = () =>{
       
        return (
        <Container>
            <TitleContent>
                <Title>
                    {post.title}
                </Title>
            </TitleContent>
            <ReactMarkdown 
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeRaw]} 
            children={post.content} />
        </Container>
        );

    }
  return (
      post ? renderPost() : null
      
  )
}

export default PostView

