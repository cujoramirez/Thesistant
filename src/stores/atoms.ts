import { atom } from 'jotai';

// Example atoms for Jotai state management
export const userAtom = atom<{ name: string; email: string } | null>(null);
export const themeAtom = atom<'light' | 'dark'>('light');
export const isLoadingAtom = atom<boolean>(false);
