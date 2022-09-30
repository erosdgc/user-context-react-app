import './App.css';
import Profile from './components/Profile'
import UserList from './components/UserList'
import UserState from './context/User/UserState'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='d-flex flex-column align-items-center mt-4'>
        <h1 className='display-1'>User Context React App</h1>
        {/* <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" /> */}
      </div>
    </div>
      <UserState>
        <div className="container p-4 mt-2">
          <div className="row">
            <div className="col-md-6">
              <UserList />
            </div>
            <div className="col-md-6">
              <Profile />
            </div>
          </div>
        </div>
      </UserState>
    </>
    );
}

export default App;
 