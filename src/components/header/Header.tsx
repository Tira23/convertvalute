import style from "./Header.module.css"

export default function Header() {
    return (
        <>
            <div className={style.header}>
                <button className={style.button}>Обновить</button>
                <p>последнее обновление</p>
            </div>
        </>
    );
};
