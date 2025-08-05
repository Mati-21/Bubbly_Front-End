import moment from "moment";

export function formatMessageTime(timestamp) {
  const now = moment();
  const messageTime = moment(timestamp);

  const diffInDays = now.diff(messageTime, "days");

  if (diffInDays < 1) {
    // Less than 1 day: show exact time with AM/PM
    return messageTime.format("h:mm A"); // e.g., 4:35 PM
  } else if (diffInDays < 7) {
    // Less than a week: show weekday name
    return messageTime.format("dddd"); // e.g., Tuesday
  } else {
    // 1 week or more: show full date
    return messageTime.format("MMM D, YYYY"); // e.g., Jul 3, 2025
  }
}
