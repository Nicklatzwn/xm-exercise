import { QueryClient, QueryClientProvider } from 'react-query';
import { StyledThemeProvider } from 'styles/config';
import { Wrapper } from 'components/wrapper';
import GlobalStyle from 'styles/globalStyles';
import { AppRouter } from 'router/AppRouter';

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Wrapper>
          <GlobalStyle />
          <AppRouter />
        </Wrapper>
      </QueryClientProvider>
    </StyledThemeProvider>
  );
};

export default App;
