import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createTheme,
  MantineProvider,
  ColorSchemeScript,
  rem,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const theme = createTheme({
  other: {
    white: "#fff",
    black: "#000",
    fontSize: "15px",
    backgroundDark: "#101010",
  },
  fontFamily: "Plus Jakarta Sans",
  fontSizes: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
    xxl: rem(32),
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme="light">
      <ColorSchemeScript defaultColorScheme="light" />
      <Notifications />
        {children}
      </MantineProvider>
    </QueryClientProvider>
  );
}
