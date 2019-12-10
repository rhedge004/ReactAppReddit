import React from 'react';

const Posts = ({data}) => {
    const posts = data[2].map(post =>
      { console.log(post.data);
        return(
          <>
            <a href={post.data.url} target='_blank'><h3>{post.data.title}</h3></a>
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
