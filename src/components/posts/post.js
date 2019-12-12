import React from 'react';
import {PostContainer, PostTitle} from './styles';

const Post = ({posts}) => {
    return(
        <div>
            {posts.map(({data}) =>
                <PostContainer>
                    <PostTitle href={data.url} rel="noopener" target="_blank">{data.title}</PostTitle>
                    <hr />
                    <p>{data.selftext}</p>
                    <hr />
                    <p>By {data.author}</p>
                </PostContainer>
            )}
        </div>
    );
}

export default Post;
