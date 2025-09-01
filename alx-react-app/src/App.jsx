import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './WelcomeMessage';

function App() {
  return (
    <div>
      <Header />
      <MainContent />

      {/* Welcome message component */}
      <WelcomeMessage />

      {/* User profile */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />

      <Footer />
    </div>
  );
}

export default App;
