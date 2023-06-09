import { useState } from "react";
import {
  Button,
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

export default function Todo() {
  const { name } = useParams();
  const [visible, setVisible] = useState(false);
  const handleSideNav = () => {
    setVisible(visible ? false : true);
  };

  return (
    <>
      <Sidebar.Pushable as={Segment} id="todo-container">
        <AppSidebar visible={visible}></AppSidebar>
        <Sidebar.Pusher>
          <Segment basic>
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
                    color="vk"
                    size="mini"
                    onClick={handleSideNav}
                    icon
                    labelPosition="right"
                  >
                    Teams & Members <Icon name="right arrow" />
                  </Button>
                </GridColumn>
                <GridColumn></GridColumn>
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
                <GridColumn></GridColumn>
              </GridRow>
              <GridRow>
                <Outlet></Outlet>
              </GridRow>
            </Grid>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}
