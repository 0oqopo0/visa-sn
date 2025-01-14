import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { RiMapPinTimeLine } from "react-icons/ri";
import { MdMoreTime } from "react-icons/md";
import { GiEarthAmerica} from "react-icons/gi";
import { US, CA, GB, AU, BR, BG } from "country-flag-icons/react/3x2";
import Mount from "../Pool/Images/Mount.jpg";
import Earth from "../Pool/Images/Earth.jpg";
import WhatIsEmbassyAppointment from "../Pool/Images/Pub/WhatIsEmbassyAppointment.jpg";
import Netherlands_Castles_Roads_De_Haar_Castle_Tower_615272_1280x893 from "../Pool/Images/Pub/Netherlands_Castles_Roads_De_Haar_Castle_Tower_615272_1280x893.jpg";
import USA_Bridges_golden_bridge_San_Francisco_614954_1280x853 from "../Pool/Images/US/USA_Bridges_golden_bridge_San_Francisco_614954_1280x853.jpg";
import Italy_Sea_Houses_Roads_Atrani_612044_1280x853 from "../Pool/Images/Pub/Italy_Sea_Houses_Roads_Atrani_612044_1280x853.jpg";
import USA_Houses_Los_Angeles_California_Palms_599408_1280x867 from "../Pool/Images/US/USA_Houses_Los_Angeles_California_Palms_599408_1280x867.jpg";
import USA_Evening_Houses_Sculptures_United_States_598081_1280x853 from "../Pool/Images/US/USA_Evening_Houses_Sculptures_United_States_598081_1280x853.jpg";
import Canada_Rivers_Bridges_Houses_Parliament_Hill_610221_1280x886 from "../Pool/Images/CA/Canada_Rivers_Bridges_Houses_Parliament_Hill_610221_1280x886.jpg";
import Canada_Mountains_Lake_Parks_Boats_Moraine_Lake_615069_1280x800 from "../Pool/Images/CA/Canada_Mountains_Lake_Parks_Boats_Moraine_Lake_615069_1280x800.jpg";
import England_Rivers_Bridges_People_Tower_Bridge_London_608840_1280x853 from "../Pool/Images/GB/England_Rivers_Bridges_People_Tower_Bridge_London_608840_1280x853.jpg";
import England_Houses_Ashridge_Estate_From_above_615306_1280x852 from "../Pool/Images/GB/England_Houses_Ashridge_Estate_From_above_615306_1280x852.jpg";
import aleni from "../Pool/Images/AU/aleni.jpg";
import melisenta from "../Pool/Images/AU/melisenta.jpg";
import Bulgaria_Cathedral_Sky_Sofia_Alexander_Nevsky_591010_1364x1024 from "../Pool/Images/BG/Bulgaria_Cathedral_Sky_Sofia_Alexander_Nevsky_591010_1364x1024.jpg";
import Brazil_Houses_Christ_the_Redeemer_Rio_de_Janeiro_570115_1280x853 from "../Pool/Images/BR/Brazil_Houses_Christ_the_Redeemer_Rio_de_Janeiro_570115_1280x853.jpg";

