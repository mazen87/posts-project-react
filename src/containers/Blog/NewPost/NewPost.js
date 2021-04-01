import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';
import { Redirect } from 'react-router';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted : null
    }

    addPostHandler = () => {
            const postToAdd = {
                title: this.state.title,
                content : this.state.title,
                author: this.state.author
            }

            if(postToAdd.title && postToAdd.content){
                axios.post('/posts',postToAdd)
                .then(response =>{
                        console.log('post was added successfully ! ');
                        console.log(response);
                        this.setState({submitted:true});
                });
            };

    };

    render () {
        let submitted = null;
        if(this.state.submitted){
            submitted=<Redirect  to="/posts" />
        }
        return (
            <div className="NewPost">
                {submitted}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.addPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;