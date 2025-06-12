import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorsPage from "./components/Doctors-profile";
import Landing from './components/heroSection';
import BookNow from './components/Booknow-form'
import './App.css';
import './index.css';

function App() {
  return (
   
      <Routes> {/* Use Routes for all your routes */}
        {/* Landing page route */}
        <Route path="/" element={<Landing />} />
        <Route path="/booknow" element={<BookNow />} />
        {/* Doctors Profile page route */}
        <Route path="/doctors-profile" element={<DoctorsPage />} />
      </Routes>
    
  );
}

export default App;
