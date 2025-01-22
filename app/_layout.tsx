import { Slot, Stack } from "expo-router";
import "../app/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      {/* <StatusBar style='auto'/> */}
    </QueryClientProvider>
  );
};

export default RootLayout;
