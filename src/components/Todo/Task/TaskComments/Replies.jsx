import { Comment, CommentGroup } from "semantic-ui-react";

export default function Replies({ comment }) {
  const handleReplyRender = () => {
    return comment.map((replyContent, index) => {
      return (
        <Comment>
          <Comment.Avatar src={replyContent.avatar} />
          <Comment.Content>
            <Comment.Author as="a">{replyContent.author}</Comment.Author>
            <Comment.Metadata>
              <div>{replyContent.meta}</div>
            </Comment.Metadata>
            <Comment.Text>{replyContent.message}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Edit</Comment.Action>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      );
    });
  };

  console.log("replies", comment);
  //   return (
  //     <>
  //       <CommentGroup>
  //         {comment.map((replyContent, index) => {
  //           <Comment key={index}>
  //             <Comment.Avatar src={replyContent.avatar} />
  //             <Comment.Content>
  //               <Comment.Author as="a">{replyContent.author}</Comment.Author>
  //               <Comment.Metadata>
  //                 <div>{replyContent.meta}</div>
  //               </Comment.Metadata>
  //               <Comment.Text>{replyContent.message}</Comment.Text>
  //               <Comment.Actions>
  //                 <Comment.Action>Edit</Comment.Action>
  //                 <Comment.Action>Reply</Comment.Action>
  //               </Comment.Actions>
  //             </Comment.Content>
  //           </Comment>;
  //         })}
  //       </CommentGroup>
  //     </>
  //   );
  return (
    <>
      <Comment.Group>{handleReplyRender()}</Comment.Group>
    </>
  );
}
