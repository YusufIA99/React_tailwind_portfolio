import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './contact.jsx';
import { renderWithProviders } from '../test/renderWithProviders.jsx';

const addDocMock = vi.fn();
const collectionMock = vi.fn(() => 'contacts-collection');
const sendMock = vi.fn();

vi.mock('../firebase', () => ({
  db: {},
}));

vi.mock('firebase/firestore', () => ({
  addDoc: (...args) => addDocMock(...args),
  collection: (...args) => collectionMock(...args),
}));

vi.mock('emailjs-com', () => ({
  default: {
    send: (...args) => sendMock(...args),
  },
}));

describe('Contact page', () => {
  it('shows an alert when required fields are missing', async () => {
    const user = userEvent.setup();
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    renderWithProviders(<Contact />);

    expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /send/i }));

    expect(alertSpy).toHaveBeenCalledWith('All fields are required.');
    expect(addDocMock).not.toHaveBeenCalled();
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('submits valid contact input and resets the form', async () => {
    const user = userEvent.setup();
    addDocMock.mockResolvedValueOnce({ id: 'contact-id' });
    sendMock.mockResolvedValueOnce({ status: 200 });
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    renderWithProviders(<Contact />);

    await user.type(screen.getByLabelText(/name/i), 'Yusuf');
    await user.type(screen.getByLabelText(/email/i), 'yusuf@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello there');
    await user.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(addDocMock).toHaveBeenCalledTimes(1);
      expect(sendMock).toHaveBeenCalledTimes(1);
    });
    expect(alertSpy).toHaveBeenCalledWith('Your message has been submitted and email sent 👍');
    expect(screen.getByLabelText(/name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/message/i)).toHaveValue('');
  });

  it('shows an error alert when submission fails', async () => {
    const user = userEvent.setup();
    addDocMock.mockRejectedValueOnce(new Error('Unable to save'));
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    renderWithProviders(<Contact />);

    await user.type(screen.getByLabelText(/name/i), 'Yusuf');
    await user.type(screen.getByLabelText(/email/i), 'yusuf@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Failure path');
    await user.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith('Unable to save');
    });
    expect(screen.getByRole('button', { name: /send/i })).toBeEnabled();
  });
});
