import React, { useState, useRef, useEffect } from "react";

import {
  FaComments,
  FaTaxi,
  FaMapMarkerAlt,
  FaHeadset,
  FaQuestionCircle,
  FaPaperPlane,
} from "react-icons/fa";

const ChatCard = () => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const [message, setMessage] = useState("");

  // Toggle expand/collapse
  const toggleCard = () => setExpanded((prev) => !prev);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle message send (just reset for now)
  const handleSend = () => {
    if (message.trim() !== "") {
      console.log("User message:", message);
      setMessage("");
    }
  };

  return (
    <div
      ref={cardRef}
      className={`float-card chat-card ${expanded ? "expanded" : ""}`}
      onClick={toggleCard}
    >
      {!expanded && (
        <div className="chat-icon">
          <FaComments />
        </div>
      )}

      {expanded && (
        <div className="chat-content" onClick={(e) => e.stopPropagation()}>
          <div className="chat-header">
            <h3>Chat Support</h3>
            <p>We're here to help you 24/7</p>
          </div>

          <div className="chat-messages">
            <div className="chat-greeting">
              Hi! How can I help you today? Choose from the options below or type your message.
            </div>

            <div className="chat-options">
              <div className="chat-option">
                <FaTaxi />
                <span>Book a Ride</span>
              </div>
              <div className="chat-option">
                <FaMapMarkerAlt />
                <span>Track My Ride</span>
              </div>
              <div className="chat-option">
                <FaHeadset />
                <span>Contact Support</span>
              </div>
              <div className="chat-option">
                <FaQuestionCircle />
                <span>FAQs</span>
              </div>
            </div>
          </div>

          <div className="chat-input-container">
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <button onClick={(e) => { e.stopPropagation(); handleSend(); }}>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatCard;