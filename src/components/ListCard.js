import {Link} from "react-router-dom";

function ListCard({item}){
  return(
    <>
      <div className='imgCon'>
        <p className='discount'>{item.discount}%</p>
        <img src={`${process.env.PUBLIC_URL}/img/${item.img}`}/>
        <p className='imgLabel'>예매하기</p>
      </div>
      <p>{item.title}</p>
      <p>{item.price}%</p>
    </>
  )
}
export default ListCard;