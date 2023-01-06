import React from "react";
import styles from "./ModalPost.module.sass";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ModalPost = ({ imgs, setImgs }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { title, text, date } = data;
    axios
      .post("https://broad-accidental-servant.glitch.me/posts", {
        img: imgs,
        title: title,
        date: date,
        text: text,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  const onDelete = (data) => {
    console.log(data);
    axios
      .delete("https://broad-accidental-servant.glitch.me/posts")
      .then(({ data }) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  const handleSubmits = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
      setImgs(e.target.result);
      console.log(e.target.result);
    };
  };

  return (
    <>
      <div className={styles.post}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Сегодня я расскажу о...</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.block}>
              <input
                {...register("title")}
                type="text"
                className={styles.input}
                placeholder="Заголовок"
              />
              <input
                {...register("date")}
                type="text"
                className={styles.input}
                placeholder="Дата"
              />
            </div>
            <div className={styles.block}>
              <textarea
                {...register("text")}
                type="text"
                className={styles.textarea}
                placeholder="Пост"
              />
              <label className={styles.label} htmlFor="input_file">
                <input
                {...register("img")}
                type="file"
                onChange={(e) => handleSubmits(e)}
                className={styles.file}
                id="input_file"
              />
              Выбери картинку</label>
            </div>
            <button className={styles.button} type="submit">
              Добавить пост
            </button>
          </form>

          {/* <button onClick={() => onSubmit()}>GO</button> */}
          {/* <button onClick={() => onDelete()}>Удалить пост</button> */}
        </div>
      </div>
    </>
  );
};
