/* eslint-disable no-undef */
import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Voicemail from "@material-ui/icons/Voicemail";
import Button from '@material-ui/core/Button';
import Mail from "@material-ui/icons/Mail";
import Call from "@material-ui/icons/Call";
import SummaryCard from "./SummaryCard";
import Header from "./Header";
import { Timeline, TimelineEvent } from "react-event-timeline";

const styles={
  btnMore:{
    width:'86%',
    marginLeft:'10%',
    backgroundColor: '#696969',
  }
};

class TimeLine extends Component {

  constructor(props){

    super(props);
    this.props = props;
    this.revEvents = [...props.events].reverse();

    this.state = {topEvents: this.revEvents};

    //this.displayMore = true;

  }

  handleClick() {
   // this.displayMore = false;
    this.setState({topEvents:this.revEvents});     
  }

  convertStringToDate(stringDate){
    console.log("String Date = " + stringDate);
    const newDate = new Date(Date.parse(stringDate));
    let nextDay = new Date();
    nextDay.setDate(newDate.getDate() + 1);
    console.log("DATE + " + newDate);

    const today = new Date();
    let day = "Older";

    if(newDate.getDay() === today.getDay() && newDate.getMonth() === today.getMonth() &&
      newDate.getFullYear() === today.getFullYear()){
        day = "Today";
    }else if(nextDay.getDay() === today.getDay() && nextDay.getMonth() === today.getMonth() &&
            nextDay.getFullYear() === today.getFullYear()){
      day = "Yesterday";
    }

    return day + " " + stringDate;
  }

  render() {
    
    return (
      <div>
      <Timeline style={{padding:"0px", marginRight:"0px", marginLeft:"2%"}}>
        {this.state.topEvents.map(event => (
          <TimelineEvent
            contentStyle={{marginTop:"0px",marginRight:"0px",padding:"0px"}}
            title=""
            titleStyle={{ fontSize: "13px", margin:"0px",padding:"0px"}}
            createdAt={this.convertStringToDate(event.date)}
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

          <Header contact={event.contact} icon={event.icon} duration={event.duration} startTime={event.startTime}/>
            <hr width="0" />
          
          <SummaryCard event="mail" summary={event.callSummary} />
            
          </TimelineEvent>
        ))}
        
        
      </Timeline>
      </div>
    );
  }
}

export default withStyles(styles)(TimeLine);
