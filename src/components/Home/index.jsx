import React from 'react'
import Grid from '@mui/material/Grid'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'



export default () => {
    return (
        <>
            <Grid>
                <Page1 />
                <Page2 title='Latest on the Property Listing' />
                <Page2 title='Nearby Listed Properties'  />
                <Page4 title='Top rated properties'/>
                <Page3 text1='  Try Hosting With Us' text2=' Earn extra just by renting your property...' text3='Become A Host'/>
                <Page5 title='Featured Properties   Listing'/>
                <Page3 text1='  Browse For  Properties' text2=' Explore properties by their categories/types...' text3='Find A Property'/>
                <Page6 title='Property Rental Guides & Tips'/>
                <Page7/>
                <Page8/>
            </Grid>
        </>

    )
}
