import { useState } from 'react';
import { Button, Form, Icon, Input, Label, Modal } from 'semantic-ui-react';

const EditQAAssignee = ({ trigger }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={trigger}
      basic
      dimmer="blurring"
    >
      <Modal.Header>Change QA Assingee</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Input
              size='mini'
                icon="bug"
                label={<Label color="pink">QA Assignee</Label>}
                list="qa"
                placeholder="Choose QA..."
              />
              <datalist id="qa">
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

export default EditQAAssignee;
