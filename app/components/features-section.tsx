"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const features = [
  {
    title: "🧠 AI-Powered Detection",
    description: "Leverages a powerful transformer model (DistilBERT) to detect fake vs real news instantly with high confidence and clarity.",
  },
  {
    title: "⚡ Real-Time News Analysis",
    description: "Fetch live news headlines or posts from X (formerly Twitter) and analyze them on the spot with a single click.",
  },
  {
    title: "📝 Simple Text Input",
    description: "Paste or type any news headline or paragraph. Hit 'Analyze' and get a verdict in seconds.",
  },
  {
    title: "📊 Detailed Results",
    description: "See the prediction label (Fake/Real), confidence score, and a basic explanation of how the model arrived at its result.",
  },
  {
    title: "🎯 Fast & Lightweight",
    description: "Optimized FastAPI backend and pre-loaded models ensure sub-2 second response times even on limited compute.",
  },
  {
    title: "💻 Sleek, Responsive UI",
    description: "Built with Next.js and Tailwind CSS – responsive, clean design that looks great on all screen sizes.",
  },
];

export default function FeaturesSection() {
  return (
    <motion.section variants={containerVariants} initial="hidden" viewport={{ once: true, amount: 0.2 }} className="pb-24 px-4">
      <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-8 text-foreground">
        Why Choose FactYou?
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition min-h-[220px]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
