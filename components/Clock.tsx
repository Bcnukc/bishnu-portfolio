"use client";

import { useEffect, useState } from "react";

export default function Clock({ prefix = "Kathmandu, NP —" }: { prefix?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kathmandu",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning>
      {prefix} {time || "--:--:--"} (NPT)
    </span>
  );
}
