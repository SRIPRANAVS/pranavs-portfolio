'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Code, PenToolIcon as Tool, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Skills = () => {
  const skills = {
    languages: [
      { name: 'HTML', level: 'Learning', color: 'bg-orange-500' },
      { name: 'CSS', level: 'Learning', color: 'bg-blue-500' },
      { name: 'JavaScript', level: 'Learning', color: 'bg-yellow-500' },
      { name: 'C++', level: 'Intermediate', color: 'bg-purple-500' },
    ],
    tools: [
      { name: 'Git', level: 'Beginner', color: 'bg-red-500' },
      { name: 'GitHub', level: 'Beginner', color: 'bg-gray-800' },
      { name: 'VS Code', level: 'Intermediate', color: 'bg-blue-700' },
    ],
    softSkills: [
      { name: 'Self-motivated', color: 'bg-green-500' },
      { name: 'Consistent', color: 'bg-teal-500' },
      { name: 'Quick Learner', color: 'bg-indigo-500' },
      { name: 'Problem Solver', color: 'bg-pink-500' },
    ],
  }

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground text-lg">
            The technologies and qualities I'm developing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <Badge key={index} className={`${skill.color} text-white`}>
                    {skill.name} {skill.level && `(${skill.level})`}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tool className="h-5 w-5 text-primary" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <Badge key={index} className={`${skill.color} text-white`}>
                    {skill.name} {skill.level && `(${skill.level})`}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.softSkills.map((skill, index) => (
                  <Badge key={index} className={`${skill.color} text-white`}>
                    {skill.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
