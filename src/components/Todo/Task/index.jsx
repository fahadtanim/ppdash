import {
  Button,
  Icon,
  Item,
  ItemContent,
  ItemMeta,
  Label,
  Menu,
  Segment,
  Tab,
} from "semantic-ui-react";

export default function Task() {
  const panes = [
    {
      menuItem: (
        <Menu.Item as={Button} key="task">
          <Icon name="tasks"></Icon>
          <a href="#">IS-2777</a>&nbsp; Sana Overdraft Notice
        </Menu.Item>
      ),
      render: () => <Tab.Pane>info Content</Tab.Pane>,
    },
    {
      menuItem: (
        <Menu.Item as={Button} key="description">
          <Icon name="file alternate"></Icon>
          Description
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Description Content</Tab.Pane>,
    },
    {
      menuItem: (
        <Menu.Item as={Button} key="comments">
          <Icon name="comments"></Icon>
          Comments<Label>15</Label>
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Comments Content</Tab.Pane>,
    },
    {
      menuItem: (
        <Menu.Item as={Button} key="jira">
          <Icon name="autoprefixer"></Icon>
          &nbsp;&nbsp;Jira
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Comments Content</Tab.Pane>,
    },
  ];
  return (
    <>
      <Item>
        <ItemContent>
          <ItemMeta>
            <Tab panes={panes} />
          </ItemMeta>
        </ItemContent>
      </Item>
    </>
  );
}
