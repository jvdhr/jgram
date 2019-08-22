export const getUserById = (users, id) => {
  let usr;
  users.forEach(user => {
    if (user.uid === id) {
      usr = user;
    }
  });
  return usr;
};
