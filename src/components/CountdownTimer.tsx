import { useEffect, useState } from "react";

// Registration closes: 27 June 2026, 11:00 Europe/Berlin.
// June is CEST (UTC+2), so this is the exact UTC instant — DST-safe because
// we pin a single absolute moment rather than a wall-clock that shifts.
const TARGET = Date.UTC(2026, 5, 27, 9, 0, 0);

function getRemaining(now: number) {
  const diff = TARGET - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

const Box = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center bg-background/15 backdrop-blur-sm rounded-md px-2 py-1 min-w-[3rem]">
    <span className="text-lg md:text-xl font-bold leading-none tabular-nums">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-[0.6rem] uppercase tracking-wider opacity-80">{label}</span>
  </div>
);

const CountdownTimer = () => {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState(() => getRemaining(TARGET)); // zeros on SSR

  useEffect(() => {
    setMounted(true);
    setT(getRemaining(Date.now()));
    const id = setInterval(() => setT(getRemaining(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    // Render a stable placeholder on SSR/first client render to avoid hydration mismatch.
    return <div className="flex items-center gap-1.5" aria-hidden="true" />;
  }

  if (t.done) {
    return <span className="font-bold uppercase tracking-wide">Registration Closed</span>;
  }

  return (
    <div
      className="flex items-center gap-1.5"
      aria-label={`Registration closes in ${t.days} days, ${t.hours} hours, ${t.minutes} minutes, ${t.seconds} seconds`}
    >
      <Box value={t.days} label="Days" />
      <Box value={t.hours} label="Hrs" />
      <Box value={t.minutes} label="Min" />
      <Box value={t.seconds} label="Sec" />
    </div>
  );
};

export default CountdownTimer;
