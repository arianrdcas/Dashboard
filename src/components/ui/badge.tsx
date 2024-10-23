import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-gray-300 text-secondary-foreground hover:bg-gray-200",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        info: "border-blue-500 bg-blue-500 text-white shadow hover:bg-blue-500/80",
        success:
          "border-emerald-600 bg-emerald-600 text-white shadow hover:bg-emerald-600/80 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  capitalize?: boolean;
}

function Badge({ className, variant, capitalize=false, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        { capitalize: capitalize },
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants }