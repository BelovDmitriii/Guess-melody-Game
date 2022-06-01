import WelcomeScreen from '../welcome-screeen/welcome-screen';

type AppScreenProps = {
  errorsCount: number;
}

function App({errorsCount}: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen errorsCount={errorsCount} />
  );
}

export default App;
