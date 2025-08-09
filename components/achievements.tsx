'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Calendar, Target, Award, Code } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Hackathon Participation',
      description: 'Participated in multiple hackathons, developing innovative solutions under time constraints',
      details: ['Smart India Hackathon 2023', 'College Tech Fest Winner', 'Problem-solving under pressure'],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800'
    },
    {
      icon: Users,
      title: 'Fintech Centre of Excellence',
      description: 'Active member contributing to financial technology research and development',
      details: ['Research on blockchain applications', 'Fintech solution development', 'Industry collaboration'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      icon: Code,
      title: 'LeetCode Achievement',
      description: 'Solved 525+ problems demonstrating strong algorithmic thinking',
      details: ['525+ Problems Solved', 'Multiple contest participations', 'Strong DSA foundation'],
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Maintaining consistent academic performance while pursuing technical skills',
      details: ['Current CGPA: 7.5', 'Target CGPA: 8.5+', 'Balanced approach to studies'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800'
    },
    {
      icon: Calendar,
      title: 'Disciplined Lifestyle',
      description: 'Maintaining a structured daily routine for optimal productivity',
      details: ['4:30 AM wake-up routine', 'Regular gym sessions', 'Time management skills'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800'
    },
    {
      icon: Award,
      title: 'Self-Learning Journey',
      description: 'Continuous learning and skill development through various platforms',
      details: ['Striver A2Z DSA Course', 'Multiple online certifications', 'Project-based learning'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-800'
    }
  ]

  const timeline = [
    {
      year: '2023',
      title: 'Started B.Tech IT',
      description: 'Began my journey at Chennai Institute of Technology',
      status: 'completed'
    },
    {
      year: '2023',
      title: 'DSA Foundation',
      description: 'Started learning Data Structures and Algorithms',
      status: 'completed'
    },
    {
      year: '2024',
      title: 'Web Development',
      description: 'Mastered HTML, CSS, JavaScript, and started React',
      status: 'completed'
    },
    {
      year: '2024',
      title: 'LeetCode Milestone',
      description: 'Achieved 525+ problems solved on LeetCode',
      status: 'completed'
    },
    {
      year: '2025',
      title: 'Full Stack Development',
      description: 'Learning Node.js, Express.js, and MongoDB',
      status: 'in-progress'
    },
    {
      year: '2025',
      title: 'Internship Target',
      description: 'Aiming for internships at product-based companies',
      status: 'upcoming'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Achievements & Growth</h2>
          <p className="text-muted-foreground text-lg">
            My journey of continuous learning and accomplishments
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className={`h-full hover:shadow-lg transition-all duration-200 ${achievement.bgColor} ${achievement.borderColor}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <achievement.icon className={`h-8 w-8 ${achievement.color} mr-3 group-hover:scale-110 transition-transform`} />
                    <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {achievement.description}
                  </p>
                  <div className="space-y-2">
                    {achievement.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full ${achievement.color.replace('text-', 'bg-')} mr-2`} />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Growth Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} text-left pl-12 md:pl-0`}>
                    <div className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant={
                            item.status === 'completed' ? 'default' :
                            item.status === 'in-progress' ? 'secondary' : 'outline'
                          }
                          className="text-xs"
                        >
                          {item.year}
                        </Badge>
                        <Badge
                          variant={
                            item.status === 'completed' ? 'default' :
                            item.status === 'in-progress' ? 'secondary' : 'outline'
                          }
                          className="text-xs"
                        >
                          {item.status === 'completed' ? 'Completed' :
                           item.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
