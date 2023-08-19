import { useState } from 'react';
import ListCard from './ListCard';

function AllList({data}) {
  let [dataList, setDataList] = useState(data);
  return (
    <section className='AllList'>
      <ul className='snb'>
        <li onClick={()=>{
          setDataList(data);
        }}>최신</li>
        <li onClick={
          () =>{
            setDataList([...dataList].sort((a,b)=>b.price- a.price));
          }}>예매율순</li>
        <li onClick={()=>{
          setDataList([...dataList].sort((a,b)=>
          b.discount - a.discount));
        }}>평점순</li>
      </ul>
      <div className='MainList'>
        <ul className='listCon'>
          {dataList.map((item)=>{
            return(
              <li className='list' key={item._id}>
                <ListCard item={item}/>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}

export default AllList