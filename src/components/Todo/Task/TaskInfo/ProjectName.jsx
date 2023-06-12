import { Icon, Label } from "semantic-ui-react";

export default function ProjectName({ prefix }) {
  return (
    <span className="project-prefix">
      <Icon name="folder open"></Icon>
      Project: &nbsp;&nbsp;
      <Label tag size="mini" color="blue">
        {prefix}
      </Label>
    </span>
  );
}
