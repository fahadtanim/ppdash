import {
  AccordionContent,
  AccordionTitle,
  Button,
  Container,
  Divider,
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
import ProjectName from "./TaskInfo/ProjectName";
import TaskType from "./TaskInfo/TaskType";

export default function Task({ activeIndex, index, onClick }) {
  const handleTaskClick = () => {
    onClick();
  };
  const panes = [
    {
      menuItem: (
        <Menu.Item as="a" key="task">
          <Icon id="ticket-icon" name="info circle"></Icon>
          Info
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
      <AccordionTitle
        active={activeIndex === index}
        index={index}
        onClick={handleTaskClick}
      >
        <Grid>
          <GridRow columns="equal">
            <Label ribbon color="blue">
              IS-2777
            </Label>
            <Icon
              name={activeIndex === index ? "compress" : "expand"}
              className="task-accordion-icon"
            ></Icon>
            <Label ribbon="right" color="red">
              due by 1 day
            </Label>
            <GridColumn textAlign="center">Sana Overdraft Notice</GridColumn>
            {activeIndex !== index && (
              <>
                <GridColumn>
                  <ProjectName prefix="sanadla"></ProjectName>
                </GridColumn>
                <GridColumn>
                  <TaskType type="CR"></TaskType>
                </GridColumn>
              </>
            )}
          </GridRow>
        </Grid>
      </AccordionTitle>
      <AccordionContent active={activeIndex === index}>
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
      </AccordionContent>
    </>
  );
}
