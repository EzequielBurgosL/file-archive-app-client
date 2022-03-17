import React from 'react';
import { Footer, Header, Main } from './components';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Header />
      <Main />
      <Footer />
    </SnackbarProvider>
  );
}

export default App;