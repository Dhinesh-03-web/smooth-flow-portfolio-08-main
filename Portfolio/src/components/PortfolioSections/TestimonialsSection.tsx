import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Demo',
    role: 'CEO, ABC Inc.',
    review: 'Dhinesh delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
  {
    id: 2,
    name: 'Demo 2',
    role: 'Product Manager, ABC',
    review: 'Working with Dhiensh was a game-changer for our project. He transformed our complex requirements into a beautiful, user-friendly application.',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
  {
    id: 3,
    name: 'Demo 3',
    role: 'Founder, ABC',
    review: 'Dhinesh\'s expertise in React and modern web technologies helped us launch our platform ahead of schedule. Highly recommend his services!',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
  {
    id: 4,
    name: 'Demo 4',
    role: 'CTO, ABC',
    review: 'Professional, reliable, and incredibly skilled. Dhinesh built us a robust analytics dashboard that our team uses daily.',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Client Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative h-96 mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="gradient-card rounded-xl p-8 shadow-soft border border-border/50 h-full flex flex-col justify-center">
                  <div className="flex items-center justify-center mb-6">
                    <Quote className="w-12 h-12 text-primary/30" />
                  </div>
                  
                  <div className="text-center space-y-6">
                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
                      "{testimonials[currentIndex].review}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-accent rounded-full flex items-center justify-center shadow-medium">
                        <span className="text-white font-bold text-xl">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-foreground">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-110' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="group"
            >
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Auto-slide indicators */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              {currentIndex + 1} of {testimonials.length} reviews
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;