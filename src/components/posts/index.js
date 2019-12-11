import React from 'react';
import Post from './post';

const Posts = ({data}) => {
    console.log(data[2]);
    return(
        <section>
            <Post posts={data[2]} />
        </section>
    )
};

export default Posts;
