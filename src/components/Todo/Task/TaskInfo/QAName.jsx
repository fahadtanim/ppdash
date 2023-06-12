import { Icon, Label } from "semantic-ui-react";

export default function QAName({ name }) {
  return (
    <span className="ticket-qa">
      <Icon name="bug"></Icon>
      QA Assigned: &nbsp;&nbsp;
      <Label tag size="mini" color="pink">
        {name}
      </Label>
    </span>
  );
}
