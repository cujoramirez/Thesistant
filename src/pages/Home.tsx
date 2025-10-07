// This file is kept for backward compatibility
// The main landing page is now in LandingPage.tsx
import { Navigate } from 'react-router-dom';

const Home = () => {
  return <Navigate to="/" replace />;
};

export default Home;
