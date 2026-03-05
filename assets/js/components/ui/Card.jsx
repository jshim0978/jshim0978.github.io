import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, spotlight = false, ...props }, ref) => {
  const cardRef = React.useRef(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={(node) => {
        cardRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      onMouseMove={spotlight ? handleMouseMove : undefined}
      className={cn(
        "relative rounded-xl border bg-white dark:bg-[hsl(240,6%,7%)] text-card-foreground",
        "border-slate-200/80 dark:border-slate-800",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)]",
        "hover:shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-px",
        "overflow-hidden group",
        className
      )}
      {...props}
    >
      {spotlight && (
        <div
          className="absolute pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            width: 250,
            height: 250,
            left: mousePos.x,
            top: mousePos.y,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, hsla(217,92%,60%,0.06) 0%, transparent 70%)',
          }}
        />
      )}
      {props.children}
    </div>
  );
})
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-5", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-base font-semibold leading-tight tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-5 pb-5 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-5 pb-5 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
