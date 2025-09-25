import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
             <div className="relative w-80 h-80 mx-auto">
                {/* Outer gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-accent rounded-full shadow-strong"></div>

                {/* Inner white background */}
                <div className="absolute inset-2 bg-white rounded-full shadow-medium flex items-center justify-center">
                  
                  {/* Profile image container */}
                  <div className="w-64 h-64 rounded-full overflow-hidden">
                    <img 
                      src="/my-image.jpg"
                      alt="My Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                 I’m a passionate full-stack developer with 1 year of hands-on experience building modern web applications. I focus on delivering clean, efficient, and user-friendly solutions that create seamless experiences for clients and end-users.
                </p>
                <p>
                 My journey in development started with a deep curiosity about how the web works, and it has quickly grown into a career path where I enjoy solving real-world problems through code.
                </p>
                <p>
                 I’m always eager to learn and explore new technologies, and I actively contribute to personal and open-source projects to sharpen my skills. Alongside coding, I also enjoy sharing knowledge with the developer community and staying up to date with industry trends.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <motion.div
                    className="text-3xl font-bold text-primary"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    10+
                  </motion.div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-3xl font-bold text-primary"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    1+
                  </motion.div>
                  <p className="text-sm text-muted-foreground">Years</p>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-3xl font-bold text-primary"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    3+
                  </motion.div>
                  <p className="text-sm text-muted-foreground">Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;