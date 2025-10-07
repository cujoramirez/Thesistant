import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  MessageCircle, 
  Target, 
  FileEdit, 
  Microscope, 
  CheckCircle, 
  Presentation,
  ArrowRight 
} from 'lucide-react';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: MessageCircle,
      title: "Initial Consultation",
      description: "We discuss your academic background, interests, and goals to understand your unique needs.",
      details: ["30-minute consultation", "Needs assessment", "Goal setting"],
    },
    {
      icon: Target,
      title: "Topic Selection",
      description: "Together, we identify a compelling research topic that aligns with your strengths and academic requirements.",
      details: ["Research gap analysis", "Feasibility study", "Topic refinement"],
    },
    {
      icon: FileEdit,
      title: "Proposal Development",
      description: "We guide you through crafting a solid research proposal with clear objectives and methodology.",
      details: ["Structure planning", "Literature review", "Methodology design"],
    },
    {
      icon: Microscope,
      title: "Research & Writing",
      description: "Ongoing support as you conduct research, analyze data, and write your thesis chapters.",
      details: ["Regular check-ins", "Chapter reviews", "Data analysis help"],
    },
    {
      icon: CheckCircle,
      title: "Review & Refinement",
      description: "Comprehensive review of your complete thesis with detailed feedback and revision guidance.",
      details: ["Full thesis review", "Formatting check", "Citation verification"],
    },
    {
      icon: Presentation,
      title: "Defense Preparation",
      description: "Mock presentations and Q&A practice to ensure you're confident and ready for your defense.",
      details: ["Presentation training", "Q&A simulation", "Confidence building"],
    },
  ];

  return (
    <Box
      id="process"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 162, 224, 0.03) 0%, transparent 70%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="overline"
              sx={{
                color: '#10a2e0',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: 2,
                mb: 2,
                display: 'block',
              }}
            >
              How It Works
            </Typography>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
                color: '#0a4168',
                mb: 2,
              }}
            >
              Your Journey to Success
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
              A structured, proven process that guides you from initial concept to successful defense
            </Typography>
          </Box>
        </motion.div>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Vertical connecting line for mobile */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'absolute',
              left: 35,
              top: 80,
              bottom: 80,
              width: 2,
              bgcolor: 'rgba(16, 162, 224, 0.2)',
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: 'center',
                  mb: 6,
                  position: 'relative',
                }}
              >
                {/* Content */}
                <Box
                  sx={{
                    flex: { xs: 1, md: '0 0 45%' },
                    ml: { xs: 3, md: 0 },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        bgcolor: 'white',
                        borderRadius: 4,
                        p: 4,
                        boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                        border: '1px solid rgba(16, 162, 224, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 8px 30px rgba(16, 162, 224, 0.15)',
                          borderColor: '#10a2e0',
                        },
                      }}
                    >
                      {/* Step number badge */}
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          bgcolor: 'rgba(16, 162, 224, 0.1)',
                          color: '#10a2e0',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          mb: 2,
                        }}
                      >
                        {index + 1}
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: '#0a4168',
                          mb: 1.5,
                        }}
                      >
                        {step.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: '#64748b',
                          mb: 2.5,
                          lineHeight: 1.7,
                        }}
                      >
                        {step.description}
                      </Typography>

                      {/* Details */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {step.details.map((detail, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <CheckCircle size={16} style={{ color: '#10a2e0', flexShrink: 0 }} />
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#64748b',
                                fontSize: '0.9rem',
                              }}
                            >
                              {detail}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                </Box>

                {/* Center Icon */}
                <Box
                  sx={{
                    flex: { xs: '0 0 auto', md: '0 0 10%' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: { xs: 'absolute', md: 'relative' },
                    left: { xs: 0, md: 'auto' },
                    zIndex: 2,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Box
                      sx={{
                        width: { xs: 70, md: 90 },
                        height: { xs: 70, md: 90 },
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(16, 162, 224, 0.3)',
                        border: '4px solid white',
                      }}
                    >
                      <step.icon size={index % 2 === 0 ? 36 : 40} style={{ color: 'white' }} />
                    </Box>
                  </motion.div>
                </Box>

                {/* Spacer for desktop */}
                <Box sx={{ display: { xs: 'none', md: 'block' }, flex: '0 0 45%' }} />

                {/* Connecting arrow for desktop */}
                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight
                        size={32}
                        style={{
                          color: '#10a2e0',
                          opacity: 0.5,
                          transform: 'rotate(90deg)',
                        }}
                      />
                    </motion.div>
                  </Box>
                )}
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Box
            sx={{
              mt: 10,
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #10a2e0 0%, #0d608e 100%)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative elements */}
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -30,
                left: -30,
                width: 150,
                height: 150,
                borderRadius: '50%',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: 'white',
                  mb: 2,
                }}
              >
                Ready to Start Your Journey?
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 4,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Let's turn your research goals into reality. Schedule a free consultation today!
              </Typography>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'white',
                  color: '#10a2e0',
                  border: 'none',
                  padding: '16px 48px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 12,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                Schedule Free Consultation
              </motion.button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Process;
