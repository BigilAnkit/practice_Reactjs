
import './App.css';

function App() {
  let name = "Ankit Gehlot";
  let l = [10,20,30,40];
  let obj={
    'name':"ws",
    'cName':"MERN",
    'desc':"React Js"
  }
  let status = true;
  return (
    <div className="main">
      <h1>{name}</h1>
      {l.map((v)=>{
        return (
          <div>{v}</div>
        )
      })}
      <div>{obj.desc}</div>
      {
      (status) ?
      <h1 style={{color:"red",backgroundColor:"yellow"}}>Welcome to Ankit Web</h1>
      :
      ""
      
      }
    </div>
  );
}

export default App;
