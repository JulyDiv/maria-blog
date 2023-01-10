import React from "react";
import styles from "./ModalPost.module.sass";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ModalPost = ({
  imgs,
  setImgs,
  setIsModalPost,
  isModalPostEdit,
  setIsModalPostEdit,
  title,
  text,
  date,
  setPosts,
  posts,
  post,
  getData,
  img,
  setImg
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { title: title, date: date, text: text, img: img },
  });

  const onSubmit = (data) => {
    const { title, text, date } = data;
    if (isModalPostEdit) {
      const postId = { ...post };
      axios
        .put(`${process.env.NEXT_PUBLIC_API_HOST}/posts/${postId.id}`, {
          img: img,
          title: title,
          date: date,
          text: text,
        })
        .then(({ data }) => {
          console.log(data);
          getData();
        })
        .catch(function (error) {
          console.log(error.message);
        });
      setIsModalPostEdit(false);
    } else {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_HOST}/posts`, {
          img: imgs,
          title: title,
          date: date,
          text: text,
        })
        .then(({ data }) => {
          console.log(data);
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error.message);
        });
      setIsModalPost(false);
    }
  };

  const handleSubmits = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    if (isModalPostEdit) {
      reader.onload = function (e) {
        setImg(e.target.result);
        console.log(e.target.result);
      };
    } else {
      reader.onload = function (e) {
      setImgs(e.target.result);
      console.log(e.target.result);
    };
    }

    
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
                {imgs ? "Картинка готова!" : "Выбери картинку"}
              </label>
            </div>
            <button className={styles.button} type="submit">
              {isModalPostEdit ? "Редактировать пост" : "Добавить пост"}
            </button>
            <button
              className={styles.button}
              onClick={() => setIsModalPost(false)}
            >
              Свернуть панель
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
