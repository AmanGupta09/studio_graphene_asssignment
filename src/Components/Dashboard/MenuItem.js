import React,{useState} from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";


const MenuNavItem = ({menu}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const childItem = () => {
       const itmes = menu.child.map((item) => ( <MenuItem onClick={handleClose}>{item.name}</MenuItem>))
        return itmes;
    }

  return (
    <span>
      <Button
        id={menu.id}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
     <span className="menuItem">{menu.name}</span>  
      </Button>

      <Menu
        id={menu.id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {childItem()}
      </Menu>
    </span>
  );
};

export default MenuNavItem;
