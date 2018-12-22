import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { CardContent, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  innerSummary: {
    height: "100%",
    backgroundColor: "#696969",
    border: "1px solid #899b8d"
  },

  header: {
    padding: "5%",
    paddingBottom:"5%",
    align:"center"
  },
  flexColumn: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap:"wrap",
    justifyContent: "space-between !important"
  },

  summ: {
    fontWeight: "bold",
    color: "white",
    fontSize: "14px"
  },
  insideHeader: {
    fontWeight: "100",
    fontSize: "13px",
    paddingLeft: "5%"
  },
  secondSpan: {
    paddingLeft: "5%",
    fontSize: "12px"
  },
  card :{
    height: "100%", 
    border: "1px solid #899b8d"
  }
});

class SummaryCard extends Component {

generateGrid = () => {

    let value = [this.payment.paymentAmount, this.payment.paymentDate, "345"];
    let header = ["Amount", "Date", "c"];
    const gridSize = 12 / (value.length + 1);

    let grid = [];
    grid.push(this.getGridHeader("Payment Info", 2));

    for(let i = 0; i < value.length; i++){
        grid.push(this.getGridItem(value[i], header[i], gridSize));
    }

    return grid;
}

getGridHeader = (header, gridSize) => {
    const { classes } = this.props;
    return (
        <Grid item xs={gridSize}>
            <Card style={{ height: "80%", border: "1px solid #899b8d" }} className={classes.innerSummary}>
              <CardContent className={classes.header}>
                <span className={classes.summ}>{header}</span>
              </CardContent>
            </Card>
        </Grid>
    );
}

getGridItem = (value, header, gridSize) => {
    const { classes } = this.props;
    return (
        <Grid item xs={gridSize}>
            <Card style={{ height: "80%", border: "1px solid #899b8d" }}>
                <div className={classes.flexColumn}>
                  <span className={classes.insideHeader}>{value}</span>
                  <span className={classes.secondSpan}>{header}</span>
                </div>
            </Card>
          </Grid>
    );
}

constructor(props){
    super(props);
    this.props = props;
    this.payment = this.props.summary;
}
  render() {
    const { classes } = this.props;
    return (
      <div style={{ height: "100%" }}>
        <Grid container>
          {this.generateGrid()}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SummaryCard);