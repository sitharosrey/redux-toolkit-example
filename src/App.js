import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './slice/userSlice';

function App() {

  // const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => {
    console.log("State : ", state.users);
    return state.users;
  });
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers());
  //   console.log("This is users: " + users);
  // }, []);


  return (
    <div className="App">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(getUsers())}
        >
          get users
        </button>
      </div>

      {data.users.map((item)=>(
        <li>{item.name}</li>
      ))}
    </div>
  );
}

export default App;
