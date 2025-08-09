'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Download } from 'lucide-react' // Ensure Download is imported here
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/pranav-dev', // Placeholder GitHub link
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sri-pranav-s-aa6883328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appv', // Placeholder LinkedIn link
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:pranav2007atwork@gmail.com', // Placeholder email
      color: 'hover:text-red-600'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('https://formspree.io/f/mzzvklgp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setFormData({ name: '', email: '', message: '' })
    } else {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
      })
    }
  } catch (error) {
    toast({
      title: "Network error",
      description: "Unable to send message. Please check your connection.",
    })
  }

  setIsSubmitting(false)
}

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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm excited to connect and discuss new opportunities or collaborations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="transition-all duration-200 focus:scale-[1.02] resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links & Resume */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-full bg-muted hover:bg-muted/80 transition-all ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Feel free to reach out on my social platforms or send a direct message.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>My Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Download my resume to learn more about my academic background and skills.
                </p>
                <Button size="lg" className="group w-full" asChild>
                  <a href="/pranav-resume.pdf" download="pranav_Resume.pdf">
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
