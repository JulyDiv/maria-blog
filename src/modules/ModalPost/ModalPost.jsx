import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ModalPost = ({ imgs, text, title }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
  // const onDelete = (data) => {
  //   console.log(data);
  //   axios
  //     .delete("https://broad-accidental-servant.glitch.me/posts/6")
  //     .then(({ data }) => {
  //       console.log(data);
  //     })
  //     .catch(function (error) {
  //       console.log(error.message);
  //     });
  // };
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("img")}
          type="file"
          onChange={(e) => handleSubmits(e)}
        />
        <button type="submit">GO</button>
      </form>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        style={{ border: "1px solid black" }}
      />

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        style={{ border: "1px solid green" }}
      />
      <button onClick={() => onSubmit()}>GO</button>
      <button onClick={() => onDelete()}>DELETE</button>
    </>
  );
};
