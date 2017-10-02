import React from 'react';
import PropTypes from 'prop-types';

import Pusher from 'pusher-js';
import slugify from 'slugify';
import randomAnimal from 'random-animal-name-generator';

import MessageList from './MessageList';
import './style.css';

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      message: '',
      messages: []
    }

    this.user = randomAnimal();
  }

  componentWillMount() {
    this.pusher = new Pusher('YOUR PUSHER APP ID', {
      authEndpoint: 'YOUR AUTH SERVER ENDPOINT',
      cluster: 'YOUR APP CLUSTER',
      encrypted: true
    });

    var channel = 'private-' + slugify(this.props.title);
    this.post_channel = this.pusher.subscribe(channel);
  }

  componentDidMount() {
    this.post_channel.bind('client-on-message', (message) => {
      message.time = new Date(message.time);
      this.setState({
        messages: this.state.messages.concat(message)
      });
    });
  }

  handleChange(e) {
    var message = e.target.value;
    this.setState({
      message: message
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let text = this.state.message;
    let message = {
      by: this.user,
      body: text,
      time: new Date()
    };
    
    this.post_channel.trigger('client-on-message', message);
    this.setState({
      message: '',
      messages: this.state.messages.concat(message)
    });
  }

  render() {  
    return (
      <div className="chatbox">
        <div className="post-single">
          
          <div className="post-single__inner">
            <h1>Chat Component</h1>
            <form onSubmit={this.onSubmit}>
              <input type="text" className="text-input" placeholder="Type your message here.." 
                value={this.state.message} 
                onChange={this.handleChange} />
             </form>
              {
                this.state.messages &&
                <MessageList messages={this.state.messages} />
              }
          </div>

        </div>
      </div>
    );
  }

}

Chat.propTypes = {
  title: PropTypes.string.isRequired
};

export default Chat;
