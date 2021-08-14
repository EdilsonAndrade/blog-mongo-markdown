import React from 'react';
import {Link} from 'react-router-dom';

import {Container, Content,} from './styles';
export default function Header() {

  return (
    <Container>
      <Content>
        <nav>
          <Link to='/'>POSTS</Link>
        </nav>

        <aside>
            <Link to="/admin">ADMIN</Link>
        </aside>
      </Content>
    </Container>
  );
}