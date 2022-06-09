import React from 'react';
import CommentBox from '../components/comments/comment-box';

export default class PicturePage extends React.Component {
  render() {
    return (
        <div>
          <div className="cell">
            <article className="article article--picture">
              <div className="article--picture-author">
                Picture by <strong>@morganmccircuit</strong>
              </div>

              <div className="article--picture-img">
                <img src="https://cdn.mos.cms.futurecdn.net/9QTpESGBXa32D29J77VR3d-1024-80.jpg.webp" alt="" />
              </div>
            </article>
          </div>

          {/* Load the component CommentBox with the required prop apiUrl */}
          <CommentBox apiUrl="api/pictures/comments.json" />
        </div>
    )
  }
}