'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Certificates = () => {
  const certificates = [
  {
    title: 'Python Full Stack',
    platform: 'EduSkills Academy',
    date: 'June 8, 2025',
    link: '/certificates/python-full-stack.png', // Use public folder or actual image path
    downloadLink: null,
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    platform: 'AWS Training & Certification',
    date: 'June 2025',
    link: '/certificates/AWS1.png', // replace with actual cert URL if available
    downloadLink: null,
  },
  {
    title: 'Generative AI with Diffusion Models',
    platform: 'AWS Training & Certification',
    date: 'June 10, 2025',
    link: '/certificates/AWS2.png', // replace if available
    downloadLink: null,
  },
  {
    title: 'Microsoft Azure AI Essentials',
    platform: 'Microsoft & LinkedIn',
    date: 'June 2025',
    link: '/certificates/AI2.png', // replace with cert URL
    downloadLink: null,
  },
  {
    title: 'Career Essentials in Generative AI',
    platform: 'Microsoft & LinkedIn',
    date: 'June 2025',
    link: '/certificates/AI1.png', // replace with cert URL
    downloadLink: null,
  },
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
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Certificates</h2>
          <p className="text-muted-foreground text-lg">
            Proof of my continuous learning and achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6 flex flex-col items-start">
                  <Award className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    Platform: {cert.platform}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    Completed: {cert.date}
                  </p>
                  <div className="flex gap-2 mt-auto w-full">
                    {cert.link && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </a>
                      </Button>
                    )}
                    {cert.downloadLink && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={cert.downloadLink} download>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
