import React,{ Component} from "react";
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';

class Posts extends Component {

    state = {
        posts :[],
        //idSelected : null,
        //error : false
    }



    componentDidMount () {
       // console.log(this.props);
        axios.get('/posts')
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
            //this.setState({error: true});
            console.log(error);
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
        <section className="Posts">
            {posts}
        </section>

        );
    }
}

export default Posts;