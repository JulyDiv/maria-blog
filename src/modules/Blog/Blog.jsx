/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <div className="blog-wrapper">
            <div className="posts">
              <div className="posts-main">
                <img className="posts-main__img" src="" alt="photo: post" />
                <h4 className="posts-main__title">Title</h4>
                <span className="posts-main__span">Date</span>
                <p className="posts-main__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus eum voluptate sunt mollitia illo, odit saepe facilis
                  ratione. A libero necessitatibus facilis provident optio
                  consectetur, neque cupiditate perspiciatis magni nostrum aut
                  cum dolore repudiandae quis vitae voluptatum asperiores
                  doloribus unde sint officia atque? Similique voluptate optio
                  in alias corporis obcaecati perspiciatis id itaque aperiam
                  dolor libero nostrum praesentium exercitationem deleniti
                  culpa, porro quam magnam illum laboriosam error? Saepe
                  recusandae doloribus expedita ex soluta ducimus veniam
                  inventore! Accusamus quisquam soluta impedit obcaecati,
                  recusandae voluptas tempora inventore nisi nostrum earum
                  cupiditate eius magnam nulla optio vero reiciendis ea. Natus
                  autem sint illo.
                </p>
              </div>
              <div className="posts-choice">
                <div className="posts-choice__item">
                  <img className="posts-choice__img" src="" alt="photo: post" />
                  <div className="posts-choice__block">
                    <h4 className="posts-choice__title">Title</h4>
                    <span className="posts-choice__span">Date</span>
                  </div>
                </div>
                <div className="posts-choice__item">
                  <img className="posts-choice__img" src="" alt="photo: post" />
                  <div className="posts-choice__block">
                    <h4 className="posts-choice__title">Title</h4>
                    <span className="posts-choice__span">Date</span>
                  </div>
                </div>
                <div className="posts-choice__item">
                  <img className="posts-choice__img" src="" alt="photo: post" />
                  <div className="posts-choice__block">
                    <h4 className="posts-choice__title">Title</h4>
                    <span className="posts-choice__span">Date</span>
                  </div>
                </div>
                <div className="posts-choice__item">
                  <img className="posts-choice__img" src="" alt="photo: post" />
                  <div className="posts-choice__block">
                    <h4 className="posts-choice__title">Title</h4>
                    <span className="posts-choice__span">Date</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts">
              <div className="contacts-icon">
                <Link
                  href="#"
                  className="contacts-icon__item contacts-icon__telegram"
                ></Link>
                <Link
                  href="#"
                  className="contacts-icon__item contacts-icon__instagram"
                ></Link>
                <Link
                  href="#"
                  className="contacts-icon__item contacts-icon__youtube"
                ></Link>
                <Link
                  href="#"
                  className="contacts-icon__item contacts-icon__vk"
                ></Link>
              </div>
              <div className="contacts-target"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
