import { useEffect, useState } from "react";

export function useTimeLogic(schedules) {
  const [text, setText] = useState("");

  useEffect(() => {
    function updateText() {
      const now = new Date();

      // Loop through schedule rules
      for (let s of schedules) {
        const start = new Date(s.start);
        const end = new Date(s.end);

        if (now >= start && now <= end) {
          setText(s.text);
          return;
        }
      }

      // fallback
      setText("No schedule");
    }

    updateText();

    // update every minute
    const interval = setInterval(updateText, 60000);
    return () => clearInterval(interval);
  }, [schedules]);

  return text;
}