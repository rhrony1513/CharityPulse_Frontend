import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css'; // Global styles
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './contexts/AuthContext'; // ✅ Import AuthProvider

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#ff4081' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider> {/* ✅ Wrap your app here */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
