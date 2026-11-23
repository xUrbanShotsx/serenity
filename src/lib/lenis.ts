"use client";

import { useSyncExternalStore } from "react";
import type Lenis from "lenis";

let instance: Lenis | null = null;
const listeners = new Set<() => void>();

export const getLenis = () => instance;

export const setLenis = (next: Lenis | null) => {
  instance = next;
  listeners.forEach((fn) => fn());
};

const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
};

export const useLenis = () => useSyncExternalStore(subscribe, () => instance, () => null);
