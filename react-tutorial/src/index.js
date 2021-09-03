import React from 'react';
import ReactDOM from 'react-dom';

import Lesson from './18_router/Lesson'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './18_router/components/home/home';
import Contacts from './18_router/components/contacts/contacts';
import Posts from './18_router/components/posts/posts';
import Post from './18_router/components/post/post'
import Error from './18_router/components/error/error'


ReactDOM.render((
  <BrowserRouter>
    <Lesson>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route exact path='/posts' component={Posts} />
        <Route  path='/posts/:id' component={Post} />
        <Route  path='*' component={Error} />
      </Switch>
    </Lesson>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
