import AllList from './AllList.js'

function Shop({data}) {
  return (
    <section className='Shop inner'>
      <h1>무비차트</h1>
      <AllList data={data}></AllList>
    </section>
  )
}

export default Shop;