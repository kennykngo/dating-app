import React from "react";
import Button from "@material-ui/core/Button";

const Smoke4 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleSmokes(props.value);
        }}
        disableElevation
      >
        Trying to quit
      </Button>
    </div>
  );
};

export default Smoke4;
