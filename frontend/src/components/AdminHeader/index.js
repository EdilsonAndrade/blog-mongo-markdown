import React from 'react';
import {Link} from 'react-router-dom';
import { usePost } from '../../hooks/PostProvider';

import {Container, Content,} from './styles';
export default function AdminHeader() {
  const { handleSelectPost } = usePost()
  return (
    <Container>
      <Content>
        <nav>
          <Link to='/admin/create'
          onClick={()=>handleSelectPost(null)}
          >Create a Post</Link>
        </nav>
        <section>
        <Link to='/admin/list'>List Post</Link>
        </section>
     
      </Content>
    </Container>
  );
}