import ListCard from './ListCard.js';
import {Link} from "react-router-dom";

function MainList({data}) {
  let dataList = data.filter((item) => item.category === "hot");
  return (
    <>
      <div className='headline inner'>
        <h3>인기 영화</h3>
        <Link to="/">View All</Link>
      </div>
      <section className='MainList inner'>
        <ul className='listCon'>
          {dataList.map((item)=>{
            return(
                <li className="list" key={item._id}>
                  <ListCard item={item} />
                </li>
              );
            })}
        </ul>
      </section>
    </>
  )
}
export default MainList;