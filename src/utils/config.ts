function getEnv(name: string): string {
  const value = import.meta.env[name as keyof ImportMetaEnv];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export const config = {
  writeBeeUrl: getEnv('VITE_WRITE_BEE_URL'),
  readBeeUrl: getEnv('VITE_READ_BEE_URL'),
};
