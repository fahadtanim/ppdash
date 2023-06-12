import {
  Button,
  Container,
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
import { useEffect, useState } from "react";
// import { TaskDates } from "..";
const JiraTicket = ({ ticket }) => {
  const ticketURL = "#" + ticket;
  return (
    <span className="jira-ticket">
      <Icon name="ticket"></Icon>
      Jira Ticket:&nbsp;&nbsp;
      <Label color="teal" size="mini" tag as="a" href={ticketURL}>
        {ticket}
      </Label>
    </span>
  );
};

export const TaskDates = () => {
  return (
    <>
      <Step.Group fluid stackable="tablet" className="task-dates-steps">
        <Step>
          <Step.Content>
            <Step.Title>
              <Icon name="handshake"></Icon>&nbsp;Turnover Date
            </Step.Title>
            <Step.Description>
              <Label color="teal">06/01/2023</Label>
            </Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Step.Content>
            <Step.Title>
              <Icon name="file pdf"></Icon>&nbsp;Sample Date
            </Step.Title>
            <Step.Description>
              <Label color="blue">06/01/2023</Label>
            </Step.Description>
          </Step.Content>
        </Step>
        <Step>
          <Step.Content>
            <Step.Title>
              <Icon name="bug"></Icon>&nbsp;QA Date
            </Step.Title>
            <Step.Description>
              <Label color="orange">06/01/2023</Label>
            </Step.Description>
          </Step.Content>
        </Step>
        <Step>
          <Step.Content>
            <Step.Title>
              <Icon name="code branch"></Icon>&nbsp;Programming Review
            </Step.Title>
            <Step.Description>
              <Label color="violet">06/01/2023</Label>
            </Step.Description>
          </Step.Content>
        </Step>
        <Step>
          <Step.Content>
            <Step.Title>
              <Icon name="print"></Icon>&nbsp;Parallel Date
            </Step.Title>
            <Step.Description>
              <Label color="teal">06/01/2023</Label>
            </Step.Description>
          </Step.Content>
        </Step>
        <Step>
          <Step.Content>
            <Step.Title>
              <Icon name="industry"></Icon>&nbsp;Live Date
            </Step.Title>
            <Step.Description>
              <Label color="red">06/01/2023</Label>
            </Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    </>
  );
};

const QAName = ({ name }) => {
  return (
    <span className="ticket-qa">
      <Icon name="bug"></Icon>
      QA Assigned: &nbsp;&nbsp;
      <Label tag size="mini" color="pink">
        {name}
      </Label>
    </span>
  );
};
const TaskType = ({ type }) => {
  return (
    <span className="ticket-qa">
      <Icon name="sitemap"></Icon>
      Type: &nbsp;&nbsp;
      <Label tag size="mini" color="orange">
        {type}
      </Label>
    </span>
  );
};

const ProjectName = ({ prefix }) => {
  return (
    <span className="project-prefix">
      <Icon name="folder open"></Icon>
      Project: &nbsp;&nbsp;
      <Label tag size="mini" color="blue">
        {prefix}
      </Label>
    </span>
  );
};

const TaskInfoAccessButtons = () => {
  const [productionCheck, setProductionCheck] = useState(false);
  const handleProductionCheck = () => {
    setProductionCheck(!productionCheck);
  };

  useEffect(() => {}, [productionCheck]);
  return (
    <Button.Group size="mini" floated="right">
      <Button size="mini" color="teal">
        Change Assignee
      </Button>
      <Button.Or />
      <Button size="mini" color="orange">
        BugTracker
      </Button>
      <Button.Or />
      <Button
        size="mini"
        color="blue"
        onClick={handleProductionCheck}
        disabled={productionCheck}
      >
        {productionCheck ? (
          <>
            <Icon name="check"></Icon>Checked in Production
          </>
        ) : (
          <>Production Check</>
        )}
      </Button>
      <Button.Or />
      <Button size="mini" positive>
        Done
      </Button>
    </Button.Group>
  );
};

export default function TaskInfo() {
  return (
    <>
      <TabPane as={Segment}>
        <Grid>
          <GridRow>
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
          <GridRow columns="equal">
            <GridColumn>
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
            <GridColumn>
              <TaskInfoAccessButtons></TaskInfoAccessButtons>
            </GridColumn>
          </GridRow>
        </Grid>
      </TabPane>
    </>
  );
}
