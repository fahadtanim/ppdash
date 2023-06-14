import { useState } from "react";
import { Button, Form, Icon, Input, Label, Modal } from "semantic-ui-react";

const EditTaskModal = ({ trigger }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={trigger}
    >
      <Modal.Header>Edit Task Name & Project Prefix</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Input
                icon="ticket"
                label={<Label color="blue">Task Name</Label>}
                placeholder="Sana DLA"
              />
            </Form.Field>
            <Form.Field>
              <Input
                icon="gitlab"
                label={<Label color="blue">Project Prefix</Label>}
                list="Prefix"
                placeholder="Choose Project..."
              />
              <datalist id="Prefix">
                <option value="English">English</option>
                <option value="Chinese">Chinese</option>
                <option value="Dutch">Dutch</option>
              </datalist>
            </Form.Field>
          </Form>
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

export default EditTaskModal;
