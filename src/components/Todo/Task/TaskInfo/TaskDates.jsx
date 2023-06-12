import { Icon, Label, Step } from "semantic-ui-react";

export default function TaskDates() {
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
}
