import React, { Component } from 'react';
import Header from './Header';
import './Posts.css';

export default class Posts extends Component {

    // how to invoke posts action creator from here?
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            post: { title: "" },
            loading: false
        };

        console.log('posts props', this.props);

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    componentWillMount() {
        this.setState({ loading: true });
        this.props.loadPosts().then(posts => (
            this.setState({ loading: false })
        )).catch(error => {
            alert('Error', error);
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('willReceiveProps', nextProps);
    }

    onTitleChange(event) {
        const post = this.state.post;
        post.title = event.target.value;
        this.setState({ post: post });
    }

    onClickSave() {
        console.log('posts this.props', this.props);
        this.props.actions.createPost(this.state.post);
    }

    postRow(post, index) {
        return (
            <tr key={index}>
                <td>{ post.title }</td>
                <td>Author</td>
                <td>
                    <span>Action</span>
                </td>
            </tr>
        )
    }

    postsTable() {
        return (
            <div>
                <form>
                    <label>New Post</label>
                    <input 
                        type="text"
                        value={this.state.post.title}
                        onChange={this.onTitleChange} />

                    <input 
                        type="submit"
                        value="Save"
                        onClick={this.onClickSave} />
                </form>
                <div className="content">
                    <table className="posts">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.posts.map((post, index) => (
                                this.postRow(post, index)
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Header page="Posts" />
                { 
                    this.state.loading ?
                        <div>Loading</div> :
                        this.postsTable()
                }
                
            </div>
        )
    }
}