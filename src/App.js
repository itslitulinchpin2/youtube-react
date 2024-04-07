
import './App.css';

import Videos from './components/Videos';
import { Route,Routes } from 'react-router-dom';
import VideoDetail from './components/VideoDetail';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Videos/>}></Route>
        <Route path="/videos" element={<Videos/>}></Route>
        <Route path="/videos/:keywords" element={<Videos/>}></Route>
        <Route path="/videos/watch/:videoId" element={<VideoDetail/>}></Route>
       
       
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
