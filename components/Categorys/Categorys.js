import styles from './Categorys.module.scss'
import Image from 'next/image'
import ImageOne from '../../public/images/shared/desktop/image-category-thumbnail-headphones.png'
import ImageTwo from '../../public/images/shared/desktop/image-category-thumbnail-speakers.png'
import ImageThree from '../../public/images/shared/desktop/image-category-thumbnail-earphones.png'

export default function Categorys(){
    return (
        <section className={styles.categorys}>
            <div className={styles.categorysProduct}>
            <div className={styles.categoryImage}>
            <Image
                src={ImageOne}
                alt="headphones"
                width='160px'
                height='160px'
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
             />
             </div>
           
            <h6> <a href="./headphones.html">headphones</a> </h6>
            <a href="./headphones.html"> <button className='button-three'>shop</button></a>
            </div>
            <div className={styles.categorysProduct}>
            <div className={styles.categoryImage}>
            <Image
                src={ImageTwo}
                alt="headphones"
                width='160px'
                height='160px'
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
             />
             </div>
     
            <h6><a href="./speakers.html">speakers</a> </h6>
            <a href="./speakers.html"> <button className='button-three'>shop</button></a>
            </div>
            <div className={styles.categorysProduct}>
            <div className={styles.categoryImage}>
            <Image
                src={ImageThree}
                alt="headphones"
                width='180px'
                height='160px'
             />
            </div>
            <h6>earphones </h6>
            <a href="./earphones.html"> <button className='button-three'>shop</button></a> 
            </div>
        </section>    
    )
}