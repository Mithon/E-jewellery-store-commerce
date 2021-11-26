import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Subscribe = () => {
    return (

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch', marginTop: 5, marginBottom: 5, border: 2 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined" />

            <button sx={{
                '& > :not(style)': { m: 1, hight: 1111, width: '25ch', marginTop: 5, marginBottom: 5, border: 2 },
            }}>Subscribs</button>

        </Box>

    );
}


export default Subscribe;