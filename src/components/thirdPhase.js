import React from "react";

import { Box, Card, CardContent, Button, Typography } from '@mui/material';

const ThirdPhase = (props) => {

    const renderList = props.data.map((products) => {
        const { by_who, description, priority, stage, task } = products
        const cardStyle = {
            display: "block",
            transitionDuration: "0.3s",
            width: "24vw",
        };
        return (
            <>
                <Box component="span" sx={{ display: 'inline-block', transform: 'scale(0.8)', flexFlow: 1 }}>
                    <Card style={cardStyle} sx={{ minWidth: 10 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {task}
                            </Typography>
                            <Typography>
                                {description}
                                <br />
                                <br />
                                <br />
                            </Typography>
                            <div className="row">
                                <div className="col-6">
                                    Assignee name: {by_who}
                                </div>
                                <div className="col-6">
                                    <Button variant="contained" size="small">Priority:{priority}</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Box>
            </>
        )
    })

    return (
        <>
             <div class="row">
                <div className="stage3-left col-2" >
                    <h1>Stage 3</h1>
                </div>
                <div className="stage3-right col-10">
                    {renderList}
                </div>
            </div>
        </>
    )

}

export default ThirdPhase