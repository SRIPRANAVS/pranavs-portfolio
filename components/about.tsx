'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Code, Dumbbell, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">
              A brief introduction to my journey and passions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">My Journey So Far</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Age:</strong> 18 years old</p>
                    <p><strong>Location:</strong> Thanjavur, Tamil Nadu</p>
                    <p><strong>College:</strong> Chennai Institute of Technology (B.Tech IT)</p>
                    <p>I've just started my web development journey and am currently diving deep into HTML, CSS, and JavaScript. Every day is a new learning experience!</p>
                    <p>I'm also passionate about problem-solving and have tackled <strong>300+ problems on LeetCode</strong> using C++.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Dumbbell className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Beyond Code</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Outside of coding, I'm a dedicated <strong>gym-goer</strong>. Fitness is a big part of my life, teaching me consistency and discipline – qualities I bring into my development work.</p>
                    <p>I believe in continuous <strong>self-learning</strong> and am always eager to explore new technologies and challenges.</p>
                    <p>My vision: "Learning every day to become a better developer."</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">My Vision</h3>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl italic text-primary max-w-2xl mx-auto p-4 bg-card rounded-lg shadow-md"
            >
              "Learning every day to become a better developer."
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
