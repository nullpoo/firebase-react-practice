import React from 'react';

import { MessageList } from '../components/message_list';
import { MessageSendForm } from '../components/message_send_form';
import { firebaseDb } from '../firebase';

const messagesRef = firebaseDb.ref('messages');

class MessageContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleMessageSend = this.handleMessageSend.bind(this);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    messagesRef.on('child_added', (snapshot) => {
      const message = { id: snapshot.key, ...snapshot.val() };
      this.setState({
        messages: [ ...this.state.messages, message ],
      });
    });
  }

  handleMessageSend(text) {
    messagesRef.push({
      text: text,
    });
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <MessageSendForm onSubmit={this.handleMessageSend} />
      </div>
    );
  }
}

export default MessageContainer;
