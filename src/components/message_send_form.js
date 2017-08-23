import React from 'react';

export class MessageSendForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      text: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            value={this.state.text}
            placeholder="message"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}

export default MessageSendForm;
