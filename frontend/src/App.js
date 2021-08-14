import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home.js';
import PostView from './components/PostView';
import Admin from './components/Admin.js';
import Header from './components/Header';
import GlobalStyles from './styles/global';
import { PostProvider } from './hooks/PostProvider.js';

function App() {
  return (
    <PostProvider>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route 
          exact 
          path="/:category/:title"
          
        >
          <PostView />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
      <GlobalStyles />
      
    </Router>
    </PostProvider>
  );
}

export default App;
