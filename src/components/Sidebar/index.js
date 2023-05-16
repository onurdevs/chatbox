import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>All Messages</h2>
      </div>
      <div className="sidebar__list">
        <div className="sidebar__list-item">
          <div className="sidebar__list-item-avatar">
            <img src="https://via.placeholder.com/150" alt="avatar" />
          </div>
          <div className="sidebar__list-item-content">
            <div className="sidebar__list-item-content-name">Name</div>
            <div className="sidebar__list-item-content-message">Message</div>
          </div>
          <div className="sidebar__list-item-status">
            <div className="sidebar__list-item-status-online">Online</div>
          </div>
        </div>

        <div className="sidebar__list-item">
          <div className="sidebar__list-item-avatar">
            <img src="https://via.placeholder.com/150" alt="avatar" />
          </div>
          <div className="sidebar__list-item-content">
            <div className="sidebar__list-item-content-name">Name</div>
            <div className="sidebar__list-item-content-message">Message</div>
          </div>
          <div className="sidebar__list-item-status">
            <div className="sidebar__list-item-status-online">Online</div>
          </div>
        </div>

        <div className="sidebar__list-item">
          <div className="sidebar__list-item-avatar">
            <img src="https://via.placeholder.com/150" alt="avatar" />
          </div>
          <div className="sidebar__list-item-content">
            <div className="sidebar__list-item-content-name">Name</div>
            <div className="sidebar__list-item-content-message">Message</div>
          </div>
          <div className="sidebar__list-item-status">
            <div className="sidebar__list-item-status-online">Online</div>
          </div>
        </div>

        <div className="sidebar__list-item">
          <div className="sidebar__list-item-avatar">
            <img src="https://via.placeholder.com/150" alt="avatar" />
          </div>
          <div className="sidebar__list-item-content">
            <div className="sidebar__list-item-content-name">Name</div>
            <div className="sidebar__list-item-content-message">Message</div>
          </div>
          <div className="sidebar__list-item-status">
            <div className="sidebar__list-item-status-online">Online</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
