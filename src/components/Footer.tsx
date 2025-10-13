import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Thesis Writing', path: '#services' },
      { label: 'Methodology Consulting', path: '#services' },
      { label: 'Topic Development', path: '#services' },
      { label: 'Defense Preparation', path: '#services' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/team' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Contact', path: '#contact' },
    ],
    resources: [
      { label: 'Blog', path: '#' },
      { label: 'Research Tips', path: '#' },
      { label: 'FAQs', path: '#' },
      { label: 'Privacy Policy', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <Box
      id="contact"
      sx={{
        bgcolor: '#0a4168',
        color: 'white',
        pt: { xs: 6, sm: 7, md: 8 },
        pb: { xs: 3, md: 4 },
        px: { xs: 2, sm: 3 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107, 211, 254, 0.1) 0%, transparent 70%)',
          display: { xs: 'none', sm: 'block' }
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 4, sm: 4, md: 4 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ 
                mb: { xs: 2, md: 3 },
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <img 
                  src="/thesistant-logo.png" 
                  alt="Thesistant Logo" 
                  style={{ 
                    height: '160px'
                  }} 
                />
              </Box>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 3, 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  lineHeight: 1.7,
                  fontSize: { xs: '0.875rem', sm: '0.875rem' },
                  textAlign: { xs: 'center', md: 'left' },
                  px: { xs: 1, md: 0 }
                }}
              >
                Your trusted partner in academic excellence. We guide students through their thesis and research journey with expert consulting and personalized support.
              </Typography>

              {/* Contact Info */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: { xs: 1.5, md: 1.5 },
                alignItems: { xs: 'center', md: 'flex-start' }
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  minHeight: 36
                }}>
                  <Mail size={18} style={{ color: '#6bd3fe' }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: { xs: '0.875rem', sm: '0.875rem' }
                    }}
                  >
                    contact@thesistant.com
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  minHeight: 36
                }}>
                  <Phone size={18} style={{ color: '#6bd3fe' }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: { xs: '0.875rem', sm: '0.875rem' }
                    }}
                  >
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  minHeight: 36
                }}>
                  <MapPin size={18} style={{ color: '#6bd3fe' }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: { xs: '0.875rem', sm: '0.875rem' }
                    }}
                  >
                    123 Academic St, Research City
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Services Links */}
          <Grid item xs={12} sm={4} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  mb: { xs: 2, md: 2 }, 
                  color: '#6bd3fe',
                  fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                Services
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 1.5,
                alignItems: { xs: 'center', sm: 'flex-start' }
              }}>
                {footerLinks.services.map((link, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    component={motion.div}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (link.path.startsWith('#')) {
                        if (window.location.pathname === '/') {
                          document.querySelector(link.path)?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/' + link.path;
                        }
                      }
                    }}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      minHeight: 36,
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: { xs: '0.875rem', sm: '0.875rem' },
                      '&:hover': {
                        color: '#6bd3fe',
                        paddingLeft: 1,
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Company Links */}
          <Grid item xs={12} sm={4} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  mb: { xs: 2, md: 2 }, 
                  color: '#6bd3fe',
                  fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                Company
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 1.5,
                alignItems: { xs: 'center', sm: 'flex-start' }
              }}>
                {footerLinks.company.map((link, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    component={motion.div}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (link.path.startsWith('#')) {
                        if (window.location.pathname === '/') {
                          document.querySelector(link.path)?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/' + link.path;
                        }
                      } else {
                        window.location.href = link.path;
                      }
                    }}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      minHeight: 36,
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: { xs: '0.875rem', sm: '0.875rem' },
                      '&:hover': {
                        color: '#6bd3fe',
                        paddingLeft: 1,
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Resources Links */}
          <Grid item xs={12} sm={4} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  mb: { xs: 2, md: 2 }, 
                  color: '#6bd3fe',
                  fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                Resources
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 1.5,
                alignItems: { xs: 'center', sm: 'flex-start' }
              }}>
                {footerLinks.resources.map((link, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    component={motion.div}
                    whileTap={link.path !== '#' ? { scale: 0.98 } : {}}
                    onClick={() => link.path !== '#' && (window.location.href = link.path)}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      cursor: link.path !== '#' ? 'pointer' : 'default',
                      transition: 'all 0.3s',
                      minHeight: 36,
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: { xs: '0.875rem', sm: '0.875rem' },
                      '&:hover': {
                        color: link.path !== '#' ? '#6bd3fe' : 'rgba(255, 255, 255, 0.8)',
                        paddingLeft: link.path !== '#' ? 1 : 0,
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  mb: { xs: 2, md: 2 }, 
                  color: '#6bd3fe',
                  fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                Follow Us
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: { xs: 1.5, sm: 1 }, 
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      href={social.href}
                      aria-label={social.label}
                      sx={{
                        bgcolor: 'rgba(107, 211, 254, 0.1)',
                        color: '#6bd3fe',
                        width: { xs: 48, sm: 44 },
                        height: { xs: 48, sm: 44 },
                        minWidth: 44,
                        minHeight: 44,
                        '&:hover': {
                          bgcolor: '#6bd3fe',
                          color: '#0a4168',
                        },
                      }}
                    >
                      <social.icon size={20} />
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid rgba(107, 211, 254, 0.2)',
            mt: { xs: 5, md: 6 },
            pt: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 2, sm: 2 },
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: { xs: '0.813rem', sm: '0.875rem' },
              textAlign: 'center'
            }}
          >
            © {currentYear} Thesistant. All rights reserved.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 2, sm: 3 },
            flexDirection: { xs: 'row', sm: 'row' }
          }}>
            <Typography
              variant="body2"
              component={motion.div}
              whileTap={{ scale: 0.98 }}
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                fontSize: { xs: '0.813rem', sm: '0.875rem' },
                minHeight: 36,
                display: 'flex',
                alignItems: 'center',
                '&:hover': { color: '#6bd3fe' },
              }}
            >
              Terms of Service
            </Typography>
            <Typography
              variant="body2"
              component={motion.div}
              whileTap={{ scale: 0.98 }}
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                fontSize: { xs: '0.813rem', sm: '0.875rem' },
                minHeight: 36,
                display: 'flex',
                alignItems: 'center',
                '&:hover': { color: '#6bd3fe' },
              }}
            >
              Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
