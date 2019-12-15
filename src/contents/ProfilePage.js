import React, { Component } from 'react';
import { Typography, Button, Avatar } from '@material-ui/core';

export default class ProfilePage extends Component {
    render() {
        return (
            <div style={{ padding: "50px 300px 50px 300px" }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: "row", paddingBottom: "50px" }}>
                    <div style={{
                        flex: 1, display: 'flex', flexDirection: "column"
                    }} >
                        <div style={{ display: 'flex', flexDirection: "row", marginBottom: "15px" }}>
                            <Typography variant="h5" style={{ fontWeight: "bold", marginRight: "15px" }}>Samuel Tobing</Typography>
                            <Button style={{ textTransform: "none", fontSize: "12px", border: "1px black solid", lineHeight: "14px" }}>Edit Profile</Button>
                        </div>
                        <Typography variant="caption" style={{ color: "grey" }}>
                            1 Following
                        </Typography>
                    </div>
                    <div>
                        <Avatar
                            alt="avatar"
                            style={{ width: "150px", height: "150px" }}
                            src={
                                "https://miro.medium.com/fit/c/256/256/1*5HuPOJPsdTfmCoYOYwtCpw.jpeg"
                            }
                        />
                    </div>
                </div>
                <div>
                    <Typography style={{ fontSize: "14px", fontWeight: "200", color: "grey" }}>Samuel Tobing hasn’t been active on Medium yet. Check back later to see their stories, claps, and highlights.</Typography>
                </div>
            </div >
        )
    }
}
