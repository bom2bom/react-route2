import MainList from './MainList.js';
import MainBanner from './MainBanner.js'


function Main({ data }) {
  return (
    <section className='Main'>
      <MainBanner/>
      <MainList data={data}/>
    </section>
  );
}

export default Main;