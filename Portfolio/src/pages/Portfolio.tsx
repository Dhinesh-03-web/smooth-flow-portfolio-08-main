import React from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/PortfolioSections/HeroSection';
import AboutSection from '@/components/PortfolioSections/AboutSection';
import SkillsSection from '@/components/PortfolioSections/SkillsSection';
import ProjectsSection from '@/components/PortfolioSections/ProjectsSection';
import TestimonialsSection from '@/components/PortfolioSections/TestimonialsSection';
import ContactSection from '@/components/PortfolioSections/ContactSection';

const Portfolio: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-page overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-navy text-white py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Dhinesh Pasupathi</h3>
            <p className="text-white/80 max-w-md mx-auto">
              Freelance Developer passionate about creating exceptional web experiences
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dhinesh-pasupathi-/' },
                { name: 'GitHub', href: 'https://github.com/Dhinesh-03-web' },
                
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
            
            <div className="border-t border-white/20 pt-6 text-white/60 text-sm">
              <p>&copy; 2025 Dhinesh Pasupathi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;