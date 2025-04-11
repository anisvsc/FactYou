"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

// AnswerCard component implementation
export default function AnswerCard({ answer }: { answer: string }) {
  const isFakeNews = answer.toLowerCase().includes("fake");

  return (
    <motion.div className={`mt-8 p-6 rounded-xl border ${isFakeNews ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-start gap-4">
        <div className={`mt-1 ${isFakeNews ? "text-red-500" : "text-green-500"}`}>{isFakeNews ? <AlertTriangle size={24} /> : <CheckCircle size={24} />}</div>
        <div>
          <h3 className={`text-lg font-semibold ${isFakeNews ? "text-red-700" : "text-green-700"}`}>{isFakeNews ? "Potential Misinformation Detected" : "Content Appears Reliable"}</h3>
          <p className="mt-2 text-base text-background">{answer}</p>
          {isFakeNews && <p className="mt-4 text-sm text-gray-600">Consider checking other reputable sources before sharing.</p>}
        </div>
      </div>
    </motion.div>
  );
}
