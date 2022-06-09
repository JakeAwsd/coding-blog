import React from 'react';
import CommentBox from '../components/comments/comment-box';

export default class BlogPage extends React.Component {
  render() {
    return (
        <div>
          <div className="cell">
            <article className="article">
              <h1 className="article-title">Coding BlogPage</h1>
              <div className="article-body">
                <p>
                add text here
                </p>
                <blockquote>
                add quote here
                </blockquote>
                <p>
                  add text here

                </p>
              </div>
            </article>
          </div>

          {/* Load the component CommentBox with the required prop apiUrl */}
          <CommentBox apiUrl="api/blog/comments.json" />
        </div>
    )
  }
}