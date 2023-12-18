
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Example } from '../components/Carousel';
import Grid from '@mui/material/Grid'; // Grid version 1
import Card from '@mui/material/Card'; // Grid version 1
import './Home.css'
import ProfileImg from "../profile.jpg"

export const Home = () =>  {
  return (
    
    <div>
      
    <main>
      <Box component="main" sx={{ pt: 8, flexDirection: 'column', alignItems: 'center', textAlign: 'center',display:'flow-root'}}>
          
        
              <div className='About'>
                <div className='TextAbout'>
                  <h2 className='TitleAbout'>A mon propos</h2>

                  <p className='DescAbout'>
                   Je suis Alternant à l'IUT de Blagnac et dans l'entreprise Thales Alenia Space, dans mon alternance je travails sur différentes technos tels que VB.net et en VBA.
                                     </p>
                </div>
                <div className='ImgAboutDiv'>
                  <img src={ProfileImg}  alt="Artiste" className='ImgAbout'/>
                </div>
                
              </div>
        <Example />
      </Box>
    </main>
  </div>
   
  );
}
