import { useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  Icon,
  Input,
  Label,
  Modal,
} from "semantic-ui-react";

const EditTaskType = ({ trigger }) => {
  const [open, setOpen] = useState(false);
  const typeOptions = [
    { key: "none", value: "none", text: "None" },
    {
      key: "im",
      value: "im",
      text: "IM",
      content: <Label color="violet">IM</Label>,
    },
    {
      key: "cr",
      value: "cr",
      text: "CR",
      content: <Label color="orange">CR</Label>,
    },
  ];
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={trigger}
      size="small"
    >
      <Modal.Header>Change QA Assingee</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Label
            size="large"
            color="blue"
            style={{ paddingTop: "0.85rem", paddingBottom: "0.8rem" }}
          >
            <Icon name="sitemap"></Icon>Project Type
          </Label>
          <Dropdown
            placeholder="Select Type"
            search
            selection
            options={typeOptions}
            style={{ cursor: "pointer" }}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} color="teal">
          <Icon name="thumbs down" />
          Cancel
        </Button>
        <Button onClick={() => setOpen(false)} primary>
          <Icon name="thumbs up" />
          Update
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditTaskType;
