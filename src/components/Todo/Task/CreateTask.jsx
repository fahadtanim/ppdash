import { useState } from 'react';
import {
  Button,
  Container,
  Dropdown,
  Form,
  FormGroup,
  FormSelect,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Input,
  Label,
  Modal,
} from 'semantic-ui-react';

const CreateTask = ({ trigger }) => {
  const [open, setOpen] = useState(false);
  const taskType = [
    { key: 'none', value: 'none', text: 'None' },
    {
      key: 'IM',
      value: 'IM',
      text: 'IM',
      content: <Label color="violet">IM</Label>,
    },
    {
      key: 'CR',
      value: 'CR',
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
      size="large"
      dimmer="blurring"
      basic
    >
      <Modal.Header>Create New Task</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Input
                size="mini"
                icon="ticket"
                label={<Label color="blue">Task Name</Label>}
                placeholder="Task Name..."
              />
            </Form.Field>
            <FormGroup>
              <Form.Field width={8}>
                <Input
                  size="mini"
                  icon="gitlab"
                  label={<Label color="teal">Project Prefix</Label>}
                  list="Prefix"
                  placeholder="Choose Project..."
                />
                <datalist id="Prefix">
                  <option value="English">English</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Dutch">Dutch</option>
                </datalist>
              </Form.Field>
              <Form.Field width={8}>
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
            </FormGroup>
            <FormGroup>
              <Form.Field width={8}>
                <Input
                  size="mini"
                  icon="secret user"
                  label={<Label color="purple">Assignee</Label>}
                  list="qa"
                  placeholder="Choose Assignee..."
                />
                <datalist id="qa">
                  <option value="English">English</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Dutch">Dutch</option>
                </datalist>
              </Form.Field>
              <Form.Field width={8}>
                <Input
                  size="mini"
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
            </FormGroup>
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

export default CreateTask;
