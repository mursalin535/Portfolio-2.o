'use client'
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import data from "../../../public/dataAnalysis.jpeg";
import ai from "../../../public/AI.jpg";
import ml from "../../../public/ML.png";

/* -----------------------------------------
   WISHLIST SKILLS DATA
------------------------------------------ */
const items = [
  {
    image: data,
    title: "Data Analysis",
    desc: "Transforming raw data into insights, patterns, and decisions using statistics, visualization, and analytical thinking.",
  },
  {
    image: ai,
    title: "AI Engineering",
    desc: "Building intelligent systems that learn, reason, and adapt — merging logic, creativity, and automation.",
  },
  {
    image: ml,
    title: "Machine Learning",
    desc: "Training models to recognize patterns, predict outcomes, and improve through data-driven experience.",
  },
];

/* -----------------------------------------
   INDIVIDUAL CARD
------------------------------------------ */
const List = ({ item, index, activeItem, className, ...props }) => {
  const isActive = index === activeItem;

  return (
    <div
      className={cn(
        "relative flex h-full w-24 min-w-14 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-out",
        {
          "flex-grow-[3] shadow-[0_0_60px_rgba(0,255,255,0.25)]": isActive,
          "opacity-70": !isActive,
        },
        className
      )}
      {...props}
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className={cn(
          "h-full w-full object-cover transition-all duration-500",
          {
            "scale-105 blur-[1.5px] brightness-75": !isActive,
            "scale-100": isActive,
          }
        )}
      />

      {/* ACTIVE OVERLAY */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20">

          {/* NEON BORDER */}
          <div className="absolute inset-0 rounded-xl ring-2 ring-cyan-400/60 shadow-[0_0_80px_rgba(0,255,255,0.35)]" />

          {/* CONTENT */}
          <div className="absolute bottom-6 left-6 right-6 space-y-4">

            {/* SKILL HEADING */}
            <h1
              className="
                text-3xl md:text-5xl font-extrabold tracking-widest
                text-cyan-300
                drop-shadow-[0_0_25px_rgba(0,255,255,0.9)]
              "
            >
              <span className="relative">
                <span className="absolute inset-0 text-cyan-500 blur-md opacity-70">
                  {item.title}
                </span>
                <span className="relative">{item.title}</span>
              </span>
            </h1>

            {/* SKILL INFO */}
            <p className="
              max-w-xl text-sm md:text-base
              font-mono text-cyan-100/90
              leading-relaxed
            ">
              {item.desc}
            </p>

            {/* STATUS */}
            <div
              className="
                inline-flex items-center gap-2
                px-4 py-1.5 text-xs font-mono tracking-widest
                text-cyan-300
                border border-cyan-400/70
                rounded-md
                bg-black/60
                shadow-[0_0_20px_rgba(0,255,255,0.5)]
              "
            >
              ◉ LEARNING IN PROGRESS
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

/* -----------------------------------------
   MAIN COMPONENT
------------------------------------------ */
export default function Expandable({
  list = items,
  autoPlay = true,
  className,
}) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div
      className={cn(
        "flex h-[26rem] w-full gap-2 rounded-2xl bg-black/40 p-3 backdrop-blur-md",
        className
      )}
    >
      {list.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => setIsHovering(false)}
        />
      ))}
    </div>
  );
}
