
import { WebAuthnClient } from './WebAuthnClient.js';

const client = new WebAuthnClient();

document.getElementById('registerBtn').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  if (!username) {
    alert('Please enter a username.');
    return;
  }

  try {
    const credential = await client.register(username);
    console.log('Passkey registered!', credential);
    alert('Registration successful.');
  } catch (err) {
    alert('Registration failed. Check console.');
  }
});
