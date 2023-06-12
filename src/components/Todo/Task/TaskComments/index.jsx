import {
  Button,
  Comment,
  Container,
  Form,
  Header,
  Segment,
  Sticky,
  TabPane,
} from "semantic-ui-react";
import "./TaskComments.css";
import { createRef, useEffect, useState } from "react";
import TaskIndivComment from "./TaskIndivComment";

export default function TaskComments() {
  const comment = [
    {
      avatar: "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
      author: "Matt",
      meta: "Today at 5:42PM",
      message: "How artistic!",
      reply: [],
    },
    {
      avatar: "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
      author: "Elliot Fu",
      meta: "Today at 5:42PM",
      message: "This has been very useful for my research. Thanks as well!",
      reply: [
        {
          avatar: "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
          author: "Jenny Hess",
          meta: "Just now",
          message: "Elliot you are always so right :)",
        },
      ],
    },
    {
      avatar: "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
      author: "Sakib",
      meta: "Today at 6:42PM",
      message: "This has been very useful for my research. Thanks as well!",
      reply: [
        {
          avatar: "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
          author: "Sumi",
          meta: "Just now",
          message: "Elliot you are always so right :)",
        },
      ],
    },
    {
      avatar: "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
      author: "Joe Henderson",
      meta: "5 days ago",
      message: "Dude, this is awesome. Thanks so much",
      reply: [],
    },
    {
      avatar: "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
      author: "Ruman",
      meta: "5 days ago",
      message: "Dude, this is awesome. Thanks so much",
      reply: [],
    },
  ];
  return (
    <>
      <TabPane>
        <Comment.Group className="comments-wrapper">
          <Sticky>
            <Header as="h3" dividing>
              Comments
            </Header>
          </Sticky>

          {comment.map((commentItem, index) => (
            <TaskIndivComment key={index} item={commentItem}></TaskIndivComment>
          ))}
        </Comment.Group>
        <Container fluid>
          <Button
            floated="right"
            content="Add Comment"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Container>
      </TabPane>
    </>
  );
}
