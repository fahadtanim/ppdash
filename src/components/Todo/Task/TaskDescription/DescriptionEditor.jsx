import { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import * as Emoji from "quill-emoji";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import {
  Button,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Segment,
  Sticky,
} from "semantic-ui-react";
import "./DescriptionEditor.css";
Quill.register("modules/emoji", Emoji);

export default function DescriptionEditor() {
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState("");
  const [markUpContent, setMarkupContent] = useState("");
  const reactQuillRef = useRef();
  const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "link"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["emoji"],
    ["clean"],
  ];

  const onChange = (content) => {
    setValue(content);
  };

  const saveChanges = (content) => {
    setEditable(false);
  };

  const setDescriptionEditable = () => {
    setEditable(true);
  };

  useEffect(() => {}, [value, editable]);

  return (
    <Segment
      className="task-description-wrapper"
      basic
      onDoubleClick={setDescriptionEditable}
    >
      <Header as="h3" dividing>
        Description
      </Header>
      {editable ? (
        <>
          <Grid>
            <GridRow className="editor-container">
              <GridColumn>
                <ReactQuill
                  ref={reactQuillRef}
                  theme="snow"
                  placeholder="Start writing..."
                  modules={{
                    toolbar: {
                      container: TOOLBAR_OPTIONS,
                    },
                    "emoji-toolbar": true,
                    "emoji-textarea": false,
                    "emoji-shortname": true,
                  }}
                  value={value}
                  onChange={onChange}
                />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>
                <Button
                  className="description-save-btn"
                  floated="right"
                  color="green"
                  onClick={saveChanges}
                >
                  Save
                </Button>
              </GridColumn>
            </GridRow>
          </Grid>
        </>
      ) : (
        <div
          className="dummy-value"
          dangerouslySetInnerHTML={{ __html: value }}
        ></div>
      )}
    </Segment>
  );
}
