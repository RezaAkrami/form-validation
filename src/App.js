import Login from './components/Login';
import SignUp from './components/SignUp';
import {Routes , Route , Navigate} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/login' element={ <Login/> } />
        <Route exact path='/signup' element={ <SignUp/> } />
        <Route
          path="*"
          element={<Navigate to="/signup" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
