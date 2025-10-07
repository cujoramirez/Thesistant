import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Info, Target, Users, Heart, Award } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pt: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 3 }}>
                <Info size={48} style={{ color: '#10a2e0' }} />
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
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
                  color: '#64748b',
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Your trusted partner in academic excellence, dedicated to guiding students through their thesis and research journey
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4} sx={{ mb: 8 }}>
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
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <Box
                    sx={{
                      bgcolor: 'white',
                      p: 4,
                      borderRadius: 4,
                      boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                      height: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <item.icon size={30} style={{ color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#0a4168', mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#64748b', lineHeight: 1.7 }}>
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
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  '&:hover': {
                    bgcolor: '#0d608e',
                  },
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
