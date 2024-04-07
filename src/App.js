
import './App.css';

import Videos from './components/Videos';
import { Route,Routes } from 'react-router-dom';
import VideoDetail from './components/VideoDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {

  return (
    <div>
      <Header></Header>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Videos/>}></Route>
            <Route path="/videos" element={<Videos/>}></Route>
            <Route path="/videos/:keywords" element={<Videos/>}></Route>
            <Route path="/videos/watch/:videoId" element={<VideoDetail/>}></Route>
          
          
          </Routes>
        </QueryClientProvider>
      </YoutubeApiProvider>
      <Footer></Footer>
    </div>

  );
}

export default App;
