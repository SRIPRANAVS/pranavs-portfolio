'use client'

import { motion } from 'framer-motion'
import { BookOpen, Code, Target, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const LearningJourney = () => {
  const learningPhases = [
    {
      icon: BookOpen,
      title: 'Currently Learning',
      items: [
        'DOM Manipulation (JavaScript)',
        'Responsive Design (CSS)',
        'Advanced C++ Concepts',
        'Git & GitHub Best Practices',
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      icon: Code,
      title: 'Upcoming Goals',
      items: [
        'Building more JavaScript projects',
        'Introduction to React basics',
        'Backend fundamentals (Node.js)',
        'Database concepts (MongoDB)',
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      icon: Target,
      title: 'Problem Solving Focus',
      items: [
        'Solving LeetCode daily (aiming for 500+ problems)',
        'Understanding Data Structures & Algorithms deeply',
        'Participating in coding contests',
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800'
    },
  ]

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
    <section id="learning-journey" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Learning Journey</h2>
          <p className="text-muted-foreground text-lg">
            Where I am and where I'm headed in my development path
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {learningPhases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className={`h-full hover:shadow-lg transition-all duration-200 ${phase.bgColor} ${phase.borderColor}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <phase.icon className={`h-6 w-6 ${phase.color} group-hover:scale-110 transition-transform`} />
                    {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Calendar className={`h-4 w-4 ${phase.color} mr-2 mt-1 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LearningJourney
