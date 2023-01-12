import React from "react";
import { A11y, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainSlide } from "./MainSlide";

export const MainSwiper = ({ posts }) => {
  function getRandomItems(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const randomItem = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = randomItem;
    }
    return arr;
  }
  const random = getRandomItems(posts);
  return (
    <>
      <Swiper
        modules={[A11y, Keyboard, Autoplay]}
        spaceBetween={45}
        slidesPerView={2}
        keyboard={{ enabled: true, onlyInViewport: false }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        breakpoints={{
            767: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
      >
        {random.map((post, id) => (
          <SwiperSlide key={id}>
            <MainSlide post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
