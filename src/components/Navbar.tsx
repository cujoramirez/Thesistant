import { useState, useEffect } from 'react';
import { Toolbar, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 2px 20px rgba(16, 162, 224, 0.1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '#services' },
    { label: 'How It Works', path: '#process' },
    { label: 'Our Team', path: '/team' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About Us', path: '/about' },
  ];

  const handleNavClick = (path: string) => {
    if (path === '/') {
      // Always navigate to home and scroll to top
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.startsWith('#')) {
      // Check if we're on the home page
      if (window.location.pathname === '/') {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        navigate('/' + path);
        // After navigation, scroll to element
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#0a4168', height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src="/Logo2@2x.png" alt="Thesistant Logo" style={{ height: 256, width: 256 }} />
          <span style={{ color: '#6bd3fe', fontSize: '1.25rem', fontWeight: 700 }}>Thesistant</span>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#6bd3fe' }}>
          <X />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              onClick={() => handleNavClick(item.path)}
              sx={{ 
                textAlign: 'center',
                '&:hover': { bgcolor: 'rgba(107, 211, 254, 0.1)' }
              }}
            >
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  color: '#ffffff',
                  '& .MuiTypography-root': { fontWeight: 500 }
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ px: 2, mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#10a2e0',
            color: 'white',
            py: 1.5,
            borderRadius: 2,
            '&:hover': { bgcolor: '#0d608e' },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          backgroundColor,
          boxShadow,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <motion.img
                src="/thesistant-logo.png"
                alt="Thesistant Logo"
                style={{ height: 60 }}
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    onClick={() => handleNavClick(item.path)}
                    sx={{
                      color: scrolled ? '#0a4168' : '#0a4168',
                      fontWeight: 500,
                      px: 2,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: 0,
                        height: 2,
                        bgcolor: '#10a2e0',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: '#10a2e0',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* CTA Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  startIcon={<Phone size={18} />}
                  sx={{
                    borderColor: '#10a2e0',
                    color: '#10a2e0',
                    borderWidth: 2,
                    fontWeight: 600,
                    px: 3,
                    borderRadius: 2,
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#0d608e',
                      bgcolor: 'rgba(16, 162, 224, 0.05)',
                    },
                  }}
                >
                  Contact
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  startIcon={<Mail size={18} />}
                  sx={{
                    bgcolor: '#10a2e0',
                    color: 'white',
                    fontWeight: 600,
                    px: 3,
                    borderRadius: 2,
                    boxShadow: '0 4px 14px rgba(16, 162, 224, 0.3)',
                    '&:hover': {
                      bgcolor: '#0d608e',
                      boxShadow: '0 6px 20px rgba(16, 162, 224, 0.4)',
                    },
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: '#10a2e0' }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from hiding under navbar */}
      <Toolbar sx={{ mb: 2 }} />
    </>
  );
};

export default Navbar;
