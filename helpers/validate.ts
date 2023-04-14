export const validateEmail = (email: string) => {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validateUsername = (username: string) => {
  let usernameRegex = /^[a-zA-Z0-9]+$/;
  return usernameRegex.test(username);
};

/**
 * The function validates if a given password meets certain criteria using a regular expression.
 * @param {string} password - The `password` parameter is a string that represents the password that
 * needs to be validated. The `validatePassword` function uses a regular expression to check if the
 * password meets certain criteria, such as having at least one lowercase letter, one uppercase letter,
 * one digit, and a minimum length of 8
 * @returns The function `validatePassword` returns a boolean value indicating whether the input
 * `password` string meets the specified password requirements. If the password contains at least one
 * lowercase letter, one uppercase letter, one digit, and is at least 8 characters long, the function
 * returns `true`. Otherwise, it returns `false`.
 */
export const validatePassword = (password: string) => {
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  return passwordRegex.test(password);
};
