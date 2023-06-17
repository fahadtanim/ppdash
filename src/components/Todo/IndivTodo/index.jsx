import { useParams } from "react-router-dom";
import {
  Accordion,
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  GridRow,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemImage,
  ItemMeta,
  Label,
  Menu,
  Segment,
  Tab,
} from "semantic-ui-react";
import Task from "../Task";
import { useEffect, useRef, useState } from "react";
import EditTaskModal from "../Task/TaskInfo/EditTaskModal";
import EditQAAssignee from "../Task/TaskInfo/EditQAAssignee";
import EditTaskType from "../Task/TaskInfo/EditTaskType";
import "./IndivTodo.css";

export default function IndivTodo() {
  const { name } = useParams();
  const [activeIndex, setActiveIndex] = useState(-1);
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

  const handleAccordionClick = (index) => {
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  useEffect(() => {}, [activeIndex]);

  const tasks = [];
  return (
    <>
      <Container>
        <Divider horizontal>Tasks Assigned to {name}</Divider>
        <ItemGroup
          className="task-item-container"
          style={{ paddingBottom: "20px", cursor: "pointer" }}
        >
          <Accordion
            fluid
            styled
            onContextMenu={handleContextMenu}
            inverted
            className="task-item-accordion"
          >
            <Task
              activeIndex={activeIndex}
              onClick={() => handleAccordionClick(0)}
              index={0}
            ></Task>
            <Task
              activeIndex={activeIndex}
              onClick={() => handleAccordionClick(1)}
              index={1}
            ></Task>
            <Task
              activeIndex={activeIndex}
              onClick={() => handleAccordionClick(2)}
              index={2}
            ></Task>
            <Task
              activeIndex={activeIndex}
              onClick={() => handleAccordionClick(3)}
              index={3}
            ></Task>
            <Task
              activeIndex={activeIndex}
              onClick={() => handleAccordionClick(4)}
              index={4}
            ></Task>
          </Accordion>
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
              <EditTaskModal
                trigger={
                  <Dropdown.Item
                    icon="edit"
                    text="Edit..."
                    description="Task & Project Name"
                  />
                }
              ></EditTaskModal>

              <Dropdown.Item
                icon="microsoft edge"
                text="Open Jira..."
                description="https://infoimageinc.atla..."
              />

              <EditQAAssignee
                trigger={
                  <Dropdown.Item
                    icon="bug"
                    text="Change QA"
                    description="QA Assignee"
                  />
                }
              ></EditQAAssignee>
              <EditTaskType
                trigger={
                  <Dropdown.Item
                    icon="sitemap"
                    text="Change Type"
                    description="QA Assignee"
                  />
                }
              ></EditTaskType>

              <Dropdown.Divider />
              <Dropdown.Item text="Bug Tracker" />
              <Dropdown.Item text="Done" />
            </Dropdown.Menu>
          </Dropdown>
        </ItemGroup>
      </Container>
    </>
  );
}
