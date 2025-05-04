import React from 'react';
import Navigator from './src/navigator/Navigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from './src/theme/ThemeContext';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Navigator />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
