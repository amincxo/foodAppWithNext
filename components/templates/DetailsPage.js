import styles from './DetailsPage.module.css'
import Location from "../icons/Location"
import Dollar from '../icons/Dollar'

function DetailsPage(props) {
    const {id , name , price , discount , introduction , details , ingredients , recipe} = props;

  return (
    <div className={styles.container} >
        <h2>Details</h2>
        <div className={styles.subContainer} > 
            <div className={styles.container} >
                <div className={styles.banner} >
                    <img src={`/images/${id}.jpeg`} alt={name} />
                    <div>
                        <h3>{name}</h3>
                        <span className={styles.location} >
                            <Location/>
                            {details[0].Cuisine}
                        </span>
                        <span className={styles.price} >
                            <Dollar />
                            {discount ? (price * (100 - discount)/100) : price}$  
                        </span>
                        {discount ? ( <span className={styles.discount} >{discount}$OFF</span> ): null}
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default DetailsPage