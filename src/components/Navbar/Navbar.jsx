import { Input, Menu, MenuItem, MenuMenu, Sticky } from "semantic-ui-react";
import { useState } from "react";
function Navbar() {
  const [activeItem, setActiveItem] = useState("todo");
  // Update the state
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    console.log(name);
  };
  return (
    <Sticky>
      <Menu pointing inverted attached="top">
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
    </Sticky>
  );
}

export default Navbar;
