/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { MediaQueryContext } from "../../../hooks/MediaQueryContext";
import { useContext } from "react";
import { Grid } from "@mui/material";
import { amenities } from "../data"; // adjust path based on where your data.js file is located

function RoomAmenities() {
  const medias = useContext(MediaQueryContext);

  const parentContainer = css`
    display: flex;
    justify-content: space-between;
  `;

  const styles = css`
    margin: ${medias.TB || medias.BP || medias.SM ? "15px 0px" : "0px"};
    display: flex;
    gap: 20px;
    width: 350px;

    h4 {
      line-height: 25px;
      font-size: 20px;
      color: #333334;
    }
    p {
      line-height: 26px;
      color: #333334;
      width: ${medias.TB || medias.BP || medias.SM ? "97%" : "100%"};
    }
    .ammenityIcon {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: ${medias.TB || medias.BP || medias.SM ? "120px" : "200px"};
      height: ${medias.TB || medias.BP || medias.SM ? "100%" : "100%"};
      border-radius: 5%;
      background-color: #eeeeee;
    }
  `;

  return (
    // <div css={parentContainer}>
    <Grid container css={parentContainer}>
      {amenities.map((amenitiy, index) => {
        return (
          <Grid item xs={12} md={4} lg={4} css={styles} key={index}>
            <div className="ammenityIcon">{amenitiy.icon}</div>
            <div>
              <h4>{amenitiy.name}</h4>
              <p>{amenitiy.description}</p>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default RoomAmenities;
