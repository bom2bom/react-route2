import { Link } from 'react-router-dom';

function Header({ urlname }) {
  let bar = urlname === "/" ? "" : "bar";
  document.querySelectorAll(".gnb a").forEach((item) => {
    item.classList.remove("on");
    if (item.getAttribute("href") === urlname) {
      item.classList.add("on");
    }
  });
  return (
    <header className={`inner header ${bar}`}>
      <Link to="/" className='logo'>
        <img src={`${process.env.PUBLIC_URL}/img/logoRed.png`}></img>
      </Link>
      <nav>
        <div className='gnb'>
          <Link to='/Shop'>영화</Link>
          <Link to='/Theater'>극장</Link>
          <Link to='/Ticket'>예매</Link>
          <Link to='/Store'>스토어</Link>
          <Link to='/Event'>이벤트</Link>
          <Link to='/Benefits'>혜택</Link>
        </div>
        <div className='icon'>
          <a href='#'><i className="fa-solid fa-magnifying-glass"></i></a>
          <a href='#'><i className="fa-solid fa-cart-shopping"></i></a>
          <Link to='Login'>
          <a href='#'><i className="fa-solid fa-user"></i></a>

          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header