import styles from './Navbar.module.scss'

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
        <button className='hamburger hamburger--flatten' type="button">
          <div className="inner">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
        </button>
        <div className={styles.logo}></div>
            <ul>
                <a href="./index.html"><li> home </li></a>
                <a href="./headphones.html"><li>headphones</li></a>
                <a href="./speakers.html"><li>speakers</li></a>
                <a href="./earphones.html"> <li>earphones</li></a>
            </ul>
        <div className={styles.cartLogo}></div>
      </nav>
    )
} 