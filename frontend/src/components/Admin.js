import React from 'react';
import PostEditor from './PostEditor';
import PostList from './PostList';
import AdminHeader from './AdminHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Admin() {
  return (
    <Router>
      <AdminHeader />
      
      <Switch>
       
        <Route exact path="/admin/list">
          <PostList />
        </Route>
        <Route path="/admin/create">
          <PostEditor />
        </Route>
        <Route path="/admin/edit">
          <PostEditor />
        </Route>
      </Switch>
     
    </Router>
  );
}

export default Admin;
