export function FlameEmblem({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <path
        d="M24 34 C24 34, 16 28, 16 22 C16 18, 19 15, 21 18 C21 14, 24 10, 24 10 C24 10, 27 14, 27 18 C29 15, 32 18, 32 22 C32 28, 24 34, 24 34Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M24 30 C24 30, 20 26, 20 23 C20 21, 21.5 19.5, 22.5 21 C22.5 19, 24 17, 24 17 C24 17, 25.5 19, 25.5 21 C26.5 19.5, 28 21, 28 23 C28 26, 24 30, 24 30Z"
        fill="currentColor"
      />
    </svg>
  );
}
