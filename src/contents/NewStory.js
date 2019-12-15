import React, { Component } from "react";
import { Container, IconButton } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";

export default class NewStory extends Component {
  render() {
    return (
      <div stlye={{ flexGrow: 1 }}>
        <Container>
          <div style={{ padding: "80px 120px 80px 120px" }}>
            <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
              <div style={{ paddingTop: "56px" }}>
                <IconButton>
                  <AddCircleOutlineIcon style={{ width: 50, height: 50 }} />
                </IconButton>
              </div>
              <div
                style={{ flex: 1, flexDirection: "column", display: "flex" }}
              >
                <TextField
                  multiline="true"
                  placeholder="Title"
                  inputProps={{
                    style: { fontSize: "50px", lineHeight: "56px" }
                  }}
                ></TextField>
                <TextField
                  multiline="true"
                  placeholder="Tell Your Story.."
                  inputProps={{
                    style: { fontSize: "30px", lineHeight: "36px" }
                  }}
                ></TextField>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
