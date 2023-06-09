import { Input, Menu,MenuItem,MenuMenu } from "semantic-ui-react";
import { useState } from "react";
function Navbar() {
  const [activeItem, setActiveItem] = useState("todo");
  // Update the state
  const handleItemClick = (e,{name}) => {
    setActiveItem(name);
    console.log(name)
  };
  return (
    <Menu pointing inverted>
        <MenuItem header>PPDash</MenuItem>
      <MenuItem
        name="todo"
        active={activeItem === "todo"}
        onClick={handleItemClick}
      />
      <MenuItem
        name="bugtracker"
        active={activeItem === "bugtracker"}
        onClick={handleItemClick}
      />
      <MenuItem
        name="friends"
        active={activeItem === "friends"}
        onClick={handleItemClick}
      />
      <MenuMenu position="right">
        <MenuItem>
          <Input icon="search" placeholder="Search" />
        </MenuItem>
      </MenuMenu>
    </Menu>
  );
}

export default Navbar;
