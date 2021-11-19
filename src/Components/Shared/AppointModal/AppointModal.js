import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import React,{useState} from 'react';
import useAuth from './../../../Hooks/useAuth';

const AppointModal = ({openBooking,handleBookingClose,time,date,setBookingSuccess}) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '15px',
    p: 4,
  };

      const {user} =useAuth()
      const initialInfo = {patientName:user.displayName, email:user.email, phone:''}
      const [bookingInfo, setBookingInfo] = useState(initialInfo)
      const { name, timing, price } = time;
  
      const onHandleBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newBookingInfo = {...bookingInfo}
        newBookingInfo[field]=value;
        console.log(newBookingInfo);
        setBookingInfo(newBookingInfo)
      }

      const handleBookSubmit = (e) => {
          e.preventDefault();
          const appointment={
            ...bookingInfo,
            serviceName: name,
            timing,
            price,
            date: date.toLocaleDateString()
        }
        fetch('http://localhost:5000/appointments',
          {method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(appointment)}
        )
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              setBookingSuccess(true)
              handleBookingClose();
            }
          }
            )
      }
      
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography sx={{mb:5}} style={{color:"#5fc7c7", textAlign:'center'}} id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookSubmit}>
                <Box  sx={{display: 'flex' ,justifyContent: 'center', flexDirection: 'column' }}>
                
                <TextField
                    disabled
                    style={{width:"80%", margin:'5px auto'}}
                    id="outlined-size-small"
                    defaultValue={timing}
                    size="small"
                />
                
                <TextField
                    style={{width:"80%", margin:'5px auto'}}
                    id="outlined-size-small"
                    onBlur={onHandleBlur}
                    name="patientName"
                    defaultValue={user?.displayName}
                    size="small"
                />
                
                <TextField
                    style={{width:"80%", margin:'5px auto'}}
                    id="outlined-size-small"
                    onBlur={onHandleBlur}
                    name="phone"
                    defaultValue='Phone Number'
                    size="small"
                />
                
                <TextField
                    style={{width:"80%", margin:'5px auto'}}
                    id="outlined-size-small"
                    onBlur={onHandleBlur}
                    name="email"
                    defaultValue= {user?.email}
                    size="small"
                />
                
                <TextField
                    disabled
                    style={{width:"80%", margin:'5px auto'}}
                    id="outlined-size-small"
                    defaultValue= {date.toDateString()}
                    size="small"
                />
                
                <Button type='submit' sx={{px:3, ml:5}} variant="contained" style={{backgroundImage:'linear-gradient(to right, #19d3af 0%,#5fc7c7 40%, #5fc7c7 100%)', width:"25%" }}>Send</Button>
                </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default AppointModal;