import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleStartJourney = () => {
    navigate('/pricing');
  };

  const handleLearnMore = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stats = [
    { icon: Users, value: "500+", label: "Students Helped" },
    { icon: BookOpen, value: "1000+", label: "Thesis Completed" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "15+", label: "Years Experience" },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
        pt: 0,
        mt: '-120px',
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 162, 224, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          y,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107, 211, 254, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ pt: { xs: 18, sm: 16, md: 18 }, pb: { xs: 6, sm: 8, md: 10 }, px: { xs: 2, sm: 3 } }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity }}
          >
            <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} alignItems="center">
              {/* Left Content - Text & CTAs */}
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <Sparkles size={20} style={{ color: '#10a2e0' }} />
                    <Typography
                      variant="overline"
                      sx={{
                        color: '#10a2e0',
                        fontWeight: 600,
                        letterSpacing: 1.5,
                        fontSize: '0.875rem',
                      }}
                    >
                      YOUR ACADEMIC SUCCESS PARTNER
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem', lg: '4rem' },
                      fontWeight: 800,
                      lineHeight: 1.2,
                      mb: { xs: 2.5, md: 3 },
                      background: 'linear-gradient(135deg, #0a4168 0%, #10a2e0 50%, #0a4168 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Transform Your{' '}
                    <Box component="span" sx={{ display: 'block', color: '#10a2e0' }}>
                      Research Journey
                    </Box>
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
                      color: '#64748b',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      mb: { xs: 3, md: 4 },
                      maxWidth: 600,
                    }}
                  >
                    From concept to defense, we guide you through every step of your thesis and research paper journey with expert consulting and personalized support.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: { xs: '100%', sm: 'auto' }
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      style={{ width: '100%' }}
                    >
                      <Button
                        variant="contained"
                        endIcon={<ArrowRight size={20} />}
                        fullWidth
                        onClick={handleStartJourney}
                        sx={{
                          background: 'linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)',
                          color: 'white',
                          px: { xs: 3, sm: 4 },
                          py: { xs: 1.75, sm: 1.5 },
                          minHeight: { xs: 56, sm: 'auto' },
                          fontSize: { xs: '1.05rem', sm: '1.1rem' },
                          fontWeight: 600,
                          borderRadius: 3,
                          textTransform: 'none',
                          position: 'relative',
                          overflow: 'hidden',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 8px 24px rgba(16, 162, 224, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                            transition: 'left 0.6s ease',
                          },
                          '&:hover': {
                            background: 'linear-gradient(135deg, #0d608e 0%, #10a2e0 100%)',
                            boxShadow: '0 12px 32px rgba(16, 162, 224, 0.6)',
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            '&::before': {
                              left: '100%',
                            },
                          },
                          '&:active': {
                            boxShadow: '0 4px 12px rgba(16, 162, 224, 0.4)',
                          },
                        }}
                      >
                        Start Your Journey
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      style={{ width: '100%' }}
                    >
                      <Button
                        variant="outlined"
                        fullWidth
                        onClick={handleLearnMore}
                        sx={{
                          borderColor: '#10a2e0',
                          color: '#10a2e0',
                          px: { xs: 3, sm: 4 },
                          py: { xs: 1.75, sm: 1.5 },
                          minHeight: { xs: 56, sm: 'auto' },
                          fontSize: { xs: '1.05rem', sm: '1.1rem' },
                          fontWeight: 600,
                          borderRadius: 3,
                          borderWidth: 2,
                          textTransform: 'none',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: 0,
                            height: 0,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(107, 211, 254, 0.2), transparent 70%)',
                            transform: 'translate(-50%, -50%)',
                            transition: 'width 0.5s ease, height 0.5s ease',
                          },
                          '&:hover': {
                            borderWidth: 2,
                            borderColor: '#10a2e0',
                            bgcolor: 'rgba(16, 162, 224, 0.08)',
                            boxShadow: '0 4px 20px rgba(16, 162, 224, 0.3)',
                            '&::before': {
                              width: '300px',
                              height: '300px',
                            },
                          },
                          '&:active': {
                            boxShadow: '0 2px 10px rgba(16, 162, 224, 0.3)',
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', mt: 4 }}>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.span
                          key={star}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + star * 0.1 }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </Box>
                    <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                      Rated 4.9/5 by 500+ students
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              {/* Right Content - Illustration/Visual */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: { xs: 'none', sm: 'flex' },
                      justifyContent: 'center',
                      alignItems: 'center',
                      mt: { sm: 4, md: 0 }
                    }}
                  >
                    {/* Floating Cards */}
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ position: 'relative', zIndex: 2 }}
                    >
                      <Box
                        sx={{
                          width: { sm: 280, md: 350 },
                          height: { sm: 350, md: 420 },
                          bgcolor: 'white',
                          borderRadius: 4,
                          boxShadow: '0 20px 60px rgba(16, 162, 224, 0.2)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 4,
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Gradient overlay */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 150,
                            background: 'linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)',
                            opacity: 0.1,
                          }}
                        />
                        
                        <Box
                          sx={{
                            position: 'relative',
                            width: 120,
                            height: 120,
                            marginBottom: 3,
                            '&:hover .lightbulb-icon': {
                              filter: 'drop-shadow(0 0 20px #ffd700) drop-shadow(0 0 40px #ffa500)',
                              color: '#ffd700',
                            },
                          }}
                        >
                          <motion.div
                            className="lightbulb-icon"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <svg
                              width="120"
                              height="120"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#10a2e0"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                              <path d="M9 18h6" />
                              <path d="M10 22h4" />
                            </svg>
                          </motion.div>
                        </Box>
                        
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: '#0a4168',
                            mb: 2,
                            textAlign: 'center',
                          }}
                        >
                          Expert Guidance
                        </Typography>
                        
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#64748b',
                            textAlign: 'center',
                            lineHeight: 1.6,
                          }}
                        >
                          Professional thesis consulting with personalized methodology guidance and research support
                        </Typography>
                      </Box>
                    </motion.div>

                    {/* Floating Icon 1 */}
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      style={{
                        position: 'absolute',
                        top: '10%',
                        right: '5%',
                        zIndex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: 2,
                          bgcolor: 'white',
                          boxShadow: '0 10px 30px rgba(16, 162, 224, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <BookOpen size={40} style={{ color: '#10a2e0' }} />
                      </Box>
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, 20, 0],
                        x: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '15%',
                        left: '5%',
                        zIndex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          bgcolor: 'white',
                          boxShadow: '0 10px 30px rgba(107, 211, 254, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Award size={35} style={{ color: '#6bd3fe' }} />
                      </Box>
                    </motion.div>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>

          {/* Stats Section - Separate from opacity transform, moved up 50px */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} sx={{ mt: { xs: 2, md: 3 } }}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Box
                      sx={{
                        bgcolor: 'white',
                        borderRadius: { xs: 2.5, md: 3 },
                        p: { xs: 2, sm: 2.5, md: 3 },
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                        border: '1px solid rgba(16, 162, 224, 0.1)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        minHeight: { xs: 140, sm: 160, md: 'auto' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(107, 211, 254, 0.1), transparent)',
                          transition: 'left 0.6s ease',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: 'linear-gradient(90deg, #10a2e0 0%, #6bd3fe 100%)',
                          transform: 'scaleX(0)',
                          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        },
                        '&:hover': {
                          boxShadow: '0 12px 40px rgba(16, 162, 224, 0.2)',
                          borderColor: 'rgba(16, 162, 224, 0.4)',
                          bgcolor: 'rgba(240, 249, 255, 0.8)',
                          '&::before': {
                            left: '100%',
                          },
                          '&::after': {
                            transform: 'scaleX(1)',
                          },
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 1.5, md: 2 } }}>
                        <Box
                          sx={{
                            width: { xs: 44, sm: 48, md: 50 },
                            height: { xs: 44, sm: 48, md: 50 },
                            borderRadius: '50%',
                            bgcolor: 'rgba(16, 162, 224, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <stat.icon size={24} style={{ color: '#10a2e0' }} />
                        </Box>
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                          fontWeight: 700,
                          color: '#0a4168',
                          mb: { xs: 0.5, md: 1 },
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' },
                          color: '#64748b',
                          fontWeight: 500,
                          lineHeight: 1.3,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>

      {/* Bottom Wave */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%' }}
        >
          <motion.path
            d="M0,40 C300,100 600,0 900,60 L900,120 L0,120 Z"
            fill="white"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Hero;
