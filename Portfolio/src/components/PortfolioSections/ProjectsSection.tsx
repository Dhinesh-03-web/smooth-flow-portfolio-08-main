import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, advanced filtering, and seamless checkout experience.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/api/placeholder/400/300',
    github: '#',
    live: '#',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: '/api/placeholder/400/300',
    github: '#',
    live: '#',
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed meteorological data visualization.',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
    image: '/api/placeholder/400/300',
    github: '#',
    live: '#',
  },
  {
    id: 'social-media-analytics',
    title: 'Social Media Analytics',
    description: 'Comprehensive social media monitoring tool with sentiment analysis, engagement tracking, and automated reporting features.',
    tech: ['Next.js', 'Python', 'PostgreSQL'],
    image: '/api/placeholder/400/300',
    github: '#',
    live: '#',
  },
];

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies 
            and innovative problem-solving approaches.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group"
            >
              <div className="gradient-card rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-border/50">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-blue-accent/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-accent opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <Button variant="heroSecondary" size="sm" className="group/btn">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="group/btn"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="group"
            onClick={() => navigate('/projects')}
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;