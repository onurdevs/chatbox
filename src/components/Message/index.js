import React from "react";

function Message() {
  return (
    <div className="message-box">
      <div className="message-box__header">
        <div className="message-box__header-top">
          <div className="message-box__header-name">Name</div>
          <div className="message-box__header-bio">Cloud, The Internet</div>
        </div>
        <div className="message-box__header-eyes">
          <div className="message-box__header-eyes-item"></div>
          botty-beep-boop
        </div>
        <div className="message-box__header-time">
          <div className="message-box__header-time-item">12:00</div>
        </div>
      </div>
      <div className="message-box__body">
        <div className="message-box__body-message">
          <div className="message-box__body-message-reply">
            <span>reply</span>
          </div>
          <div className="message-box__body-message-answer">
            <span>answer</span>
          </div>

        </div>
      </div>
      <div className="message-box__footer">
        <div className="message-box__footer-item">
          <input type="text" placeholder="Type a message" className="message-box__footer-write" />
          <button type="button" className="message-box__footer-send">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