import beachVid from "../Pool/Videos/beachVid.mp4";
import nature_105936_720p from "../Pool/Videos/nature_105936_720p.mp4";
import Nature_159101 from "../Pool/Videos/Nature_159101.mp4";
export const PublicCategory = [

  
  {
    id:0,
    create_date: '23-MAY-23',
    code :'Call',
    p_title :'تماس',
    e_title :'Call',
    str_data: '<a href="http://www.Telegram.com" target="_blank" className="absolute left-[40%] text-2xl rounded-full p-2 bg-green-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] animate-pulse "><a href="https://Telegram.org" target="_blank"><FaTelegram /></a>',

  },
  {
    id:1,
    create_date: '23-MAY-23',
    code :'Telgram',
    p_title :'تلگرام',
    e_title :'Telgram',
    str_data: '<a href="http://www.Telegram.com" target="_blank" className="absolute left-[40%] text-2xl rounded-full p-2 bg-red-500/40 text-white cursor-pointer duration-500 shadow-[inset_0_5px_26px_rgba(0,0,0,0.6)] animate-pulse "><a href="https://Telegram.org" target="_blank"><FaTelegram /></a>',

  }
]
export const Data = [
  {
    pTitle: "وقت سفارت",
    eTitle: "EmbassyAppointment",
    Des : "وقت سفارت",
    Description : "  آیا می دانستیــد برای ورود به خاک اکثر کشور ها نیاز به ویزا می باشد و فرآینــد دریافت ویزا برای کشور های مختلف متفاوت بوده و جهت اخذ ویــزا نیاز به وقت سفـارت می باشد؟",
    icon: <RiMapPinTimeLine className="w-10 h-5 " />,
    flag: null,
    img: Earth,
    Video00: nature_105936_720p,
    Video01: Nature_159101,
    Video02: beachVid,
    
    subItem: [
      {
        id:1,
        pName: "وقت سفارت",
        eName: "WhatIsEmbassyAppointment",
        Des:"",
        Description : "  آیا می دانستیــد برای ورود به خاک اکثر کشور ها نیاز به ویزا می باشد و فرآینــد دریافت ویزا برای کشور های مختلف متفاوت بوده و جهت اخذ ویــزا نیاز به وقت سفـارت می باشد؟",
        icon: <MdMoreTime  className="w-10 h-5 "/>,
        flag: null,
        img: Netherlands_Castles_Roads_De_Haar_Castle_Tower_615272_1280x893,
        Video00: nature_105936_720p,

      },
      {
        pName: "وقت سفارت آمریکا",
        eName: "USAEmbassyAppointment",
        Des:"",
        Description : "گرفتن وقت سفارت آمریکا  به صورت حضوری انجام می‌شود، هم به صورت آنلاین. برای ایرانی‌ها تنها گزینه دوم در دسترس است؛ اما برای حضور در سفارت باید یکی از کشورهای همسایه/نزدیک رفت. در حال حاضر ترکیه (استانبول و آنکارا)، دبی، ارمنستان و عمان محبوب‌ترین مقصدها هستند.",
        icon: <US title="آمریکا" className="w-10 h-5 rounded-3xl" />,
        flag: <US title="آمریکا" className="w-10 h-5 rounded-3xl" />,
        img: USA_Bridges_golden_bridge_San_Francisco_614954_1280x853,
        Video00: null,
      },
      {
        pName: "وقت سفارت کانادا",
        eName: "Canada-EmbassyAppointment",
        Des:"",
        Description : "برای گرفتن وقت سفارت کانادا به طور کلی دو روش حضوری و اینترنتی برای شما فراهم شده است. برای گرفتن وقت سفارش حضوری شخص می بایست به صورت حضوری به مرکز مورد نظر مراجعه داشته باشد.",
        icon: <FiShoppingBag />,
        flag: <CA title="کانادا" className="w-10 h-5 rounded-3xl" />,
        img: Canada_Rivers_Bridges_Houses_Parliament_Hill_610221_1280x886,
        Video00: null,
      },
      {
        pName: "وقت سفارت انگلستان",
        eName: "UK-EmbassyAppointment",
        Des:"",
        Description : "برای سفر به این کشور باید حتما مهر یکی از انواع ویزای انگلیس را در پاسپورتتان داشته باشید. اما این انواع ویزا شامل چه مواردی می شود؟ دولت بریتانیا انواع ویزای توریستی، کاری و تحصیلی را برای افراد متقاضی واجد شرایط اخذ ویزا صادر می کند.",
        flag: <GB title="انگلستان" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
        img: England_Rivers_Bridges_People_Tower_Bridge_London_608840_1280x853,
        Video00: null,
      },
      {
        pName: "وقت سفارت استرالیا",
        eName: "AU-EmbassyAppointment",
        Des:"",
        Description : "خدمات ویزای استرالیا تنها به صورت آنلاین امکان پذیر است ولی برای مراحل بعدی و انگشت نگاری باید به محل سفارت و یا یکی از مراکز وی اف اس مراجعه نمایید.",
        flag: <AU title=" استرالیا" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
        img: aleni,
        Video00: null,
      },
    ],
  },
  {
    pTitle: "ویزای توریستی",
    //  eTitle: "TouristVisaPage",
    eTitle: "TouristVisa",
    Description : "ویزای توریستی چیست؟",
    Des: "ویزای توریستی چیست؟",
    flag: <GiEarthAmerica className="w-10 h-5 rounded-3xl"/>,
    icon: <GiEarthAmerica className="w-10 h-5 rounded-3xl"/>,
    img: Mount,
    Video00: Nature_159101,
    Video01: nature_105936_720p,
    Video02: beachVid,
    
    subItem: [
      {
        pName: "ویزای توریستی چیست؟",
        eName: "WhatIsTouristVisa",
        Des:"",
        Description : "ویزای توریستی چیست؟ ...",
        flag: null,
        icon: <MdMoreTime className="w-10 h-5 rounded-3xl" />,
        img: Italy_Sea_Houses_Roads_Atrani_612044_1280x853,
      },
      {
        pName: "ویزای توریستی آمریکا",
        eName: "USATouristVisa",
        Des:"",
        Description : "ویزای توریستی آمریکا ...",
        flag: <US title="آمریکا" className="w-10 h-5 rounded-3xl" />,
        icon: <US title="آمریکا" className="w-10 h-5 rounded-3xl" />,
        img: USA_Evening_Houses_Sculptures_United_States_598081_1280x853,
      },
      {
        pName: "ویزای توریستی کانادا",
        eName: "CanadaTouristVisa",
        Des:"",
        Description : "ویزای توریستی کانادا ...",
        icon: <FiShoppingBag />,
        flag: <CA title="کانادا" className="w-10 h-5 rounded-3xl" />,
        img: Canada_Mountains_Lake_Parks_Boats_Moraine_Lake_615069_1280x800,
      },
      {
        pName: "ویزای توریستی انگلستان",
        eName: "UKTouristVisa",
        Des:"",
        Description : "ویزای توریستی انگلستان ...",
        flag: <GB title="انگلستان" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
        img: England_Houses_Ashridge_Estate_From_above_615306_1280x852,
      },
      {
        pName: "ویزای توریستی استرالیا",
        eName: "AUTouristVisa",
        Des:"",
        Description : "ویزای توریستی استرالیا ...",
        flag: <AU title=" استرالیا" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
        img: melisenta,
      },
      {
        pName: "ویزای توریستی بلغارستان",
        eName: "BGTouristVisa",
        Des:"",
        Description : "ویزای توریستی بلغارستان ...",
        flag: <BG title=" بلغارستان" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
        img: Bulgaria_Cathedral_Sky_Sofia_Alexander_Nevsky_591010_1364x1024,
      },
      {
        pName: "ویزای توریستی برزیل",
        eName: "BRTouristVisa",
        Des:"",
        Description : "ویزای توریستی برزیل ...",
        flag: <BR title=" برزیل" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
        img: Brazil_Houses_Christ_the_Redeemer_Rio_de_Janeiro_570115_1280x853,
      }
    ],
  },
];


