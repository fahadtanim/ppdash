import { useRef, useState } from "react";
import { Dropdown, Icon, Label } from "semantic-ui-react";
import "./JiraTicket.css";

export default function JiraTicket({ ticket }) {
  const ticketURL = "#" + ticket;
  

  return (
    <span className="jira-ticket">
      <Icon name="ticket"></Icon>
      Jira Ticket:&nbsp;&nbsp;
      <Label color="teal" size="mini" tag as="a" href={ticketURL}>
        {ticket}
      </Label>
    </span>
  );
}
