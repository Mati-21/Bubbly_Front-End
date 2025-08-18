function formatMessageTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Case 1: Same day
  if (diffDays === 0 && now.getDate() === date.getDate()) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  // Case 2: Yesterday
  if (diffDays === 1) {
    return "Yesterday";
  }

  // Case 3: Within a week
  if (diffDays < 7) {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  }

  // Case 4: More than a week
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
