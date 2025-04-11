"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader2 } from "lucide-react";

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

export default function AnalyseSection() {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setError("Please enter a URL or text to analyze.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await new Promise((res) => setTimeout(res, 2000));
      console.log("Analyzing:", inputValue);
      setInputValue("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="analyze" className="min-h-[70dvh] flex items-center justify-center  py-14 px-4">
      <motion.div className="max-w-2xl w-full rounded-2xl sm:p-10 " variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.h2 className="text-2xl sm:text-4xl font-extrabold text-center" variants={itemVariants}>
          Verify Your Content
        </motion.h2>

        <motion.p className="mt-4 text-sm sm:text-lg text-center max-w-md mx-auto" variants={itemVariants}>
          Paste a URL, article snippet, or social media post to check its credibility instantly.
        </motion.p>

        <motion.form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch" variants={itemVariants}>
          <div className="flex-1">
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setError("");
              }}
              placeholder="Paste a URL or text..."
              className="h-12 text-base sm:text-lg rounded-lg focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Content to analyze"
              aria-describedby={error ? "input-error" : undefined}
              disabled={isSubmitting}
            />
            {error && (
              <p id="input-error" className="mt-2 text-sm text-red-500">
                {error}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="h-12 px-6 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white cursor-pointer" aria-label="Submit content for analysis">
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>Analyze</>
            )}
          </Button>
        </motion.form>

        <motion.div className="mt-8 text-center text-sm sm:text-base text-foreground/60" variants={itemVariants}>
          {isSubmitting ? <p>Processing your request...</p> : <p>Results will appear below after analysis.</p>}
        </motion.div>
      </motion.div>
    </section>
  );
}
