import React from 'react';
import {Routes, Route} from 'react-router-dom';

import BlogPage from '../pages/blog';
import PicturePage from '../pages/picture';

import HelloWorld from '../pages/helloworld';

export default class Main extends React.Component {
  render() {
    return (
        <main>
          <Routes>

            <Route exact path="/" component={BlogPage} />
            <Route path="/picture" component={PicturePage} />
            <Route path="/helloworld" component={HelloWorld}/>
          </Routes>
        </main>
    )
  }
}
