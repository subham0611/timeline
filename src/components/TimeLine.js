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

    const months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ]; 

    const newDate = new Date(Date.parse(stringDate));
    let nextDay = new Date();
    nextDay.setDate(newDate.getDate() + 1);

    let month = newDate.getMonth();
    month = months[month];
    let day = newDate.getDate();
    let year = newDate.getFullYear();

    stringDate = month + " " + day + "," + year;
    const today = new Date();
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
      <div>
      <Timeline style={{padding:"0px", marginRight:"0px", marginLeft:"2%"}}>
        {this.state.topEvents.map(event => (
          <TimelineEvent
            contentStyle={{marginTop:"0px",marginRight:"0px",padding:"0px"}}
            title=""
            titleStyle={{ fontSize: "13px", margin:"0px",padding:"0px"}}
            createdAt={this.convertStringToDate(event.date || event.paymentDate)}
            icon={this.getIconStyle(event.icon)}
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
      </div>
    );
  }
}

export default withStyles(styles)(TimeLine);
