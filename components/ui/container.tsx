import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "main";
  size?: "default" | "wide";
}

export function Container({
  as: Component = "div",
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 md:px-6",
        size === "default" ? "max-w-content" : "max-w-wide",
        className
      )}
      {...props}
    />
  );
}
