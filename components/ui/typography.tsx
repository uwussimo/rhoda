import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?:
    | "display-large"
    | "display"
    | "display-small"
    | "subhead-large"
    | "subhead"
    | "subhead-small"
    | "body-large"
    | "body"
    | "body-small"
    | "label-large"
    | "label";
}

export function Typography({
  as: Component = "p",
  variant = "body",
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-balance",
        {
          "text-display-large": variant === "display-large",
          "text-display": variant === "display",
          "text-display-small": variant === "display-small",
          "text-subhead-large": variant === "subhead-large",
          "text-subhead": variant === "subhead",
          "text-subhead-small": variant === "subhead-small",
          "text-body-large": variant === "body-large",
          "text-body": variant === "body",
          "text-body-small": variant === "body-small",
          "text-label-large": variant === "label-large",
          "text-label": variant === "label",
        },
        className
      )}
      {...props}
    />
  );
}
