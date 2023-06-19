import { useState } from 'react';
import {
  Button,
  Dropdown,
  Form,
  Icon,
  Input,
  Label,
  Modal,
} from 'semantic-ui-react';

const EditTaskType = ({ trigger }) => {
  const [open, setOpen] = useState(false);
  const typeOptions = [
    { key: 'none', value: 'none', text: 'None' },
    {
      key: 'im',
      value: 'im',
      text: 'IM',
      content: <Label color="violet">IM</Label>,
    },
    {
      key: 'cr',
      value: 'cr',
      text: 'CR',
      content: <Label color="orange">CR</Label>,
    },
  ];
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={trigger}
      basic
      dimmer="blurring"
    >
      <Modal.Header>Change Task Type</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Input
                size="mini"
                icon="sitemap"
                label={<Label color="teal">Project Type</Label>}
                list="project-type"
                placeholder="Choose Type..."
              />
              <datalist id="project-type">
                <option value="None">None</option>
                <option value="CR">CR</option>
                <option value="IM">IM</option>
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

export default EditTaskType;
