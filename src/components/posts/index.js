import React from 'react';

const Posts = ({data}) => {
    const posts = data[2].map(post =>
      { console.log(post.data);
        return(
          <>
            <h3>{post.data.title}</h3>
            <p>{post.data.selftext}</p>
          </>
        );
      }
    );
    return(
        <div>
            {posts}
        </div>
    )
};

export default Posts;
