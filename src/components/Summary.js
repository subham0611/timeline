import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { CardContent, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import PlayCircle from "@material-ui/icons/PlayCircleFilledWhiteOutlined";

const styles = () => ({
  innerSummary: {
    height: "70px",
    backgroundColor: "#899b8d",
    border: "1px solid #899b8d"
  },

  header: {
    paddingTop: "20px",
    paddingLeft: "23px"
  },
  flexColumn: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between !important",
    flexWrap:'wrap'
  },

  flex: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    height: "55px",
    justifyContent: "space-between"
  },
  summ: {
    fontWeight: "bold",
    color: "white",
    fontSize: "14px"
  },
  insideHeader: {
    fontWeight: "100",
    fontSize: "13px",
    paddingLeft: "10px"
  },
  secondSpan: {
    paddingLeft: "10px",
    fontSize: "12px"
  },

  thirdSpan: {
    paddingLeft: "10px",
    fontSize: "12px"
  },

  playBackSpan: {
    paddingTop: "16px"
    //paddingLeft: "12px"
  }
});

class SummaryCard extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() {
    const { classes } = this.props;
    const event = this.props.event;
    return (
      <div style={{marginTop:"0px"}}>
      <p style={{margin:"0px"}} > {this.props.summary}</p>
      </div>
    );
  }
}

export default withStyles(styles)(SummaryCard);
