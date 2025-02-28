"use client";
import { useState } from "react";

export default function SchedulePost() {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const handleSchedule = () => {
    alert(`Post Scheduled on ${date}: ${content}`);
  };

  return (
    <div>
      <h1>Schedule a Post</h1>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your post..." />
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleSchedule}>Schedule</button>
    </div>
  );
}
