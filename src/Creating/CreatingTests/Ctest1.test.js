import { validatePassword } from '../Form_Create.js';

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