import React, { Component } from "react";
import Popover from "@material-ui/core/Popover";
import MoreVert from "@material-ui/icons/MoreVert";
import Forum from "@material-ui/icons/ForumOutlined";
import { withStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import TimeLine from "./TimeLine";
import TimeLine1 from "./TimeLine1";
import "../App.css";
import { Button } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  popOVer: {
    marginBottom:"2%"
  },

  paper: {
    position: "absolute",
    width:"40%",
    height: "100%",
    overflowWrap:"break-word",
    overflowY: "auto",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    paddingLeft: "1%"
  },

  noMargin:{
    margin:"0px",
    marginBottom:"0px"
  },

  flex: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap:"wrap"
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
                      date: "Yesterday,Nov 19,2018",
                      callSummary: "Call summary 1",
                      contact: {
                        "address": "string",
                        "city": "string",
                        "country": "string",
                        "email": "string",
                        "extension": "string",
                        "faxNumber": "string",
                        "firstName": "string",
                        "id": 0,
                        "isPrimary": true,
                        "lastName": "string",
                        "mobileNumber": "string",
                        "phoneNumber": "string",
                        "role": "string",
                        "state": "string",
                        "title": "string",
                        "type": "string",
                        "zip": "string"
                      },  
                    },
                    {
                      icon: "Voicemail",
                      content: "voicemail content",
                      date: "Nov 19,2018",
                      callSummary: "Call summary 2",
                      contact: {
                        "address": "string",
                        "city": "string",
                        "country": "string",
                        "email": "string",
                        "extension": "string",
                        "faxNumber": "string",
                        "firstName": "string",
                        "id": 0,
                        "isPrimary": true,
                        "lastName": "string",
                        "mobileNumber": "string",
                        "phoneNumber": "string",
                        "role": "string",
                        "state": "string",
                        "title": "string",
                        "type": "string",
                        "zip": "string"
                      },
                    },
                    {
                      icon: "Voicemail",
                      content: "voicemail component",
                      date: "Dec 16,2018",
                      callSummary: "Call summary 3",
                      contact: {
                        "address": "string",
                        "city": "string",
                        "country": "string",
                        "email": "string",
                        "extension": "string",
                        "faxNumber": "string",
                        "firstName": "Jessica",
                        "id": 0,
                        "isPrimary": true,
                        "lastName": "Pearson",
                        "mobileNumber": "1234567890",
                        "phoneNumber": "1234567890",
                        "role": "string",
                        "state": "string",
                        "title": "string",
                        "type": "string",
                        "zip": "string"
                      },
                      customerId: 0,
                      duration: 0,
                      endTime: "2018-12-18T07:12:21.507Z",
                      extension: "string",
                      id: 0,
                      note: {
                        "createdTime": "2018-12-18T07:12:21.507Z",
                        "createdUser": "string",
                        "customerId": 0,
                        "documentIds": [
                          0
                        ],
                        "id": 0,
                        "noteContent": "string",
                        "subject": "string"
                      },
                      startTime: "2018-12-18T07:12:21.507Z",
                      status: "string",
                      totalOpenAmount: 0,
                      totalPastDueAmount: 0
                    },
                    {
                      icon: "Call",
                      content: "call component",
                      date: "Dec 18,2018",
                      callSummary: "Call summary 4",
                      contact: {
                        "address": "string",
                        "city": "string",
                        "country": "string",
                        "email": "string",
                        "extension": "string",
                        "faxNumber": "string",
                        "firstName": "Harvey",
                        "id": 0,
                        "isPrimary": true,
                        "lastName": "Specter",
                        "mobileNumber": "1234567890",
                        "phoneNumber": "1234567890",
                        "role": "string",
                        "state": "string",
                        "title": "string",
                        "type": "string",
                        "zip": "string"
                      },    
                      customerId: 0,
                      duration: 0,
                      endTime: "2018-12-18T07:12:21.507Z",
                      extension: "string",
                      id: 0,
                      note: {
                        "createdTime": "2018-12-18T07:12:21.507Z",
                        "createdUser": "string",
                        "customerId": 0,
                        "documentIds": [
                          0
                        ],
                        "id": 0,
                        "noteContent": "string",
                        "subject": "string"
                      },
                      startTime: "2018-12-18T07:12:21.507Z",
                      status: "string",
                      totalOpenAmount: 0,
                      totalPastDueAmount: 0        
                    },
                    {
                      icon: "Call",
                      content: "call component",
                      date: "Dec 18,2018",
                      callSummary: "Call summary 4",
                      contact: {
                        "address": "string",
                        "city": "string",
                        "country": "string",
                        "email": "string",
                        "extension": "string",
                        "faxNumber": "string",
                        "firstName": "Harvey",
                        "id": 0,
                        "isPrimary": true,
                        "lastName": "Specter",
                        "mobileNumber": "1234567890",
                        "phoneNumber": "1234567890",
                        "role": "string",
                        "state": "string",
                        "title": "string",
                        "type": "string",
                        "zip": "string"
                      },    
                      customerId: 0,
                      duration: 0,
                      endTime: "2018-12-18T07:12:21.507Z",
                      extension: "string",
                      id: 0,
                      note: {
                        "createdTime": "2018-12-18T07:12:21.507Z",
                        "createdUser": "string",
                        "customerId": 0,
                        "documentIds": [
                          0
                        ],
                        "id": 0,
                        "noteContent": "string",
                        "subject": "string"
                      },
                      startTime: "2018-12-18T07:12:21.507Z",
                      status: "string",
                      totalOpenAmount: 0,
                      totalPastDueAmount: 0        
                    },
                    {
                      icon: "Call",
                      content: "call component",
                      date: "Dec 18,2018",
                      callSummary: "Call summary 4",
                      contact: {
                        "address": "string",
                        "city": "string",
                        "country": "string",
                        "email": "string",
                        "extension": "string",
                        "faxNumber": "string",
                        "firstName": "Harvey",
                        "id": 0,
                        "isPrimary": true,
                        "lastName": "Specter",
                        "mobileNumber": "1234567890",
                        "phoneNumber": "1234567890",
                        "role": "string",
                        "state": "string",
                        "title": "string",
                        "type": "string",
                        "zip": "string"
                      },    
                      customerId: 0,
                      duration: 0,
                      endTime: "2018-12-18T07:12:21.507Z",
                      extension: "string",
                      id: 0,
                      note: {
                        "createdTime": "2018-12-18T07:12:21.507Z",
                        "createdUser": "string",
                        "customerId": 0,
                        "documentIds": [
                          0
                        ],
                        "id": 0,
                        "noteContent": "string",
                        "subject": "string"
                      },
                      startTime: "2018-12-18T07:12:21.507Z",
                      status: "string",
                      totalOpenAmount: 0,
                      totalPastDueAmount: 0        
                    }
                  ];

  this.payments = [
    {
      currency: "string",
      customerId: "string",
      documentNumber: "string",
      id: 0,
      paymentAmount: 0,
      paymentDate: "2018-12-21"
    },
    {
      currency: "string",
      customerId: "string",
      documentNumber: "string",
      id: 0,
      paymentAmount: 0,
      paymentDate: "2018-12-21"
    },
    {
      currency: "string",
      customerId: "string",
      documentNumber: "string",
      id: 0,
      paymentAmount: 0,
      paymentDate: "2018-12-21"
    }
  ]
  };
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

  getModal = num => {
    const { classes } = this.props;
    if(num === "1"){
      return (
        <div className={classes.noMargin}>
          <h4 style={{margin:"1%"}}>COMMUNICATION HISTORY</h4>
          <TimeLine index={1} events={this.events} />
        </div>
      );
    }else if(num === "2"){
      return (
      <div className={classes.noMargin}>            
             <h4 style={{margin:"1%"}}>Past due Invoices</h4>
             <TimeLine1 events={this.payments} />      
      </div>  
      );
    }else{
      return (
        <div className={classes.noMargin}>
               
               <h4 style={{margin:"1%"}}>Recent Payments</h4>
               <TimeLine index={3} summaryWithCard={true} events={this.payments} />             
               </div>  
        );
    }
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
      <Modal open={this.state.modal} disableAutoFocus={true} onClose={this.closeModal}>
          <div className={classes.paper}>
           {this.getModal(this.state.index)}
          </div>
        </Modal>
        
      </div>
    
      
    );
  }
}
const VertPopoverWrapped = withStyles(styles)(VertPopover);

export default VertPopoverWrapped;
