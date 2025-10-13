import { Box, Container, Typography, Grid, Card, CardContent, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Globe, Mail, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate('/pricing');
  };
const consultants = [
  {
    name: "Gading Aditya Perdana",
    title: "Chief Executive Officer (CEO)",
    degree: "Bachelor of Computer Science (In Progress)",
    university: "Binus University",
    experience: "2+ years",
    specialties: ["AI Research", "Deep Learning", "Computer Vision", "Technical Leadership"],
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=CEObusinessmansuit&backgroundColor=10a2e0",
    bio: "Award-winning AI researcher with four peer-reviewed publications pioneering robust and calibrated deep learning models. Bridges theory and practice by architecting end-to-end intelligent systems across computer vision and NLP.",
    stats: { students: 200, papers: 4, rating: 4.9 },
    email: "gadingadityaperdana@gmail.com",
    linkedin: "https://www.linkedin.com/in/gadingadityaperdana/"
  },
  {
    name: "Puti Rania Faiza",
    title: "Chief Finance Officer (CFO)",
    degree: "Bachelor of Computer Science (In Progress)",
    university: "Binus University",
    experience: "3+ years",
    specialties: ["Financial Planning", "Data Analytics", "Investment Analysis", "Risk Assessment"],
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=PutiCFOFemale&backgroundColor=6bd3fe&top=hijab&clothingGraphic=bear&mouth=smile",
    bio: "Experienced financial strategist specializing in startup finance and budget optimization. Expert in financial modeling and resource allocation for educational platforms with strong analytical background.",
    stats: { students: 180, papers: 1, rating: 4.9 },
    email: "puti.faiza@thesistant.com",
    linkedin: "#"
  },
  {
    name: "Rameyza Alya Mardya Izzati Prayitno",
    title: "Chief Operational Officer (COO)",
    degree: "Bachelor of Computer Science (In Progress)",
    university: "Binus University",
    experience: "2+ years",
    specialties: ["Operations Management", "Process Optimization", "Team Coordination", "Strategic Planning"],
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=RameyzaCOOFemale&backgroundColor=0d608e&top=hijab&clothingGraphic=diamond&mouth=smile",
    bio: "Operations specialist focused on streamlining workflows and enhancing service delivery. Skilled in coordinating cross-functional teams to ensure seamless student experience with technical expertise.",
    stats: { students: 160, papers: 1, rating: 4.8 },
    email: "rameyza.prayitno@thesistant.com",
    linkedin: "#"
  },
  {
    name: "Nur Farhayati",
    title: "Chief Technology Officer (CTO)",
    degree: "Bachelor of Computer Science (In Progress)",
    university: "Binus University",
    experience: "2+ years",
    specialties: ["Web Development", "System Architecture", "Cloud Infrastructure", "Technical Innovation"],
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=CTOFemale&backgroundColor=0b446c&top=hijab&clothingGraphic=skull&mouth=smile",
    bio: "Technology leader specializing in building scalable platforms and modern web applications. Passionate about leveraging technology to enhance educational accessibility and user experience.",
    stats: { students: 140, papers: 0, rating: 4.8 },
    email: "nur.farhayati@thesistant.com",
    linkedin: "#"
  },
];

  const stats = [
    { icon: Users, label: "Leadership Team", value: "4" },
    { icon: GraduationCap, label: "University Students", value: "100%" },
    { icon: Award, label: "Combined Experience", value: "9+ Years" },
    { icon: Globe, label: "Research Publications", value: "4+" },
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
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 1.5, md: 2 }, mb: { xs: 2, md: 3 } }}>
                <Users size={48} style={{ color: '#10a2e0' }} />
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
                    fontWeight: 700,
                    color: '#0a4168',
                  }}
                >
                  Our Expert Team
                </Typography>
              </Box>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  color: '#64748b',
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.7,
                  mb: { xs: 4, md: 6 },
                  px: { xs: 2, sm: 0 }
                }}
              >
                Meet our world-class consultants - PhD holders and experienced researchers dedicated to your academic success
              </Typography>

              {/* Stats */}
              <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} sx={{ mb: { xs: 4, md: 6 } }}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 400 }}
                      whileHover={{ scale: 1.08, y: -8 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Box
                        sx={{
                          bgcolor: 'white',
                          borderRadius: { xs: 2.5, md: 3 },
                          p: { xs: 2.5, sm: 3 },
                          textAlign: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                          boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                          minHeight: { xs: 130, sm: 'auto' },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          border: '1px solid rgba(16, 162, 224, 0.1)',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
                            inset: 0,
                            background: 'radial-gradient(circle at center, rgba(16, 162, 224, 0.05), transparent 70%)',
                            opacity: 0,
                            transition: 'opacity 0.4s ease',
                          },
                          '&:hover': {
                            boxShadow: '0 12px 40px rgba(16, 162, 224, 0.2)',
                            borderColor: '#10a2e0',
                            bgcolor: 'rgba(240, 249, 255, 0.8)',
                            '&::before': {
                              transform: 'scaleX(1)',
                            },
                            '&::after': {
                              opacity: 1,
                            },
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 44, sm: 48, md: 50 },
                            height: { xs: 44, sm: 48, md: 50 },
                            minHeight: 44,
                            borderRadius: '50%',
                            bgcolor: 'rgba(16, 162, 224, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: { xs: 1.5, md: 2 },
                          }}
                        >
                          <stat.icon size={24} style={{ color: '#10a2e0' }} />
                        </Box>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                            fontWeight: 700, 
                            color: '#0a4168', 
                            mb: 0.5,
                            lineHeight: 1
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#64748b', 
                            fontSize: { xs: '0.8rem', sm: '0.85rem' },
                            lineHeight: 1.3
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Team Grid */}
          <Grid container spacing={{ xs: 3, sm: 3.5, md: 4 }}>
            {consultants.map((consultant, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.12, duration: 0.6, type: "spring", stiffness: 300 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: { xs: 3, md: 4 },
                      boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: '1px solid rgba(16, 162, 224, 0.1)',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(16, 162, 224, 0.05), transparent)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      },
                      '&:hover': {
                        boxShadow: '0 16px 56px rgba(16, 162, 224, 0.25)',
                        borderColor: '#10a2e0',
                        '&::before': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* Header with gradient */}
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)',
                        p: { xs: 3, sm: 3.5, md: 4 },
                        color: 'white',
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: { xs: 2, sm: 2.5, md: 3 },
                        flexDirection: { xs: 'column', sm: 'row' },
                        textAlign: { xs: 'center', sm: 'left' }
                      }}>
                        <Avatar
                          src={consultant.image}
                          sx={{
                            width: { xs: 80, sm: 90, md: 100 },
                            height: { xs: 80, sm: 90, md: 100 },
                            border: { xs: '3px solid white', md: '4px solid white' },
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              fontSize: { xs: '1.15rem', sm: '1.25rem', md: '1.5rem' },
                              fontWeight: 700, 
                              mb: 0.5,
                              lineHeight: 1.2
                            }}
                          >
                            {consultant.name}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              fontSize: { xs: '0.9rem', sm: '0.95rem' },
                              opacity: 0.9, 
                              mb: 1,
                              lineHeight: 1.3
                            }}
                          >
                            {consultant.title}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                            <GraduationCap size={16} />
                            <Typography 
                              variant="caption"
                              sx={{ fontSize: { xs: '0.8rem', sm: '0.85rem' } }}
                            >
                              {consultant.experience}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <CardContent sx={{ p: { xs: 3, sm: 3.5, md: 4 } }}>
                      {/* Education */}
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ color: '#10a2e0', fontWeight: 600, mb: 1 }}>
                          Education
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#0a4168', fontWeight: 600 }}>
                          {consultant.degree}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#64748b' }}>
                          {consultant.university}
                        </Typography>
                      </Box>

                      {/* Bio */}
                      <Typography variant="body2" sx={{ color: '#64748b', mb: 3, lineHeight: 1.7 }}>
                        {consultant.bio}
                      </Typography>

                      {/* Specialties */}
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" sx={{ color: '#10a2e0', fontWeight: 600, mb: 1.5 }}>
                          Specialties
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {consultant.specialties.map((specialty, idx) => (
                            <Chip
                              key={idx}
                              label={specialty}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(16, 162, 224, 0.1)',
                                color: '#10a2e0',
                                fontWeight: 600,
                                '&:hover': {
                                  bgcolor: 'rgba(16, 162, 224, 0.2)',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </Box>

                      {/* Stats */}
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 3,
                          p: 2,
                          bgcolor: '#f8fafc',
                          borderRadius: 2,
                          mb: 3,
                        }}
                      >
                        <Box sx={{ flex: 1, textAlign: 'center' }}>
                          <Typography variant="h6" sx={{ color: '#10a2e0', fontWeight: 700 }}>
                            {consultant.stats.students}+
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#64748b' }}>
                            Students
                          </Typography>
                        </Box>
                        <Box sx={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0' }}>
                          <Typography variant="h6" sx={{ color: '#10a2e0', fontWeight: 700 }}>
                            {consultant.stats.papers}+
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#64748b' }}>
                            Papers
                          </Typography>
                        </Box>
                        <Box sx={{ flex: 1, textAlign: 'center' }}>
                          <Typography variant="h6" sx={{ color: '#10a2e0', fontWeight: 700 }}>
                            {consultant.stats.rating}⭐
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#64748b' }}>
                            Rating
                          </Typography>
                        </Box>
                      </Box>

                      {/* Contact */}
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <motion.a
                          href={`mailto:${consultant.email}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{ textDecoration: 'none', flex: 1 }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 1,
                              p: 1.5,
                              borderRadius: 2,
                              bgcolor: 'rgba(16, 162, 224, 0.1)',
                              color: '#10a2e0',
                              cursor: 'pointer',
                              transition: 'all 0.3s',
                              '&:hover': {
                                bgcolor: '#10a2e0',
                                color: 'white',
                              },
                            }}
                          >
                            <Mail size={18} />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              Email
                            </Typography>
                          </Box>
                        </motion.a>
                        <motion.a
                          href={consultant.linkedin}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{ textDecoration: 'none' }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              p: 1.5,
                              borderRadius: 2,
                              bgcolor: 'rgba(16, 162, 224, 0.1)',
                              color: '#10a2e0',
                              cursor: 'pointer',
                              transition: 'all 0.3s',
                              '&:hover': {
                                bgcolor: '#10a2e0',
                                color: 'white',
                              },
                            }}
                          >
                            <Linkedin size={18} />
                          </Box>
                        </motion.a>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Box
              sx={{
                mt: { xs: 8, sm: 9, md: 10 },
                p: { xs: 3.5, sm: 4, md: 6 },
                borderRadius: { xs: 2.5, md: 4 },
                background: 'linear-gradient(135deg, #10a2e0 0%, #0d608e 100%)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
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
                  Ready to Work with Our Experts?
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
                  Get matched with the perfect consultant for your research needs
                </Typography>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleScheduleConsultation}
                  style={{
                    background: 'white',
                    color: '#10a2e0',
                    border: 'none',
                    padding: window.innerWidth < 600 ? '18px 32px' : '16px 48px',
                    minHeight: window.innerWidth < 600 ? '56px' : 'auto',
                    width: window.innerWidth < 600 ? '100%' : 'auto',
                    maxWidth: window.innerWidth < 600 ? '320px' : 'none',
                    fontSize: window.innerWidth < 600 ? '1.05rem' : '1.1rem',
                    fontWeight: 600,
                    borderRadius: 12,
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Schedule a Consultation
                </motion.button>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
