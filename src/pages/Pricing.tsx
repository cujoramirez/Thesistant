import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight, Users, Clock, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    // First check if contact section exists on current page
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page and then scroll to contact
      navigate('/');
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleChoosePlan = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const plans = [
    {
      level: "Bachelor's Degree",
      subtitle: "Perfect for undergraduate students",
      icon: Star,
      color: '#10a2e0',
      gradient: 'linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)',
      price: {
        monthly: 1000000,
        package: 5000000,
      },
      popular: true,
      features: [
        "Topic Development & Selection",
        "Research Proposal Guidance",
        "Methodology Consultation (Basic)",
        "Literature Review Support",
        "Data Collection Guidance",
        "3 Rounds of Chapter Reviews",
        "Basic Statistical Analysis Help",
        "Formatting & Citation Check",
        "Email Support (48hr response)",
        "Zoom/Teams/Google Meet Sessions",
        "1 Mock Defense Session",
      ],
      includes: {
        sessions: "6 consultation sessions",
        support: "Email support",
        turnaround: "48-hour response time",
      }
    },
    {
      level: "Master's Degree",
      subtitle: "Comprehensive support for graduate students",
      icon: Crown,
      color: '#0d608e',
      gradient: 'linear-gradient(135deg, #0d608e 0%, #10a2e0 100%)',
      price: {
        monthly: 2500000,
        package: 12500000,
      },
      popular: false,
      features: [
        "Everything in Bachelor's Plan",
        "Advanced Methodology Design",
        "In-depth Literature Review",
        "Advanced Statistical Analysis",
        "Qualitative Data Analysis",
        "5 Rounds of Chapter Reviews",
        "Complete Thesis Review",
        "Presentation Slide Design",
        "Priority Email & Phone Support",
        "Zoom/Teams/Google Meet Sessions",
        "3 Mock Defense Sessions",
        "Publication Guidance (Optional)",
        "Research Ethics Consultation",
      ],
      includes: {
        sessions: "12 consultation sessions",
        support: "Email + Phone support",
        turnaround: "24-hour response time",
      }
    },
  ];

  const addOns = [
    {
      icon: Clock,
      title: "Expedited Service",
      description: "Rush your consultations with 12-hour response time",
      price: "+Rp1.500.000/month"
    },
    {
      icon: FileText,
      title: "Publication Support",
      description: "Help preparing your research for journal publication",
      price: "+Rp1.000.000"
    },
    {
      icon: Users,
      title: "Additional Sessions",
      description: "Need more consultation time? Add extra sessions",
      price: "Rp200.000/session"
    },
  ];

  const comparisonFeatures = [
    { feature: "Consultation Sessions", bachelor: "6 sessions", masters: "12 sessions" },
    { feature: "Chapter Reviews", bachelor: "3 rounds", masters: "5 rounds" },
    { feature: "Mock Defense Sessions", bachelor: "1 session", masters: "3 sessions" },
    { feature: "Statistical Analysis", bachelor: "Basic", masters: "Advanced" },
    { feature: "Support Channel", bachelor: "Email", masters: "Email + Phone" },
    { feature: "Response Time", bachelor: "48 hours", masters: "24 hours" },
    { feature: "Publication Guidance", bachelor: "—", masters: "✓" },
    { feature: "Research Ethics Help", bachelor: "—", masters: "✓" },
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pt: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, px: { xs: 2, sm: 3 } }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
              <Box
                sx={{
                  display: 'inline-block',
                  mb: 2,
                  position: 'relative',
                  '&:hover .pricing-icon': {
                    filter: 'drop-shadow(0 0 20px #10a2e0) drop-shadow(0 0 40px #6bd3fe)',
                  },
                }}
              >
                <motion.div
                  className="pricing-icon"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)',
                    boxShadow: '0 8px 24px rgba(16, 162, 224, 0.3)',
                    transition: 'filter 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <Zap size={40} style={{ color: 'white', strokeWidth: 2.5 }} />
                </motion.div>
              </Box>
              
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#0a4168',
                  mb: { xs: 1.5, md: 2 },
                }}
              >
                Choose Your Plan
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  color: '#64748b',
                  maxWidth: 700,
                  mx: 'auto',
                  lineHeight: 1.7,
                  mb: { xs: 1.5, md: 2 },
                  px: { xs: 2, sm: 0 }
                }}
              >
                Professional thesis consulting tailored to your academic level
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '0.95rem' },
                  color: '#10a2e0',
                  fontWeight: 600,
                }}
              >
                💡 All plans include personalized guidance and expert support
              </Typography>
            </Box>
          </motion.div>

          {/* Pricing Cards */}
          <Grid container spacing={{ xs: 3, sm: 3.5, md: 4 }} sx={{ mb: { xs: 8, sm: 9, md: 10 } }}>
            {plans.map((plan, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 300 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: { xs: 4, sm: 5, md: 6 },
                      boxShadow: plan.popular 
                        ? '0 12px 40px rgba(16, 162, 224, 0.2)' 
                        : '0 4px 20px rgba(16, 162, 224, 0.08)',
                      border: plan.popular ? '2px solid #10a2e0' : '1px solid rgba(16, 162, 224, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'visible',
                      mt: plan.popular ? { xs: 1.5, md: 2 } : 0,
                      cursor: 'pointer',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f9feff 100%)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'inherit',
                        padding: plan.popular ? '2px' : '1px',
                        background: plan.gradient,
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        WebkitMaskComposite: 'xor',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      },
                      '&:hover': {
                        boxShadow: `0 20px 60px ${plan.color}40`,
                        borderColor: plan.color,
                        transform: 'translateY(-15px) scale(1.02)',
                        '&::before': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -16,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          zIndex: 1,
                        }}
                      >
                        <Chip
                          label="MOST POPULAR"
                          sx={{
                            bgcolor: '#10a2e0',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            letterSpacing: 1,
                            px: 2,
                            boxShadow: '0 4px 12px rgba(16, 162, 224, 0.3)',
                          }}
                        />
                      </Box>
                    )}

                    {/* Header */}
                    <Box
                      sx={{
                        background: plan.gradient,
                        p: { xs: 3, sm: 3.5, md: 4 },
                        color: 'white',
                        borderTopLeftRadius: { xs: 14, sm: 18, md: 22 },
                        borderTopRightRadius: { xs: 14, sm: 18, md: 22 },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 }, mb: { xs: 2, md: 2 } }}>
                        <Box
                          sx={{
                            width: { xs: 52, sm: 56, md: 60 },
                            height: { xs: 52, sm: 56, md: 60 },
                            minWidth: 52,
                            minHeight: 52,
                            borderRadius: '50%',
                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <plan.icon size={32} />
                        </Box>
                        <Box>
                          <Typography 
                            variant="h4" 
                            sx={{ 
                              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                              fontWeight: 700, 
                              mb: 0.5,
                              lineHeight: 1.2
                            }}
                          >
                            {plan.level}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              fontSize: { xs: '0.85rem', sm: '0.9rem' },
                              opacity: 0.9,
                              lineHeight: 1.3
                            }}
                          >
                            {plan.subtitle}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Pricing */}
                      <Box sx={{ mt: { xs: 2.5, md: 3 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                          <Typography 
                            variant="h3" 
                            sx={{ 
                              fontWeight: 700, 
                              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.5rem' },
                              lineHeight: 1
                            }}
                          >
                            Rp{plan.price.monthly.toLocaleString('id-ID')}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontSize: { xs: '0.9rem', sm: '1rem' },
                              opacity: 0.9 
                            }}
                          >
                            /month
                          </Typography>
                        </Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontSize: { xs: '0.85rem', sm: '0.9rem' },
                            opacity: 0.9 
                          }}
                        >
                          or Rp{plan.price.package.toLocaleString('id-ID')} complete package
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent sx={{ p: { xs: 3, sm: 3.5, md: 4 } }}>
                      {/* Includes */}
                      <Box sx={{ mb: 4, p: 3, bgcolor: '#f8fafc', borderRadius: 2 }}>
                        <Typography variant="subtitle2" sx={{ color: '#10a2e0', fontWeight: 700, mb: 2 }}>
                          What's Included:
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <Typography variant="body2" sx={{ color: '#64748b' }}>
                            📅 {plan.includes.sessions}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#64748b' }}>
                            💬 {plan.includes.support}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#64748b' }}>
                            ⚡ {plan.includes.turnaround}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Features */}
                      <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle2" sx={{ color: '#0a4168', fontWeight: 700, mb: 2 }}>
                          Features:
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                          {plan.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.05 }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}>
                                <Check size={20} style={{ color: plan.color, flexShrink: 0, marginTop: 2 }} />
                                <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>
                                  {feature}
                                </Typography>
                              </Box>
                            </motion.div>
                          ))}
                        </Box>
                      </Box>

                      {/* CTA Button */}
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -3 }} 
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Button
                          variant="contained"
                          fullWidth
                          endIcon={<ArrowRight />}
                          onClick={handleContactUs}
                          sx={{
                            background: plan.gradient,
                            color: 'white',
                            py: { xs: 2, sm: 2 },
                            minHeight: { xs: 56, sm: 'auto' },
                            fontSize: { xs: '1.05rem', sm: '1.1rem' },
                            fontWeight: 600,
                            borderRadius: 3,
                            textTransform: 'none',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: `0 8px 24px ${plan.color}40, inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
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
                              background: `linear-gradient(135deg, ${plan.color} 0%, #0d608e 100%)`,
                              boxShadow: `0 12px 40px ${plan.color}60`,
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                              '&::before': {
                                left: '100%',
                              },
                            },
                            '&:active': {
                              boxShadow: `0 4px 12px ${plan.color}50`,
                            }
                          }}
                        >
                          Get Started
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Box sx={{ mb: { xs: 8, sm: 9, md: 10 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: '#0a4168',
                  mb: { xs: 3.5, sm: 4, md: 4 },
                  textAlign: 'center',
                }}
              >
                Optional Add-Ons
              </Typography>

              <Grid container spacing={{ xs: 2.5, sm: 3, md: 3 }}>
                {addOns.map((addon, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -8 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Box
                        sx={{
                          bgcolor: 'white',
                          p: { xs: 3, sm: 3, md: 3 },
                          borderRadius: { xs: 2.5, md: 3 },
                          textAlign: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                          boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                          height: '100%',
                          cursor: 'pointer',
                          border: '1px solid rgba(16, 162, 224, 0.1)',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          minHeight: { xs: 200, sm: 'auto' },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          '&::before': {
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
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: 0,
                            height: 0,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(16, 162, 224, 0.08), transparent 70%)',
                            transform: 'translate(-50%, -50%)',
                            transition: 'width 0.5s ease, height 0.5s ease',
                          },
                          '&:hover': {
                            boxShadow: '0 12px 40px rgba(16, 162, 224, 0.2)',
                            borderColor: '#10a2e0',
                            bgcolor: 'rgba(240, 249, 255, 0.5)',
                            '&::before': {
                              transform: 'scaleX(1)',
                            },
                            '&::after': {
                              width: '300px',
                              height: '300px',
                            },
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 56, sm: 60 },
                            height: { xs: 56, sm: 60 },
                            minHeight: 56,
                            borderRadius: '50%',
                            bgcolor: 'rgba(16, 162, 224, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 2,
                          }}
                        >
                          <addon.icon size={28} style={{ color: '#10a2e0' }} />
                        </Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontSize: { xs: '1.1rem', sm: '1.15rem', md: '1.25rem' },
                            fontWeight: 700, 
                            color: '#0a4168', 
                            mb: 1,
                            lineHeight: 1.3
                          }}
                        >
                          {addon.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontSize: { xs: '0.9rem', sm: '0.95rem' },
                            color: '#64748b', 
                            mb: 2,
                            lineHeight: 1.5,
                            px: { xs: 1, sm: 0 }
                          }}
                        >
                          {addon.description}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
                            color: '#10a2e0', 
                            fontWeight: 700 
                          }}
                        >
                          {addon.price}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Box sx={{ mb: { xs: 8, sm: 9, md: 10 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: '#0a4168',
                  mb: { xs: 3.5, sm: 4, md: 4 },
                  textAlign: 'center',
                }}
              >
                Plan Comparison
              </Typography>

              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: { xs: 2.5, md: 4 },
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                }}
              >
                {/* Header */}
                <Grid container sx={{ bgcolor: '#f8fafc', p: { xs: 1.5, sm: 2 } }}>
                  <Grid item xs={6}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        fontWeight: 700, 
                        color: '#0a4168' 
                      }}
                    >
                      Feature
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        fontWeight: 700, 
                        color: '#10a2e0',
                        lineHeight: 1.3
                      }}
                    >
                      Bachelor's
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        fontWeight: 700, 
                        color: '#0d608e',
                        lineHeight: 1.3
                      }}
                    >
                      Master's
                    </Typography>
                  </Grid>
                </Grid>

                {/* Rows */}
                {comparisonFeatures.map((row, index) => (
                  <Grid
                    container
                    key={index}
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      minHeight: { xs: 48, sm: 'auto' },
                      borderTop: '1px solid #e2e8f0',
                      alignItems: 'center',
                      '&:hover': { bgcolor: '#f8fafc' },
                      '&:active': { bgcolor: 'rgba(16, 162, 224, 0.05)' },
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontSize: { xs: '0.8rem', sm: '0.875rem' },
                          color: '#64748b',
                          lineHeight: 1.4
                        }}
                      >
                        {row.feature}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'center' }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontSize: { xs: '0.8rem', sm: '0.875rem' },
                          color: '#64748b', 
                          fontWeight: 600 
                        }}
                      >
                        {row.bachelor}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'center' }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontSize: { xs: '0.8rem', sm: '0.875rem' },
                          color: '#64748b', 
                          fontWeight: 600 
                        }}
                      >
                        {row.masters}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* FAQ / Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Box
              sx={{
                p: { xs: 3.5, sm: 4, md: 6 },
                borderRadius: { xs: 2.5, md: 4 },
                background: 'linear-gradient(135deg, #10a2e0 0%, #0d608e 100%)',
                textAlign: 'center',
              }}
            >
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
                30-Day Money-Back Guarantee
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: { xs: 3, md: 4 },
                  maxWidth: 700,
                  mx: 'auto',
                  lineHeight: 1.6,
                  px: { xs: 1, sm: 0 }
                }}
              >
                Not satisfied with our service? Get a full refund within the first 30 days, no questions asked.
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                justifyContent: 'center', 
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'stretch',
                maxWidth: { xs: '100%', sm: 'none' },
                mx: { xs: 'auto', sm: 0 }
              }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleChoosePlan}
                  style={{
                    background: 'white',
                    color: '#10a2e0',
                    border: 'none',
                    padding: window.innerWidth < 600 ? '18px 32px' : '16px 40px',
                    minHeight: window.innerWidth < 600 ? '56px' : 'auto',
                    fontSize: window.innerWidth < 600 ? '1.05rem' : '1.1rem',
                    fontWeight: 600,
                    borderRadius: 12,
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    width: window.innerWidth < 600 ? '100%' : 'auto',
                  }}
                >
                  Choose Your Plan
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactUs}
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    padding: window.innerWidth < 600 ? '18px 32px' : '16px 40px',
                    minHeight: window.innerWidth < 600 ? '56px' : 'auto',
                    fontSize: window.innerWidth < 600 ? '1.05rem' : '1.1rem',
                    fontWeight: 600,
                    borderRadius: 12,
                    cursor: 'pointer',
                    width: window.innerWidth < 600 ? '100%' : 'auto',
                  }}
                >
                  Contact Us
                </motion.button>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
