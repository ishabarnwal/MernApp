import './App.css';
import React from 'react'
//import UseEffect from './hooks/useEffect';
//import Temp from './weather/temp';
import Practice from './practice';
function App() 
  {
    return(
      <div className='App'>
        <Practice/>
      </div>
    );
  }
  export default App;











  //   useEffect(()=>{
  //     fetch("https://jsonplaceholder.typicode.com/todos/").then((result)=>{
  //       result.json().then((resp)=>{
  //         // console.warn(resp)
  //         setUser(resp)
  //       })
  //     })
  //   },[])
    
  //   return (
  //     <div className="App">
  //       <h1>Get API Call </h1>
  //       console.warn(users)
  //       <table border="1">
  //        <tbody>
  //        <tr>
  //           <td>ID</td>
  //           <td>Name</td>
  //           <td>Email</td>
  //           <td>Mobile</td>
  //         </tr>
  //         {
  //           users.map((item,i)=>
  //             <tr key={i}>
  //             <td>{item.userId}</td>
  //           <td>{item.name}</td>
  //           <td>{item.email}</td>
  //             <td>{item.mobile}</td>
  //           </tr>
  //           )
  //         }
  //        </tbody>
  //       </table>
  //     </div>
  //   );
  // }
//   const [data,setData]=useState([])
//   useEffect(()=>{
//     fetch("D:/React-project/react/learn-app/src/name.json").then((result)=>{
//       result.json().then((resp)=>{
//         console.warn("result",resp)
//         setData(resp)
//       })
//     })
//   },[])
//   console.warn(data)
//   return (
//     <div className="App">
//       <h1>Get API Call</h1>
//       {/* <table border='1'>
//         <tbody>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Mobile</td>
//         </tbody>
//         {
//           data.map((item)=>
//           <tbody>
//           <td>{item.userID}</td>
//           <td>{item.Name}</td>
//           <td>{item.Email}</td>
//           <td>{item.Mobile}</td>
//         </tbody>
//         )
//         }
//       </table> */}
//     </div>
//   );
// }


