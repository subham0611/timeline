/* eslint-disable no-undef */
import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Voicemail from "@material-ui/icons/Voicemail";
import Button from '@material-ui/core/Button';
import Mail from "@material-ui/icons/Mail";
import Call from "@material-ui/icons/Call";
import Summary from "./Summary";
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
        return <i class="material-icons">
        attach_money
        </i>;
    }
  }

  getHeader = (index, icon, event) => {  
    if(!icon){
      return ""
    }
    icon = icon.toUpperCase();
    if(index === 1){
      switch(icon){
        case "VOICEMAIL" :
         return (
          <span>
          VM <b>{event.contact.firstName} {event.contact.lastName}</b> ({event.contact.phoneNumber}) 
          at <b>{event.startTime}</b>({event.duration} min duration)
         </span>
         );

        case "CALL" :
          return(
            <span>
          Called <b>{event.contact.firstName} {event.contact.lastName}</b> ({event.contact.phoneNumber}) 
          at <b>{event.startTime}</b>({event.duration} min duration)
      </span>
          );
          
        case "MAIL" :
            return (
              <span>
                Mail
              </span>
            );
      }
    }
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
            icon={this.getIconStyle(event.icon)}
            iconColor={"#808080"}
            bubbleStyle={{ fontSize: "5px" }}
          >

          <Header value={this.getHeader(1, event.icon, event)} />       
          
          <hr width="0" />

          {this.props.summaryWithCard === true ?
            <SummaryCard summary={event} /> 
            :<Summary  summary={event.callSummary} />
          }
          
            
          </TimelineEvent>
        ))}
        
        
      </Timeline>
      </div>
    );
  }
}

export default withStyles(styles)(TimeLine);
