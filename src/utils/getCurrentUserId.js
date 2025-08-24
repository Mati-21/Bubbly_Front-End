export const getCurrentUserId = (userId, chat) => {
  const otherUserId = chat.users.filter((user) => user._id !== userId)[0];

  return otherUserId._id;
};
