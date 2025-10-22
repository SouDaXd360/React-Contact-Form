import { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [username, setUsername] = useState('');

  // Note: The useEffect for the document title is fine to keep, but is not essential for the layout.
  // I've removed it here for simplicity to match the final goal.

  return (
    // FIX #1: Changed "Container" to "container" to match the CSS file.
    <div className="container">
      <Header />
      <main>
        <ContactForm
          buttonText="Send Inquiry"
          username={username}
          setUsername={setUsername}
        />
        {/* FIX #2: Removed the <hr /> and the "Reasons to Contact" list. */}
      </main>
      <Footer />
    </div>
  );
}

export default App;