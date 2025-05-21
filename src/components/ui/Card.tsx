import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-zinc-300 bg-white p-6 shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardSubComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({
  children,
  className = "",
  ...props
}: CardSubComponentProps) {
  return (
    <div className={`mb-4 text-2xl font-bold text-zinc-900 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
  ...props
}: CardSubComponentProps) {
  return (
    <div
      className={`text-zinc-800 leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = "",
  ...props
}: CardSubComponentProps) {
  return (
    <div
      className={`mt-6 border-t border-zinc-200 pt-4 text-zinc-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
