"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Shapes, 
  Rocket, 
  Terminal, 
  Layers, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

const clubs = [
  {
    id: "sdc",
    name: "Software Incubator (SDC)",
    icon: <Rocket className="text-blue-500" size={32} />,
    description: "The premier technical society of AKGEC, established in 2005. Focuses on full-stack development, mobile apps, and industry-grade projects.",
    url: "/software-incubator-sdc",
    color: "bg-blue-50",
    borderColor: "border-blue-100",
    tags: ["Development", "Impact", "Innovation"]
  },
  {
    id: "blockchain",
    name: "Blockchain Research Lab",
    icon: <Layers className="text-indigo-500" size={32} />,
    description: "Advanced research lab specializing in Distributed Ledger Technologies, Smart Contracts, and Decentralized Applications.",
    url: "/blockchain-research-lab",
    color: "bg-indigo-50",
    borderColor: "border-indigo-100",
    tags: ["Web3", "Research", "DLT"]
  },
  {
    id: "bigdata",
    name: "Big Data CoE",
    icon: <Database className="text-purple-500" size={32} />,
    description: "Focuses on the world of data analytics, Hadoop ecosystems, and large-scale data processing technologies.",
    url: "/big-data-centre-of-excellence",
    color: "bg-purple-50",
    borderColor: "border-purple-100",
    tags: ["Analytics", "Hadoop", "AI"]
  },
  {
    id: "cloud",
    name: "Cloud Computing Cell",
    icon: <Cloud className="text-sky-500" size={32} />,
    description: "Empowering students in Cloud infrastructure, DevOps, and services like AWS and Google Cloud Platform.",
    url: "/cloud-computing-cell",
    color: "bg-sky-50",
    borderColor: "border-sky-100",
    tags: ["AWS", "DevOps", "Infrastructure"]
  },
  {
    id: "programming",
    name: "Programming Club",
    icon: <Code2 className="text-amber-500" size={32} />,
    description: "The core hub for Competitive Programming enthusiasts. Mastering Data Structures, Algorithms, and problem-solving.",
    url: "/programming-club",
    color: "bg-amber-50",
    borderColor: "border-amber-100",
    tags: ["CP", "DSA", "Problem Solving"]
  },
  {
    id: "gdsc",
    name: "GDSC AKGEC",
    icon: <Terminal className="text-green-500" size={32} />,
    description: "Google Developer Student Clubs - connecting students to Google's developer technologies and global resources.",
    url: "/google-developer-students-club",
    color: "bg-green-50",
    borderColor: "border-green-100",
    tags: ["Google Tech", "Community", "Learning"]
  },
  {
    id: "idealab",
    name: "AICTE IDEA Lab",
    icon: <Cpu className="text-rose-500" size={32} />,
    description: "A manufacturing-grade lab for 3D printing, CNC prototyping, and electronics innovation.",
    url: "/akgec-idea-lab",
    color: "bg-rose-50",
    borderColor: "border-rose-100",
    tags: ["Prototyping", "3D Printing", "STEM"]
  },
  {
    id: "oss",
    name: "Open Source Software R&D",
    icon: <Shapes className="text-emerald-500" size={32} />,
    description: "Promoting Open Source culture, Linux development, and contributing to worldwide FOSS projects.",
    url: "/open-source-software-rd-center",
    color: "bg-emerald-50",
    borderColor: "border-emerald-100",
    tags: ["FOSS", "Linux", "R&D"]
  }
];

const TechnicalClubs = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Intro Header */}
      <div className="max-w-3xl space-y-4">
        <h2 className="text-4xl font-novaBold text-slate-900 tracking-tight">
          Nurturing the <span className="text-orange-500">Tech Pioneers</span> of Tomorrow
        </h2>
        <p className="text-lg text-slate-600 font-novaReg leading-relaxed">
          AKGEC's technical societies are more than just clubs—they are innovation hubs where students build real-world products, compete globally, and master cutting-edge technologies.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {clubs.map((club, index) => (
          <motion.div
            key={club.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative p-8 rounded-[2rem] border ${club.borderColor} ${club.color} transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 overflow-hidden`}
          >
            {/* Background Accent */}
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-start justify-between">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                  {club.icon}
                </div>
                <div className="flex gap-2">
                  {club.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] font-novaBold text-slate-500 uppercase tracking-wider border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-novaBold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {club.name}
                </h3>
                <p className="text-slate-600 font-novaReg leading-relaxed">
                  {club.description}
                </p>
              </div>

              <Link 
                href={club.url}
                className="inline-flex items-center gap-2 text-sm font-novaBold text-slate-900 group-hover:text-orange-600 transition-all"
              >
                Learn More About the Club
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA or Note */}
      <div className="p-12 bg-slate-900 rounded-[3rem] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-novaBold text-white">
              Ready to <span className="text-orange-400">Join the Elite?</span>
            </h3>
            <p className="text-slate-400 font-novaReg max-w-xl">
              Most technical clubs conduct their recruitment in the first and second semesters. Keep an eye on our event boards and student portals for upcoming induction schedules.
            </p>
          </div>
          <Link 
            href="/campus-life/innovations-and-events"
            className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-novaBold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 shadow-xl"
          >
            Past Innovations & Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechnicalClubs;
