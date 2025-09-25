import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Palette,
  Server,
  Zap
} from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Globe, description: 'HTML, CSS, Bootstrap, React' },
  { name: 'Backend Development', icon: Server, description: 'Python, Django, C#' },
  { name: 'Mobile Development', icon: Smartphone, description: 'Flutter' },
  { name: 'Database Management', icon: Database, description: 'MongoDB, MySQL,Oracle SQL' },
  { name: 'Version Control', icon: GitBranch, description: 'Git, GitHub, GitLab' },
  { name: 'UI/UX Design', icon: Palette, description: 'Figma' },
  { name: 'Performance Optimization', icon: Zap, description: 'Speed, SEO, Accessibility' },
  { name: 'Clean Code', icon: Code2, description: 'Best practices, Testing' },
];

const SkillsSection: React.FC = () => {
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I bring a comprehensive skill set to every project, ensuring 
            high-quality solutions from start to finish.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group"
            >
              <div className="gradient-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50">
                <div className="text-center space-y-4">
                  <motion.div
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-blue-accent rounded-full flex items-center justify-center shadow-medium group-hover:shadow-glow"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 0.3,
                    }}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;