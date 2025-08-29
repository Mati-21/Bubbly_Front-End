export const getCurrentUserId = (userId, chat) => {
  const otherUserId = chat.users.filter((user) => user._id !== userId);

  return otherUserId._id;
};

export const getOtherUserId = (userId, chat) => {
  const otherUserId = chat.users.filter((user) => user !== userId);

  return otherUserId[0];
};
