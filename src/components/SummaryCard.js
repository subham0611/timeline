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
    justifyContent: "space-between !important"
  },

  flex: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    height: "55px"
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
  render() {
    const { classes } = this.props;
    return (
      <div style={{ height: "70px"}}>
        <Grid container>
          <Grid item xs={3}>
            <Card className={classes.innerSummary}>
              <CardContent className={classes.header}>
                <span className={classes.summ}>Summary</span>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ height: "70px", border: "1px solid #899b8d" }}>
              {this.props.icon === "Voicemail" ? (
                <div className={classes.flexColumn}>
                  <span className={classes.insideHeader}>VOICEMAIL</span>
                  <span className={classes.secondSpan}>1min</span>
                  <span className={classes.thirdSpan}>duration</span>
                </div>
              ) : (
                <div className={classes.flexColumn}>
                  <span className={classes.insideHeader}>P2P</span>
                  <span className={classes.secondSpan}>$120M</span>
                  <span className={classes.thirdSpan}>by Nov 26,2018</span>
                </div>
              )}
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card style={{ height: "70px", border: "1px solid #899b8d" }}>
              {this.props.icon === "Voicemail" ? (
                <div className={classes.flex}>
                  <Button>
                    <PlayCircle />
                  </Button>
                  <span className={classes.playBackSpan}>Playback</span>
                </div>
              ) : (
                <div className={classes.flexColumn}>
                  <span className={classes.insideHeader}>DISPUTES</span>
                  <span className={classes.secondSpan}>2 Invoices</span>
                  <span className={classes.thirdSpan}>pending resolution</span>
                </div>
              )}
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SummaryCard);
