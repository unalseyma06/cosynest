import MainStyle from "../scss/main.module.scss";
import "../helper/data";

 function Main ({data})  {
  return (
    <div className={MainStyle.container}> 
    {data.map((item,index) => {
      const {id, title, image} = item
      return (
        <div key={id} className={MainStyle.card}>
          <h1>{title} </h1>
          <img src={image} alt={title} />


        </div>
      )

    })}
    </div>
  )
 }

export default Main
