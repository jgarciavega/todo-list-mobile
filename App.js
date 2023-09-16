import React from "react";
import { NativeBaseProvider, Box, Container } from "native-base";
import CustomInput from "./CustomInput";
import Login from "./Components/Login";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Container>
          <Login />
          {/* Este componente es solo un ejemplo */}
          <CustomInput text="Usuario" />
        </Container>
      </Box>
    </NativeBaseProvider>
  );
}
