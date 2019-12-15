import React, { Component } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';


export default class Bookmark extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div>
                        <Typography variant="h4" style={{ fontWeight: "bold", padding: "30px 0 30px 0" }}>
                            Bookmarks
                        </Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", border: "1px rgba(0,0,0,0.05) solid", padding: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <BookmarkIcon style={{ width: "30px", height: "30px", borderRight: "1px rgba(0,0,0,0.05) solid", paddingRight: "30px" }} />
                        </div>
                        <div>
                            <Typography variant="h4" style={{ paddingLeft: "15px", fontWeight: "bold" }}>
                                Offline reading is here.
                            </Typography>
                        </div>
                        <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                            <Button style={{ background: "black", color: "White" }}>Upgrade</Button>
                        </div>
                    </div>
                </Container>
            </div >
        )
    }
}
