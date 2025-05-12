import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { contactSubmissions, contactSubmissionSchema, testimonials } from "@shared/schema";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication
  setupAuth(app);
  
  // API prefix
  const apiPrefix = "/api";

  // Get all testimonials
  app.get(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const allTestimonials = await db.select().from(testimonials);
      // Filter active testimonials in JS after querying
      const activeTestimonials = allTestimonials.filter(t => t.active);
      res.json(activeTestimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Submit contact form
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const validatedData = contactSubmissionSchema.parse(req.body);
      
      const [submission] = await db.insert(contactSubmissions)
        .values(validatedData)
        .returning();
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: submission.id
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      if (error instanceof Error) {
        res.status(400).json({ 
          success: false, 
          message: error.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
