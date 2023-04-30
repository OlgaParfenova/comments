import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = Date.now();
    this.props.addComment({ title, id });
    this.setState({ title: '' });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="title">
            <strong>Enter your comments below</strong>
          </label>
          <textarea
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-success btn-lg mt-2">
            SAVE
          </button>
        </div>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
