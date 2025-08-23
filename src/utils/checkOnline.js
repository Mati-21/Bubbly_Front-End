export const checkOnline = (onlineUsers, currentUserId) => {
  const isOnline = onlineUsers.some((user) => user.userId === currentUserId);
  console.log(isOnline);
  return isOnline;
};
