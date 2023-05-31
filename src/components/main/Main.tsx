import styles from "./Main.module.css"

export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.row}>
                <div>Номер</div>
                <div>Название</div>
                <div>Код</div>
                <div>Курс к Рублю</div>
                <div>Курс к Доллару</div>
                <div>Курс к Евро</div>
                <div>Курс к Юаню</div>
            </div>
            <div className={styles.row}>
                <div>Номер</div>
                <div>Название</div>
                <div>Код</div>
                <div>Курс к Рублю</div>
                <div>Курс к Доллару</div>
                <div>Курс к Евро</div>
                <div>Курс к Юаню</div>
            </div>
        </div>
    )
}
