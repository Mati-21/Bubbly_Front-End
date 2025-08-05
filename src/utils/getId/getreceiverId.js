export const getReceiverId = (users, loggedInUser) => {
  return users.find((user) => user._id !== loggedInUser)?._id;
};
