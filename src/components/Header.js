import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

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

class Header extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() {
    const { classes } = this.props;
    const icon = this.props.icon;
    const contact = this.props.contact;
    const duration = this.props.duration;
    const startTime = this.props.startTime;

    return (
        <div>
        {icon === "Mail" ? (
            <span>
              Reply from {contact.firstName} {contact.lastName} ({contact.email}) at (mail
              extracted)
            </span>
          ) : ( icon === "Voicemail") ? (
            <span>
                VM <b>{contact.firstName} {contact.lastName}</b> ({contact.phoneNumber}) 
                at <b>{startTime}</b>({duration} min duration)
            </span>
          ): (
            <span>
              Called <b>{contact.firstName} {contact.lastName}</b> ({contact.phoneNumber}) 
              at <b>{startTime}</b> ({duration} min duration)
            </span>
          )}
        </div>
    );
  }
}

export default withStyles(styles)(Header);
