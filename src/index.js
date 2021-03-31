import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-type'] = 'application/json';



//var requestInterceptor = 
axios.interceptors.request.use(
    request => {
        //console.log(request);
        // edit the request config 
        return request;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

// for removing request interceptor 
   //axios.interceptors.request.reject(requestInterceptor);

//var responseInterseptor = 
axios.interceptors.response.use(
    response => {
       // console.log(response);
        // edit the request config 
        return response;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

// for removing response interceptor 
   //axios.interceptors.response.reject(responseInterseptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
