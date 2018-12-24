import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = () => ({
});

class Summary extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{marginTop:"0px"}}>
      <p style={{margin:"0px"}} > {this.props.summary}</p>
      </div>
    );
  }
}

export default withStyles(styles)(Summary);
