export const CheckIcon = ({ color = "text-[#e7cd67]" }: { color?: string }) => (
  <svg className={`h-4 w-4 ${color} mt-0.5 flex-shrink-0`} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const CrossIcon = () => (
  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/15" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const CarIcon = () => (
  <svg viewBox="0 0 24 24" fill="#212121" className="h-5 w-5">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
    <circle cx="7.5" cy="14.5" r="1.5" />
    <circle cx="16.5" cy="14.5" r="1.5" />
  </svg>
);

export const SERVICE_ICONS = [
  <svg key="ext" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h24M6 14l2-6h16l2 6M8 22a2 2 0 100-4 2 2 0 000 4zm16 0a2 2 0 100-4 2 2 0 000 4zM4 14v6h2m20 0h2v-6M6 8c0-1 4-4 10-4s10 3 10 4" />
  </svg>,
  <svg key="int" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h16a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2zm4 5h8m-8 4h5M12 26l4-4 4 4" />
  </svg>,
  <svg key="pol" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 4l2.8 8.6H28l-7.4 5.4 2.8 8.6L16 21.2l-7.4 5.4 2.8-8.6L4 12.6h9.2L16 4z" />
  </svg>,
  <svg key="det" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 4a12 12 0 100 24A12 12 0 0016 4zm0 0v24M4 16h24M8 8l16 16M24 8L8 24" />
  </svg>,
  <svg key="tap" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h20v12a2 2 0 01-2 2H8a2 2 0 01-2-2V10zm4 0V8a6 6 0 0112 0v2M10 16h4m-4 4h8" />
  </svg>,
  <svg key="cer" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 4l4 8h8l-6.5 5.5 2.5 8.5L16 22l-8 4 2.5-8.5L4 12h8l4-8z" />
  </svg>,
];
