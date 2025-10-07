import { Box } from '@mui/material';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <Box>
      <Hero />
      <Services />
      <Process />
      <Footer />
    </Box>
  );
};

export default LandingPage;
