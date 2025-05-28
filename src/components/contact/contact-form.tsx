"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { CONTACT_INFO, RESPONSE_TIMES } from "@/lib/constants"

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Simulate API call - In production, this would send to your backend
      // which would then email to CONTACT_INFO.email.general
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", data)
      console.log("Will be sent to:", CONTACT_INFO.email.general)

      setIsSubmitted(true)
      form.reset()

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError("Failed to send message. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjectOptions = [
    { value: "film", label: "Film Production" },
    { value: "theatre", label: "Theatre Production" },
    { value: "events", label: "Event Planning" },
    { value: "shadesof", label: "ShadesOf Installation" },
    { value: "collaboration", label: "General Collaboration" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "freelancer", label: "Join Our Network" },
    { value: "other", label: "Other" },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Send Us a Message</h2>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
            >
              <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
              <div>
                <p className="font-medium text-green-800 dark:text-green-200">Message sent successfully!</p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  We&apos;ll get back to you within {RESPONSE_TIMES.email}.
                </p>
              </div>
            </motion.div>
          )}

          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3"
            >
              <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
              <div>
                <p className="font-medium text-red-800 dark:text-red-200">Error</p>
                <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>
              </div>
            </motion.div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        className="h-12 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="h-12 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Subject</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {subjectOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        className="border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                    <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
                      {field.value?.length || 0}/1000 characters
                    </div>
                  </FormItem>
                )}
              />

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      SEND MESSAGE
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>

          <div className="mt-8 p-6 bg-white dark:bg-black rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <AlertCircle className="text-red-500" size={20} />
              What happens next?
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                We&apos;ll review your message within {RESPONSE_TIMES.email}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Schedule a consultation call if needed
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Provide a detailed project proposal
              </li>
            </ul>
          </div>

          {/* Form Statistics */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white dark:bg-black rounded-lg shadow">
              <div className="text-2xl font-bold text-red-500">{RESPONSE_TIMES.email}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
            </div>
            <div className="p-4 bg-white dark:bg-black rounded-lg shadow">
              <div className="text-2xl font-bold text-red-500">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
            <div className="p-4 bg-white dark:bg-black rounded-lg shadow">
              <div className="text-2xl font-bold text-red-500">Free</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Consultation</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
