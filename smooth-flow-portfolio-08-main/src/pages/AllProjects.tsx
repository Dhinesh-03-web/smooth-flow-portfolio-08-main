import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Code, Database, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';

const allProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built with React and Node.js. Features include real-time inventory management, advanced product filtering, secure payment processing with Stripe integration, and a responsive admin dashboard. The platform handles thousands of products with optimized search functionality.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    category: 'Full-Stack',
    icon: Globe,
    image: '/api/placeholder/500/300',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool designed for remote teams. Features real-time updates via WebSocket, advanced task filtering and sorting, team collaboration tools, file sharing capabilities, and comprehensive analytics dashboard with progress tracking.',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS', 'WebSocket'],
    category: 'Frontend',
    icon: Smartphone,
    image: '/api/placeholder/500/300',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather application providing location-based forecasts and meteorological data. Includes interactive maps with weather overlays, historical weather data analysis, severe weather alerts, and detailed atmospheric conditions visualization.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox'],
    category: 'Frontend',
    icon: Code,
    image: '/api/placeholder/500/300',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Social Media Analytics',
    description: 'A comprehensive social media monitoring and analytics platform. Features sentiment analysis using machine learning, engagement tracking across multiple platforms, automated reporting with customizable metrics, and competitive analysis tools.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'TensorFlow'],
    category: 'Full-Stack',
    icon: Database,
    image: '/api/placeholder/500/300',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Real Estate Platform',
    description: 'Modern real estate listing platform with advanced search capabilities. Features include interactive property maps, virtual tour integration, mortgage calculator, saved searches with email notifications, and agent management system.',
    tech: ['React', 'Express.js', 'MySQL', 'Mapbox', 'AWS S3'],
    category: 'Full-Stack',
    icon: Globe,
    image: '/api/placeholder/500/300',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-responsive fitness tracking application with workout planning and nutrition logging. Includes progress tracking with charts, social features for sharing achievements, exercise database with video demonstrations, and meal planning tools.',
    tech: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
    category: 'Mobile',
    icon: Smartphone,
    image: '/api/placeholder/500/300',
    github: '#',
    live: '#',
    featured: false,
  },
];

const categories = ['All', 'Full-Stack', 'Frontend', 'Mobile'];

const AllProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [filteredProjects, setFilteredProjects] = React.useState(allProjects);

  React.useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        duration: 0.5,
      }
    }
  };

  return (
    <main className="relative min-h-screen">
      <ParticleBackground density={20} />
      
      {/* Header */}
      <section className="pt-20 pb-10 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="heroSecondary"
              onClick={() => window.history.back()}
              className="mb-6 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              All Projects
            </h1>
            <p className="text-lg text-white/95 max-w-2xl mx-auto drop-shadow-sm">
              A comprehensive showcase of my work across different technologies and domains
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="group"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${selectedCategory}`}
                variants={cardVariants}
                className="group"
              >
                <div className="gradient-card rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-blue-accent/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-accent opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="w-16 h-16 text-primary/30" />
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-button text-white text-xs font-bold px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                    
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
                      <Button variant="hero" size="sm" className="group/btn">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm line-clamp-4 leading-relaxed">
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground text-lg">
                No projects found in the {selectedCategory} category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AllProjects;