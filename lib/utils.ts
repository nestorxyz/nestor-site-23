import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const constants = {
  ETH_ADDRESS: '0xE50B078668fbf5abFa7Ed9AF03EA09ff97A752A8',
};
