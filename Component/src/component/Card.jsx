import "./Card.css";

function Card({cardkey,title,text,classD,setText,type}) {
  return (
    <>
    <div className='main' value={cardkey}>
    <h1 className={classD}>{title}</h1>
    <p>{text}</p>
    {type=="true"?<button onClick={()=>setText("Clicked")}>Click</button>:""}
    </div>
    </>
  );
};

export default Card;