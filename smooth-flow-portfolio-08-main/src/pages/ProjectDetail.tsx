import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';

const projectsData = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, advanced filtering, and seamless checkout experience.',
    longDescription: 'This comprehensive e-commerce platform was built to handle high-traffic retail operations with a focus on performance and user experience. The platform includes advanced product filtering, real-time inventory management, secure payment processing, and an intuitive admin dashboard for managing products, orders, and customer data.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
    image: '/api/placeholder/800/400',
    github: '#',
    live: '#',
    duration: '3 months',
    team: '4 developers',
    features: [
      'Real-time inventory management',
      'Advanced product filtering and search',
      'Secure payment processing with Stripe',
      'Responsive design for all devices',
      'Admin dashboard with analytics',
      'Email notifications and order tracking'
    ],
    challenges: 'Optimizing database queries for large product catalogs and implementing real-time inventory updates across multiple concurrent users.',
    solution: 'Implemented Redis caching for frequently accessed data and used WebSocket connections for real-time inventory updates.'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.',
    longDescription: 'A comprehensive project management solution designed for remote teams. The application features real-time collaboration, advanced task scheduling, team communication tools, and detailed analytics to help teams stay productive and organized.',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Chart.js', 'PWA'],
    image: '/api/placeholder/800/400',
    github: '#',
    live: '#',
    duration: '2 months',
    team: '3 developers',
    features: [
      'Real-time task updates and notifications',
      'Team collaboration and chat features',
      'Advanced analytics and reporting',
      'Drag-and-drop task management',
      'Time tracking and productivity metrics',
      'Progressive Web App (PWA) support'
    ],
    challenges: 'Ensuring real-time synchronization across multiple users while maintaining data consistency and handling offline scenarios.',
    solution: 'Leveraged Firebase Firestore for real-time data synchronization and implemented offline-first architecture with service workers.'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed meteorological data visualization.',
    longDescription: 'An intuitive weather dashboard that provides comprehensive meteorological data through beautiful visualizations. The application features location-based forecasts, interactive weather maps, and detailed analytics for weather patterns and trends.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox', 'TypeScript'],
    image: '/api/placeholder/800/400',
    github: '#',
    live: '#',
    duration: '1.5 months',
    team: '2 developers',
    features: [
      'Location-based weather forecasts',
      'Interactive weather maps',
      'Detailed meteorological data visualization',
      'Weather alerts and notifications',
      'Historical weather data analysis',
      'Responsive design with dark/light themes'
    ],
    challenges: 'Integrating multiple weather APIs and creating smooth, interactive map visualizations while maintaining fast load times.',
    solution: 'Implemented efficient data caching strategies and optimized map rendering using Mapbox GL JS for smooth interactions.'
  },
  {
    id: 'social-media-analytics',
    title: 'Social Media Analytics',
    description: 'Comprehensive social media monitoring tool with sentiment analysis, engagement tracking, and automated reporting features.',
    longDescription: 'A powerful analytics platform that helps businesses monitor their social media presence across multiple platforms. Features include sentiment analysis, engagement tracking, competitor analysis, and automated reporting with actionable insights.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'TensorFlow', 'Docker'],
    image: '/api/placeholder/800/400',
    github: '#',
    live: '#',
    duration: '4 months',
    team: '5 developers',
    features: [
      'Multi-platform social media monitoring',
      'AI-powered sentiment analysis',
      'Real-time engagement tracking',
      'Competitor analysis and benchmarking',
      'Automated reporting and insights',
      'Custom dashboard creation'
    ],
    challenges: 'Processing large volumes of social media data in real-time while performing complex sentiment analysis and maintaining system performance.',
    solution: 'Implemented a microservices architecture with Docker and used TensorFlow for efficient sentiment analysis processing.'
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-page">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-page">
      <ParticleBackground />
      
      {/* Header */}
      <div className="relative z-10 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>

            <div className="max-w-4xl mx-auto">
              {/* Project Image */}
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary/10 to-blue-accent/20 rounded-xl overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-accent opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-primary/30">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Project Header */}
              <div className="gradient-card p-8 rounded-xl shadow-soft border border-border/50 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-0">
                    {project.title}
                  </h1>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="group">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="hero" size="sm" className="group">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  {project.longDescription}
                </p>

                {/* Project Meta */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Code className="w-5 h-5 mr-2 text-primary" />
                    <span>{project.tech.length} Technologies</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="gradient-card p-8 rounded-xl shadow-soft border border-border/50 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="gradient-card p-6 rounded-xl shadow-soft border border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-4">Challenges</h3>
                  <p className="text-muted-foreground">{project.challenges}</p>
                </div>
                <div className="gradient-card p-6 rounded-xl shadow-soft border border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-4">Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;