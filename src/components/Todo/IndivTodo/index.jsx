import { useParams } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  GridRow,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemImage,
  ItemMeta,
  Label,
  Menu,
  Segment,
  Tab,
} from "semantic-ui-react";
import Task from "../Task";
export default function IndivTodo() {
  const { name } = useParams();

  const panes2 = [
    {
      menuItem: (
        <Menu.Item key="task">
          <Icon name="tasks"></Icon>
          <a>IS-2324</a>&nbsp; FNBK Escrow Analysis
        </Menu.Item>
      ),
      render: () => <Tab.Pane>info Content</Tab.Pane>,
    },
    {
      menuItem: (
        <Menu.Item key="description">
          <Icon name="file alternate"></Icon>
          Description
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Description Content</Tab.Pane>,
    },
    {
      menuItem: (
        <Menu.Item key="comments">
          <Icon name="comments"></Icon>
          Comments<Label>15</Label>
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Comments Content</Tab.Pane>,
    },
    {
      menuItem: (
        <Menu.Item key="jira">
          <Icon name="autoprefixer"></Icon>
          &nbsp;&nbsp;Jira
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Comments Content</Tab.Pane>,
    },
  ];

  return (
    <>
      <Container>
        <Divider horizontal>Tasks Assigned to {name}</Divider>
        <ItemGroup divided>
          <Task></Task>
          <Task></Task>
          <Task></Task>
        </ItemGroup>
      </Container>
    </>
  );
}
