import React, { createContext, useContext, useState } from 'react';

const DrawerCtx = createContext(null);

export function DrawerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DrawerCtx.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </DrawerCtx.Provider>
  );
}

export function useDrawer() {
  const ctx = useContext(DrawerCtx);
  if (!ctx) throw new Error('useDrawer must be used within a DrawerProvider');
  return ctx;
}
