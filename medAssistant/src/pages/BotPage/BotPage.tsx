import style from "./BotPage.module.css";

const BotPage = () => {
  return (
    <div className={style.container}>
      <div className={style.bot}></div>
      <div className={style.search}>
        <input
          className={style.input}
          type='text'
          name='search'
          id='search'
          placeholder={"Расскажите, что вас беспокоит"}
        />
        <button className={style.btn}>Отправить</button>
        <button className={style.btn}>Голос</button>
        <button className={style.btn}>Загрузить файл</button>
        <button className={style.btn}>фото</button>
      </div>
    </div>
  );
};

export default BotPage;
