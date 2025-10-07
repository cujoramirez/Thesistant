import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
        <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 } }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity }}
          >
            <Grid container spacing={6} alignItems="center">
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
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                      fontWeight: 800,
                      lineHeight: 1.2,
                      mb: 3,
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
                      color: '#64748b',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      mb: 4,
                      maxWidth: 600,
                    }}
                  >
                    From concept to defense, we guide you through every step of your thesis and research paper journey with expert consulting and personalized support.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <motion.div
                      whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(16, 162, 224, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="contained"
                        endIcon={<ArrowRight size={20} />}
                        sx={{
                          bgcolor: '#10a2e0',
                          color: 'white',
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: 3,
                          textTransform: 'none',
                          boxShadow: '0 8px 20px rgba(16, 162, 224, 0.3)',
                          '&:hover': {
                            bgcolor: '#0d608e',
                            boxShadow: '0 12px 30px rgba(16, 162, 224, 0.4)',
                          },
                        }}
                      >
                        Start Your Journey
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          borderColor: '#10a2e0',
                          color: '#10a2e0',
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: 3,
                          textTransform: 'none',
                          '&:hover': {
                            borderWidth: 2,
                            borderColor: '#0d608e',
                            bgcolor: 'rgba(16, 162, 224, 0.05)',
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
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
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
                          width: { xs: 280, md: 350 },
                          height: { xs: 350, md: 420 },
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
            <Grid container spacing={3} sx={{ mt: 3 }}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        bgcolor: 'white',
                        borderRadius: 3,
                        p: 3,
                        textAlign: 'center',
                        boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                        border: '1px solid rgba(16, 162, 224, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 8px 30px rgba(16, 162, 224, 0.15)',
                          borderColor: 'rgba(16, 162, 224, 0.3)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
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
                          fontWeight: 700,
                          color: '#0a4168',
                          mb: 1,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#64748b',
                          fontWeight: 500,
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
