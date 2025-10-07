import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight, Users, Clock, FileText } from 'lucide-react';

const Pricing = () => {
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
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                  }}
                >
                  <Zap size={40} style={{ color: 'white', strokeWidth: 2.5 }} />
                </motion.div>
              </Box>
              
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#0a4168',
                  mb: 2,
                }}
              >
                Choose Your Plan
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  color: '#64748b',
                  maxWidth: 700,
                  mx: 'auto',
                  lineHeight: 1.7,
                  mb: 2,
                }}
              >
                Professional thesis consulting tailored to your academic level
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#10a2e0',
                  fontWeight: 600,
                }}
              >
                💡 All plans include personalized guidance and expert support
              </Typography>
            </Box>
          </motion.div>

          {/* Pricing Cards */}
          <Grid container spacing={4} sx={{ mb: 10 }}>
            {plans.map((plan, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 6,
                      boxShadow: plan.popular 
                        ? '0 12px 40px rgba(16, 162, 224, 0.2)' 
                        : '0 4px 20px rgba(16, 162, 224, 0.08)',
                      border: plan.popular ? '2px solid #10a2e0' : '1px solid rgba(16, 162, 224, 0.1)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'visible',
                      mt: plan.popular ? 2 : 0,
                      '&:hover': {
                        boxShadow: '0 16px 50px rgba(16, 162, 224, 0.25)',
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
                        p: 4,
                        color: 'white',
                        borderTopLeftRadius: 22,
                        borderTopRightRadius: 22,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
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
                          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                            {plan.level}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.9 }}>
                            {plan.subtitle}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Pricing */}
                      <Box sx={{ mt: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                          <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
                            Rp{plan.price.monthly.toLocaleString('id-ID')}
                          </Typography>
                          <Typography variant="body1" sx={{ opacity: 0.9 }}>
                            /month
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          or Rp{plan.price.package.toLocaleString('id-ID')} complete package
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 4 }}>
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
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          endIcon={<ArrowRight />}
                          sx={{
                            bgcolor: plan.color,
                            color: 'white',
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            borderRadius: 3,
                            textTransform: 'none',
                            boxShadow: `0 8px 24px ${plan.color}40`,
                            '&:hover': {
                              bgcolor: '#0d608e',
                              boxShadow: `0 12px 32px ${plan.color}50`,
                            },
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
            <Box sx={{ mb: 10 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: '#0a4168',
                  mb: 4,
                  textAlign: 'center',
                }}
              >
                Optional Add-Ons
              </Typography>

              <Grid container spacing={3}>
                {addOns.map((addon, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Box
                        sx={{
                          bgcolor: 'white',
                          p: 3,
                          borderRadius: 3,
                          textAlign: 'center',
                          boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                          height: '100%',
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
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
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#0a4168', mb: 1 }}>
                          {addon.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
                          {addon.description}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#10a2e0', fontWeight: 700 }}>
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
            <Box sx={{ mb: 10 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: '#0a4168',
                  mb: 4,
                  textAlign: 'center',
                }}
              >
                Plan Comparison
              </Typography>

              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                }}
              >
                {/* Header */}
                <Grid container sx={{ bgcolor: '#f8fafc', p: 2 }}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0a4168' }}>
                      Feature
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#10a2e0' }}>
                      Bachelor's
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0d608e' }}>
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
                      p: 2,
                      borderTop: '1px solid #e2e8f0',
                      '&:hover': { bgcolor: '#f8fafc' },
                    }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="body2" sx={{ color: '#64748b' }}>
                        {row.feature}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 600 }}>
                        {row.bachelor}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 600 }}>
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
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: 'linear-gradient(135deg, #10a2e0 0%, #0d608e 100%)',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: 'white',
                  mb: 2,
                }}
              >
                30-Day Money-Back Guarantee
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 4,
                  maxWidth: 700,
                  mx: 'auto',
                }}
              >
                Not satisfied with our service? Get a full refund within the first 30 days, no questions asked.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'white',
                    color: '#10a2e0',
                    border: 'none',
                    padding: '16px 40px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 12,
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Choose Your Plan
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    padding: '16px 40px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 12,
                    cursor: 'pointer',
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
