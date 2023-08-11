import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import {MdMoreTime } from 'react-icons/md';
import { US,CA,GB,AU, BR, BG } from 'country-flag-icons/react/3x2'
export const EmbassyAppointmentItems = [
  {
    pTitle: 'وقت سفارت',
    pTitle2: '2وقت سفارت',
    eTitle: 'EmbassyAppointment',
    links: [
      {
        icon: <MdMoreTime  className="w-10 h-5 "/>,
        pName: 'وقت سفارت چیست؟',
        eName: 'WhatIsEmbassyAppointment',
      },
      {
        pName: 'وقت سفارت آمریکا',
        eName: 'USAEmbassyAppointment',
        icon: <US title="آمریکا" className="w-10 h-5 rounded-3xl"/>,
        flag: <US title="آمریکا" className="w-10 h-5 rounded-3xl"/>,
      },
      {
        pName: 'وقت سفارت کانادا',
        eName: 'Canada-EmbassyAppointment',
        icon: <FiShoppingBag />,
        flag: <CA title="کانادا" className="w-10 h-5 rounded-3xl"/>,
      },
      {
        pName: 'وقت سفارت انگلستان',
        eName: 'UK-EmbassyAppointment',
        flag: <GB title="انگلستان" className="w-10 h-5 rounded-3xl"/>,
        icon: <FiShoppingBag />,
      },
      {
        pName: 'وقت سفارت استرالیا',
        eName: 'AU-EmbassyAppointment',
        flag: <AU title=" استرالیا" className="w-10 h-5 rounded-3xl"/>,
        icon: <FiShoppingBag />,
        
      }
    ],
  },

 ];

 export const TouristVisaItems = [
  {
    pTitle: 'ویزای توریستی',
    eTtle: 'TouristVisaPage',
    links: [
      {
        pName: 'ویزای توریستی چیست؟',
        eName: 'WhatIsTouristVisa',
        icon: <MdMoreTime  className="w-10 h-5 "/>,
      },
      {
        pName: 'ویزای توریستی آمریکا',
        eName: 'USATouristVisa',
        icon: <US title="آمریکا" className="w-10 h-5 rounded-3xl"/>,
        flag: <US title="آمریکا" className="w-10 h-5 rounded-3xl"/>,
      },
      {
        pName: 'ویزای توریستی کانادا',
        eName: 'CanadaTouristVisa',
        icon: <FiShoppingBag />,
        flag: <CA title="کانادا" className="w-10 h-5 rounded-3xl"/>,
      },
      {
        pName: 'ویزای توریستی انگلستان',
        eName: 'UKTouristVisa',
        flag: <GB title="انگلستان" className="w-10 h-5 rounded-3xl"/>,
        icon: <FiShoppingBag />,
      },
      {
        pName: 'ویزای توریستی استرالیا',
        eName: 'AUTouristVisa',
        flag: <AU title=" استرالیا" className="w-10 h-5 rounded-3xl"/>,
        icon: <FiShoppingBag />,
        
      },
      {
        pName: 'ویزای توریستی بلغارستان',
        eName: 'BGTouristVisa',
        flag: <BG title=" بلغارستان" className="w-10 h-5 rounded-3xl"/>,
        icon: <FiShoppingBag />,
        
      },
      {
        pName: 'ویزای توریستی برزیل',
        eName: 'BRTouristVisa',
        flag: <BR title=" برزیل" className="w-10 h-5 rounded-3xl"/>,
        icon: <FiShoppingBag />,
        
      }
    ],
  },

 ];