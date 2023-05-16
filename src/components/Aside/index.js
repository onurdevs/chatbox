import React from "react";

function Aside() {
  return (
    <div className="aside">
      <div className="aside__header">ssttek</div>

      <div className="aside__information">
        <div className="aside__information__item">
          <div className="aside__information__item-label">EMAIL</div>
          <div className="aside__information__item-value">ssttech@example.com</div>
        </div>
        <div className="aside__information__item">
          <div className="aside__information__item-label">PHONE</div>
          <div className="aside__information__item-value">+04 - 123456789</div>
        </div>
      </div>

      <div className="aside__information">
        <div className="aside__information__item">
          <div className="aside__information__item-label">LABEL</div>
          <div className="aside__information__item-badge">
            <div className="aside__information__item-badge-item">HTML</div>
            <div className="aside__information__item-badge-item">CSS</div>
          </div>
        </div>
      </div>

      <div className="aside__information">
        <div className="aside__information__item">
          <div className="aside__information__item-label">ATTACHMENTS</div>
          <div className="aside__information__item-attachments">
            <div className="aside__information__item-attachments-item">
              <ul className="aside__information__item-attachments-item-list">
                <li className="aside__information__item-attachments-item-list-item">
                  <a href="https://via.placeholder.com/150" target="_blank" rel="noopener noreferrer">
                  Dataset.csv
                  </a>
                </li>
                <li className="aside__information__item-attachments-item-list-item">
                  <a href="https://via.placeholder.com/150" target="_blank" rel="noopener noreferrer">
                  bot_face.jpg
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
      </div>

      <div className="aside__footer">
        <button type="button" className="aside__footer-button">React</button>
      </div>
    </div>
  );
}

export default Aside;
