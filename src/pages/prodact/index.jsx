import { useState, useEffect, useRef } from "react";
import {Card} from "../../components/UI";
import "./style.scss"

function index() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
  
    useEffect(() => {
      (async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const resalot = await response.json();
          setData(resalot);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      })()
    }, [])
  
  
  
  
    return (
      <div className="container mx-auto my-8">
        {
          loading ? <h1 className="text-[24px] text-red-500 ">LOADING .....</h1> : <div className="grid grid-cols-3 gap-8  px-10">
          {
            data.length? data.map((el) => {
              return <Card key={el.id} data={el}/>
            }): <h1>NOT FAOOND !!!</h1>
          }
        </div>
        }
      </div>
    );
  
}

export default index;