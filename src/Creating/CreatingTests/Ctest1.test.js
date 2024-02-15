import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form_Create from '../Form_Create';

jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
}));

describe('Form_Create', () => {
    it('alerts with "write valid password" when the password is invalid', () => {
        const mockSetUserList = jest.fn();
        const { getByPlaceholderText, getByRole, getByTestId } = render(<Form_Create userList={[]} setuserList={mockSetUserList} />);
        userEvent.type(getByPlaceholderText('enter password'), 'password');
        userEvent.type(getByPlaceholderText('confirm password'), 'password');
        userEvent.type(getByPlaceholderText('enter display name'), 'Test User');
        userEvent.type(getByPlaceholderText('email or phone number'), 'testuser');
        const file = new File(['(⌐□_□)'], 'WOW.png', { type: 'image/png' });
        const fileInput = getByTestId('file-input');
        userEvent.upload(fileInput, file);
        window.alert = jest.fn();
        fireEvent.click(getByRole('button', { name: /Sign Up/i }))
        expect(window.alert).toHaveBeenCalledWith('write valid password');
    });
});