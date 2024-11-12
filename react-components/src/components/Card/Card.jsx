import style from "./Card.module.css"

export default function Card() {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.img}></div>
                <div className={style.text}>
                    <h3 className={style.title}>Titolo del Post</h3>
                    <p className={style.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero voluptas eius magnam et expedita saepe repellendus, animi accusamus distinctio nostrum dolores. Quo recusandae quis commodi doloribus! Corporis, sint fugit.</p>
                    <button className={style.btn}>LEGGI DI PIU'</button>
                </div>

            </div>
        </div>
    )
}