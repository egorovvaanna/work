import { useState } from "react";

export const useInput = (initial, required) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);

  return {
    value,
    onBlur: e => {
      if (!e.target.value && required) setError("Required field");
      else setError(null);
    },
    onChange: e => setValue(e.target.value),
    error
  };
};

// export const HookUseInput=() =>{
//     const name = useInput('hello world', true)
  
//     return (
//       <div className="App">
//           <h1>useInput</h1>
//         <form>
//         <input {...name}/> <br/>
//           {name.error && <span style={{ color: 'red'}}>{name.error}</span>}
//         </form>
//       </div>
//     );
//   }
  

