import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Typography, Button } from "@material-ui/core";
import Header from "../components/Header";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div
          p={3}
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            padding: "100px"
          }}
        >
          {children}
        </div>
      )}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
export default class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <div stlye={{ flexGrow: 1 }}>
        <Container>
          <Header />
          <div
            style={{
              flex: 1,
              flexDirection: "column",
              display: "flex",
              justifyContent: "row",
              paddingTop: "50px"
            }}
          >
            <div
              style={{
                flex: 1,
                flexDirection: "row",
                display: "flex"
              }}
            >
              <div>
                <Typography
                  style={{
                    fontSize: "40px",
                    lineHeight: "44px"
                  }}
                >
                  Your Stories
                </Typography>
              </div>
              <div
                style={{
                  flex: 1,
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "8px"
                }}
              >
                <Button
                  variant="outlined"
                  style={{ fontSize: "11px", lineHeight: "12px" }}
                >
                  Import a Story
                </Button>
                <Button
                  style={{
                    marginLeft: "10px",
                    border: "1px green solid",
                    fontSize: "11px",
                    lineHeight: "13px"
                  }}
                >
                  Write a Story
                </Button>
              </div>
            </div>

            <div>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                aria-label="simple tabs example"
              >
                <Tab
                  style={{ fontSize: "11px" }}
                  label="Drafts"
                  {...a11yProps(0)}
                />
                <Tab
                  style={{ fontSize: "11px" }}
                  label="Published"
                  {...a11yProps(1)}
                />
              </Tabs>
              <TabPanel value={this.state.value} index={0}>
                <Typography>You have no drafts</Typography>
                <Typography style={{ paddingTop: "20px" }}>
                  Write on the go with our iOS and Android apps!
                </Typography>
              </TabPanel>
              <TabPanel value={this.state.value} index={1}>
                <Typography>
                  You haven’t published any public stories yet.
                </Typography>
              </TabPanel>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
