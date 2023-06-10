import {
  Button,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMeta,
  Label,
  Menu,
  Segment,
  Step,
  Tab,
} from "semantic-ui-react";
import TaskInfo from "./TaskInfo";
import "./Task.css";

// export const TaskDates = () => {
//   return (
//     <>
//       <Grid className="task-date">
//         <GridRow columns="equal">
//           <GridColumn>
//             <Label ribbon color="orange">
//               CR &nbsp;
//             </Label>
//           </GridColumn>
//           <GridColumn>
//             <span>
//               Turnover Date: &nbsp;&nbsp;
//               <Label tag size="mini" color="green">
//                 06/01/2023
//               </Label>
//             </span>
//           </GridColumn>
//           <GridColumn>
//             <span>
//               Sample Date: &nbsp;&nbsp;
//               <Label tag size="mini" color="teal">
//                 06/01/2023
//               </Label>
//             </span>
//           </GridColumn>
//           <GridColumn>
//             <span>
//               QA Date: &nbsp;&nbsp;
//               <Label tag size="mini" color="blue">
//                 06/01/2023
//               </Label>
//             </span>
//           </GridColumn>
//           <GridColumn>
//             <span>
//               Parallel Date: &nbsp;&nbsp;
//               <Label tag size="mini" color="orange">
//                 06/01/2023
//               </Label>
//             </span>
//           </GridColumn>
//           <GridColumn>
//             <span>
//               Live Date: &nbsp;&nbsp;
//               <Label tag size="mini" color="red">
//                 06/01/2023
//               </Label>
//             </span>
//           </GridColumn>
//         </GridRow>
//       </Grid>
//     </>
//   );
// };

export default function Task() {
  // const panes2 = [
  //   {
  //     menuItem: (
  //       <Menu.Item as="a" key="task">
  //         <Icon id="ticket-icon" name="ticket"></Icon>
  //       </Menu.Item>
  //     ),
  //     render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
  //   },
  //   { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  //   { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  // ];
  const panes = [
    {
      menuItem: (
        <Menu.Item as="a" key="task">
          <Icon id="ticket-icon" name="ticket"></Icon>
          <Label size="tiny" color="blue" ribbon>
            IS-2777
          </Label>{" "}
          Sana Overdraft Notice
        </Menu.Item>
      ),
      render: () => <TaskInfo></TaskInfo>,
    },
    {
      menuItem: (
        <Menu.Item as="a" key="description">
          <Icon name="file alternate"></Icon>
          Description
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Description Content</Tab.Pane>,
    },
    {
      menuItem: (
        <Menu.Item as="a" key="comments">
          <Icon name="comments"></Icon>
          <Label color="pink" size="tiny" ribbon>
            15
          </Label>
          Comments
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Comments Content</Tab.Pane>,
    },
    {
      menuItem: (
        <Menu.Item as="a" key="checklist">
          <Icon name="tasks"></Icon>
          Checklist
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Comments Content</Tab.Pane>,
    },
  ];
  return (
    <>
      <Item>
        <ItemContent>
          <Segment>
            <ItemDescription>
              <Tab
                menu={{ fluid: true, tabular: true, vertical: true }}
                panes={panes}
              />
            </ItemDescription>
          </Segment>
        </ItemContent>
      </Item>
    </>
  );
}
