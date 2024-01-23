import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <div className={styles.item}>
            <div className={styles.image} style={{
                backgroundImage: 'url(/car-1.jpg)',
            }} />
            <div className={styles.info}>
                <h2>Car 1</h2>
                <p>$ 100 000</p>
                <button>Read more</button>
            </div>
        </div>
    </div>
    
  )
}

export default Home