import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileText, 
  Microscope, 
  Lightbulb, 
  Users, 
  BookOpen, 
  Target,
  CheckCircle,
  TrendingUp 
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: FileText,
      title: "Thesis Writing Support",
      description: "Expert assistance in structuring, writing, and refining your thesis with academic excellence and proper formatting.",
      features: ["Academic Writing", "Structure Guidance", "Citation Help", "Proofreading"],
      color: "#10a2e0",
      gradient: "linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)",
    },
    {
      icon: Microscope,
      title: "Methodology Consulting",
      description: "Professional guidance on research methodology, experiment design, and data analysis techniques tailored to your field.",
      features: ["Research Design", "Data Analysis", "Statistical Methods", "Validation"],
      color: "#0d608e",
      gradient: "linear-gradient(135deg, #0d608e 0%, #10a2e0 100%)",
    },
    {
      icon: Lightbulb,
      title: "Topic Development",
      description: "Start from scratch with personalized consulting to identify your strengths, interests, and the perfect research topic.",
      features: ["Subject Analysis", "Topic Selection", "Research Gap", "Feasibility Study"],
      color: "#6bd3fe",
      gradient: "linear-gradient(135deg, #6bd3fe 0%, #41bff5 100%)",
    },
    {
      icon: Target,
      title: "Defense Preparation",
      description: "Comprehensive preparation for your thesis defense with mock presentations, Q&A practice, and confidence building.",
      features: ["Presentation Skills", "Q&A Practice", "Slide Design", "Confidence Building"],
      color: "#0b446c",
      gradient: "linear-gradient(135deg, #0b446c 0%, #0d608e 100%)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      id="services"
      ref={ref}
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 3 },
        bgcolor: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107, 211, 254, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
              <BookOpen size={32} style={{ color: '#10a2e0' }} />
              <Typography
                variant="overline"
                sx={{
                  color: '#10a2e0',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
              >
                Our Services
              </Typography>
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
                color: '#0a4168',
                mb: 2,
              }}
            >
              Comprehensive Research Support
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              From initial concept to final defense, we provide expert guidance at every stage of your academic journey
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={{ xs: 3, sm: 3.5, md: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: { xs: 3, md: 4 },
                      boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                      border: '1px solid rgba(16, 162, 224, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f9feff 100%)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(90deg, transparent, ${service.color}08, transparent)`,
                        transition: 'left 0.6s ease',
                      },
                      '&:hover': {
                        boxShadow: `0 16px 48px ${service.color}30`,
                        borderColor: service.color,
                        transform: 'translateY(-12px)',
                        '& .service-icon-bg': {
                          transform: 'scale(1.15) rotate(10deg)',
                          opacity: 0.12,
                        },
                        '&::before': {
                          left: '100%',
                        },
                      },
                    }}
                  >
                    {/* Top gradient bar */}
                    <Box
                      sx={{
                        height: 5,
                        background: service.gradient,
                      }}
                    />

                    <CardContent sx={{ p: { xs: 3, sm: 3.5, md: 4 }, position: 'relative' }}>
                      {/* Background icon */}
                      <Box
                        className="service-icon-bg"
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: 20,
                          opacity: 0.05,
                          transition: 'all 0.3s ease',
                          display: { xs: 'none', sm: 'block' }
                        }}
                      >
                        <service.icon size={120} />
                      </Box>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Box
                          sx={{
                            width: { xs: 60, sm: 65, md: 70 },
                            height: { xs: 60, sm: 65, md: 70 },
                            minHeight: 60,
                            borderRadius: { xs: 2.5, md: 3 },
                            background: service.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: { xs: 2.5, md: 3 },
                            boxShadow: `0 8px 24px ${service.color}40`,
                          }}
                        >
                          <service.icon size={36} style={{ color: 'white' }} />
                        </Box>
                      </motion.div>

                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: { xs: '1.25rem', sm: '1.35rem', md: '1.5rem' },
                          fontWeight: 700,
                          color: '#0a4168',
                          mb: { xs: 1.5, md: 2 },
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '0.95rem', sm: '1rem' },
                          color: '#64748b',
                          mb: { xs: 2.5, md: 3 },
                          lineHeight: 1.7,
                        }}
                      >
                        {service.description}
                      </Typography>

                      {/* Features */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.25, sm: 1.5 } }}>
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.75,
                                bgcolor: `${service.color}10`,
                                color: service.color,
                                px: { xs: 1.75, sm: 2 },
                                py: { xs: 0.85, sm: 0.75 },
                                minHeight: 36,
                                borderRadius: 2,
                                fontSize: { xs: '0.8rem', sm: '0.85rem' },
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                '&:active': {
                                  transform: 'scale(0.95)',
                                }
                              }}
                            >
                              <CheckCircle size={14} />
                              {feature}
                            </Box>
                          </motion.div>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Box sx={{ mt: { xs: 8, sm: 10, md: 12 }, textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
                fontWeight: 700,
                color: '#0a4168',
                mb: { xs: 4, sm: 5, md: 6 },
              }}
            >
              Why Choose Thesistant?
            </Typography>

            <Grid container spacing={{ xs: 3, sm: 3.5, md: 4 }}>
              {[
                {
                  icon: Users,
                  title: "Expert Consultants",
                  description: "PhD holders and industry professionals with years of academic experience"
                },
                {
                  icon: Target,
                  title: "Personalized Approach",
                  description: "Tailored guidance based on your field, level, and specific requirements"
                },
                {
                  icon: TrendingUp,
                  title: "Proven Track Record",
                  description: "98% success rate with students completing their thesis on time"
                },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Box 
                      sx={{ 
                        textAlign: 'center',
                        p: { xs: 2.5, sm: 3 },
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: 'rgba(16, 162, 224, 0.02)',
                        },
                        '&:active': {
                          transform: 'scale(0.98)',
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 72, sm: 76, md: 80 },
                          height: { xs: 72, sm: 76, md: 80 },
                          minHeight: 72,
                          borderRadius: '50%',
                          bgcolor: 'rgba(16, 162, 224, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: { xs: 2, md: 2 },
                        }}
                      >
                        <item.icon size={36} style={{ color: '#10a2e0' }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: '1.1rem', sm: '1.15rem', md: '1.25rem' },
                          fontWeight: 700,
                          color: '#0a4168',
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: '0.9rem', sm: '0.95rem' },
                          color: '#64748b',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
