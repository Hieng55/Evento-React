// StoreProvider.tsx

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/redux/store'; // Adjust the import path as needed

// Create the Redux store instance
const store = makeStore();

// Define the props interface for StoreProvider
interface StoreProviderProps {
  children: ReactNode; // ReactNode allows any type of children to be passed
}

// Define the StoreProvider component
const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
