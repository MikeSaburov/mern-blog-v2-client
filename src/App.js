import './App.scss';

import { Route, Routes } from 'react-router-dom';

import { Header } from './Header';
import { Post } from './Post';

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <Header />
            <Post />
          </main>
        }
      />

      <Route path="/login" element={<div>Login</div>} />
      <Route path="/register" element={<div>Register Page</div>} />
    </Routes>
  );
}

export default App;
