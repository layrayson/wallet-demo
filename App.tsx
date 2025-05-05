import React from 'react';
import Navigator from './src/navigator/Navigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </>
  );
}
