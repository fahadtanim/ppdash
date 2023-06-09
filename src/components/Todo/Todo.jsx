import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Image,
  Label,
  List,
  ListContent,
  ListHeader,
  ListItem,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import AppSidebar from "./AppSidebar/AppSidebar";
import { Outlet, useParams } from "react-router-dom";
import "./Todo.css";
import GitlabProjects from "../../api_services/gitlabProjects";
import CreateTask from './Task/CreateTask';

export default function Todo() {
  const { name } = useParams();
  const [visible, setVisible] = useState(false);
  const [teamNameButton, setTeamNameButton] = useState("toggle off");
  useEffect(() => {
    // const gitlabProjects = new GitlabProjects();
    // gitlabProjects.getPrefix();
  }, [visible, teamNameButton]);
  const handleSideNav = () => {
    setVisible(visible ? false : true);
    setTeamNameButton(
      teamNameButton === "toggle off" ? "toggle on" : "toggle off"
    );
  };

  return (
    <>
      <Sidebar.Pushable as={Segment} id="todo-container">
        <AppSidebar visible={visible}></AppSidebar>
        <Sidebar.Pusher>
          <Container>
            <Grid>
              <GridRow
                columns={12}
                centered
                id="team-nav-btn-container-wrapper"
              >
                <GridColumn
                  width={3}
                  floated="left"
                  id="team-nav-btn-container"
                >
                  <Button
                    color="blue"
                    onClick={handleSideNav}
                    icon
                    labelPosition="right"
                    id="team-name-btn"
                    size='mini'
                  >
                    Teams & Members <Icon size="large" name={teamNameButton} />
                  </Button>
                </GridColumn>
                {name && (
                  <>
                    <GridColumn floated="left" width={8}>
                      <List horizontal id="name-list">
                        <ListItem>
                          <Image
                            avatar
                            src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
                          />
                          <ListContent>
                            <ListHeader>{name}</ListHeader>
                            <Label id="cr-label" color="blue" size="mini">
                              CR
                              <Label.Detail>12</Label.Detail>
                            </Label>
                            <Label color="violet" size="mini">
                              IM
                              <Label.Detail>3</Label.Detail>
                            </Label>
                            <Label color="red" size="mini">
                              Total
                              <Label.Detail>15</Label.Detail>
                            </Label>
                          </ListContent>
                        </ListItem>
                      </List>
                    </GridColumn>
                  </>
                )}
                <GridColumn width={3}>
                  <CreateTask trigger={<Button id="create-task-btn" color='blue' size='tiny' floated='right'>Create Task</Button>}></CreateTask>
                </GridColumn>
              </GridRow>
              <GridRow>
                <Outlet></Outlet>
              </GridRow>
            </Grid>
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}
