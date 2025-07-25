
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

/**
 * Sends the contact form data to a backend API endpoint.
 * The backend is responsible for the secure handling of SMTP credentials and sending the email.
 * This function now makes a real network request.
 *
 * @param formData The contact form data.
 * @returns A promise that resolves on success.
 * @throws An error if the API call fails.
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  // The backend server is expected to be running on localhost:3001
  const backendUrl = 'http://localhost:3001/api/send-email';

  try {
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      // Try to get a more specific error message from the backend response
      const errorData = await response.json().catch(() => ({ message: 'An unknown server error occurred.' }));
      throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
    }
    
    // The request was successful, no need to return anything.
    return;

  } catch (error) {
    console.error("Error sending contact email:", error);
    // Re-throw the error so the UI component can handle it
    if (error instanceof Error) {
        // Provide a user-friendly message for network errors
        if (error.message.includes('Failed to fetch')) {
             throw new Error('Could not connect to the email server. Please try again later.');
        }
        throw error;
    }
    throw new Error('An unexpected error occurred while sending the message.');
  }
};
