import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/posts";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const input = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(input);
  };

  render() {
    return (
      <div>
        <h3>Create post</h3>
        <form onSubmit={this.onSubmit}>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <br />
          <br />
          <label>Body:</label>
          <br />
          <textarea
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.onChange}
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
