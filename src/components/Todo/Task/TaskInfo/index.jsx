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

export default function TaskInfo() {
  const dropdownRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({ display: "none" });

  const handleContextMenu = (e) => {
    e.preventDefault();
    dropdownRef.current.close();
    const { clientX, clientY } = e;
    setDropdownStyle({
      position: "fixed",
      top: clientY - 50,
      left: clientX,
      zIndex: 9999,
    });
    dropdownRef.current.open();
  };

  return (
    <>
      <TabPane as={Segment}>
        <Grid>
          <GridRow
            className="task-initial-info"
            onContextMenu={handleContextMenu}
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
          <Dropdown
            className="jira-ticket-context-menu"
            icon={null}
            ref={dropdownRef}
            style={dropdownStyle}
            defaultUpward={false}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                icon="gitlab"
                text="Open Project..."
                description="Gitlab Repo"
              />
              <Dropdown.Item
                icon="edit"
                text="Edit..."
                description="Task & Project Name"
              />
              <Dropdown.Item
                icon="microsoft edge"
                text="Open Jira..."
                description="https://infoimageinc.atla..."
              />
              <Dropdown.Item
                icon="bug"
                text="Change QA"
                description="QA Assignee"
              />
              <Dropdown.Item
                icon="tasks"
                text="Rename Task"
                description="Renaming Task"
              />
              <Dropdown.Item
                icon="sitemap"
                text="Change Type"
                description="QA Assignee"
              />

              <Dropdown.Divider />
              <Dropdown.Item text="Bug Tracker" />
              <Dropdown.Item text="Done" />
            </Dropdown.Menu>
          </Dropdown>
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
