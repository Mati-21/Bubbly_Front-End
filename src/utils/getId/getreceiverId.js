export const getReceiverId = (users, loggedInUser) => {
  console.log(users, loggedInUser);
  return users.find((user) => user._id !== loggedInUser)?._id;
};

export const findOtherUser = (users, loggedInUser) => {
  console.log(users, loggedInUser);
  const otherUser = users.filter((user) => user._id !== loggedInUser);
  return otherUser[0];
};
