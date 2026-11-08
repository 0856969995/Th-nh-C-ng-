/**
 * Web Crypto utility for client-side salted PIN hashing & recovery codes.
 * Works 100% offline in browser without external dependencies.
 */

export const CryptoService = {
  // Generate random salt hex string
  generateSalt(byteLength: number = 16): string {
    const array = new Uint8Array(byteLength);
    crypto.getRandomValues(array);
    return Array.from(array)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  },

  // Generate deterministic salt hex string for consistent multi-device auth derivation
  getDeterministicSalt(seed: string): string {
    let hash = 0;
    const clean = seed.trim().toLowerCase();
    for (let i = 0; i < clean.length; i++) {
      hash = (hash << 5) - hash + clean.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    return `hocvui_${hex}`;
  },

  // Hash PIN with Salt using SHA-256
  async hashPin(pin: string, saltHex: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(`hoc_vui_v3_${saltHex}_${pin}`);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  },

  // Verify PIN against stored hash
  async verifyPin(pin: string, saltHex: string, storedHashHex: string): Promise<boolean> {
    const calculatedHash = await this.hashPin(pin, saltHex);
    return calculatedHash === storedHashHex;
  },

  // Generate an 8-character easy-to-read student recovery code (e.g. HV-9X42-MN)
  generateRecoveryCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'HV-';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    code += '-';
    for (let i = 0; i < 3; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  },
};
