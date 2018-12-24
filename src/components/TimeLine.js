/* eslint-disable no-undef */
import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Summary from "./Summary";
import SummaryCard from "./SummaryCard";
import Header from "./Header";
import Icon from "./Icon";
import { Timeline, TimelineEvent } from "react-event-timeline";

const styles={
};

class TimeLine extends Component {

  constructor(props){
    super(props);
    this.props = props;
    this.revEvents = [...props.events].reverse();
    this.state = {topEvents: this.revEvents};
  }

  handleClick() {
    this.setState({topEvents:this.revEvents});     
  }

  convertStringToDate(stringDate){
    const months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ]; 

    const newDate = new Date(Date.parse(stringDate));
    let nextDay = new Date();
    nextDay.setDate(newDate.getDate() + 1);
    const today = new Date();

    let month = newDate.getMonth();
    month = months[month];
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    stringDate = month + " " + day + "," + year;
    
    let dayStatus = "Older";
    
    if(newDate.getDate() === today.getDate() && newDate.getMonth() === today.getMonth() &&
      newDate.getFullYear() === today.getFullYear()){
        dayStatus = "Today";
    }else if(nextDay.getDate() === today.getDate() && nextDay.getMonth() === today.getMonth() &&
            nextDay.getFullYear() === today.getFullYear()){
          dayStatus = "Yesterday";
    }

    return dayStatus + " " + stringDate;
  }

  getHeader = (index, icon, event) => {      
    if(icon){
      icon = icon.toUpperCase();
    }
   
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
    }else if(index === 2) {
      return null;
    }else {
      return (<span>Transaction Number {event.documentNumber} at ::</span> );
    }
  }

  render() {   
    return (
      <Timeline style={{padding:"0px", margin:"0px",marginLeft:"2%"}}>
        {this.state.topEvents.map((event,index) => (
          <TimelineEvent
            key = {index}
            contentStyle={{margin:"0px",padding:"0px"}}
            title=""
            titleStyle={{ fontSize: "13px", margin:"0px",padding:"0px"}}
            createdAt={this.convertStringToDate(event.date || event.paymentDate)}
            icon = {<Icon icon={event.icon} />}
            iconColor={"#808080"}
            bubbleStyle={{ fontSize: "5px" }}
          >

          <Header value={this.getHeader(this.props.index, event.icon, event)} />       
          
          <hr width="0" />

          {this.props.summaryWithCard === true ?
            <SummaryCard summary={event} /> 
            :<Summary  summary={event.callSummary} />
          }        
            
          </TimelineEvent>
        ))}

      </Timeline>
    );
  }
}

export default withStyles(styles)(TimeLine);
