import { useParams } from "react-router-dom";
import {
  Accordion,
  Button,
  Container,
  Divider,
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
import { useEffect, useState } from "react";
export default function IndivTodo() {
  const { name } = useParams();
<<<<<<< HEAD
const [activeIndex, setActiveIndex] = useState(-1);
const handleAccordionClick = (index) => {
  const newIndex = activeIndex === index ? -1 : index;
  setActiveIndex(newIndex);
};

useEffect(() => {}, [activeIndex]);

=======
  const tasks= [];
>>>>>>> b6965ef37d289373740c60c7963c15938f63acc8
  return (
    <>
      <Container>
        <Divider horizontal>Tasks Assigned to {name}</Divider>
        <ItemGroup
          className="task-item-container"
          style={{ paddingBottom: "20px" }}
        >
          <Accordion fluid styled>
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
          </Accordion>
        </ItemGroup>
      </Container>
    </>
  );
}
