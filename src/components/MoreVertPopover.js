import React, { Component } from "react";
import Popover from "@material-ui/core/Popover";
import MoreVert from "@material-ui/icons/MoreVert";
import Forum from "@material-ui/icons/ForumOutlined";
import { withStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import TimeLine from "./TimeLine";
import "../App.css";
import { Button } from "@material-ui/core";

const styles = theme => ({
  popOVer: {
    height: "13.125em",
    width: "19.500em"
  },

  paper: {
    position: "absolute",
    width: theme.spacing.unit * 70,
    height: "100%",
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },

  flex: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "10px"
  },

  flexColumn: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  title: {
    fontSize: "1.00em"
  },

  titleDesc: {
    fontSize: "0.750em"
  }
});

class VertPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modal: false,
      index: "0"
    };

    this.events = [
                    {
                      icon: "Voicemail",
                      content: "voicemail content",
                      date: "Yesterday,Nov 19,2018"
                    },
                    {
                      icon: "Voicemail",
                      content: "voicemail content",
                      date: "Yesterday,Nov 19,2018"
                    },
                    {
                      icon: "Mail",
                      content: "mail component",
                      date: "Today,Nov 20,2018"
                    },
                    {
                      icon: "Call",
                      content: "call component",
                      date: "Today,Nov 20,2018"
                    }
                  ];
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  openModal = num => {
    this.setState({ modal: true, index: num });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <Button onClick={this.handleOpen}>
          <MoreVert />
        </Button>
        <Popover
          id="simple-popper"
          open={this.state.open}
          onClose={this.handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 65, left: 550, right: -10 }}
          PaperProps={{
            style: { marginTop: "3em" }
          }}
          anchorOrigin={{
            vertical: 20,
            horizontal: 20
          }}
          transformOrigin={{
            vertical: 20,
            horizontal: 20
          }}
        >
          <div className={classes.popOVer}>
            <div onClick={() => this.openModal("1")} className={classes.flex}>
              <Button style={{ borderRadius: "50%" }}>
                <Forum />
              </Button>
              <div className={classes.flexColumn}>
                <span className={classes.title}>Communication History</span>
                <span className={classes.titleDesc}>Last call 3 days ago</span>
              </div>
            </div>
            <hr width="265" />
            <div onClick={() => this.openModal("2")} className={classes.flex}>
              <Button style={{ borderRadius: "50%" }}>
                <Forum />
              </Button>
              <div className={classes.flexColumn}>
                <span className={classes.title}>Past Due Invoices</span>
                <span className={classes.titleDesc}>
                  total :10 Invoices | $432M
                </span>
              </div>
            </div>
            <hr width="265" />
            <div onClick={() => this.openModal("3")} className={classes.flex}>
              <Button style={{ borderRadius: "50%" }}>
                <Forum />
              </Button>
              <div className={classes.flexColumn}>
                <span className={classes.title}>Recent Payments</span>
                <span className={classes.titleDesc}>
                  2 payments worth $120M
                </span>
              </div>
            </div>
          </div>
        </Popover>
        <Modal open={this.state.modal} onClose={this.closeModal}>
          <div className={classes.paper}>
            {this.state.index === "1" ? (
              <div>
                <h3>COMMUNICATION HISTORY</h3>
                <TimeLine
                  events={this.events}
                />
              </div>
            ) : null}
            {this.state.index === "2" ? <div> Past due Invoices</div> : null}
            {this.state.index === "3" ? <div> Recent Payments</div> : null}
          </div>
        </Modal>
      </div>
    );
  }
}

const VertPopoverWrapped = withStyles(styles)(VertPopover);

export default VertPopoverWrapped;
