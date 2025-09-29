import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Laptop, Lightbulb, ArrowRight, Phone } from 'lucide-react';
import ScheduleCallModal from '@/components/ScheduleCallModal';

const HeroSection: React.FC = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-hero overflow-hidden">
      {/* Animated Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[
          { Icon: Code, position: { top: '20%', left: '15%' } },
          { Icon: Laptop, position: { top: '30%', right: '20%' } },
          { Icon: Lightbulb, position: { bottom: '25%', left: '10%' } },
        ].map(({ Icon, position }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={position}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
          >
            <Icon 
              className="w-12 h-12 text-white/20 animate-float" 
              style={{ animationDelay: `${index * 0.5}s` }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center space-y-8 px-4 max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-white to-blue-accent bg-clip-text text-transparent drop-shadow-md">
            Dhinesh Pasupathi
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-2 drop-shadow-md font-semibold">
            Freelance Developer
          </p>
          <p className="text-lg text-white/95 max-w-2xl mx-auto drop-shadow-sm">
           I’m a freelance Full Stack Developer helping businesses and individuals turn ideas into powerful digital solutions. From modern websites to scalable web apps, I design, build, and deliver projects that truly make an impact.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button variant="hero" size="lg" className="group" onClick={() => scrollToSection('#contact')}>
            Hire Me
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="heroSecondary" 
            size="lg"
            onClick={() => setIsScheduleModalOpen(true)}
          >
            <Phone className="mr-2 h-4 w-4" />
            Schedule a Call
          </Button>
          <Button variant="heroSecondary" size="lg" onClick={() => scrollToSection('#projects')}>
            View Projects
          </Button>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="heroSecondary" size="lg">
              View Resume
            </Button>
          </a>
        </motion.div>
      </div>
      
      <ScheduleCallModal 
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;