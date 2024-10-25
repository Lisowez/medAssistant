import img from "../../img/start_img.jpg";
import { useState } from "preact/hooks";
import { useForm } from "react-hook-form";
import style from "./RegisterPage.module.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleNameChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setLogin(target.value);
  };

  // Обработчик для изменения пароля
  const handlePasswordChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  };

  return (
    <div className={style.container}>
      <img
        style={{ width: "100px", marginLeft: "60%", marginTop: "50px" }}
        src={img}
        alt='start_img'
      />
      <form
        className={style.form}
        onSubmit={handleSubmit((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          if (localStorage.getItem("user") !== null)
            navigate("../app/firstTest");
        })}
      >
        <label className={style.label} htmlFor='login'>
          ЛОГИН
        </label>
        <input
          className={style.input}
          type='text'
          id='login'
          {...register("login", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
            validate: {
              firstChar: (value) => {
                if (value[0].toUpperCase() !== value[0])
                  return "Логин должно начинаться с заглавной буквы";
              },
            },
          })}
          value={login.trim()}
          onChange={handleNameChange}
          placeholder={"Ваш логин"}
        />
        <div style={{ color: "red" }}>{errors.login?.message}</div>
        <label className={style.label} htmlFor='password'>
          ПАРОЛЬ
        </label>
        <div>
          <input
            className={style.input}
            type='password'
            id='password'
            {...register("password", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
              minLength: { value: 6, message: "Минимум 6 символов" },
            })}
            value={password}
            onChange={handlePasswordChange}
            placeholder={"Ваш пароль"}
          />
          <div style={{ color: "red" }}>{errors.password?.message}</div>
        </div>
        <div className={style.buttons}>
          <button
            className={style.btn}
            style={{ backgroundColor: "dodgerblue" }}
          >
            АВТОРИЗАЦИЯ
          </button>
          <button style={{ backgroundColor: "green" }} className={style.btn}>
            РЕГИСТРАЦИЯ
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
