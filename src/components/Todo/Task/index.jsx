import {
  AccordionContent,
  AccordionTitle,
  Button,
  Container,
  Divider,
  Dropdown,
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
import EditQAAssignee from "./TaskInfo/EditQAAssignee";
import EditTaskModal from "./TaskInfo/EditTaskModal";
import EditTaskType from "./TaskInfo/EditTaskType";
import { useRef, useState } from "react";

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
          <GridRow columns={16} className="task-accourdion-title-wrapper">
            <Label
              ribbon
              color="blue"
              className="task-accordion-header-left-label"
            >
              IS-2777
            </Label>
            <Icon
              name={activeIndex === index ? "toggle on" : "toggle off"}
              className="task-accordion-icon"
            ></Icon>
            <Label
              ribbon="right"
              color="red"
              className="task-accordion-header-right-label"
            >
              due by 1 day
            </Label>
            <GridColumn
              textAlign={activeIndex === index ? "center" : "left"}
              width={activeIndex === index ? 12 : 6}
              className="task-accordion-header-title"
            >
              Sana Overdraft Notice
            </GridColumn>
            {activeIndex !== index && (
              <>
                <GridColumn width={6} className="task-accordion-label-wrapper">
                  <Icon name="tags" size="small" color="grey"></Icon>
                  <Label size="mini" color="blue">
                    <Icon name="gitlab"></Icon>sanadla
                  </Label>
                  <Label size="mini" color="pink">
                    <Icon name="bug"></Icon>Sumi
                  </Label>
                  <Label size="mini" color="orange">
                    <Icon name="sitemap"></Icon>CR
                  </Label>
                </GridColumn>
              </>
            )}
          </GridRow>
          <GridRow columns="equal" className="task-accordion-progress-bar">
            <GridColumn className="progress-preview"></GridColumn>
            <GridColumn className="progress-preview active"></GridColumn>
            <GridColumn className="progress-preview"></GridColumn>
            <GridColumn className="progress-preview"></GridColumn>
            <GridColumn className="progress-preview"></GridColumn>
            <GridColumn className="progress-preview"></GridColumn>
            <GridColumn className="progress-preview"></GridColumn>
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
