import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from "../../../../test-utils"

import MyForm from '../login_screen';

describe('LoginScreen', () => {
    test('submitting the form with valid input calls the onSubmit callback', async () => {

        renderWithProviders(<MyForm />);
        const user = userEvent.setup();

        await user.type(screen.getByTestId("login-screen-field-email"), 'test@example.com');
        await user.type(screen.getByTestId("login-screen-field-password"), "password");
        await user.click(screen.getByTestId("login-screen-button-submit"));

    });
})