export const EmbassyAppointmentItem = [
      {
        icon: <MdMoreTime className="w-10 h-5 " />,
        pName: "وقت سفارت چیست؟",
        eName: "WhatIsEmbassyAppointment",
      },
      {
        pName: "وقت سفارت آمریکا",
        eName: "USAEmbassyAppointment",
        icon: <US title="آمریکا" className="w-10 h-5 rounded-3xl" />,
        flag: <US title="آمریکا" className="w-10 h-5 rounded-3xl" />,
      },
      {
        pName: "وقت سفارت کانادا",
        eName: "Canada-EmbassyAppointment",
        icon: <FiShoppingBag />,
        flag: <CA title="کانادا" className="w-10 h-5 rounded-3xl" />,
      },
      {
        pName: "وقت سفارت انگلستان",
        eName: "UK-EmbassyAppointment",
        flag: <GB title="انگلستان" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
      },
      {
        pName: "وقت سفارت استرالیا",
        eName: "AU-EmbassyAppointment",
        flag: <AU title=" استرالیا" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
      },
];

export const TouristVisaItem = [
      {
        pName: "ویزای توریستی چیست؟",
        eName: "WhatIsTouristVisa",
        icon: <MdMoreTime className="w-10 h-5 " />,
      },
      {
        pName: "ویزای توریستی آمریکا",
        eName: "USATouristVisa",
        icon: <US title="آمریکا" className="w-10 h-5 rounded-3xl" />,
        flag: <US title="آمریکا" className="w-10 h-5 rounded-3xl" />,
      },
      {
        pName: "ویزای توریستی کانادا",
        eName: "CanadaTouristVisa",
        icon: <FiShoppingBag />,
        flag: <CA title="کانادا" className="w-10 h-5 rounded-3xl" />,
      },
      {
        pName: "ویزای توریستی انگلستان",
        eName: "UKTouristVisa",
        flag: <GB title="انگلستان" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
      },
      {
        pName: "ویزای توریستی استرالیا",
        eName: "AUTouristVisa",
        flag: <AU title=" استرالیا" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
      },
      {
        pName: "ویزای توریستی بلغارستان",
        eName: "BGTouristVisa",
        flag: <BG title=" بلغارستان" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
      },
      {
        pName: "ویزای توریستی برزیل",
        eName: "BRTouristVisa",
        flag: <BR title=" برزیل" className="w-10 h-5 rounded-3xl" />,
        icon: <FiShoppingBag />,
      }
];
