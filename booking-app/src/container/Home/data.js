import { GiMagicBroom } from 'react-icons/gi';
import { MdWifiPassword } from 'react-icons/md';
import { TbMapSearch } from 'react-icons/tb';

import back1 from '../../assets/images/largeRoomFeatures/feature-1.jpg'
import back2 from '../../assets/images/largeRoomFeatures/feature-2.jpg'
import back3 from '../../assets/images/largeRoomFeatures/feature-3.jpg'
import back4 from '../../assets/images/largeRoomFeatures/feature-4.jpg'

export const amenities = [
    {
        name:"Room Cleaning",
        icon:<GiMagicBroom size={35} color='#b89146'/>,
        description:"All hotels listed on our platform are committed to providing guests with a clean and healthy environment."
    },
    {
        name:"Room Wifi",
        icon:<MdWifiPassword size={35} color='#b89146'/>,
        description:"Staying connected is important, Get deals with hotels that offer free and high speed internet connection"
    },
    {
        name:"Pickup & Drop",
        icon:<TbMapSearch size={35} color='#b89146'/>,
        description:"We've partnered with top hotels that provide convenient pickup and drop-off services for their guests."
    }
];

export const largeRoomAminities = [
    {
        smallTitle:"Our Food",
        bigTitle:"Restaurant Silo",
        description:"All of our partner hotels feature restaurants that offer innovative menus, top-notch service, and exceptional ambiance. From casual eateries to fine-dining establishments, our selection of hotels has something to satisfy every palateSo why wait? Book your next hotel stay with us and indulge in the best culinary experiences your destination has to offer. With our wide range of options and commitment to customer satisfaction, we're confident you'll find the perfect hotel with fantastic dining options through our platform.",
        picture:back1,
        direction:"PT"
    },
    {
        smallTitle:"Read Our Books",
        bigTitle:"The Library",
        description:"We understand that reading is a great way to unwind and relax during your travels, and that's why we've partnered with top hotels that offer complimentary access to their book collections. Our user-friendly interface allows you to search for hotels by city, date range, and other preferences, making it easy to find the perfect match for your travel needs. With our extensive network of partners, you can choose from a variety of accommodations that suit your budget and lifestyle, all while enjoying the convenience of enriching reading material.",
        picture:back2,
        direction:"TP"
    },
    {
        smallTitle:"Fitness Equipment",
        bigTitle:"Exercise equipment",
        description:"We understand that maintaining a fitness routine is important, even while traveling, and that's why we've partnered with top hotels that provide exceptional gym facilities. Our user-friendly interface allows you to search for hotels by city, date range, and other preferences, making it easy to find the perfect match for your travel needs.",
        picture:back3,
        direction:"PT"
    },
    {
        smallTitle:"Experiences",
        bigTitle:"Swimming Pool",
        description:"Nothing beats a cool dip or a relaxing swim after a long day of travel, and that's why we've partnered with top hotels that offer exceptional pool facilities. Our user-friendly interface allows you to search for hotels by city, date range, and other preferences, making it easy to find the perfect match for your travel needs. With our extensive network of partners, you can choose from a variety of accommodations that suit your budget and lifestyle, all while enjoying the convenience of luxurious swimming pools.",
        picture:back4,
        direction:"TP"
    }
];


export const details = [
    {
      picture: "https://konnomelifuente.online/wp-content/uploads/2023/09/konno-meli-fuente.png",
      name: "KONNO MELI Arnaud Desire (Konno Fuente)",
      category: "Frontend Developer (Flutter, Figma, WordPress, HTML, CSS, JS, React JS, Laravel, React Native)",
      details: "Versatile Frontend Developer with expertise in UI/UX design. Proficient in a range of technologies like Flutter, Figma, WordPress, and more. Combines design finesse with technical acumen to create captivating user interfaces. Strong leadership qualities, professional ethics, and a focus on innovation and growth in the IT industry.",
    },
    {
      picture: "https://konnomelifuente.online/wp-content/uploads/2023/09/konno-meli-fuente.png",
      name: "KONNO MELI Arnaud Desire (Konno Fuente)",
      category: "UI/UX Specialist",
      details: "Skilled in creating intuitive and visually appealing user experiences using tools like Figma and Adobe Products. Extremely detail-oriented and committed to crafting user interfaces that not only meet but exceed client expectations.",
    },
    {
      picture: "https://konnomelifuente.online/wp-content/uploads/2023/09/konno-meli-fuente.png",
      name: "KONNO MELI Arnaud Desire (Konno Fuente)",
      category: "Techpreneur",
      details: "Intrinsically motivated to build innovative communities and projects that catalyze exponential growth in the IT industry. Always aims to offer quality work and clean structured solutions while maintaining excellent customer service.",
    }
  ]

