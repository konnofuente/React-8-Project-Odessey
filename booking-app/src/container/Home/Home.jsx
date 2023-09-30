import "./Home.css";
import { Modal, Grid } from "@mui/material";
import { BsPlayCircle } from "react-icons/bs";
import React, { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "../../fragments/Button/Button";
import CustomImagePositioned from "../../fragments/CustomImagePositioned";
import room1 from "../../assets/images/welcome-section/room1.jpg";
import room2 from "../../assets/images/welcome-section/room2.jpg";
import { MediaQueryContext } from "../../hooks/MediaQueryContext";
import LuxuryRooms from "./fragments/LuxuryRoom/LuxuryRooms";
import VideoSection from "./fragments/VideoSection";
import RoomAmenities from "./fragments/RoomAmenities";
import LargeRoomAmenites from "./fragments/LargeRoomAmenites";
import UserInfo from "./fragments/UserInfo";
// import SectionSpaced from './fragments/SectionSpaced';

function Home() {
  const [checkin, setCheckIn] = React.useState("mm/dd/yy");
  const [checkout, setCheckOut] = React.useState("mm/dd/yy");
  const [rooms, setRoom] = React.useState(2);
  const [open, setOpen] = React.useState(false);
  const media = useContext(MediaQueryContext);

  // function
  const handleClick = () => {
    setOpen((val) => !val);
  };

  const handleCheckin = (e) => {
    let value = e.target.value;
    value = value.toString();
    setCheckIn(value);
  };

  const handleCheckOut = (e) => {
    let value = e.target.value;
    value = value.toString();

    setCheckOut(value);
  };

  const handleRoom = (e) => {
    let value = e.target.value;
    setRoom(value);
  };

  return (
    <>
      <ImageSectionComponent />

      <SectionSpaced />

      <div className="sectionSpaced greyBack">
        <LuxuryRooms />
      </div>
      <div className="sectionNoSpace videoSection">
        <VideoSection />
      </div>

      <div className="sectionSpaced">
        <RoomAmenities />
      </div>

      <div className="sectionMidSpaced">
        <LargeRoomAmenites />
      </div>

      <div className="sectionSpaced">
        <UserInfo />
      </div>
    </>
  );

  function SectionSpaced() {
    return (
      <div className="sectionSpaced">
        <div>
          <Grid container spacing={2}>
            <Grid item xl={5} lg={6} md={6} sm={12} xs={12}>
              <div className="tex3t-div">
                <p className="small gold">Accomodations</p>
                <h2>Welcome Our Hotels And Resorts</h2>
                <p>
                  Savvy travelers are looking for more than just the next
                  destination on the map. They are looking for a memorable
                  experience and to make new friends along the way.
                </p>
                <Button
                  text="CHECK NOW"
                  width="fit-content"
                  to="#0e1317"
                  textFrom="white"
                />
              </div>
            </Grid>
            <Grid item xl={7} lg={6} md={6} sm={12} xs={12}>
              <div
                className="images"
                style={{
                  position: "relative",
                  height: media.DT ? "100%" : "50vh",
                }}
              >
                <CustomImagePositioned
                  image={room1}
                  height="400px"
                  width={media.DT ? "500px" : "100%"}
                  top="85px"
                  left={0}
                  right={0}
                  bottom={0}
                />
                <CustomImagePositioned
                  image={room2}
                  height="300px"
                  width={media.DT ? "400px" : "80%"}
                  top="0px"
                  left="auto"
                  right="0px"
                  bottom="auto"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

  function ImageSectionComponent() {
    return (
      <div className="image-section">
        <div className="image-text-container">
          <BsPlayCircle size={130} onClick={handleClick} />
          <h3 className="image-text-line-1">
            The Travelling Guidance{" "}
            <span className="image-text-line-2">you always needed</span>
          </h3>
          <Modal open={open} onClose={handleClick}>
            <div className="modal-styling">
              <iframe
                width="800"
                height="400"
                style={{ border: "none" }}
                title="video play"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </Modal>
        </div>

        <div className="image-foot-container">
          <Grid container spacing={0}>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className="image-footer-single-grid">
                <div>
                  <p className="white">Check in</p>
                </div>
                <div className="bottom-icon">
                  <input type="date" value={checkin} onChange={handleCheckin} />
                </div>
              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className="image-footer-single-grid">
                <div>
                  <p className="white">Check out</p>
                </div>
                <div className="bottom-icon">
                  <input
                    type="date"
                    value={checkout}
                    onChange={handleCheckOut}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className="image-footer-single-grid">
                <div>
                  <p className="white">Room</p>
                </div>
                <div className="bottom-icon">
                  <Select
                    disableUnderline
                    size="small"
                    fullWidth
                    value={rooms}
                    onChange={handleRoom}
                    variant="standard"
                    style={{
                      color: "#b89146",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    <MenuItem value={1}>1 Room</MenuItem>
                    <MenuItem value={2}>2 Rooms</MenuItem>
                    <MenuItem value={3}>3 Rooms</MenuItem>
                    <MenuItem value={4}>4 Rooms</MenuItem>
                  </Select>
                </div>
              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className="image-footer-single-grid-button">
                <Button text="CHECK NOW" big={true} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
