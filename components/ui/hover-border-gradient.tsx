"use client";
import { useState, useRef, useEffect } from "react";
import type React from "react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  gradient?: string;
}

export const HoverBorderGradient = ({
  children,
  className,
  containerClassName,
  as: Component = "div",
  gradient = "from-purple-500 to-blue-500",
}: HoverBorderGradientProps) => {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setHovered(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setOpacity(0);
  };

  // Get border radius from the component to apply to the gradient
  const [borderRadius, setBorderRadius] = useState("inherit");

  useEffect(() => {
    if (containerRef.current) {
      const computedStyle = window.getComputedStyle(containerRef.current);
      setBorderRadius(computedStyle.borderRadius);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Component className={cn("relative z-10 bg-black", className)}>
        {children}
      </Component>
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-500 z-0",
          gradient,
        )}
        style={{
          opacity,
          borderRadius: borderRadius,
          WebkitMaskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, transparent 0%, black 70%)`,
          maskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, transparent 0%, black 70%)`,
        }}
      />
    </div>
  );
};
