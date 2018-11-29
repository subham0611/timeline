/* eslint-disable no-undef */
import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Voicemail from "@material-ui/icons/Voicemail";
import Button from '@material-ui/core/Button';
import Mail from "@material-ui/icons/Mail";
import Call from "@material-ui/icons/Call";
import SummaryCard from "./SummaryCard";
import { Timeline, TimelineEvent } from "react-event-timeline";

const styles={
  btnMore:{
    width:'86%',
    marginLeft:'13%',
    backgroundColor: '#696969',
  }
};

class TimeLine extends Component {

  constructor(props){

    super(props);
    this.props = props;
    this.revEvents = [...props.events].reverse();

    var topEvents = [];
    if(this.revEvents.length > 0)
      topEvents.push(this.revEvents[0]);
    if(this.revEvents.length > 1)
      topEvents.push(this.revEvents[1]);
    
    this.state = {topEvents: topEvents};

    this.displayMore = true;

  }

  displayMoreButton(){
    const { classes } = this.props;
    if(this.revEvents.length > 2 && this.displayMore === true){
      return(
        <Button variant="contained" className={classes.btnMore} size="medium" color='default' fullWidth="true" onClick={()=> this.handleClick()}>
          More
        </Button>
      );
    }
  }

  handleClick() {
    this.displayMore = false;
    this.setState({topEvents:this.revEvents});     
  }

  render() {
    var moreButton = this.displayMoreButton();
    
    return (
      <div>
      <Timeline>
        {this.state.topEvents.map(event => (
          <TimelineEvent
            title="John Smith"
            titleStyle={{ fontSize: "13px" }}
            createdAt={event.date}
            icon={
              event.icon === "Voicemail" ? (
                <Voicemail />
              ) : event.icon === "Mail" ? (
                <Mail />
              ) : (
                <Call />
              )
            }
            iconColor={"#808080"}
            bubbleStyle={{ fontSize: "5px" }}
          >
            {event.icon === "Mail" ? (
              <span>
                Reply from {event.Name}({event.mailId}) at {event.time}(mail
                extracted)
              </span>
            ) : (
              <span>
                Called {event.callerName}({event.phoneNumber}) at {event.time}(
                {event.duration}min duration)
              </span>
            )}
            <hr width="0" />
            <SummaryCard icon={event.icon} />
            
          </TimelineEvent>
        ))}
        
        
      </Timeline>
      <div >
      {moreButton}
      </div>
      
      
      </div>
    );
  }
}

export default withStyles(styles)(TimeLine);
