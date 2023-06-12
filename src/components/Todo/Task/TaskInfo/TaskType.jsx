import { Icon, Label } from "semantic-ui-react";

export default function TaskType({ type }) {
  return (
    <span className="ticket-qa">
      <Icon name="sitemap"></Icon>
      Type: &nbsp;&nbsp;
      <Label tag size="mini" color="orange">
        {type}
      </Label>
    </span>
  );
}
