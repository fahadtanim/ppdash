import { Header, Segment, TabPane } from "semantic-ui-react";
import DescriptionEditor from "./DescriptionEditor";

export default function TaskDescription() {
  return (
    <TabPane>
      <DescriptionEditor></DescriptionEditor>
    </TabPane>
  );
}
