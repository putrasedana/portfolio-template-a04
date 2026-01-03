"use client"

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(from var(--neon-cyan) r g b / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(from var(--neon-cyan) r g b / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgb(from var(--neon-cyan) r g b / 0.15), transparent 50%),
            radial-gradient(circle at 80% 50%, rgb(from var(--neon-purple) r g b / 0.15), transparent 50%)
          `,
        }}
      />

      {/* Animated scanlines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgb(from var(--neon-cyan) r g b / 0.5) 2px, rgb(from var(--neon-cyan) r g b / 0.5) 4px)",
          animation: "scanline 8s linear infinite",
        }}
      />

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
        
        @keyframes scanline {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  )
}
