import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
//import useAuth from '../../hooks/useAuth'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PurchageModal = ({ openExplore, handleCloseExplore, exploreProductt, setOrderSuccess }) => {
    const { productName, price } = exploreProductt;
    const { user } = useAuth();
    //  const initialInfo = { name: user.displayName, email: user.email, phone: '' }
    const initialInfo = { name: '', email: '', phone: '' }
    const [exploreInfo, setExploreInfo] = useState({ initialInfo });


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...exploreInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setExploreInfo(newInfo);
    }

    const handlePurchageSubmit = e => {
        //alert('submit');

        //collect data
        const order = {
            ...exploreInfo,
            productName: productName,
            price: price,
        }
        //send to the server
        fetch('https://pacific-scrubland-75231.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                    handleCloseExplore();

                }
                //console.log(data)
            })

        //console.log(order);
        // console.log(order);

        //handleCloseExplore();
        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openExplore}
            onClose={handleCloseExplore}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openExplore}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {productName}
                    </Typography>
                    <form onSubmit={handlePurchageSubmit}>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            //defaultValue={user.displayName}
                            defaultValue='Your Name'
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            defaultValue='Enter Email'
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}
                            size="small"
                        />

                        <Button type="submit" variant="contained">Comfirm Order</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default PurchageModal;