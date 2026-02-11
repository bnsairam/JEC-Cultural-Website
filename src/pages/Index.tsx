import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-stranger-dark text-foreground overflow-hidden px-4">
      {/* Optional subtle background effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-stranger-red/10 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1
          className="
            glow-pratiyog
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
            font-display font-black
            tracking-tight
            mb-6 md:mb-10
            leading-none
          "
        >
          Pratiyog'26
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 md:mb-14 max-w-4xl mx-auto">
          International Symposium on Artificial Intelligence & Machine Learning
          <br className="hidden sm:block" />
          Department of AI & ML • Jeppiaar Engineering College
        </p>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 font-medium"
          >
            Register Now
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-7 border-primary/60 hover:bg-primary/10"
          >
            Explore Events
          </Button>
        </div>

        <p className="mt-16 text-base sm:text-lg text-muted-foreground/80">
          March 2026 • Chennai, India
        </p>
      </div>

      {/* Optional bottom note */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-sm text-muted-foreground/60">
        Organized by Department of Artificial Intelligence & Machine Learning
      </div>
    </div>
  );
}
