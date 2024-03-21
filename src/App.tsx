
import Chat from './component/Chat';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './component/Login';
import { Amplify } from 'aws-amplify';

function App() {

  Amplify.configure({
    

  })

  return (
    <div>
      <Routes >
        <Route path='/' element={<Chat />} />
        <Route path='/:id' element={<Chat />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default App
