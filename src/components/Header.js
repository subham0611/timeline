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
