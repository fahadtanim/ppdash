import { useRef, useState } from "react";
import { Dropdown, Icon, Label } from "semantic-ui-react";
import "./JiraTicket.css";

export default function JiraTicket({ ticket }) {
  const ticketURL = "#" + ticket;
  const dropdownRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({ display: "none" });

  const trigger = (
    <span className="jira-ticket">
      <Icon name="ticket"></Icon>
      Jira Ticket:&nbsp;&nbsp;
      <Label color="teal" size="mini" tag as="a" href={ticketURL}>
        {ticket}
      </Label>
    </span>
  );

  const handleContextMenu = (e) => {
    e.preventDefault();
    const { clientX, clientY } = e;
    setDropdownStyle({
      position: "fixed",
      top: clientY - 50,
      left: clientX,
      zIndex: 9999,
    });
    dropdownRef.current.open();
  };

  return (
    <div className="jira-ticket-wrapper">
      <div className="jira-ticket-trigger" onContextMenu={handleContextMenu}>
        {trigger}
      </div>
      <Dropdown
        className="jira-ticket-context-menu"
        icon={null}
        ref={dropdownRef}
        style={dropdownStyle}
      >
        <Dropdown.Menu>
          <Dropdown.Item text="Go to Jira Ticket" />
          <Dropdown.Item text="Edit Jira ticket" />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
