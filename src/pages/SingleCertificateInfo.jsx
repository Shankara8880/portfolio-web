import { styled } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { cloneElement, useState } from 'react'

const SingleCertificateInfo = () => {
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);
    function generate(element) {
        return [0, 1, 2].map((value) =>
            cloneElement(element, {
                key: value,
            }),
        );
    }
    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }))
    return <Card >
        <CardMedia
            sx={{ height: 200 }}
            image="/src/documents/certificates/000001.PNG"
            title="green iguana"
        />

        {/* <img className='img-fluid' src="/src/documents/certificates/000001.PNG" alt="hey" /> */}
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                SingleCertificateInfo
            </Typography>
            <Typography variant='h4'>Certificate from : company Name</Typography>
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant='h4' component="div">Learning Objective :</Typography>
                <Demo>
                    <List dense={dense}>
                        {generate(
                            <ListItem>
                                <ListItemText
                                    primary="item"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>,
                        )}
                    </List>
                </Demo>
            </Grid>
        </CardContent>

    </Card>
}

export default SingleCertificateInfo