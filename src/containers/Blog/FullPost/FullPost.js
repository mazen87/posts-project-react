import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }
    componentDidMount () {
        if(this.props.match.params.id){

            axios.get('/posts/'+ this.props.match.params.id)
            .then(response => {
                if(!this.state.post  ||(this.state.post !== null && this.state.post.id !== response.data.id) ){
                   
                        this.setState({post:response.data});
                        //console.log(response);
                
                   
                };
             
            });
       };
    }

    deletePostHandler = () =>{
   
        if(this.props.idPost){
            axios.delete('/posts/'+this.props.idPost)
            .then(response =>{
               // console.log(response);
            });
        };
    }

    render () {
        const idPost = this.props.idPost;
        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
        if(this.props.idPost){
            post =<p style={{textAlign:"center"}}>loading.....</p>;
        }
        if(this.state.post){

            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
       
        return post;
    }
}

export default FullPost;