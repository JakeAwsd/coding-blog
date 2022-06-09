import React from 'react';
import CommentBox from '../components/comments/comment-box';

export default class ResourcePage extends React.Component {
  render() {
    return (
        <div>
          <div className="cell">
          <article className="article">
              <h1 className="article-title">Coding Resources</h1>
              <div className="article-body"></div>
              {/* resource pages to help w/ coding */}
              <p>
                CodeAcademy- Online Interactive Platform offering Free Coding Classes
              </p>
              <Button href="#">https://www.codecademy.com/</Button> <Button type="submit">View More</Button>{' '}
              <p>
                GeeksforGeeks- Tutorial Coding Site including Quizzes and Algorithm
              </p>
              <Button href="#">https://www.geeksforgeeks.org/</Button> <Button type="submit">View More</Button>{' '}
              <p>
                W3Schools- Freemium Educational Website for Learning Coding Online
              </p>
              <Button href="#">https://www.w3schools.com/</Button> <Button type="submit">View More</Button>{' '}
              {/* front end websites to help design your page */}
              <p>
                CodePen- Build, Test, and Discover Front End Code
              </p>
              <Button href="#">https://codepen.io/</Button> <Button type="submit">View More</Button>{' '}
              <p>
                Coolors- Color Palattes Generator    
              </p>
              <Button href="#">https://coolors.co/</Button> <Button type="submit">View More</Button>{' '}
              <p>
                FontSpace- 93,000+ Free Fonts
              </p>
              <Button href="#">fontspace.com</Button> <Button type="submit">View More</Button>{' '}
              {/* sites to help with coding errors, etc */}
              <p>
                Stack Overflow- Question and Answer Website for Professional and Enthusiast Programmers!
              </p>
              <Button href="#">https://stackoverflow.com/</Button> <Button type="submit">View More</Button>{' '}
              <p>
                MDN Web Docs- Documentation Repository and Learning Resource for Web Developers
              </p>
              <Button href="#">https://mdn.dev/</Button> <Button type="submit">View More</Button>{' '}


            
              </article>
          </div>

          {/* Load the component CommentBox with the required prop apiUrl */}
          <CommentBox apiUrl="api/resources/comments.json" />
        </div>
    )
  }
}