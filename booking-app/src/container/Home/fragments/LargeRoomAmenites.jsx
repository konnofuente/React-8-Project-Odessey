/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React,{useContext} from 'react'

import Button from '../../../fragments/Button/Button'
import { MediaQueryContext } from '../../../hooks/MediaQueryContext'
import {largeRoomAminities} from '../data'


const textDiv = css`
width:fit-content;
padding:30px;
z-index:1;
`

const PictureText=({amenity,parentStyle})=>{

    const medias = useContext(MediaQueryContext)

    const pictureDiv = css`
        height:${medias.DT?"350px":"350px"};
        width:${medias.DT?"550px":"100%"};
        background-image:url(${amenity.picture});
        background-position:center;
        background-repeat:no-repeat;
        z-index:1;
        background-size:cover;    
`

    return(
        <div css={parentStyle}>
            <div css={pictureDiv}>
            </div>
            <div css={textDiv}>
                <p className='gold'>{amenity.smallTitle}</p>
                <h1>{amenity.bigTitle}</h1>
                <p>{amenity.description}</p>
                <Button text='READ MORE' width='fit-content' linksTo='/Search'/>
            </div>
        </div>
    )
}
const TextPicture=({amenity,parentStyle})=>{
    const medias = useContext(MediaQueryContext)

    const pictureDiv = css`
    height:${medias.DT?"350px":"350px"};
    width:${medias.DT?"550px":"100%"};
    background-image:url(${amenity.picture});
    background-position:center;
    background-repeat:no-repeat;
    z-index:1;
    background-size:cover;   
`
const style =css `
    &::before{
        width:${medias.DT?"90%":"100%"} !important;
        left:0px !important;
    }
`
    return(
        <div css={[parentStyle,style]}>
            <div css={textDiv}>
                <p className='gold'>{amenity.smallTitle}</p>
                <h1>{amenity.bigTitle}</h1>
                <p>{amenity.description}</p>
                <Button text='READ MORE' width='fit-content' linksTo='/Search' />
            </div>
            <div css={pictureDiv}>
            </div>
        </div>
    )
}

function LargeRoomAmenites() {
    const medias = useContext(MediaQueryContext)

    const parentCss=css`
    margin-bottom:100px;
    padding:${medias.DT?"90px 0px":"0px"};
    display:${medias.DT?"flex":"block"};
    gap:50px;
    position:relative;
    & h1 {
        color:white;
        font-weight:500;
        font-size:${medias.DT?"40px":"25px"};
        line-height:${medias.DT?"60px":"30pxz"};
    }
    & p:not(.gold) {
        color:white;
        line-height:26px;
        font-weight:400;
        margin-bottom:70px !important;
    }
    & p,h1{
        margin-bottom:20px !important;
    }

    & button {
        display:none;
    }

    &::before{
        content:'';
        position: absolute;
        top:0px;
        height:100%;
        width:${medias.DT?"90%":"100%"};
        background-color:#0e1317;
        left:${medias.DT?"10%":"0%"};
        z-index:${medias.DT?"unset":"-10"}
    }
`
  return (
    <div>
        {largeRoomAminities.map((amenityObj,index)=>{
            if(amenityObj.direction == "TP"){
                return(
                    <TextPicture amenity={amenityObj} parentStyle={parentCss} key={index}/>
                )
                }
            else{
                return(
                    <PictureText amenity={amenityObj} parentStyle={parentCss} key={index}/>
                )
            }
        })}
    </div>
  )
}

export default LargeRoomAmenites
