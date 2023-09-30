import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Button from '../../../fragments/Button/Button'; // Assuming this is a custom button component

function ImageSectionComponent() {
  const [open, setOpen] = useState(false);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [rooms, setRooms] = useState(1);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCheckin = (e) => {
    setCheckin(e.target.value);
  };

  const handleCheckOut = (e) => {
    setCheckout(e.target.value);
  };

  const handleRoom = (e) => {
    setRooms(e.target.value);
  };

  return (
    <div className="image-section">
      <div className='image-text-container'>
        <BsPlayCircle size={130} onClick={handleClick} />
        <h3 className='image-text-line-1'>The Travelling Guidance <span className='image-text-line-2'>you always needed</span></h3>
        <Modal open={open} onClose={handleClick}>
          <div  className='modal-styling'>
            <iframe width="800" height="400" style={{border:'none'}} title='video play'
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
        </Modal>
      </div>

      <div className='image-foot-container'>
      <Grid container spacing={0}>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className='image-footer-single-grid'>
                <div>
                  <p className='white'>Check in</p>
                </div>
                <div className='bottom-icon'>
                    <input type="date" value={checkin} onChange={handleCheckin}/>
                </div>
              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <div className='image-footer-single-grid'>
                <div>
                  <p className='white'>Check out</p>
                </div>
                <div className='bottom-icon'>
                  <input type="date" value={checkout} onChange={handleCheckOut}/>
                </div>
              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <div className='image-footer-single-grid'>
                <div>
                  <p className='white'>Room</p>
                </div>
                <div className='bottom-icon'>
                  <Select disableUnderline size='small' fullWidth value={rooms} onChange={handleRoom}  variant="standard"  style={{color:'#b89146',fontWeight:700,fontSize:'14px'}}>
                    <MenuItem value={1}>1 Room</MenuItem>
                    <MenuItem value={2}>2 Rooms</MenuItem>
                    <MenuItem value={3}>3 Rooms</MenuItem>
                    <MenuItem value={4}>4 Rooms</MenuItem>
                  </Select>
                </div>
              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <div className='image-footer-single-grid-button'>
                  <Button text='CHECK NOW' big={true}/>
              </div>
            </Grid>
          </Grid>
      </div>
    </div>
  );
}

// export default ImageSectionComponent;
