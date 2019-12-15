import React, { Component } from "react";
import { Container, Typography, Divider, Button } from "@material-ui/core";
import Header from "../components/Header";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="TabPanel"
      hidden={value !== index}
      id={`simple-TabPanel-${index}`}
      aria-label={`simple-tab-${index}`}
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
    "aria-controls": `simple-TabPanel-${index}`
  };
}

export default class Stats extends Component {
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
      <Container>
        <Header />
        <div style={{ marginTop: "70px" }}>
          <Typography
            variant="h4"
            style={{ lineHeight: 1, paddingBottom: "17px", fontWeight: "bold" }}
          >
            Stats
          </Typography>
          <div
            style={{
              flex: 1,
              flexDirection: "row",
              display: "flex"
            }}
          >
            <div>
              <Typography style={{ fontSize: "20px", paddingTop: "9px" }}>
                Click story below to view detailed stats
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
                style={{ textTransform: "none", fontSize: "19px" }}
              >
                Learn more about using stats
              </Button>
            </div>
          </div>
          <Divider />
        </div>
        <div>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab style={{ fontSize: "11px" }}
              label="Views"
              {...a11yProps(0)} />
            <Tab
              style={{ fontSize: "11px" }}
              label="Reads"
              {...a11yProps(1)}
            />
            <Tab
              style={{ fontSize: "11px" }}
              label="fans"
              {...a11yProps(2)}
            />
          </Tabs>
          <TabPanel value={this.state.value} index={0}>
            <Typography>Graph1</Typography>
          </TabPanel>
          <TabPanel value={this.state.value} index={1}>
            <Typography>Graph2</Typography>
          </TabPanel>
          <TabPanel value={this.state.value} index={2}>
            <Typography>Graph3</Typography>
          </TabPanel>
        </div>
      </Container>
    );
  }
}
