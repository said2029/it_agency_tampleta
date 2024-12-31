import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TeamCard_2({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-black/30 relative flex flex-col items-center overflow-hidden rounded-xl border-[1px] bg-[#1859ff50] p-4 backdrop-blur-md [&_.hover-Button-Team-Card]:hover:block [&_img]:hover:blur-sm",
        className,
      )}
    >
      <div className="relative flex items-center justify-center">
        <Image
          className="h-full w-full object-cover transition-all"
          width={300}
          height={300}
          alt=""
          src={"/assets/images/img/Rectangle 11.png"}
        />
        <Link href={"/"} className="hover-Button-Team-Card absolute hidden">
          <div>
            <svg
              width="103"
              height="103"
              viewBox="0 0 103 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="103"
                height="103"
                rx="51.5"
                fill="url(#paint0_linear_230_1765)"
              />
              <path
                d="M59.6667 43.7002L40.3833 62.9835C39.9861 63.3807 39.4805 63.5793 38.8667 63.5793C38.2528 63.5793 37.7472 63.3807 37.35 62.9835C36.9528 62.5863 36.7542 62.0807 36.7542 61.4668C36.7542 60.8529 36.9528 60.3474 37.35 59.9502L56.6333 40.6668H40.1667C39.5528 40.6668 39.0385 40.4588 38.624 40.0428C38.2094 39.6268 38.0014 39.1126 38 38.5002C37.9985 37.8877 38.2065 37.3735 38.624 36.9575C39.0414 36.5415 39.5557 36.3335 40.1667 36.3335H61.8333C62.4472 36.3335 62.9621 36.5415 63.3781 36.9575C63.7941 37.3735 64.0014 37.8877 64 38.5002V60.1668C64 60.7807 63.792 61.2957 63.376 61.7117C62.96 62.1277 62.4458 62.3349 61.8333 62.3335C61.2209 62.332 60.7067 62.124 60.2907 61.7095C59.8747 61.2949 59.6667 60.7807 59.6667 60.1668V43.7002Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_230_1765"
                  x1="0"
                  y1="51.5"
                  x2="103"
                  y2="51.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#185BFF" />
                  <stop offset="1" stopColor="#4078FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>
      </div>
      <div className="bottom-0 left-0 p-3 text-center text-black">
        <h5 className="text-h6">August Everest</h5>
        <p className="text-paragraph opacity-70">SYSTEMS ENGINEER</p>
      </div>
      <div className="right-2 top-2 flex gap-2">
        <Link href={"/"}>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.589478" width="28" height="28" rx="4" fill="white" />
            <path
              d="M13.5323 12.4179C13.3243 12.5569 13.1458 12.7356 13.0068 12.9437C12.8678 13.1517 12.7712 13.3851 12.7225 13.6306C12.624 14.1262 12.7265 14.6406 13.0073 15.0607C13.2882 15.4808 13.7244 15.7721 14.22 15.8706C14.7157 15.969 15.2301 15.8666 15.6502 15.5857C16.0703 15.3049 16.3616 14.8686 16.46 14.373C16.5585 13.8774 16.456 13.3629 16.1752 12.9429C15.8943 12.5228 15.4581 12.2315 14.9625 12.133C14.4669 12.0345 13.9524 12.137 13.5323 12.4179ZM18.6145 9.975C18.4288 9.78929 18.2038 9.64286 17.9573 9.54643C17.3109 9.29286 15.9002 9.30357 14.9895 9.31429C14.843 9.31429 14.7073 9.31786 14.5895 9.31786C14.4716 9.31786 14.3323 9.31786 14.1823 9.31429C13.2716 9.30357 11.868 9.28929 11.2216 9.54643C10.9752 9.64286 10.7538 9.78929 10.5645 9.975C10.3752 10.1607 10.2323 10.3857 10.1359 10.6321C9.88233 11.2786 9.89662 12.6929 9.90376 13.6036C9.90376 13.75 9.90733 13.8857 9.90733 14C9.90733 14.1143 9.90733 14.25 9.90376 14.3964C9.89662 15.3071 9.88233 16.7214 10.1359 17.3679C10.2323 17.6143 10.3788 17.8357 10.5645 18.025C10.7502 18.2143 10.9752 18.3571 11.2216 18.4536C11.868 18.7071 13.2788 18.6964 14.1895 18.6857C14.3359 18.6857 14.4716 18.6821 14.5895 18.6821C14.7073 18.6821 14.8466 18.6821 14.9966 18.6857C15.9073 18.6964 17.3109 18.7107 17.9573 18.4536C18.2038 18.3571 18.4252 18.2107 18.6145 18.025C18.8038 17.8393 18.9466 17.6143 19.043 17.3679C19.3002 16.725 19.2859 15.3179 19.2752 14.4036C19.2752 14.2536 19.2716 14.1143 19.2716 13.9964C19.2716 13.8786 19.2716 13.7429 19.2752 13.5893C19.2859 12.6786 19.3002 11.2714 19.043 10.625C18.9466 10.3786 18.8002 10.1571 18.6145 9.96786V9.975ZM16.218 11.5643C16.864 11.9962 17.312 12.6671 17.4634 13.4293C17.6147 14.1915 17.4571 14.9826 17.0252 15.6286C16.5933 16.2746 15.9224 16.7225 15.1602 16.8739C14.398 17.0253 13.6069 16.8676 12.9609 16.4357C12.641 16.2221 12.3664 15.9475 12.1526 15.6278C11.9389 15.308 11.7902 14.9492 11.7151 14.572C11.64 14.1948 11.6399 13.8064 11.7148 13.4292C11.7898 13.0519 11.9383 12.6931 12.152 12.3732C12.3656 12.0534 12.6402 11.7787 12.9599 11.5649C13.2797 11.3512 13.6385 11.2025 14.0157 11.1274C14.3929 11.0523 14.7813 11.0522 15.1585 11.1271C15.5358 11.2021 15.8946 11.3507 16.2145 11.5643H16.218ZM17.2609 11.5179C17.1502 11.4429 17.0609 11.3357 17.0073 11.2107C16.9538 11.0857 16.943 10.95 16.968 10.8143C16.993 10.6786 17.0609 10.5607 17.1538 10.4643C17.2466 10.3679 17.3716 10.3036 17.5038 10.2786C17.6359 10.2536 17.7752 10.2643 17.9002 10.3179C18.0252 10.3714 18.1323 10.4571 18.2073 10.5679C18.2823 10.6786 18.3216 10.8107 18.3216 10.9464C18.3216 11.0357 18.3038 11.125 18.2716 11.2071C18.2395 11.2893 18.1859 11.3643 18.1252 11.4286C18.0645 11.4929 17.9859 11.5429 17.9038 11.5786C17.8216 11.6143 17.7323 11.6321 17.643 11.6321C17.5073 11.6321 17.3752 11.5929 17.2645 11.5179H17.2609ZM22.5895 8.28571C22.5895 7.025 21.5645 6 20.3038 6H8.87519C7.61448 6 6.58948 7.025 6.58948 8.28571V19.7143C6.58948 20.975 7.61448 22 8.87519 22H20.3038C21.5645 22 22.5895 20.975 22.5895 19.7143V8.28571ZM19.3395 18.75C18.6716 19.4179 17.8609 19.6286 16.9466 19.675C16.0038 19.7286 13.1752 19.7286 12.2323 19.675C11.318 19.6286 10.5073 19.4179 9.83948 18.75C9.17162 18.0821 8.96091 17.2714 8.91805 16.3571C8.86448 15.4143 8.86448 12.5857 8.91805 11.6429C8.96448 10.7286 9.17162 9.91786 9.83948 9.25C10.5073 8.58214 11.3216 8.37143 12.2323 8.32857C13.1752 8.275 16.0038 8.275 16.9466 8.32857C17.8609 8.375 18.6716 8.58214 19.3395 9.25C20.0073 9.91786 20.218 10.7286 20.2609 11.6429C20.3145 12.5821 20.3145 15.4071 20.2609 16.3536C20.2145 17.2679 20.0073 18.0786 19.3395 18.7464V18.75Z"
              fill="black"
            />
          </svg>
        </Link>
        <Link href={"/"}>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.410522"
              y="0.6875"
              width="28.1789"
              height="26.625"
              rx="4"
              fill="white"
            />
            <path
              d="M19.1511 6.6875H21.6332L16.2121 12.882L22.5894 21.3125H17.5972L13.6844 16.2008L9.21248 21.3125H6.72693L12.5242 14.6855L6.41052 6.6875H11.5293L15.0625 11.3598L19.1511 6.6875ZM18.2793 19.8289H19.6539L10.7804 8.09375H9.30388L18.2793 19.8289Z"
              fill="black"
            />
          </svg>
        </Link>
        <Link href={"/"}>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.589478" width="28" height="28" rx="4" fill="white" />
            <path
              d="M21.4466 6H7.72876C7.10019 6 6.58948 6.51786 6.58948 7.15357V20.8464C6.58948 21.4821 7.10019 22 7.72876 22H21.4466C22.0752 22 22.5895 21.4821 22.5895 20.8464V7.15357C22.5895 6.51786 22.0752 6 21.4466 6ZM11.4252 19.7143H9.05376V12.0786H11.4288V19.7143H11.4252ZM10.2395 11.0357C9.47876 11.0357 8.86448 10.4179 8.86448 9.66071C8.86448 8.90357 9.47876 8.28571 10.2395 8.28571C10.9966 8.28571 11.6145 8.90357 11.6145 9.66071C11.6145 10.4214 11.0002 11.0357 10.2395 11.0357ZM20.3145 19.7143H17.943V16C17.943 15.1143 17.9252 13.975 16.7109 13.975C15.4752 13.975 15.2859 14.9393 15.2859 15.9357V19.7143H12.9145V12.0786H15.1895V13.1214H15.2216C15.5395 12.5214 16.3145 11.8893 17.4681 11.8893C19.8681 11.8893 20.3145 13.4714 20.3145 15.5286V19.7143Z"
              fill="black"
            />
          </svg>
        </Link>
        <Link href={"/"}>
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.589478" width="28" height="28" rx="4" fill="white" />
            <path
              d="M8.87519 6C7.61448 6 6.58948 7.025 6.58948 8.28571V19.7143C6.58948 20.975 7.61448 22 8.87519 22H12.3823V16.7929H10.4966V14H12.3823V12.7964C12.3823 9.68571 13.7895 8.24286 16.8466 8.24286C17.4252 8.24286 18.4252 8.35714 18.8359 8.47143V11C18.6216 10.9786 18.2466 10.9643 17.7788 10.9643C16.2788 10.9643 15.7002 11.5321 15.7002 13.0071V14H18.6859L18.1716 16.7929H15.6966V22H20.3038C21.5645 22 22.5895 20.975 22.5895 19.7143V8.28571C22.5895 7.025 21.5645 6 20.3038 6H8.87519Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
