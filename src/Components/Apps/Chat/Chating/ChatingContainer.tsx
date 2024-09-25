// "use client";
// import { Card, CardBody, Col, Container, Row } from "reactstrap";
// import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
// import { Chat, ChatApp } from "@/utils/Constant";
// import UserChatting from "./UserChatting";
// import axios from "axios";
// import { useEffect } from "react";
// import { ChatApi, ChatMemberApi } from "@/Api";
// import { useAppDispatch } from "@/Redux/Hooks";
// import { setAllMembers, setChats } from "@/Redux/Reducer/ChatSlice";
// import ChatStatus from "../VideoChat/ChatStatus/ChatStatus";

// const ChatingContainer = () => {
//  const dispatch = useAppDispatch();
//   const getChatMembersData = async () => {
//     try {
//       await axios.get(ChatMemberApi).then((resp) => {
//         dispatch(setAllMembers(resp.data));
//       });
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const getChatData = async () => {
//     try {
//       await axios.get(ChatApi).then((resp) => {
//         dispatch(setChats(resp.data.data));
//       });
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     getChatData();
//     getChatMembersData();
//   }, []);
//   return (
//     <>
//       <Breadcrumbs mainTitle={ChatApp} parent={Chat} title={ChatApp} />
//       <Container fluid>
//         <Row>
//           <Col sm={12} className="call-chat-sidebar">
//             <Card>
//               <CardBody className="chat-body">
//                 <ChatStatus />
//               </CardBody>
//             </Card>
//           </Col>
//           <Col className="call-chat-body">
//             <Card>
//               <CardBody className="p-0">
//                 <UserChatting />
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default ChatingContainer;
// components/ChatingContainer.tsx

"use client";

import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Container, Row } from 'reactstrap';


interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatingContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  
  // Pre-built messages array
  const preBuiltMessages = [
    "Hello, how can I help you?",
    "What services do you offer?",
    "Tell me more about your company.",
    "Can I schedule an appointment?",
    "What are your operating hours?"
  ];

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || input;
    if (!text.trim()) return;

    // Add user message to the chat
    const userMessage: Message = { text, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    const jsonResponse = {
      "contents": [
        {
          "parts": [
            {
              "text": text
            }
          ]
        }
      ]
    };

    // Fetch response from the Google Gemini API
    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDsTtTJxbnWa-smdMyrnrUt86Hlp1bgNfE',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jsonResponse),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const botMessage: Message = {
          text: data.candidates[0].content.parts[0].text,
          sender: 'bot',
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        throw new Error('Failed to fetch bot response');
      }
    } catch (error) {
      console.error('Error fetching response from API:', error);
      const errorMessage: Message = {
        text: 'Error fetching response from API.',
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (

    <Container fluid> 
       <Row>
       <div className="container mt-20">
      <div className="row">
        {/* Sidebar for Pre-built Messages */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">Pre-built Messages</div>
            <div className="card-body">
              {preBuiltMessages.map((message, index) => (
                <div
                  key={index}
                  className="alert alert-info mb-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSendMessage(message)}
                >
                  {message}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Box */}
        <div className="col-md-9">
          <div className="card" style={{ height: '400px', overflowY: 'scroll' }}>
            <div className="card-body">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                >
                  <div
                    className={`alert ${msg.sender === 'user' ? 'alert-primary' : 'alert-secondary'}`}
                    style={{ maxWidth: '75%' }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button className="btn btn-primary" onClick={() => handleSendMessage()}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
    </Row>
    </Container>

  );
}
