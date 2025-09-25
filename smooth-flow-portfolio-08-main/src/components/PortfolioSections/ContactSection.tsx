import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ScheduleCallModal from '@/components/ScheduleCallModal';
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  // ✅ Track names
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formRef.current) {
      // ✅ Before sending, inject merged name into hidden input
      const hiddenNameInput = document.createElement("input");
      hiddenNameInput.type = "hidden";
      hiddenNameInput.name = "from_name";
      hiddenNameInput.value = `${firstName} ${lastName}`;
      formRef.current.appendChild(hiddenNameInput);

      emailjs
        .sendForm(
          "service_b01jno4",   // 🔑 EmailJS Service ID
          "template_od58byn",  // 🔑 EmailJS Template ID
          formRef.current,
          "6AD7NZnfoMomGKVYS"  // 🔑 EmailJS Public Key
        )
        .then(
          () => {
            toast({
              title: "✅ Your message has been sent!",
              description: "Thank you for reaching out. I'll get back to you soon.",
            });
            formRef.current?.reset();
            setFirstName("");
            setLastName("");
          },
          (error) => {
            console.error("EmailJS Error:", error);
            toast({
              title: "❌ Error",
              description: "Failed to send message. Please try again.",
              variant: "destructive",
            });
          }
        )
        .finally(() => setIsSubmitting(false));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dhinesh.p216@gmail.com',
      href: 'mailto:dhinesh.p216@gmail.com'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+91 63745 81942',
      href: 'https://wa.me/916374581942?text=Hi%2C%20I%27m%20a%20freelancer.%20Here%27s%20how%20I%20can%20help%20you.'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu',
      href: '#'
    },
  ];

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
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can 
            create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="gradient-card p-8 rounded-xl shadow-soft border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      name="first_name"
                      placeholder="Your first name"
                      className="border-border/50 focus:border-primary"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      name="last_name"
                      placeholder="Your last name"
                      className="border-border/50 focus:border-primary"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    name="from_email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    placeholder="Project inquiry"
                    className="border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="border-border/50 focus:border-primary resize-none"
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground">
                I'm always excited to discuss new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 gradient-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group border border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-accent rounded-full flex items-center justify-center shadow-medium group-hover:shadow-glow">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="gradient-card p-6 rounded-xl shadow-soft border border-border/50"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-foreground mb-2">
                Ready to start your project?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Let's schedule a call to discuss your requirements and how I can help bring your vision to life.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsScheduleModalOpen(true)}
              >
                Schedule a Call
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <ScheduleCallModal 
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
    </section>
  );
};

export default ContactSection;
