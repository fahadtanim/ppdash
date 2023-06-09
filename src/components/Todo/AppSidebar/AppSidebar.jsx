import { useState } from "react";
import { Menu, Segment, Sidebar } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./AppSidebar.css";

function AppSidebar({ visible }) {
  const [animation] = useState("scale down");
  const [direction] = useState("left");
  const [activeItem, setActiveItem] = useState("Fahad");
  const handleItemClick = (name) => {
    setActiveItem(name);
  };
  const user = {
    teams: [
      {
        team_name: "Implementation",
        members: [
          { name: "Anwar", email: "anwar.hossain@dsinnovators.com" },
          { name: "Sakib", email: "mahbub.sakib@dsinnovators.com" },
          { name: "Tanmay", email: "mahbubur.tanmay@dsinnovators.com" },
          { name: "Fahad", email: "fahad.khan@dsinnovators.com" },
          { name: "Ruman", email: "ruman.bhuiyan@dsinnovators.com" },
          { name: "Faiza", email: "faiza.tasneem@dsinnovators.com" },
        ],
      },
      {
        team_name: "Change Request",
        members: [
          { name: "Rony", email: "rony.das@dsinnovators.com" },
          { name: "Sakib", email: "mahbub.sakib@dsinnovators.com" },
          { name: "Tanmay", email: "mahbubur.tanmay@dsinnovators.com" },
          { name: "Fahad", email: "fahad.khan@dsinnovators.com" },
          { name: "Ruman", email: "ruman.bhuiyan@dsinnovators.com" },
          { name: "Faiza", email: "faiza.tasneem@dsinnovators.com" },
        ],
      },
    ],
  };
  return (
    <Sidebar
      as={Segment}
      animation={animation}
      direction={direction}
      visible={visible}
      id="user-sidebar"
    >
      <Menu vertical inverted id="sidenav-menu">
        {user.teams.map((team) => (
          <Menu.Item key={team.team_name}>
            <Menu.Header>{team.team_name}</Menu.Header>

            <Menu.Menu>
              {team.members.map((member) => (
                <Menu.Item
                  as={NavLink}
                  to={"/todo/" + member.name}
                  key={member.name}
                  name={member.name}
                  active={activeItem === member.name}
                  onClick={() => handleItemClick(member.name)}
                />
              ))}
            </Menu.Menu>
          </Menu.Item>
        ))}
      </Menu>
    </Sidebar>
  );
}

export default AppSidebar;
