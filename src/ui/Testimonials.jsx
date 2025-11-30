import React from 'react'

import FRONT1 from "../assets/Rectangle30.png";
import BACK1a from "../assets/Rectangle29.png";
import BACK1b from "../assets/Rectangle29.png";
import FRONT2 from "../assets/Rectangle31.png";
import BACK2a from "../assets/Rectangle32.png";
import BACK2b from "../assets/Rectangle32.png";
import FRONT3 from "../assets/Rectangle33.png";
import BACK3a from "../assets/Rectangle34.png";
import BACK3b from "../assets/Rectangle34.png";
import FRONT4 from "../assets/Rectangle35.png";
import BACK4a from "../assets/Rectangle36.png";
import BACK4b from "../assets/Rectangle36.png";

import Carousel from './Carousel';

const content = [
  {
    displaceImg: [
      {
        img: FRONT1,
      },
      {
        img: BACK1a,
      },
      {
        img: BACK1b,
      },
    ],
    header: "Testimonials",
    headerPaintedText: "chances of admission",
    content:
      "Absolutely loved my make up! Soft, flawless and lasted all day. She understood just what I wanted.",
    btnText: "Know your chance",
    path: "predictChance",
    quoteAuthor: "~ Jennifer Chantel"
  },
  {
    displaceImg: [
      {
        img: FRONT2,
      },
      {
        img: BACK2a,
      },
      {
        img: BACK2b,
      },
    ],
    header: "Testimonials",
    headerPaintedText: "Virtual Learning",

    content:
      "My confidence was on 100 after the session. The blending and the colours were all perfect.",
    contentPaintedText: "Versity Edge",
    contentColor: ["#0A66C2", "#f2CE34"],
    btnText: "Get Tutored",
    path: "getTutored",
    quoteAuthor: "~ Sandra Davies"
  },
  {
    displaceImg: [
      {
        img: FRONT3,
      },
      {
        img: BACK3a,
      },
      {
        img: BACK3b,
      },
    ],
    header: "Testimonials",
    headerPaintedText: "AI-powered",

    content:
      "Professional, gentle, and super talented. She transformed my looks without making it feel heavy.",
    btnText: "Stay one step ahead",
    path: "oneStepAhead",
    quoteAuthor: "~ Cynthia Chukwuebuka"
  },
  {
    displaceImg: [
      {
        img: FRONT4,
      },
      {
        img: BACK4a,
      },
      {
        img: BACK4b,
      },
    ],
    header: "Testimonials",
    headerPaintedText: "Study Plans",
    content:
      "From the brows to the lips it was 10/10. I felt so beautiful and comfortable all day.",
    btnText: "",
    quoteAuthor: "~ Sylvia Paul"
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 px-6 md:px-10 lg:px-24 relative flex h-fit items-center justify-center bg-[#F8FBFF] pb-[2rem] pt-[2rem] ">
      <Carousel carouselData={content} />
    </section>

  )
}
