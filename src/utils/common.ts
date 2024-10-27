export function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export function remove0xPrefix(value: string) {
  if (value.startsWith('0x')) {
    return value.substring(2);
  }
  return value;
}
