"use client";
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ChatBot } from "@/components/layout/ChatBot";
import { Bot } from "lucide-react";

interface SocialCornerProps {
    className?: string;
    delay?: number;
}

export const SocialCorner = ({ className, delay = 0.5 }: SocialCornerProps) => {
    return null; // Component disabled per user request
};
