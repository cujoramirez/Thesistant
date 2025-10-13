import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Info, Target, Users, Heart, Award } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pt: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, px: { xs: 2, sm: 3 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 1.5, md: 2 }, mb: { xs: 2, md: 3 } }}>
                <Info size={48} style={{ color: '#10a2e0' }} />
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
                    fontWeight: 700,
                    color: '#0a4168',
                  }}
                >
                  About Thesistant
                </Typography>
              </Box>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  color: '#64748b',
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.7,
                  px: { xs: 2, sm: 0 }
                }}
              >
                Your trusted partner in academic excellence, dedicated to guiding students through their thesis and research journey
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={{ xs: 3, sm: 3.5, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To empower students with expert guidance and support, making the thesis writing process accessible, manageable, and successful."
              },
              {
                icon: Users,
                title: "Our Team",
                description: "Comprised of PhD holders and experienced researchers across various academic disciplines with a passion for education."
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "Academic integrity, personalized support, and student success are at the core of everything we do."
              },
              {
                icon: Award,
                title: "Our Track Record",
                description: "Over 15 years of experience with 98% success rate in helping students complete their thesis on time."
              }
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.12, duration: 0.6, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Box
                    sx={{
                      bgcolor: 'white',
                      p: { xs: 3, sm: 3.5, md: 4 },
                      borderRadius: { xs: 3, md: 4 },
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                      height: '100%',
                      minHeight: { xs: 240, sm: 'auto' },
                      cursor: 'pointer',
                      border: '1px solid rgba(16, 162, 224, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(107, 211, 254, 0.08), transparent)',
                        transition: 'left 0.6s ease',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #10a2e0 0%, #6bd3fe 100%)',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      },
                      '&:hover': {
                        boxShadow: '0 12px 48px rgba(16, 162, 224, 0.2)',
                        borderColor: '#10a2e0',
                        bgcolor: 'rgba(240, 249, 255, 0.5)',
                        '&::before': {
                          left: '100%',
                        },
                        '&::after': {
                          transform: 'scaleX(1)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 56, sm: 58, md: 60 },
                        height: { xs: 56, sm: 58, md: 60 },
                        minWidth: 56,
                        minHeight: 56,
                        borderRadius: { xs: 2.5, md: 3 },
                        background: 'linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: { xs: 2.5, md: 3 },
                      }}
                    >
                      <item.icon size={30} style={{ color: 'white' }} />
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontSize: { xs: '1.15rem', sm: '1.25rem', md: '1.5rem' },
                        fontWeight: 700, 
                        color: '#0a4168', 
                        mb: { xs: 1.5, md: 2 },
                        lineHeight: 1.3
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        color: '#64748b', 
                        lineHeight: 1.7 
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Button
                onClick={() => navigate('/')}
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#10a2e0',
                  width: { xs: '100%', sm: 'auto' },
                  px: { xs: 4, sm: 5 },
                  py: { xs: 2, sm: 2 },
                  minHeight: { xs: 56, sm: 'auto' },
                  maxWidth: { xs: '100%', sm: 'auto' },
                  fontSize: { xs: '1.05rem', sm: '1.1rem' },
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: '0 4px 14px rgba(16, 162, 224, 0.3)',
                  '&:hover': {
                    bgcolor: '#0d608e',
                    boxShadow: '0 6px 20px rgba(16, 162, 224, 0.4)',
                  },
                  '&:active': {
                    transform: 'scale(0.98)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Back to Home
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
