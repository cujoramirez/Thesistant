import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleScheduleConsultation = () => {
    navigate('/pricing');
  };

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
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 3 },
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
          <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 } }}>
            <Typography
              variant="overline"
              sx={{
                color: '#10a2e0',
                fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                fontWeight: 600,
                letterSpacing: 2,
                mb: { xs: 1.5, md: 2 },
                display: 'block',
              }}
            >
              How It Works
            </Typography>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' },
                fontWeight: 700,
                color: '#0a4168',
                mb: { xs: 1.5, md: 2 },
              }}
            >
              Your Journey to Success
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                color: '#64748b',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.7,
                fontWeight: 400,
                px: { xs: 2, sm: 0 }
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
              left: { xs: 28, sm: 32 },
              top: 80,
              bottom: 80,
              width: 3,
              background: 'linear-gradient(180deg, rgba(16, 162, 224, 0.3) 0%, rgba(16, 162, 224, 0.1) 100%)',
              borderRadius: 2,
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
                    ml: { xs: '80px', sm: '90px', md: 0 },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Box
                      sx={{
                        bgcolor: 'white',
                        borderRadius: { xs: 3, md: 4 },
                        p: { xs: 3, sm: 3.5, md: 4 },
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                        border: '1px solid rgba(16, 162, 224, 0.1)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: index % 2 === 0 ? '-100%' : 'auto',
                          right: index % 2 === 0 ? 'auto' : '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(107, 211, 254, 0.08), transparent)',
                          transition: 'left 0.6s ease, right 0.6s ease',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: 'linear-gradient(90deg, #10a2e0 0%, #6bd3fe 100%)',
                          transform: 'scaleX(0)',
                          transformOrigin: index % 2 === 0 ? 'left' : 'right',
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        },
                        '&:hover': {
                          boxShadow: '0 12px 48px rgba(16, 162, 224, 0.2)',
                          borderColor: '#10a2e0',
                          bgcolor: 'rgba(240, 249, 255, 0.5)',
                          '&::before': {
                            left: index % 2 === 0 ? '100%' : 'auto',
                            right: index % 2 === 0 ? 'auto' : '100%',
                          },
                          '&::after': {
                            transform: 'scaleX(1)',
                          },
                        },
                      }}
                    >
                      {/* Step number badge */}
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: { xs: 36, sm: 38, md: 40 },
                          height: { xs: 36, sm: 38, md: 40 },
                          minHeight: 36,
                          borderRadius: '50%',
                          bgcolor: 'rgba(16, 162, 224, 0.1)',
                          color: '#10a2e0',
                          fontWeight: 700,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                          mb: { xs: 2, md: 2 },
                        }}
                      >
                        {index + 1}
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: { xs: '1.15rem', sm: '1.25rem', md: '1.5rem' },
                          fontWeight: 700,
                          color: '#0a4168',
                          mb: { xs: 1.25, md: 1.5 },
                        }}
                      >
                        {step.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '0.95rem', sm: '1rem' },
                          color: '#64748b',
                          mb: { xs: 2, md: 2.5 },
                          lineHeight: 1.7,
                        }}
                      >
                        {step.description}
                      </Typography>

                      {/* Details */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.25, md: 1 } }}>
                        {step.details.map((detail, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              minHeight: 32,
                            }}
                          >
                            <CheckCircle size={16} style={{ color: '#10a2e0', flexShrink: 0 }} />
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#64748b',
                                fontSize: { xs: '0.875rem', sm: '0.9rem' },
                                lineHeight: 1.5,
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
                    alignItems: 'flex-start',
                    position: { xs: 'absolute', md: 'relative' },
                    left: { xs: '8px', sm: '12px', md: 'auto' },
                    top: { xs: '12px', md: 'auto' },
                    zIndex: 2,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20,
                      delay: index * 0.15 + 0.2 
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, -10, 0],
                      boxShadow: '0 12px 40px rgba(16, 162, 224, 0.5)'
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: { xs: 56, sm: 64, md: 90 },
                        height: { xs: 56, sm: 64, md: 90 },
                        minWidth: 56,
                        minHeight: 56,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        boxShadow: '0 8px 24px rgba(16, 162, 224, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
                        border: { xs: '3px solid white', md: '4px solid white' },
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: -2,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #6bd3fe, #10a2e0)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          animation: 'pulse 2s infinite',
                        },
                        '&:hover::before': {
                          opacity: 0.5,
                        },
                        '@keyframes pulse': {
                          '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
                          '50%': { transform: 'scale(1.1)', opacity: 0 },
                        },
                      }}
                    >
                      <step.icon size={index % 2 === 0 ? 28 : 32} style={{ color: 'white', zIndex: 1 }} />
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
              mt: { xs: 8, sm: 9, md: 10 },
              p: { xs: 3.5, sm: 4, md: 6 },
              borderRadius: { xs: 3, md: 4 },
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
                display: { xs: 'none', sm: 'block' }
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
                display: { xs: 'none', sm: 'block' }
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: 'white',
                  mb: { xs: 1.5, md: 2 },
                  lineHeight: 1.3,
                }}
              >
                Ready to Start Your Journey?
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: { xs: 3, md: 4 },
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6,
                  px: { xs: 1, sm: 0 }
                }}
              >
                Let's turn your research goals into reality. Schedule a free consultation today!
              </Typography>

              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                style={{
                  display: 'inline-block',
                  width: window.innerWidth < 600 ? '100%' : 'auto',
                  maxWidth: window.innerWidth < 600 ? '320px' : 'none',
                }}
              >
                <button
                  onClick={handleScheduleConsultation}
                  style={{
                    background: 'white',
                    color: '#10a2e0',
                    border: '2px solid rgba(16, 162, 224, 0.2)',
                    padding: window.innerWidth < 600 ? '16px 32px' : '18px 48px',
                    minHeight: window.innerWidth < 600 ? '56px' : 'auto',
                    fontSize: window.innerWidth < 600 ? '1.05rem' : '1.1rem',
                    fontWeight: 600,
                    borderRadius: 12,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 1)';
                    e.currentTarget.style.borderColor = 'rgba(16, 162, 224, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.borderColor = 'rgba(16, 162, 224, 0.2)';
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    Schedule Free Consultation
                    <ArrowRight size={20} />
                  </span>
                  <span style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(16, 162, 224, 0.1), transparent)',
                    transition: 'left 0.6s ease',
                  }} />
                </button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Process;
