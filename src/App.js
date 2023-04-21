import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './slice/userSlice';
import runOneSignal from './onesignal';
import { pushNotification } from './service/notificationService';

// import runOneSignal from './onesignal';

function App() {
  // const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => {
    console.log("State : ", state.users);
    return state.users;
  });
  const dispatch = useDispatch();


  useEffect(() => {
    // let externalUserId = "123456789";
    // OneSignal.setExternalUserId(externalUserId);

    // OneSignal.getExternalUserId().then(function (externalUserId) {
    //   console.log("externalUserId: ", externalUserId);
    // })
    runOneSignal();
  }, [])


  // OneSignal.init({ appId: 'eb68ae93-7874-4003-b925-faafc5dd0f40' });
  // axios.get("http://localhost:8080/category/get-all-category-by-current-user?asc=false&desc=false&page=1&size=10", {
  //   headers: {
  //     Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGFyb0BnbWFpbC5jb20iLCJpYXQiOjE2ODA2NzM4NzQsImV4cCI6MjA0MDY3Mzg3NH0.YrrxG8Lw60enbkwgMR6pD2M1eT5tJ2353bRVrxAXHKu_k09TVMZ10YVO6rD8o6vnUYbpMok5ljni4aOK_Hl2gA"
  //   }
  // }).then((data) => {
  //   console.log(data);
  // });


  return (
    <div className="App">
      <div>
        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(getUsers())}
        >
          get users
        </button> */}

        <button
          onClick={() => pushNotification("testing", "testing desc", "123456789")}
        >
          push notification
        </button>
      </div>

      {data.users.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}

export default App;
