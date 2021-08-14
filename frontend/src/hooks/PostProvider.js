import React, {useContext, createContext, useState} from 'react';

const PostContext = createContext();

const PostProvider = ({children}) =>{
    const [post, setPost] = useState(null);

    const handleSelectPost = (postSelected)=>{
        setPost(postSelected);
    }

    return (
        <PostContext.Provider
        value={
            {
                post,
                handleSelectPost
            }
        }
        >
            {children}
        </PostContext.Provider>
    )

}

function usePost(){
    const context = useContext(PostContext);
    return context;
}

export {PostProvider, usePost}