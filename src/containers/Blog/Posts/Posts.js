import React,{ Component} from "react";
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';
import { Link ,Route} from "react-router-dom";
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

    state = {
        posts :[],
       // idSelected : null,
        //error : false
    }



    componentDidMount () {
        console.log(this.props);
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
          //this.setState({idSelected : id});

        // navigating progrzmmztically 
       this.props.history.push('/posts/' +id);
      // this.props.history.push({pathname : '/posts/'+id});
    }


    render () {

        let posts = <p style={{textAlign:'center', color:'red'}}> something is wrong !</p>
        if(!this.state.error){
            posts = this.state.posts.map(
                post => 
                     (
                        /*  <Link to={'/posts' + post.id} key={post.id}>  */
                             <Post title={post.title} author={post.author  } key={post.id}
                             clicked={()=>{this.postClickedHandler(post.id)}} />
                      /*    </Link>  */
                    )            
            );
      
        }

        return (
        
        <div>
            <section className="Posts">
                {posts}
            </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}  />
        </div>
       

        );
    }
}

export default Posts;