import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Voicemail from "@material-ui/icons/Voicemail";
import Dollar from "@material-ui/icons/AttachMoney";
import Euro from "@material-ui/icons/EuroSymbol";
import Mail from "@material-ui/icons/Mail";
import Call from "@material-ui/icons/Call";

const styles = () => ({
});

class Icon extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  getIconStyle = icon => {
    if(!icon)
      return null;
    icon = icon.toUpperCase();
    switch(icon){
      case "VOICEMAIL" :
        return <Voicemail />
      case "MAIL" :
        return <Mail />
      case "CALL" :
        return <Call />
      case "DOLLAR" :
        return <Dollar />
      case "EURO" :
        return <Euro />
    }
  }

  render() {
    const { classes } = this.props;
    const icon = this.props.icon;

    return (
       this.getIconStyle(icon)
       
    );
  }
}

export default withStyles(styles)(Icon);
