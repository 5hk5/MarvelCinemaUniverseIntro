import { NavLink } from "react-router-dom";
import styles from '../css/Opening.module.css';

const Opening=()=>{
    return(
        <div className='Opening'>
            <img className={styles.openingImg} src='img/marvel3.jpeg' alt='오프닝 이미지'></img>
            <p className={styles.ment1}>WELCOME TO <br></br> MARVEL CINEMATIC UNIVERSE</p>
            <NavLink to='/main'><p className={styles.ment2}>ENTER</p></NavLink>
        </div>
    );
}

export default Opening;