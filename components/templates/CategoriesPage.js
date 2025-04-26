import styles from './CategoriesPage.module.css'

function CategoriesPage() {
  return (
    <div className={styles.container} >
        <h2>Categories</h2>
        <div className={styles.subContainer} >
            <div className={styles.select} >
                <select>
                    <option>Difficulty</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
                <select>
                    <option>Cooking Time</option>
                    <option>MoreThan 30 min</option>
                    <option>Les than 30 min</option>
                </select>
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default CategoriesPage