import { useEffect, useState } from "react";
import { Button, Icon } from "semantic-ui-react";

export default function TaskInfoAccessButtons() {
  const [productionCheck, setProductionCheck] = useState(false);
  const handleProductionCheck = () => {
    setProductionCheck(!productionCheck);
  };

  useEffect(() => {}, [productionCheck]);
  return (
    <Button.Group size="mini" floated="right">
      <Button size="mini" color="teal">
        Change Assignee
      </Button>
      <Button.Or />
      <Button size="mini" color="orange">
        BugTracker
      </Button>
      <Button.Or />
      <Button
        size="mini"
        color="blue"
        onClick={handleProductionCheck}
        disabled={productionCheck}
      >
        {productionCheck ? (
          <>
            <Icon name="check"></Icon>Checked in Production
          </>
        ) : (
          <>Production Check</>
        )}
      </Button>
      <Button.Or />
      <Button size="mini" positive>
        Done
      </Button>
    </Button.Group>
  );
}
