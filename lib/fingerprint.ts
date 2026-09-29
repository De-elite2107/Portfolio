// A SHA-256 digest has 256 bits, which map one-to-one onto a 16×16 grid.
// The fingerprint is that grid drawn literally: no mirroring, no hashing
// tricks, so the picture is an honest rendering of the hash.

export const FINGERPRINT_SIZE = 16;

export function hexToBits(hex: string): boolean[] {
  const bits: boolean[] = [];
  for (const char of hex) {
    const nibble = parseInt(char, 16);
    for (let shift = 3; shift >= 0; shift--) bits.push(((nibble >> shift) & 1) === 1);
  }
  return bits;
}

export async function sha256Hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}
