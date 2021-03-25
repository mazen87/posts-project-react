import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts :[],
        idSelected : null,
        error : false
    }
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            const transformedPosts = posts.map(
                post => {
                    return {
                        ...post,
                        author : 'MAZEN'
                    }
                }
            );
            this.setState({posts:transformedPosts})
           // console.log(response);
        }).catch(error =>{
            this.setState({error: true});
            //console.log(error);
        });
    }
    postClickedHandler = (id) => {
        this.setState({idSelected : id});
    }

    render () {
        let posts = <p style={{textAlign:'center', color:'red'}}> something is wrong !</p>
        if(!this.state.error){
            posts = this.state.posts.map(
                post => (
                    <Post key={post.id} title={post.title} author={post.author } 
                          clicked={()=>{this.postClickedHandler(post.id)}}  
                    />
                )
            );
        }
       
        return (
            <div>
                <section className="Posts">
                   {posts}
                  
                </section>
                <section>
                    <FullPost  idPost={this.state.idSelected} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;