import { Alert, Backdrop, Fade, Grid, Modal } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PurchageModal from '../../Components/PurchageModal/PurchageModal';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Box, style } from '@mui/system';



const a = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color: 'white',
    p: 4,
};





const ExploreProductt = ({ exploreProductt, setOrderSuccess }) => {
    const { productName, img, discription, price } = exploreProductt;
    const [openExplore, setOpenExplore] = React.useState(false);
    const handleOpenExplore = () => setOpenExplore(true);
    const handleCloseExplore = () => setOpenExplore(false);
    const { user, email } = useAuth();
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Card sx={{ minWidth: 275, borderRadius: 5, border: 1 }}>
                        <CardMedia
                            component="img"
                            style={{ width: '230px', height: '200px', margin: '0 auto' }}
                            image={img}
                            alt="green iguana"
                        />
                    </Card>
                    <Typography variant="h5" gutterBottom component="div">
                        {productName}
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        {discription}
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        {price}
                    </Typography>
                    <Button onClick={handleOpenExplore} variant="contained">Buy Now</Button>
                </Paper>
            </Grid>
            {user?.email ? < PurchageModal
                exploreProductt={exploreProductt}
                openExplore={openExplore}
                handleCloseExplore={handleCloseExplore}
                setOrderSuccess={setOrderSuccess}
            >
            </PurchageModal>
                :
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
                        <Box sx={a}>
                            <h1>Please Login First</h1>
                        </Box>
                    </Fade>
                </Modal>
            }
        </>
    );
};

export default ExploreProductt;