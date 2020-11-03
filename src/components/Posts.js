import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import PropTypes from "prop-types";

class Posts extends PureComponent {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.props.posts.map(item => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
