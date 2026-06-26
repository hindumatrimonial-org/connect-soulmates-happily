import { useEffect, useState } from "react";

// Registration closes: 27 June 2029, 11:00 Germany time (CEST, UTC+2) => 09:00 UTC
const TARGET = Date.UTC(2029, 5, 27, 9, 0, 0);

function getRemaining() {
  const diff = TARGET - Date.now();
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
  const [t, setT] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

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
