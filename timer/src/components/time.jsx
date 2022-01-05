import { useEffect, useState } from "react";


export const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
   let id= setInterval(() => {

      setTimer((p) => {
        if (p === 10) {
          clearInterval(id)
          return 10;
        }
        return p + 1;
      });
   }, 1000);
    return () => {
      clearInterval(id)
    }
  }, []);
  return (
    <div>
      <h3 style={{color:"grey"}}>Count : {timer}</h3>
    </div>
  );
};