import { cn } from "@/lib/utils";

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("w-full min-h-screen lg:py-10", className)}
      {...props}
    />
  );
}

function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full mx-auto px-4 container", className)}
      {...props}
    />
  );
}

export { Container, Section };
