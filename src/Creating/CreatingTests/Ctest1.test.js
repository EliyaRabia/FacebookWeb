// import { validatePassword } from '../Form_Create.js';
const validatePassword = (password) => {
  // Check if the password has a length of 8 or more characters
  const hasMinLength = password.length >= 8;
  // Regular expressions to check for capital letter and special character
  const hasCapitalLetter = /[A-Z]/.test(password);
  // Include a broader range of special characters
  const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
  // Password is valid if it has a capital letter and a special character
  return hasMinLength && hasCapitalLetter && hasSpecialCharacter;
};

test('validatePassword returns true for a valid password', () => {
    expect(validatePassword("Password123!")).toBe(true);
});

test('validatePassword returns false for a password with length less than 8', () => {
    expect(validatePassword("Pass!")).toBe(false);
});

test('validatePassword returns false for a password without a capital letter', () => {
    expect(validatePassword("password123!")).toBe(false);
});

test('validatePassword returns false for a password without a special character', () => {
    expect(validatePassword("Password123")).toBe(false);
});