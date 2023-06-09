import { useState } from "react";
import {
    Button,
  Header,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import AppSidebar from "./AppSidebar/AppSidebar";
import "./Home.css"


export default function Home() {
    const [visible, setVisible] = useState(false);
    const handleSideNav = () => {
        
        setVisible(visible ? false : true);
      };

  return (
    <>
      <Sidebar.Pushable as={Segment} id ="todo-container" style={{ overflow: "hidden" }}>
        
        <AppSidebar visible={visible}></AppSidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Button onClick={handleSideNav}>sidenav</Button>
            <Header as="h3">Application Content</Header>
            <p>test Home</p>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}
