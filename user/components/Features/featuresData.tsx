import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
      //   />
      //   <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
      // </svg>
      <svg
        className="fill-current"
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Layer1">
          <path
            opacity="0.5"
            d="M16,6l-13,0c-0.552,0 -1,0.448 -1,1l0,22c0,0.552 0.448,1 1,1l22,0c0.552,0 1,-0.448 1,-1l0,-13c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l0,12c0,0 -20,0 -20,0c0,0 0,-20 0,-20c-0,0 12,0 12,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1Zm-9,19l14,-0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-14,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-0,-4l4,0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Zm22.707,-13.293c0.391,-0.39 0.391,-1.024 0,-1.414l-4,-4c-0.39,-0.391 -1.024,-0.391 -1.414,-0l-10,10c-0.14,0.139 -0.235,0.317 -0.274,0.511l-1,5c-0.065,0.328 0.037,0.667 0.274,0.903c0.236,0.237 0.575,0.339 0.903,0.274l5,-1c0.194,-0.039 0.372,-0.134 0.511,-0.274l10,-10Zm-22.707,9.293l4,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm0,-4l5,-0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-5,-0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Z"
          />
        </g>
      </svg>
    ),
    title: "Post Event",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      // <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
      //   />
      //   <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
      // </svg>
      <svg
        className="fill-current"
        width="800px"
        height="800px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M11,1 C11.5523,1 12,1.44772 12,2 L12,3 L13,3 C14.1046,3 15,3.89543 15,5 L15,13 C15,14.1046 14.1046,15 13,15 L3,15 C1.89543,15 1,14.1046 1,13 L1,5 C1,3.89543 1.89543,3 3,3 L4,3 L4,2 C4,1.44772 4.44772,1 5,1 C5.55228,1 6,1.44772 6,2 L6,3 L10,3 L10,2 C10,1.44772 10.4477,1 11,1 Z M4,5 L3,5 L3,13 L13,13 L13,5 L12,5 C12,5.55228 11.5523,6 11,6 C10.4477,6 10,5.55228 10,5 L6,5 C6,5.55228 5.55228,6 5,6 C4.44772,6 4,5.55228 4,5 Z M9.12102,7.29289 C9.51154,6.90237 10.1447,6.90237 10.5352,7.29289 C10.9258,7.68342 10.9258,8.31658 10.5352,8.70711 L7.70711,11.5352 C7.31658,11.9258 6.68342,11.9258 6.29289,11.5352 L5.29289,10.5352 C4.90237,10.1447 4.90237,9.51154 5.29289,9.12102 C5.68342,8.73049 6.31658,8.73049 6.70711,9.12102 L7,9.41391 L9.12102,7.29289 Z"
        />
      </svg>
    ),
    title: "Planing Event",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"
        />
        <path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z" />
      </svg>
    ),
    title: "Day of Event",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      // <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M31.8943 25.3303C34.1233 25.3303 36.1497 26.1409 37.5682 27.762L39.1464 26.1839C39.4614 25.8689 39.9999 26.092 39.9999 26.5374V32.936C39.9999 33.2121 39.7761 33.436 39.4999 33.436H33.1014C32.6559 33.436 32.4328 32.8974 32.7478 32.5825L35.5418 29.7885C34.5286 28.9779 33.3128 28.37 31.8943 28.37C29.0573 28.37 26.8282 30.599 26.8282 33.436C26.8282 36.273 29.0573 38.5021 31.8943 38.5021C33.3549 38.5021 34.6511 37.844 35.6345 36.8244C35.8406 36.6107 36.1187 36.4756 36.4155 36.4756H38.6535C39.0072 36.4756 39.2477 36.833 39.0881 37.1487C37.7427 39.8107 35.0781 41.5417 31.8943 41.5417C27.4361 41.5417 23.7886 37.8941 23.7886 33.436C23.7886 28.9779 27.4361 25.3303 31.8943 25.3303Z"
      //   />
      //   <path d="M18.7226 33.436C18.7226 31.3572 19.2513 29.4548 19.9799 27.7285C20.0541 27.5529 19.9264 27.3567 19.7358 27.3567C15.8856 27.3567 12.6433 24.1144 12.6433 20.2642C12.6433 16.414 15.8856 13.1717 19.7358 13.1717C23.586 13.1717 26.8283 16.414 26.8283 20.2642C26.8283 20.5105 27.3897 21.0054 27.6246 20.9313C28.9274 20.5206 30.2827 20.2642 31.8943 20.2642C32.775 20.2642 33.6557 20.4173 34.5364 20.5905C34.7422 20.6309 34.9339 20.4739 34.9339 20.2642C34.9339 19.8699 34.9339 19.3904 34.8787 18.9362C34.827 18.5117 34.9599 18.0636 35.3001 17.8045L38.9868 14.9955C39.3921 14.5902 39.3921 14.1849 39.1894 13.7797L35.1857 6.77316C35.153 6.71599 35.1272 6.65499 35.1021 6.59411C34.9143 6.13895 34.5848 6.08618 34.1135 6.08007C33.9863 6.07841 33.86 6.10354 33.7419 6.15079L29.3957 7.88927C29.0613 8.02302 28.6829 7.96367 28.3887 7.75599C27.6155 7.21023 26.7521 6.75466 25.8752 6.31262C25.5838 6.16573 25.3813 5.88702 25.3335 5.56423L24.6729 1.10574C24.6265 0.792572 24.6613 0.389935 24.3993 0.212245C24.2235 0.0930361 23.9828 0 23.7886 0H15.6829C15.3021 0 14.7424 0.35783 14.6762 0.73726C14.6678 0.785579 14.6661 0.834927 14.6589 0.883445L13.9492 5.67408C13.894 6.04692 13.6313 6.35205 13.2873 6.50604C12.4439 6.88359 11.673 7.42345 10.8193 7.89265C10.5647 8.03264 10.26 8.04143 9.99178 7.92966L5.73545 6.15619C5.61358 6.10541 5.48273 6.07832 5.35072 6.08016C4.8506 6.08715 4.49147 6.1485 4.13234 6.68719L0.0794975 13.7797C-0.123145 14.1849 0.0794976 14.5902 0.484782 14.9955L4.34631 17.9376C4.59456 18.1268 4.74261 18.4216 4.7079 18.7317C4.65068 19.243 4.53762 19.8101 4.53762 20.2642C4.53762 20.6648 4.53762 21.1534 4.59561 21.614C4.64767 22.0276 4.52563 22.4644 4.20164 22.7267L0.484782 25.7355C0.0794976 26.1408 0.0794978 26.5461 0.28214 26.9514L4.33498 34.0439C4.5154 34.4047 4.85644 34.4443 5.35811 34.4486C5.48532 34.4497 5.61152 34.4249 5.72964 34.3776L10.0758 32.6392C10.4102 32.5054 10.7887 32.5648 11.0829 32.7724C11.8561 33.3182 12.7195 33.7738 13.5964 34.2158C13.8878 34.3627 14.0903 34.6414 14.1381 34.9642L14.8616 39.8476C14.8688 39.8961 14.871 39.9453 14.8768 39.994C14.9222 40.3734 15.3145 40.7311 15.8856 40.7311H19.13C19.9191 40.7311 20.4065 39.8523 20.0627 39.1421C19.1998 37.3593 18.7226 35.4573 18.7226 33.436Z" />
      // </svg>
      <svg
        className="fill-current"
        width="800px"
        height="800px"
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path opacity="0.5" d="M27.25,24.79l-.16-.1h0Z" />
        <path d="M22.49,33.16l1.24-1.44a1.55,1.55,0,0,0,.37-.87L24.24,29a5.35,5.35,0,0,1,.39-1.55c-.52-.32-1.07-.63-1.66-.93v0l-2.07-1c-2.4-1-2.77-2-2.77-3a4.15,4.15,0,0,1,1.48-2.86,7.66,7.66,0,0,0,2.12-5.53c0-4.14-2.4-7.74-6.64-7.74h-.46C10.38,6.4,8,10,8,14.14a7.62,7.62,0,0,0,2.12,5.53,4,4,0,0,1,1.47,2.86c0,1-.28,2-2.76,3C5.31,27.14,2.09,28.7,1.91,32c.18,2.3,1.75,4,3.77,4H21.22A5.34,5.34,0,0,1,22.49,33.16Z" />
        <path d="M25.58,14.33A13.7,13.7,0,0,1,23.74,21a1.45,1.45,0,0,0,.56,2c.9.51,1.86,1.05,2.79,1.7l0,0a5.27,5.27,0,0,1,2.1-.6l2-.14a1,1,0,0,0,.59-.25l1.57-1.32a5.51,5.51,0,0,1,2-1,17.86,17.86,0,0,0-3.82-2.25C29.45,18.2,29,17.37,29,16.36a4.64,4.64,0,0,1,1.28-2.59,6.38,6.38,0,0,0,1.94-4.88c.09-3.68-2-6.91-5.9-6.91a5.76,5.76,0,0,0-5,2.86A11.73,11.73,0,0,1,25.58,14.33Z" />
        <path d="M41.77,38.76a1.88,1.88,0,1,0,1.88,1.88A1.88,1.88,0,0,0,41.77,38.76Z" />
        <path d="M31.86,31.05a1.88,1.88,0,1,0,1.88,1.88A1.88,1.88,0,0,0,31.86,31.05Zm0,0a1.88,1.88,0,1,0,1.88,1.88A1.88,1.88,0,0,0,31.86,31.05Zm17.35,4-1.42-1.71a3,3,0,0,1-.71-1.77l-.16-2.18a2.8,2.8,0,0,0-2.56-2.6l-1.9-.15a4,4,0,0,1-2.29-1l-1.44-1.27a2.8,2.8,0,0,0-3.65,0l-1.57,1.32a3.55,3.55,0,0,1-2.07.84l-2,.14a2.83,2.83,0,0,0-2.62,2.56l-.14,1.86a4.13,4.13,0,0,1-1,2.31l-1.25,1.44a2.82,2.82,0,0,0,0,3.65l1.36,1.63a3.36,3.36,0,0,1,.77,1.94l.16,2.1a2.79,2.79,0,0,0,2.55,2.6l1.91.17a3.94,3.94,0,0,1,2.27,1l1.45,1.26a2.84,2.84,0,0,0,3.66,0l1.66-1.39A3.22,3.22,0,0,1,42,47l2.18-.16a2.78,2.78,0,0,0,2.6-2.55L47,42.56A4.43,4.43,0,0,1,48.06,40l1.16-1.33A2.78,2.78,0,0,0,49.21,35.05ZM28.28,32.93a3.59,3.59,0,1,1,3.58,3.58A3.58,3.58,0,0,1,28.28,32.93Zm5.2,11.54a.32.32,0,0,1-.24.16H32.1a.29.29,0,0,1-.26-.16.27.27,0,0,1,0-.3l8.25-15.12a.35.35,0,0,1,.24-.15h1.23a.31.31,0,0,1,.15.41Zm8.29-.25a3.59,3.59,0,1,1,3.59-3.59A3.59,3.59,0,0,1,41.77,44.22Zm-8-11.29a1.88,1.88,0,1,0-1.88,1.88A1.88,1.88,0,0,0,33.74,32.93Z" />
      </svg>
    ),
    title: "Promotion",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  // {
  //   id: 1,
  //   icon: (
  //     <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
  //       <path
  //         opacity="0.5"
  //         d="M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"
  //       />
  //       <rect width="28" height="28" rx="1" />
  //     </svg>
  //   ),
  //   title: "Fully Customizable",
  //   paragraph:
  //     "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  // },
  // {
  //   id: 1,
  //   icon: (
  //     <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
  //       <path
  //         opacity="0.5"
  //         d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
  //       />
  //       <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z" />
  //     </svg>
  //   ),
  //   title: "Free and Open-Source",
  //   paragraph:
  //     "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  // },
];
export default featuresData;