import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = () => ({
});

class Header extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() {
    const { classes } = this.props;
    const value = this.props.value;

    return (
      <div>
        {value}      
      </div>

    );
  }
}

export default withStyles(styles)(Header);
