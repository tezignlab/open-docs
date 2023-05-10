import React from 'react';
import Ball171 from '../assets/ball171.png';
import Circle21 from '../assets/ring21.png';
import Ball174 from '../assets/ball174.png';
import Circle22 from '../assets/ring22.png';
import Ball173 from '../assets/ball173.png';
import Ball175 from '../assets/ring175.png';
import Circle23 from '../assets/ring32.png';
import Ball172 from '../assets/ball172.png';
import $styles from './index.module.css';
import clsx from 'clsx';

export function Background() {
  return (
    <div className="h-full bg-[#0f0f14] overflow-hidden absolute top-0 right-0 bottom-0 left-0 z-[-1]">
      <svg
        viewBox="0 0 1085 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 h-full"
      >
        <image href={Ball172} x="30" y="60" />
        <path
          d="M77.4342 614.509L1083.94 -205"
          stroke="url(#paint0_linear_2_13)"
        />
        <path
          d="M226.073 625.493L641.848 -135.334"
          stroke="url(#paint1_linear_2_13)"
        />
        <path
          d="M-224 248.899L890.698 129.676"
          stroke="url(#paint2_linear_2_13)"
        />
        <image href={Circle21} x="210" y="190" />
        <circle
          cx="472.473"
          cy="175.473"
          r="6"
          transform="rotate(-41.9775 472.473 175.473)"
          fill="url(#paint3_linear_2_13)"
        />
        <path
          d="M226.074 625.493L374.619 353.633"
          stroke="url(#paint4_linear_2_13)"
        />
        <circle
          cx="357.462"
          cy="386.462"
          r="6"
          transform="rotate(-40.724 357.462 386.462)"
          fill="url(#paint5_linear_2_13)"
        />
        <image href={Ball171} x="188" y="324" />
        <defs>
          <linearGradient
            id="paint0_linear_2_13"
            x1="207.353"
            y1="505.059"
            x2="996.818"
            y2="-165.861"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#28FFE5" />
            <stop offset="0.426168" stopColor="#28B7F4" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_13"
            x1="279.094"
            y1="524.11"
            x2="778.997"
            y2="129.344"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#28FFE5" />
            <stop offset="1" stopColor="#287EFF" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2_13"
            x1="-77.1814"
            y1="230.478"
            x2="703.78"
            y2="478.52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#28FFE5" />
            <stop offset="1" stopColor="#011D47" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2_13"
            x1="472.473"
            y1="169.473"
            x2="472.473"
            y2="181.473"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#25C4BF" />
            <stop offset="1" stopColor="#034CA2" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2_13"
            x1="247.371"
            y1="584.767"
            x2="462.501"
            y2="423.462"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#28FFE5" />
            <stop offset="1" stopColor="#29CCF0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_2_13"
            x1="357.462"
            y1="380.462"
            x2="357.462"
            y2="392.462"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1FFAF4" />
            <stop offset="1" stopColor="#1F84FA" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        viewBox="-100 0 752 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx($styles.comp_right, 'absolute', 'right-0', 'h-full')}
      >
        <image href={Circle23} x="-135" y="0" />
        <image href={Ball175} x="-60" y="0" />
        <path
          d="M785.042 288.391L196 209"
          stroke="url(#paint0_linear_2_14)"
          strokeOpacity="0.42"
        />
        <image href={Circle22} x="180" y="130" />
        <path
          d="M688.919 728.808L1.26042 -89"
          stroke="url(#paint1_linear_2_14)"
        />
        <image href={Ball174} x="180" y="140" />
        <path
          d="M369.784 679.535L570.222 -164"
          stroke="url(#paint2_linear_2_14)"
        />
        <circle
          cx="431.473"
          cy="422.473"
          r="6"
          transform="rotate(-41.9775 431.473 422.473)"
          fill="url(#paint3_linear_2_14)"
        />
        <image href={Ball173} x="525" y="416" />
        <defs>
          <linearGradient
            id="paint0_linear_2_14"
            x1="707.755"
            y1="276.541"
            x2="251.799"
            y2="331.687"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#28FFE5" />
            <stop offset="1" stopColor="#011D47" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_14"
            x1="596.517"
            y1="622.883"
            x2="241.388"
            y2="-122.441"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#28FFE5" />
            <stop offset="1" stopColor="#287EFF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2_14"
            x1="394.195"
            y1="567.759"
            x2="772.31"
            y2="55.1458"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#28FFE5" />
            <stop offset="1" stopColor="#011D47" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2_14"
            x1="431.473"
            y1="416.473"
            x2="431.473"
            y2="428.473"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#25C4BF" />
            <stop offset="1" stopColor="#034CA2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
