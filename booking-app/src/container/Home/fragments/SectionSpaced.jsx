import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '../../../fragments/Button/Button'; // 
import CustomImagePositioned from './CustomImagePositioned'; // 
import room1 from './path_to_room1_image'; // 
import room2 from './path_to_room2_image'; // 
import media from './media'; 

function SectionSpaced() {
  return (
    <div className='sectionSpaced'>
      <div>
        <Grid container spacing={2}>
          <Grid item xl={5} lg={6} md={6} sm={12} xs={12}>
            <div className='tex3t-div'>
              <p className='small gold'>Accomodations</p>
              <h2>Welcome Our Hotels And Resorts</h2>
              <p>Savvy travelers are looking for more than just the next destination on the map. 
                 They are looking for a memorable experience and to make new friends along the way.
              </p>
              <Button text='CHECK NOW' width='fit-content' to='#0e1317' textFrom='white'/>
            </div>
          </Grid>
          <Grid item xl={7} lg={6} md={6} sm={12} xs={12}>
            <div className='images' style={{position:'relative',height:media.DT?'100%':'50vh'}}>
              <CustomImagePositioned 
                image={room1}
                height='400px'
                width={media.DT?'500px':'100%'}
                top="85px"
                left={0}
                right={0}
                bottom={0}
              />
              <CustomImagePositioned 
                image={room2}
                height='300px'
                width={media.DT?'400px':'80%'}
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

export default SectionSpaced;
