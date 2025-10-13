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
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 30px rgba(16, 162, 224, 0.15)']
  );

  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['0px solid rgba(16, 162, 224, 0)', '1px solid rgba(16, 162, 224, 0.1)']
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

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on a page with contact section, navigate to home and scroll
      navigate('/');
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleGetStartedClick = () => {
    navigate('/pricing');
  };

  const drawer = (
    <Box 
      sx={{ 
        textAlign: 'center', 
        background: 'linear-gradient(180deg, #0a4168 0%, #0d608e 100%)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(107, 211, 254, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(50%, -50%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(107, 211, 254, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, 50%)',
        }
      }}
    >
      {/* Header with logo and close button */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          p: 2.5,
          borderBottom: '1px solid rgba(107, 211, 254, 0.2)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            handleNavClick('/');
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
            }}
          >
            <img 
              src="/thesistant-logo.png" 
              alt="Thesistant Logo" 
              style={{ height: 48, width: 'auto' }} 
            />
          </Box>
        </motion.div>
        <motion.div
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <IconButton 
            onClick={(e) => {
              e.stopPropagation();
              handleDrawerToggle();
            }}
            sx={{ 
              color: '#6bd3fe',
              width: 44,
              height: 44,
              bgcolor: 'rgba(107, 211, 254, 0.1)',
              border: '1px solid rgba(107, 211, 254, 0.2)',
              '&:hover': { 
                bgcolor: 'rgba(107, 211, 254, 0.2)',
                boxShadow: '0 0 20px rgba(107, 211, 254, 0.3)',
              }
            }}
          >
            <X size={24} />
          </IconButton>
        </motion.div>
      </Box>

      {/* Navigation List */}
      <List sx={{ flex: 1, py: 2, position: 'relative', zIndex: 1 }}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <motion.div 
                style={{ width: '100%' }}
                whileHover={{ scale: 1.03, x: 10 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ListItemButton 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavClick(item.path);
                  }}
                  sx={{ 
                    textAlign: 'center',
                    py: 2,
                    minHeight: 56,
                    mx: 2,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: '4px',
                      bgcolor: '#6bd3fe',
                      transform: 'scaleY(0)',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': { 
                      bgcolor: 'rgba(107, 211, 254, 0.15)',
                      boxShadow: '0 4px 20px rgba(107, 211, 254, 0.2)',
                      '&::before': {
                        transform: 'scaleY(1)',
                      }
                    },
                    '&:active': {
                      bgcolor: 'rgba(107, 211, 254, 0.25)',
                    }
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    sx={{ 
                      color: '#ffffff',
                      '& .MuiTypography-root': { 
                        fontWeight: 500,
                        fontSize: '1.1rem',
                        letterSpacing: '0.5px',
                      }
                    }} 
                  />
                </ListItemButton>
              </motion.div>
            </ListItem>
          </motion.div>
        ))}
      </List>

      {/* CTA Button */}
      <Box sx={{ px: 3, pb: 4, mt: 'auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            fullWidth
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              handleDrawerToggle();
              handleGetStartedClick();
            }}
            sx={{
              background: 'linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)',
              color: 'white',
              py: 2,
              minHeight: 56,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 3,
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 24px rgba(16, 162, 224, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                transition: 'left 0.5s ease',
              },
              '&:hover': { 
                background: 'linear-gradient(135deg, #0d608e 0%, #10a2e0 100%)',
                boxShadow: '0 12px 32px rgba(16, 162, 224, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&::before': {
                  left: '100%',
                }
              },
              '&:active': {
                boxShadow: '0 4px 12px rgba(16, 162, 224, 0.4)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Get Started
          </Button>
        </motion.div>
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
          borderBottom,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.08,
                  rotate: [0, -5, 5, 0],
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  scale: { duration: 0.2 },
                  rotate: { duration: 0.5, repeat: 0 }
                }}
              >
                <img
                  src="/thesistant-logo.png"
                  alt="Thesistant Logo"
                  style={{ 
                    height: 60,
                    filter: scrolled ? 'none' : 'drop-shadow(0 2px 8px rgba(16, 162, 224, 0.3))',
                    transition: 'filter 0.3s ease'
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      onClick={() => handleNavClick(item.path)}
                      sx={{
                        color: scrolled ? '#0a4168' : '#0a4168',
                        fontWeight: 500,
                        px: 2.5,
                        py: 1,
                        letterSpacing: '0.5px',
                        position: 'relative',
                        overflow: 'visible',
                        transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: 4,
                          left: '50%',
                          transform: 'translateX(-50%) scaleX(0)',
                          width: '75%',
                          height: '3px',
                          background: 'linear-gradient(90deg, #10a2e0 0%, #6bd3fe 50%, #10a2e0 100%)',
                          borderRadius: '3px',
                          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          boxShadow: '0 2px 8px rgba(16, 162, 224, 0.4)',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at center, rgba(107, 211, 254, 0.15), transparent 70%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          borderRadius: '8px',
                        },
                        '&:hover': {
                          bgcolor: 'transparent',
                          color: '#10a2e0',
                          '&::before': {
                            transform: 'translateX(-50%) scaleX(1)',
                          },
                          '&::after': {
                            opacity: 1,
                          },
                        },
                        '&:active::before': {
                          transform: 'translateX(-50%) scaleX(0.9)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </Box>

            {/* CTA Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="outlined"
                  startIcon={<Phone size={18} />}
                  onClick={handleContactClick}
                  sx={{
                    borderColor: '#10a2e0',
                    color: '#10a2e0',
                    borderWidth: 2,
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(16, 162, 224, 0.1), rgba(107, 211, 254, 0.1))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: 0,
                      height: 0,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(107, 211, 254, 0.3), transparent 70%)',
                      transform: 'translate(-50%, -50%)',
                      transition: 'width 0.5s ease, height 0.5s ease',
                    },
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#10a2e0',
                      bgcolor: 'rgba(16, 162, 224, 0.08)',
                      boxShadow: '0 4px 20px rgba(16, 162, 224, 0.3), inset 0 0 20px rgba(107, 211, 254, 0.1)',
                      '&::before': {
                        opacity: 1,
                      },
                      '&::after': {
                        width: '300px',
                        height: '300px',
                      },
                    },
                    '&:active': {
                      boxShadow: '0 2px 10px rgba(16, 162, 224, 0.3)',
                    },
                  }}
                >
                  Contact
                </Button>
              </motion.div>
              
              {/* Get Started Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="contained"
                  startIcon={<Mail size={18} />}
                  onClick={handleGetStartedClick}
                  sx={{
                    background: 'linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)',
                    color: 'white',
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    letterSpacing: '0.5px',
                    boxShadow: '0 4px 16px rgba(16, 162, 224, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
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
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0d608e 0%, #10a2e0 100%)',
                      boxShadow: '0 8px 28px rgba(16, 162, 224, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      '&::before': {
                        left: '100%',
                      },
                      '&::after': {
                        opacity: 1,
                      },
                    },
                    '&:active': {
                      boxShadow: '0 4px 12px rgba(16, 162, 224, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.2)',
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
              sx={{ 
                display: { md: 'none' }, 
                color: '#10a2e0',
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: 'rgba(16, 162, 224, 0.08)',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                }
              }}
            >
              <Menu size={28} />
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
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '85%',
            maxWidth: 360,
            boxShadow: '-8px 0 24px rgba(0, 0, 0, 0.15)'
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(10, 65, 104, 0.5)',
            backdropFilter: 'blur(4px)',
          }
        }}
        transitionDuration={300}
      >
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from hiding under navbar */}
      <Toolbar sx={{ mb: 2 }} />
    </>
  );
};

export default Navbar;
