import './App.scss';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './pages/IndexPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />

        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
