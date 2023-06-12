import {
  Button,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMeta,
  Label,
  Menu,
  Segment,
  Step,
  Tab,
} from "semantic-ui-react";
import TaskInfo from "./TaskInfo";
import "./Task.css";
import TaskDescription from "./TaskDescription";
import TaskComments from "./TaskComments";

export default function Task() {
  const panes = [
    {
      menuItem: (
        <Menu.Item as="a" key="task">
          <Icon id="ticket-icon" name="ticket"></Icon>
          <Label size="tiny" color="blue" ribbon>
            IS-2777
          </Label>{" "}
          Sana Overdraft Notice
        </Menu.Item>
      ),
      render: () => <TaskInfo></TaskInfo>,
    },
    {
      menuItem: (
        <Menu.Item as="a" key="description">
          <Icon name="file alternate"></Icon>
          Description
        </Menu.Item>
      ),
      render: () => <TaskDescription></TaskDescription>,
    },
    {
      menuItem: (
        <Menu.Item as="a" key="comments">
          <Icon name="comments"></Icon>
          <Label color="pink" size="tiny" ribbon>
            15
          </Label>
          Comments
        </Menu.Item>
      ),
      render: () => <TaskComments></TaskComments>,
    },
    {
      menuItem: (
        <Menu.Item as="a" key="checklist">
          <Icon name="tasks"></Icon>
          Checklist
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Checklist Content</Tab.Pane>,
    },
  ];
  return (
    <>
      <Item>
        <ItemContent>
          <Segment>
            <ItemDescription>
              <Tab
                menu={{ fluid: true, tabular: true, vertical: true }}
                panes={panes}
              />
            </ItemDescription>
          </Segment>
        </ItemContent>
      </Item>
    </>
  );
}
