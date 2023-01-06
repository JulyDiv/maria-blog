import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ModalPost = ({ imgs, setImgs }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { title, text } = data;
    axios
      .post("https://broad-accidental-servant.glitch.me/posts", {
        img: imgs,
        title: title,
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
    //let wrapper = document.querySelector(".posts-main");
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
      setImgs(e.target.result);
      // let img = document.createElement("img");
      // wrapper.appendChild(img);
      // img.src = reader.result;
      console.log(e.target.result);
    };
  };

  return (
    <>
      <div className="post">
        <div className=""></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          type="text"
          //onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          {...register("text")}
          type="text"
          //onChange={(e) => setText(e.target.value)}
        />
        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        {/* <input
          {...register("text")}
          type="text"
          //onChange={(e) => setText(e.target.value)}
          style={{ border: "1px solid green" }}
        /> */}
        <input
          {...register("img")}
          type="file"
          onChange={(e) => handleSubmits(e)}
        />
        <button type="submit">GO</button>
      </form>

      {/* <button onClick={() => onSubmit()}>GO</button> */}
      <button onClick={() => onDelete()}>DELETE</button>
    </>
  );
};
