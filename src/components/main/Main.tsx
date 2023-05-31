import styles from "./Main.module.css";
import data from "../../Api.json";
import {useState} from "react";
import {Valute} from "../../interface";


export default function Main() {

    const [valute, setValute] = useState<Valute[]>([data.Valute]);


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
            {valute.map((item, index) => (<div className={styles.row}>
                <div>{index + 1}</div>
                <div>{item.AUD.Name}</div>
                <div>{item.AUD.CharCode}</div>
                <div>{item.AUD.Value}</div>
                <div>{item.AUD.Name}</div>
                <div>{item.AUD.Name}</div>
                <div>{item.AUD.Name}</div>
            </div>))}

        </div>
    );
}
