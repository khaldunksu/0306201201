import React from 'react';
import './NewComment.scss'
class NewComment extends React.Component {
  state = {
    inputValue: '',
  };

  handleInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  onSubmit = (event) => {
    
    event.preventDefault()
    
    const { inputValue } = this.state;
    const { add } = this.props;

    add(inputValue);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <footer className="footer">
        <form className="form"onSubmit={this.onSubmit}>
          <input
            className="form_field"
            value={inputValue}
            onChange={this.handleInputValue}
          />
          <div>
          <button type="submit" className="form_button">Написать консультанту</button>
          </div>
        </form>
      </footer>
    );
  }
}

export default NewComment;
