import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { validateEmail } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define the form schema with Zod for validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .refine(value => /^[a-zA-Z\s'-]+$/.test(value), {
      message: "Name can only contain letters, spaces, hyphens, and apostrophes",
    }),
  email: z
    .string()
    .email("Please enter a valid email address")
    .refine(validateEmail, {
      message: "Email format is invalid",
    }),
  company: z
    .string()
    .min(1, "Please enter your company name")
    .max(100, "Company name must be less than 100 characters"),
  phone: z
    .string()
    .optional()
    .refine(val => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(val), {
      message: "Please enter a valid phone number",
    }),
  companySize: z
    .string()
    .optional(),
  interestReason: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  newsletter: z
    .boolean()
    .default(false),
  demoRequest: z
    .boolean()
    .default(false),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  isDemoRequest?: boolean;
  productName?: string;
}

export function ContactForm({ isDemoRequest = false, productName = "AIKA" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      companySize: "",
      interestReason: isDemoRequest ? `I'd like to schedule a demo for ${productName}` : "",
      newsletter: false,
      demoRequest: isDemoRequest,
    },
  });

  // Effect to reset form when demo request changes
  useEffect(() => {
    if (isDemoRequest) {
      form.setValue("interestReason", `I'd like to schedule a demo for ${productName}`);
      form.setValue("demoRequest", true);
    }
  }, [isDemoRequest, productName, form]);

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      // Map the form data to match the backend schema
      const submissionData = {
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.interestReason, // Map interestReason to message field
        newsletter: data.newsletter
      };
      
      // Make a real API call to the backend
      await apiRequest("POST", "/api/contact", submissionData);
      
      toast({
        title: isDemoRequest ? "Demo request submitted" : "Message sent successfully",
        description: "Thank you for contacting us. Our team will get in touch with you shortly.",
      });
      
      setIsSuccess(true);
      
      // Reset form after 3 seconds of showing success message
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      {isSuccess && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-white/90 rounded-lg backdrop-blur-sm animate-fadeIn">
          <div className="text-center p-6">
            <div className="mb-4 rounded-full w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center mx-auto shadow-md">
              <svg className="w-8 h-8 text-green-600 animate-pulse-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {isDemoRequest ? "Demo Request Received" : "Message Sent"}
            </h3>
            <p className="text-gray-600">
              Thank you for contacting us. Our team will get in touch with you shortly.
            </p>
          </div>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your.email@example.com"
                      type="email"
                      className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Company <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your company name"
                      className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+91 9266 136 137"
                      className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Company Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="501-1000">501-1000 employees</SelectItem>
                    <SelectItem value="1000+">1000+ employees</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="interestReason"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  {isDemoRequest ? "Additional Information" : "How can we help you?"} <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={isDemoRequest 
                      ? "Tell us about your requirements or questions" 
                      : "Let us know how we can assist you"
                    }
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="h-4 w-4 text-lavender focus:ring-lavender border-gray-light rounded"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-gray-700 cursor-pointer">
                    Sign up for our newsletter
                  </FormLabel>
                  <FormDescription className="text-xs text-gray-500">
                    Get updates on AI productivity tools and industry news.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-lavender hover:bg-lavender-dark text-white font-medium py-3 rounded-lg transition-colors"
          >
            {isSubmitting 
              ? "Sending..." 
              : isDemoRequest 
                ? "Schedule Demo" 
                : "Send Message"
            }
          </Button>
        </form>
      </Form>
    </div>
  );
}
