import React, { Component } from 'react';
import {Route, Link , NavLink, Switch , Redirect} from 'react-router-dom';

//import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
//import NewPost from './NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';



class Blog extends Component {
  
    render () {
      
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink  
                                    exact to="/posts"
                                    activeClassName="active" 
                                    activeStyle={{
                                        color:'red'
                                    }}
                           >   
                            Home      
                            </NavLink></li>
                            <li><NavLink to={{
                                //pathname: this.props.match.url + '/new-post',  path relative 
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit-true',
                                
                            }}> New post </NavLink></li>
                        </ul>
                    </nav>
                </header>
             {/*    <Route path="/"  exact render={() =><h1>home</h1>} />
                <Route path="/new-post" exact  render={() => <h1>home2</h1>} />   */}
                <Switch>
                  
                    <Route path="/new-post" exact component={NewPost}  /> 
                   
                    <Route path="/posts"  component={Posts}  />  
                    <Redirect  from="/" to="/posts"/>
                    {/* <Route path="/" component={Posts} />  */}
                  {/*   <Route path="/:id" exact component={FullPost}  /> */}
                </Switch>
               {/*  <section>
                    <FullPost  idPost={this.state.idSelected} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;