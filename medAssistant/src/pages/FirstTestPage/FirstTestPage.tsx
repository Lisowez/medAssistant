import { useForm } from "react-hook-form";
import style from "./FirstTestPage.module.css";
import { useEffect, useLayoutEffect, useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";

export interface IData {
  gender: string;
  age: number;
  weight: number;
  height: number;
}

interface IError {
  message: string;
  show: boolean;
}

export const FirstTestPage = () => {
  const { register, handleSubmit } = useForm({ mode: "onChange" });
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const name = JSON.parse(data).login;
      setName(name);
    }
  }, []);

  const [error, setError] = useState<IError>({ message: "", show: false });

  function onSubmit(data: IData) {
    if (data.gender && data.age > 0 && data.weight > 0 && data.height > 0) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      setError({
        message: "",
        show: false,
      });
      navigate("../main");
    } else if (data.age <= 0 || data.height <= 0 || data.weight <= 0) {
      setError({
        message: "Проверьте правильность введенных данных",
        show: true,
      });
    } else {
      setError({
        message: "Заполните все поля",
        show: true,
      });
    }
  }

  return (
    <>
      {name && <h2 style={{ textAlign: "center" }}>Здравствуйте, {name}</h2>}

      <h3 style={{ textAlign: "center" }}>Введите свои актуальные данные</h3>
      <form
        className={style.form}
        onSubmit={handleSubmit((data) => onSubmit(data as IData))}
      >
        <div className={style.block}>
          <label className={style.label} htmlFor='gender'>
            ПОЛ
          </label>
          <select className={style.input} id='gender' {...register("gender")}>
            <option value='Мужской'>Мужской</option>
            <option value='Женский'>Женский</option>
            <option value='Другой'>Другой</option>
          </select>
        </div>
        <div className={style.block}>
          {" "}
          <label className={style.label} htmlFor='age'>
            ВОЗРАСТ
          </label>
          <input
            className={style.input}
            type='number'
            id='age'
            {...register("age")}
          />
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor='height'>
            РОСТ, см
          </label>
          <input
            className={style.input}
            type='number'
            {...register("height")}
            id='height'
          />
        </div>
        <div className={style.block}>
          {" "}
          <label className={style.label} htmlFor='weight'>
            ВЕС, кг
          </label>
          <input
            className={style.input}
            type='number'
            {...register("weight")}
            id='weight'
          />
        </div>
        {error.message && <div style={{ color: "red" }}>{error.message} </div>}
        <button className={style.btn}>Далее</button>
      </form>
    </>
  );
};
