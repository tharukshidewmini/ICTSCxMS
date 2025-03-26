import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Chatbot from './components/chatbot/Chatbot';
import Icon from "./components/chatbot/Icon";
import Message from "./components/chatbot/Message";
import Form from "./components/chatbot/Form";

const App = () => (
  <Routes>
  <Route path="*" element={<Landing />}/>
  <Route path="chatbot" element={<Chatbot/>} />
</Routes>

);

export default App;
