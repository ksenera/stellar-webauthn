
export class WebAuthnClient {
  async register(username) {
    // random value proving freshness 
    const challenge = new Uint8Array(32);
    window.crypto.getRandomValues(challenge);

    const publicKey = {
      challenge,
      rp: { name: "Stellar Passkey App" },
      user: {
        id: Uint8Array.from(username, c => c.charCodeAt(0)),
        name: username,
        displayName: username,
      },
      pubKeyCredParams: [{ type: "public-key", alg: -7 }],
      authenticatorSelection: {
        userVerification: "preferred",
      },
      timeout: 60000,
      attestation: "none"
    };

    try {
      const credential = await navigator.credentials.create({ publicKey });
      console.log("Credential Created:", credential);
      return credential;
    } catch (err) {
      console.error("Error during registration:", err);
      throw err;
    }
  }
}
