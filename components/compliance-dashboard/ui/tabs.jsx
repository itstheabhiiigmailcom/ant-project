'use client';

import { createContext, useContext, useState } from 'react';

const TabsContext = createContext({
  value: '',
  onValueChange: () => {},
});

export function Tabs({
  defaultValue,
  onValueChange,
  children,
  className = '',
}) {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className = '', children }) {
  return <div className={`flex ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, className = '', children }) {
  const { value: selectedValue, onValueChange } = useContext(TabsContext);
  const isSelected = value === selectedValue;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      data-state={isSelected ? 'active' : 'inactive'}
      className={`px-4 py-2 text-sm font-medium ${isSelected ? 'text-emerald-600' : 'text-slate-600'} ${className}`}
      onClick={() => onValueChange(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = '', children }) {
  const { value: selectedValue } = useContext(TabsContext);
  const isSelected = value === selectedValue;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      data-state={isSelected ? 'active' : 'inactive'}
      className={className}
    >
      {children}
    </div>
  );
}
