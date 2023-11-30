import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar"; // Adjust the import path as necessary
import profileicon from "../../assets/profileicon.jpeg"; // Adjust the path as needed
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import "./ChatPage.css"; // Your custom CSS file for this component

function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(null); // State to store the selected user
  const [message, setMessage] = useState(""); // State to store the current message

  const handleUserClick = (userId) => {
    if (selectedUser === userId) {
      setSelectedUser(null); // Deselect if the same user is clicked again
    } else {
      setSelectedUser(userId); // Select the new user
    }
  };

  const handleSendMessage = () => {
    console.log("Message sent:", message);
    // Here you would add logic to actually send the message
    setMessage(""); // Clear the message input after sending
  };

  // Placeholder for chat users
  const users = [
    { id: 1, name: "Anonymous 12345" },
    // Add more users here
  ];

  return (
    <>
      <NavigationBar />
      <Container fluid>
        <Row>
          <Col md={3} className="chat-user-list">
            <ListGroup>
              {users.map((user) => (
                <ListGroup.Item
                  key={user.id}
                  action
                  onClick={() => handleUserClick(user.id)}
                  active={selectedUser === user.id}
                >
                  <img
                    src={profileicon}
                    alt="Profile"
                    className="chat-profile-icon"
                  />
                  {user.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={9} className="chat-messages">
            <div className="messages-display" style={{ height: "80vh" }}>
              {/* Display messages here */}
            </div>
            <div className="message-input" style={{ height: "10vh" }}>
              <Form className="message-form">
                <Form.Control
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="message-input-field"
                />
                <Button onClick={handleSendMessage} className="send-button">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ChatPage;
