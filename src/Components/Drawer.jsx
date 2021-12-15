import React from "react";
import { Typography, Drawer } from "@material-ui/core";
import PropertiesPanel from "./PropertiesPanel";

const SideDrawer = () => {
  return (
    <div>
      <Drawer variant="permanent" anchor="right" style={{ zIndex: -10 }}>
        <Typography variant="h6" style={{ margin: "50px" }}>
          Details of the unit :
        </Typography>
        <Typography>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <label>Name</label>
            <input style={{marginLeft: '10px'}}></input>
          </div>
          <div>
            <label>Label</label>
            <input style={{marginLeft: '10px'}}></input>
          </div>
          <div>
            <label>Model</label>
            <input style={{marginLeft: '10px'}}></input>
          </div>
        </Typography>
        <PropertiesPanel />
      </Drawer>
    </div>
  );
};

export default SideDrawer;
