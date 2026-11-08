export function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      aria-labelledby="not-found-title"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 py-20 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_58%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.32em] text-[#A3A3A3]">
          OM JOSHI <span className="mx-2 text-white/30">/</span> ERROR 404
        </p>

        <p className="font-mono text-[clamp(5rem,20vw,12rem)] font-medium leading-[0.8] tracking-[-0.09em] text-white">
          404
        </p>

        <div className="mx-auto mt-10 h-px w-16 bg-white/30" />

        <h1
          id="not-found-title"
          className="mt-8 font-heading text-3xl font-medium tracking-tight text-white sm:text-5xl"
        >
          Page not found.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#A3A3A3] sm:text-base">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to the portfolio.
        </p>

        <a
          href="/"
          className="mt-10 inline-flex min-h-11 items-center justify-center gap-3 border border-white/25 px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </a>
      </div>

      <p className="absolute bottom-7 font-mono text-[10px] uppercase tracking-[0.2em] text-[#525252]">
        BUILT WITH CURIOSITY. REFINED THROUGH ITERATION.
      </p>
    </main>
  );
}

export default NotFound;
