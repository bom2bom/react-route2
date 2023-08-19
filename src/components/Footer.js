import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className='inner footer'>
      <div className="top">
          <nav>
            <Link to="">회사소개</Link>
            <Link to="">채용정보</Link>
            <Link to="">이용약관</Link>
            <Link to="">개인정보처리방침</Link>
          </nav>
          <div>
            <p>예매하기</p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="bottom">
          <p>© CJ CGV. All Rights Reserved</p>
          <div className="icon">
            <Link to="">
              <i className="fa-brands fa-instagram"></i>
            </Link>

            <Link to="">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to="">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link to="">
              <i className="fa-regular fa-star"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer