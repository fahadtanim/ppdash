import {
  Button,
  Container,
  Dropdown,
  DropdownItem,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Label,
  Segment,
  Step,
  TabPane,
} from "semantic-ui-react";
import "./TaskInfo.css";
import { useEffect, useRef, useState } from "react";
import TaskType from "./TaskType";
import ProjectName from "./ProjectName";
import TaskInfoAccessButtons from "./TaskInfoAccessButtons";
import QAName from "./QAName";
import TaskDates from "./TaskDates";
import JiraTicket from "./JiraTicket";
import EditTaskModal from "./EditTaskModal";
import EditQAAssignee from "./EditQAAssignee";
import EditTaskType from "./EditTaskType";

export default function TaskInfo() {
  

  return (
    <>
      <TabPane as={Segment}>
        <Grid>
          <GridRow
            className="task-initial-info"
            
          >
            <GridColumn width={4}>
              <ProjectName prefix="sanadla"></ProjectName>
            </GridColumn>
            <GridColumn width={4}>
              <JiraTicket ticket="IS-2777"></JiraTicket>
            </GridColumn>
            <GridColumn width={4}>
              <QAName name="Sumi"></QAName>
            </GridColumn>
            <GridColumn width={4}>
              <TaskType type="CR"></TaskType>
            </GridColumn>
          </GridRow>
          
          <GridRow>
            <TaskDates></TaskDates>
          </GridRow>
          <GridRow columns={16}>
            <GridColumn width={5}>
              <span className="bug-tracker-info">
                {" "}
                <Icon name="chart pie"></Icon>Bug Tracker :
              </span>{" "}
              <Label color="red" size="tiny">
                8 bugs <Icon name="bug"></Icon>
              </Label>
              <Label color="orange" size="tiny">
                5 hold <Icon name="bug"></Icon>
              </Label>
            </GridColumn>
            <GridColumn width={11}>
              <TaskInfoAccessButtons></TaskInfoAccessButtons>
            </GridColumn>
          </GridRow>
        </Grid>
      </TabPane>
    </>
  );
}
