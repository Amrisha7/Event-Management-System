import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [event, setEvent] = useState('');

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our website EasyHost, an all-around Event Manager!",
      trigger: "AskName"
    },
    {
      id: "AskName",
      message: "Please enter your name",
      trigger: "GetName"
    },
    {
      id: "GetName",
      user: true,
      trigger: "NameConfirm"
    },
    {
      id: "NameConfirm",
      message: "Great! Nice to meet you, {previousValue}!",
      trigger: "AskEmail"
    },
    {
      id: "AskEmail",
      message: "Could you please provide your email address?",
      trigger: "GetEmail"
    },
    {
      id: "GetEmail",
      user: true,
      trigger: "EmailConfirm"
    },
    {
      id: "EmailConfirm",
      message: "Thank you, {previousValue}! We will use this email to send you event updates and reminders.",
      trigger: "AskEvent"
    },
    {
      id: "AskEvent",
      message: "Which event are you interested in?",
      trigger: "GetEvent"
    },
    {
      id: "GetEvent",
      user: true,
      trigger: "EventConfirm"
    },
    {
      id: "EventConfirm",
      message: "Great! We have noted your interest in {previousValue}. We will keep you updated about it.",
      trigger: "AskMore"
    },
    {
      id: "AskMore",
      message: "Is there anything else you would like to know or ask?",
      trigger: "GetMore"
    },
    {
      id: "GetMore",
      user: true,
      trigger: "MoreConfirm"
    },
    {
      id: "MoreConfirm",
      message: "Thank you for your question/interest, {previousValue}. We will get back to you soon.",
      end: true
    }
  ];

  return (
    <div>
      <Segment>
        <ChatBot 
          steps={steps} 
          handleEnd={() => {}} // Prevent chatbot from closing automatically
          userDelay={500} // Delay between user's input
        />
      </Segment>
    </div>
  );
}

export default App;
