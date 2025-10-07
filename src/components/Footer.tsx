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
        pt: 8,
        pb: 4,
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
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ mb: 3 }}>
                <img src="/thesistant-logo.png" alt="Thesistant Logo" style={{ height: 200 }} />
              </Box>
              
              <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
                Your trusted partner in academic excellence. We guide students through their thesis and research journey with expert consulting and personalized support.
              </Typography>

              {/* Contact Info */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Mail size={18} style={{ color: '#6bd3fe' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    contact@thesistant.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone size={18} style={{ color: '#6bd3fe' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MapPin size={18} style={{ color: '#6bd3fe' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
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
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#6bd3fe' }}>
                Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {footerLinks.services.map((link, index) => (
                  <Typography
                    key={index}
                    variant="body2"
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
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#6bd3fe' }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {footerLinks.company.map((link, index) => (
                  <Typography
                    key={index}
                    variant="body2"
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
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#6bd3fe' }}>
                Resources
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {footerLinks.resources.map((link, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    onClick={() => link.path !== '#' && (window.location.href = link.path)}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      cursor: link.path !== '#' ? 'pointer' : 'default',
                      transition: 'all 0.3s',
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
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#6bd3fe' }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
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
            mt: 6,
            pt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © {currentYear} Thesistant. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                '&:hover': { color: '#6bd3fe' },
              }}
            >
              Terms of Service
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
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
