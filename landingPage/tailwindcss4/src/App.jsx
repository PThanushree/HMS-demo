import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorsPage from "./components/Doctors-profile";
import Landing from './components/heroSection';
import './App.css';
import './index.css';

function App() {
  return (
   
      <Routes> {/* Use Routes for all your routes */}
        {/* Landing page route */}
        <Route path="/" element={<Landing />} />
        
        {/* Doctors Profile page route */}
        <Route path="/doctors-profile" element={<DoctorsPage />} />
      </Routes>
    
  );
}

export default App;
