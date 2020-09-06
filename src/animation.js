import React, { Fragment, useRef, useState, useEffect } from "react";
import TweenMax from "gsap";

const Animation = () => {
  // added object
  const [added, setAdded] = useState({
    pepperoni: false,
    spinach: false,
    mushroom: false
  });
  // prepporini refs
  const pepperoni1 = useRef(null);
  const pepperoni2 = useRef(null);
  const pepperoni3 = useRef(null);
  // spinach refs
  const spinach1 = useRef(null);
  const spinach2 = useRef(null);
  const spinach3 = useRef(null);
  const spinach4 = useRef(null);
  const spinach5 = useRef(null);
  const spinach6 = useRef(null);
  // mushroom refs
  const mushroom1 = useRef(null);
  const mushroom2 = useRef(null);

  const pepperoniAnimation = () => {
    const pepperoni = [
      pepperoni1.current,
      pepperoni2.current,
      pepperoni3.current
    ];

    TweenMax.to(pepperoni, 1, {
      y: 0,
      ease: "Bounce.easeOut",
      stagger: 0.1
    });
  };

  const mushroomAnimation = () => {
    const mushroom = [mushroom1.current, mushroom2.current];

    TweenMax.to(mushroom, 1, {
      y: 0,
      ease: "Bounce.easeOut",
      stagger: 0.1
    });
  };

  const spinachAnimation = () => {
    const spinach = [
      spinach1.current,
      spinach2.current,
      spinach3.current,
      spinach4.current,
      spinach5.current,
      spinach6.current
    ];

    TweenMax.to(spinach, 1, {
      y: 0,
      ease: "Bounce.easeOut",
      stagger: 0.1
    });
  };

  const doAnimation = type => {
    let elements = [];
    if (type === "spinach") {
      elements = [
        spinach1.current,
        spinach2.current,
        spinach3.current,
        spinach4.current,
        spinach5.current,
        spinach6.current
      ];
    } else if (type === "mushroom") {
      elements = [mushroom1.current, mushroom2.current];
    } else {
      elements = [pepperoni1.current, pepperoni2.current, pepperoni3.current];
    }

    if (!added[type]) {
      TweenMax.to(elements, 1, {
        y: 0,
        ease: "Bounce.easeOut",
        stagger: 0.1
      });
    } else {
      TweenMax.to(elements, 0.3, {
        y: -410,
        stagger: 0.1
      });
    }

    added[type] = !added[type];
    setAdded(prevState => ({ added, ...prevState }));
  };

  return (
    <Fragment>
      <div class="buttons">
        <button
          onClick={() => doAnimation("spinach")}
          className="spinach-button"
        >
          {added["spinach"] === true ? "Remove Spinach" : "Add Spinach"}
        </button>
        <button
          onClick={() => doAnimation("mushroom")}
          className="mushroom-button"
        >
          {added["mushroom"] === true ? "Remove Mushrooms" : "Add Mushrooms"}
        </button>
        <button
          onClick={() => doAnimation("pepperoni")}
          className="pepperoni-button"
        >
          {added["pepperoni"] === true ? "Remove Pepperoni" : "Add Pepperoni"}
        </button>
      </div>
      <svg viewBox="0 0 496 416">
        <path
          d="M4.379 328.253a80.468 80.468 0 00-3.653 5.038c-3.967 6.055 9.42 9.896 13.699 10.74 88.971 17.341 326.756 43.865 410.02 52.904-8.371-12.277-9.008-29.144-9.757-49.922-.15-4.072-.297-8.25-.52-12.619a3658.9 3658."
          fill="#F8CD4C"
        />
        <path
          d="M390.125 40.277c12.153 12.163 48.648 79.004 57.906 106.208 9.251 27.178 18.775 78.347 34.382 119.245a150.331 150.331 0 012.984 8.68c.382 1.232.771 2.492 1.135 3.775.37 1.311.74 2.619 1.102 3.967.346 1.337.696"
          fill="#FA9D37"
        />
        <path
          d="M181 327c0-24.853 21.49-45 48-45s48 20.147 48 45-21.49 45-48 45-48-20.147-48-45z"
          fill="#F8CD4C"
        />
        <path
          d="M260.598 155.346c0-24.853 21.49-45 48-45s48 20.147 48 45c0 24.852-21.49 45-48 45s-48-20.148-48-45z"
          fill="#F8CD4C"
        />
        <path
          d="M342.983 136.128c.53 2.89-.214 5.568-2.25 8.178-5.62 7.196-18.814 10.761-18.957 10.805l-4.539 1.192 4.25 2.013c3.176 1.503 11.791 6.535 13.47 11.736.475 1.48.353 2.862-.398 4.21a37.935 37.935 0 01-3.24 4.902c"
          fill="#F8CAA1"
          ref={mushroom1}
          className="mushroom"
        />
        <path
          d="M259.51 305.901c1.48.306 2.57 1.048 3.354 2.332 5.364 8.688 6.373 18.062 1.98 21.067-6.985 4.803-20.793-.369-20.938-.439l-1.55-.577-.642 1.519c-.486 1.187.152 2.205 2.082 5.276 1.608 2.563 3.907 6.185 5.33 9."
          fill="#F8CAA1"
          ref={mushroom2}
          className="mushroom"
        />
        <g>
          <path
            d="M191.598 223.346c0-24.853 21.49-45 48-45s48 20.147 48 45c0 24.852-21.49 45-48 45s-48-20.148-48-45z"
            fill="#F8CD4C"
          />
          <path
            d="M88.598 301.346c0-24.853 21.49-45 48-45s48 20.147 48 45c0 24.852-21.49 45-48 45s-48-20.148-48-45z"
            fill="#F8CD4C"
          />
          <path
            d="M302.598 314.346c0-24.853 21.49-45 48-45s48 20.147 48 45c0 24.852-21.49 45-48 45s-48-20.148-48-45z"
            fill="#F8CD4C"
          />
          <path
            d="M160.382 269.63c18.096 14.13 22.071 39.273 8.89 56.152-13.179 16.882-38.537 19.125-56.633 4.996-18.11-14.141-22.082-39.283-8.902-56.164 13.18-16.881 38.536-19.122 56.645-4.984z"
            fill="#DA2427"
            ref={pepperoni1}
            className="pepperoni"
          />
          <path
            d="M265.83 191.291c18.098 14.13 22.08 39.26 8.891 56.153-13.178 16.878-38.538 19.123-56.632 4.994-18.11-14.139-22.084-39.284-8.904-56.165 13.19-16.894 38.535-19.12 56.645-4.982z"
            fill="#DA2427"
            ref={pepperoni2}
            className="pepperoni"
          />
          <path
            d="M372.735 282.54c18.097 14.128 22.082 39.26 8.891 56.153-13.18 16.881-38.535 19.123-56.635 4.996-18.107-14.142-22.081-39.287-8.903-56.166 13.19-16.89 38.537-19.122 56.647-4.983z"
            fill="#DA2427"
            ref={pepperoni3}
            className="pepperoni"
          />
        </g>
        <g fill="#87C33A">
          <path
            d="M306.01 232.142s-5.034-24.973 17.384-32.197c22.424-7.223 30.076-6.686 30.076-6.686s-6.38 54.512-47.46 38.883z"
            class="spinach"
            ref={spinach1}
          />
          <path
            d="M151.669 236.43s12.015-11.899 24.214-8.459c12.198 3.44 19.146 40.965 19.146 40.965l-26.434-9.166s-3.946-20.334-16.926-23.34z"
            class="spinach"
            ref={spinach2}
          />
          <path
            d="M217.95 153.143s6.698-2.402 26.98 4.986l22.402-38.48s-29.472-5.778-49.382 33.494z"
            class="spinach"
            ref={spinach3}
          />
          <path
            d="M259.298 283.529c-1.513-5.164 11.341-24.48 27.753-15.711l.513 32.815c0 .002-23.029.806-28.266-17.104z"
            class="spinach"
            ref={spinach4}
          />
          <path
            d="M352.291 361.768s19.188 2.854 31.999-14.156c12.81-17.01 9.492-25.684 9.492-25.684s13.759 16.616 2.721 33.997c-11.038 17.384-27.331 17.434-44.212 5.843z"
            class="spinach"
            ref={spinach5}
          />
          <path
            d="M68.905 341.262c2.538-1.699 12.455-7.426 12.455-7.426s-20.596-12.344-15.474-31.729c5.124-19.383 16.823-25.102 16.823-25.102l-7.534-.08s-21.77 5.576-24.995 32.016c-2.283 18.713 18.725 32.321 18.725 32.321z"
            class="spinach"
            ref={spinach6}
          />
        </g>
      </svg>
    </Fragment>
  );
};

export default Animation;
