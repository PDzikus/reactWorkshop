import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Post extends Component {
    
    
    render() {
        return (
            <div>
            <Header />
            To jest post o numerze {this.props.match.params.id}
            <Footer />
            </div>
        );
    }
}

export default Post;