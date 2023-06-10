import { useParams } from "react-router-dom";
import {
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
export default function IndivTodo() {
  const { name } = useParams();

  return (
    <>
      <Container>
        <Divider horizontal>Tasks Assigned to {name}</Divider>
        <ItemGroup>
          <Task></Task>
          <Task></Task>
          <Task></Task>
        </ItemGroup>
      </Container>
    </>
  );
}
