import { Box, Container, Typography, Grid, Card, CardContent, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Globe, Mail, Linkedin } from 'lucide-react';

const Team = () => {
  const consultants = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Lead Research Consultant",
      degree: "PhD in Educational Psychology",
      university: "Stanford University",
      experience: "15+ years",
      specialties: ["Qualitative Research", "Educational Studies", "Psychology"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=10a2e0",
      bio: "Specializes in qualitative research methodologies and has guided over 200 students to successful thesis completion.",
      stats: { students: 200, papers: 150, rating: 4.9 },
      email: "sarah.mitchell@thesistant.com",
      linkedin: "#"
    },
    {
      name: "Dr. Michael Chen",
      title: "Senior Methodology Advisor",
      degree: "PhD in Computer Science",
      university: "MIT",
      experience: "12+ years",
      specialties: ["Quantitative Analysis", "Machine Learning", "Statistics"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=0d608e",
      bio: "Expert in quantitative research and statistical analysis, with extensive experience in STEM fields.",
      stats: { students: 180, papers: 120, rating: 4.8 },
      email: "michael.chen@thesistant.com",
      linkedin: "#"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Writing & Structure Specialist",
      degree: "PhD in English Literature",
      university: "Oxford University",
      experience: "10+ years",
      specialties: ["Academic Writing", "Literature Review", "Humanities"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=6bd3fe",
      bio: "Passionate about helping students articulate their research clearly and persuasively.",
      stats: { students: 160, papers: 140, rating: 5.0 },
      email: "emily.rodriguez@thesistant.com",
      linkedin: "#"
    },
    {
      name: "Dr. James Anderson",
      title: "Business & Economics Consultant",
      degree: "PhD in Economics",
      university: "Harvard University",
      experience: "14+ years",
      specialties: ["Economics", "Business Research", "Case Studies"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=0b446c",
      bio: "Specialized in business case studies and economic research with real-world applications.",
      stats: { students: 190, papers: 160, rating: 4.9 },
      email: "james.anderson@thesistant.com",
      linkedin: "#"
    },
    {
      name: "Dr. Aisha Patel",
      title: "Health Sciences Advisor",
      degree: "PhD in Public Health",
      university: "Johns Hopkins University",
      experience: "11+ years",
      specialties: ["Public Health", "Medical Research", "Epidemiology"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&backgroundColor=41bff5",
      bio: "Expertise in health sciences research and medical statistics with a focus on public health.",
      stats: { students: 170, papers: 130, rating: 4.9 },
      email: "aisha.patel@thesistant.com",
      linkedin: "#"
    },
    {
      name: "Dr. David Thompson",
      title: "Engineering & Technology Expert",
      degree: "PhD in Mechanical Engineering",
      university: "UC Berkeley",
      experience: "13+ years",
      specialties: ["Engineering", "Technical Writing", "Applied Sciences"],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=10a2e0",
      bio: "Combines academic rigor with industry experience in engineering research and development.",
      stats: { students: 185, papers: 145, rating: 4.8 },
      email: "david.thompson@thesistant.com",
      linkedin: "#"
    },
  ];

  const stats = [
    { icon: Users, label: "Expert Consultants", value: "15+" },
    { icon: GraduationCap, label: "PhD Holders", value: "100%" },
    { icon: Award, label: "Combined Experience", value: "150+ Years" },
    { icon: Globe, label: "Countries Served", value: "45+" },
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
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 3 }}>
                <Users size={48} style={{ color: '#10a2e0' }} />
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
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
                  color: '#64748b',
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.7,
                  mb: 6,
                }}
              >
                Meet our world-class consultants - PhD holders and experienced researchers dedicated to your academic success
              </Typography>

              {/* Stats */}
              <Grid container spacing={3} sx={{ mb: 6 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Box
                        sx={{
                          bgcolor: 'white',
                          borderRadius: 3,
                          p: 3,
                          textAlign: 'center',
                          boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            bgcolor: 'rgba(16, 162, 224, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 2,
                          }}
                        >
                          <stat.icon size={24} style={{ color: '#10a2e0' }} />
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#0a4168', mb: 0.5 }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
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
          <Grid container spacing={4}>
            {consultants.map((consultant, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      boxShadow: '0 4px 20px rgba(16, 162, 224, 0.08)',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: '0 12px 40px rgba(16, 162, 224, 0.15)',
                      },
                    }}
                  >
                    {/* Header with gradient */}
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #10a2e0 0%, #6bd3fe 100%)',
                        p: 4,
                        color: 'white',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Avatar
                          src={consultant.image}
                          sx={{
                            width: 100,
                            height: 100,
                            border: '4px solid white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          }}
                        />
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                            {consultant.name}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
                            {consultant.title}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <GraduationCap size={16} />
                            <Typography variant="caption">
                              {consultant.experience}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 4 }}>
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
                mt: 10,
                p: { xs: 4, md: 6 },
                borderRadius: 4,
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
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    fontWeight: 700,
                    color: 'white',
                    mb: 2,
                  }}
                >
                  Ready to Work with Our Experts?
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
                  Get matched with the perfect consultant for your research needs
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
