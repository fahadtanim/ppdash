import { Comment, CommentGroup } from "semantic-ui-react";
import Replies from "./Replies";

export default function TaskIndivComment({ item }) {
  console.log("Comments", item);
  const handleReplyRender = (reply) => {
    return reply.map((replyContent, index) => {
      <TaskIndivComment key={index} item={replyContent}></TaskIndivComment>;
    });
  };
  return (
    <>
      <Comment>
        <Comment.Avatar src={item.avatar} />
        <Comment.Content>
          <Comment.Author as="a">{item.author}</Comment.Author>
          <Comment.Metadata>
            <div>{item.meta}</div>
          </Comment.Metadata>
          <Comment.Text>{item.message}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Edit</Comment.Action>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        {item.reply.length > 0 && <Replies comment={item.reply}></Replies>}
      </Comment>
    </>
  );
}
