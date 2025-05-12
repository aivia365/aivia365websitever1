import { db } from "./index";
import { testimonials, users } from "@shared/schema";
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function seed() {
  try {
    // Check if admin user exists
    const existingUsers = await db.select().from(users);
    
    if (existingUsers.length === 0) {
      // Create default admin user
      const hashedPassword = await hashPassword("admin123");
      await db.insert(users).values({
        username: "admin",
        password: hashedPassword,
      });
      
      console.log("Admin user created successfully");
    } else {
      console.log("Users already exist, skipping user seed");
    }
    
    // Check if testimonials already exist to avoid duplicates
    const existingTestimonials = await db.select().from(testimonials);
    
    if (existingTestimonials.length === 0) {
      // Seed testimonials
      await db.insert(testimonials).values([
        {
          quote: "AIKA has transformed how our team accesses information. We've reduced time spent searching for answers by 65% and eliminated three separate software tools we previously relied on.",
          author: "Sarah L.",
          role: "CTO, TechFusion Inc.",
          initials: "SL",
          avatarColor: "bg-lavender-light",
          active: true
        },
        {
          quote: "Onboarding new employees used to take weeks. With AIKA, our new hires can access company knowledge on day one, cutting our onboarding time in half while improving the experience.",
          author: "Mark R.",
          role: "HR Director, Global Ventures",
          initials: "MR",
          avatarColor: "bg-blue-light",
          active: true
        },
        {
          quote: "As a fast-growing company, keeping everyone aligned was challenging. AIKA has become our central knowledge hub, ensuring every team member has the information they need instantly.",
          author: "Jennifer T.",
          role: "Operations Manager, StartUp Vision",
          initials: "JT",
          avatarColor: "bg-purple",
          active: true
        }
      ]);
      
      console.log("Testimonials seeded successfully");
    } else {
      console.log("Testimonials already exist, skipping seed");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
  // Explicitly exit process after seeding completes to prevent timeouts
  process.exit(0);
}

seed();
