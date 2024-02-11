import React from "react";

import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
    id: 1,
    title: "50% Off On Your First Purchase!",
    desc: "Dive into the world of comfort and luxury with our exclusive collection. From cozy sofas to elegant living room essentials, find everything you need to revamp your space. Shop now and transform your home into a haven.",
    cover: sofaSlide,
  },
  {
    id: 2,
    title: "Unwrap the Future - Tech Sale!",
    desc: "Step into the future with our cutting-edge smartphones. Experience the latest technology, stunning cameras, and powerful processors. Don't miss out on our half-price deal for newcomers!",
    cover: phone08,
  },
  {
    id: 3,
    title: "Elevate Your Beats!",
    desc: "Immerse yourself in unrivaled audio quality with our premium wireless headphones. Whether you're working out or chilling out, enjoy crisp, clear sound and unmatched comfort. Grab your pair today for an unbeatable price!",
    cover: wireless01,
  },
  {
    id: 4,
    title: "Timeless Elegance Awaits",
    desc: "Discover the perfect blend of style and functionality with our exclusive watch collection. Each piece promises to not just keep you punctual but turn heads. Avail 50% off on your first purchase and adorn your wrist with elegance.",
    cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Enjoy free shipping on all orders.",
    bg: "#FFE082", // Light yellow
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "Your payments are secure with us.",
    bg: "#FFCCBC", // Light peach
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Payment",
    subtitle: "Rest assured, your transactions are safe and encrypted.",
    bg: "#C5E1A5", // Light green
  },
  {
    icon: <ion-icon name="cash-outline"></ion-icon>, // Changed to a cash icon to match "Money Back Guarantee"
    title: "Money Back Guarantee",
    subtitle: "We stand behind our products. If you're not satisfied,",
    bg: "#B3E5FC", // Light blue
  },
];

export const discountProducts = [
  {
    id: "01",
    productName: "Stone and Beam Westview",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    discount: 30,
    shortDesc:
      "Enjoy the comfort and style of the Stone and Beam Westview sofa.",
    description:
      "Elevate your living room with the Stone and Beam Westview sofa. Its sleek design and plush cushions make it the perfect addition to any home decor. With a 30% discount, now is the perfect time to bring this beautiful piece home.",
    reviews: [
      {
        rating: 4.7,
        text: "Amazing sofa! It's super comfortable and looks great in my living room.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount: 20,
    shortDesc: "Upgrade your living space with the Rivet Bigelow Modern sofa.",
    description:
      "Transform your living room with the Rivet Bigelow Modern sofa. Its contemporary design and premium upholstery provide both style and comfort. With a 20% discount, there's never been a better time to upgrade your seating arrangement.",
    reviews: [
      {
        rating: 4.8,
        text: "I love my new sofa! It's incredibly stylish and very comfortable to sit on.",
      },
      {
        rating: 4.8,
        text: "Excellent sofa! The quality is top-notch and it arrived sooner than expected.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    discount: 15,
    shortDesc: "Add a touch of elegance to any room with the Baltsar Chair.",
    description:
      "Enhance the ambiance of your space with the Baltsar Chair. Its timeless design and sturdy construction make it a versatile addition to your home decor. With a 15% discount, now is the perfect time to bring home this classic piece.",
    reviews: [
      {
        rating: 4.6,
        text: "The Baltsar Chair exceeded my expectations! It's very comfortable and looks beautiful in my study.",
      },
      {
        rating: 4.9,
        text: "This chair is fantastic! It's well-made and provides excellent support.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    discount: 35,
    shortDesc: "Experience unparalleled comfort with the Helmar Chair.",
    description:
      "Indulge in luxury with the Helmar Chair. Its ergonomic design and premium materials ensure optimal support and durability. With a 35% discount, there's never been a better time to invest in your comfort.",
    reviews: [
      {
        rating: 4.6,
        text: "The Helmar Chair is amazing! It's so comfortable and stylish.",
      },
      {
        rating: 4.9,
        text: "I'm very impressed with the quality of the Helmar Chair. It's worth every penny.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    discount: 10,
    shortDesc: "Stay connected in style with the Realme 8 smartphone.",
    description:
      "Stay connected in style with the Realme 8 smartphone. Its stunning display, powerful performance, and advanced camera capabilities make it the perfect companion for your daily adventures. With a 10% discount, now is the perfect time to upgrade your mobile experience.",
    reviews: [
      {
        rating: 4.8,
        text: "The Realme 8 is an excellent smartphone! It's fast, reliable, and the camera takes amazing photos.",
      },
      {
        rating: 4.9,
        text: "I'm loving my new Realme 8! It's sleek, powerful, and the battery life is impressive.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount: 5,
    shortDesc:
      "Elevate your mobile experience with the One Plus Nord smartphone.",
    description:
      "Experience the future of mobile technology with the One Plus Nord smartphone. Its sleek design, lightning-fast performance, and cutting-edge features make it the ultimate smartphone for tech enthusiasts. With a 5% discount, there's never been a better time to elevate your mobile experience.",
    reviews: [
      {
        rating: 4.8,
        text: "The One Plus Nord is fantastic! It's incredibly fast and the display is stunning.",
      },
      {
        rating: 4.9,
        text: "I'm extremely satisfied with my One Plus Nord purchase. It's everything I wanted in a smartphone and more.",
      },
    ],
    avgRating: 4.8,
  },
];

export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    shortDesc:
      "Comfort meets style with the Stone and Beam Westview sofa. Crafted with premium materials and attention to detail, this sofa is perfect for relaxing evenings or entertaining guests.",
    description:
      "The Stone and Beam Westview sofa combines modern design with timeless comfort. Featuring high-quality upholstery and sturdy construction, this sofa is built to last. Whether you're curling up with a good book or hosting friends for movie night, the Westview sofa provides the perfect spot to unwind.",
    reviews: [
      {
        rating: 4.7,
        text: "Absolutely love this sofa! It's incredibly comfortable and looks amazing in my living room.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc:
      "Upgrade your living space with the Rivet Bigelow Modern sofa. With its sleek design and plush cushions, this sofa is sure to become the focal point of any room.",
    description:
      "The Rivet Bigelow Modern sofa offers both style and comfort. Its clean lines and minimalist design make it a versatile addition to any home decor. Whether you're lounging with family or entertaining guests, the Bigelow sofa provides ample seating and support.",
    reviews: [
      {
        rating: 4.8,
        text: "This sofa exceeded my expectations. It's incredibly comfortable and looks even better in person.",
      },
      {
        rating: 4.8,
        text: "I love the modern look of this sofa. It's the perfect addition to my living room.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "sofa",
    price: 173,
    shortDesc:
      "Elevate your home decor with the Amazon Brand Modern Sofa. Featuring a sleek design and premium materials, this sofa offers both style and comfort at an affordable price.",
    description:
      "The Amazon Brand Modern Sofa is designed for modern living. Its streamlined silhouette and plush cushions create a cozy yet sophisticated seating option for any room. Whether you're relaxing after a long day or entertaining guests, this sofa is sure to impress.",
    reviews: [
      {
        rating: 4.6,
        text: "I'm impressed with the quality of this sofa, especially considering the price. It's comfortable and looks great in my living room.",
      },
      {
        rating: 4.9,
        text: "This sofa exceeded my expectations. It's comfortable, stylish, and easy to assemble. Highly recommend!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc:
      "Take control of your home's temperature with the Smart Thermostat. Featuring Wi-Fi connectivity and intelligent scheduling, this thermostat helps you save energy and stay comfortable.",
    description:
      "The Smart Thermostat is designed to make managing your home's temperature easier and more energy-efficient than ever before. With its Wi-Fi connectivity and intuitive smartphone app, you can control your thermostat from anywhere, whether you're at home, at work, or on the go. Plus, with intelligent scheduling and energy-saving features, you can optimize your heating and cooling settings to save money on your energy bills while keeping your home comfortable year-round. Say goodbye to wasted energy and hello to a more comfortable and efficient home with the Smart Thermostat!",
    reviews: [
      {
        rating: 4.8,
        text: "I love my Smart Thermostat! It's so easy to use, and the Wi-Fi connectivity allows me to adjust the temperature from anywhere. The intelligent scheduling feature has helped me save money on my energy bills without sacrificing comfort. Plus, the sleek design looks great in my home. Highly recommend!",
      },
      {
        rating: 4.7,
        text: "This Smart Thermostat has been a game-changer for my home! The Wi-Fi connectivity and smartphone app make it easy to control, and the intelligent scheduling feature ensures my home is always at the perfect temperature. I've noticed a significant reduction in my energy bills since installing this thermostat. It's a must-have for any smart home!",
      },
    ],
    avgRating: 4.75,
  },
  {
    id: "04",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 163,
    shortDesc:
      "Add a touch of luxury to your living room with the Fllufy Sheep Sofa. Featuring soft, plush upholstery and a modern design, this sofa is perfect for cozy nights in or entertaining guests.",
    description:
      "The Fllufy Sheep Sofa combines style and comfort in one stunning piece of furniture. Its deep cushions and high-quality materials ensure maximum comfort, while its sleek silhouette adds a touch of elegance to any space. Whether you're curling up with a good book or hosting a movie night with friends, this sofa is sure to impress.",
    reviews: [
      {
        rating: 4.6,
        text: "I absolutely love my Fllufy Sheep Sofa! It's so comfortable and looks amazing in my living room. The quality is top-notch, and it's held up well to everyday use.",
      },
      {
        rating: 4.9,
        text: "This sofa exceeded my expectations. It's incredibly comfortable and looks even better in person. I've received so many compliments on it already!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 163,
    shortDesc:
      "Upgrade your home decor with the Faux Velvet Sofa. Featuring luxurious velvet upholstery and a timeless design, this sofa adds a touch of elegance to any room.",
    description:
      "The Faux Velvet Sofa is a statement piece that elevates any living space. Its plush velvet upholstery and sleek lines create a sophisticated look that's perfect for both modern and traditional interiors. Whether you're relaxing with family or entertaining guests, this sofa offers comfort and style in equal measure.",
    reviews: [
      {
        rating: 4.6,
        text: "I'm thrilled with my Faux Velvet Sofa! It's so soft and comfortable, and the color is even more beautiful in person. Definitely worth the investment.",
      },
      {
        rating: 4.9,
        text: "This sofa is stunning! The velvet upholstery is luxurious, and the design is timeless. It's become the focal point of my living room, and I couldn't be happier with my purchase.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg06,
    category: "sofa",
    price: 163,
    shortDesc:
      "Indulge in luxury with the Fllufy Sheep Sofa. Featuring sumptuous sheepskin upholstery and a contemporary design, this sofa adds a touch of opulence to any home.",
    description:
      "The Fllufy Sheep Sofa is the epitome of luxury and comfort. Its plush sheepskin upholstery is incredibly soft to the touch, while its modern design adds a stylish edge to any space. Whether you're curling up for a cozy night in or entertaining guests, this sofa is sure to make a statement.",
    reviews: [
      {
        rating: 4.6,
        text: "I'm in love with my Fllufy Sheep Sofa! It's so plush and comfortable, and it looks absolutely stunning in my living room. Definitely worth every penny.",
      },
      {
        rating: 4.9,
        text: "This sofa is a game-changer! The sheepskin upholstery is incredibly luxurious, and the design is both modern and elegant. I've received so many compliments on it already!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Sakarias Armchair",
    imgUrl: productImg07,
    category: "chair",
    price: 99,
    shortDesc:
      "Create a warm and inviting dining space with the Rustic Dining Table. Crafted from solid wood with a distressed finish, this table exudes charm and character.",
    description:
      "The Rustic Dining Table is the perfect centerpiece for family meals and gatherings with friends. Its sturdy construction ensures years of use, while its distressed finish adds a touch of vintage appeal. Whether you're hosting a dinner party or enjoying a quiet meal at home, this table brings warmth and style to any dining room.",
    reviews: [
      {
        rating: 4.8,
        text: "I absolutely love my Rustic Dining Table! It's beautifully crafted and adds so much character to my dining room. The quality is exceptional, and it's the perfect size for entertaining guests.",
      },
      {
        rating: 4.7,
        text: "This table exceeded my expectations! The distressed finish gives it a rustic charm, and the solid wood construction feels incredibly sturdy. It's become the focal point of my dining room, and I couldn't be happier with my purchase.",
      },
    ],
    avgRating: 4.75,
  },

  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 173,
    shortDesc:
      "Add a touch of vintage charm to your bedroom with the Vintage Chest of Drawers. Featuring a distressed finish and ornate detailing, this chest offers both style and storage.",
    description:
      "The Vintage Chest of Drawers is a timeless addition to any bedroom. Its classic design is complemented by a distressed finish that adds character and charm. With multiple drawers for storing clothes, linens, and more, this chest combines style and functionality in one elegant piece of furniture.",
    reviews: [
      {
        rating: 4.6,
        text: "I'm thrilled with my Vintage Chest of Drawers! It's beautifully crafted and adds so much character to my bedroom. The distressed finish gives it a unique look, and the drawers provide plenty of storage space.",
      },
      {
        rating: 4.8,
        text: "This chest of drawers is gorgeous! The vintage design is exactly what I was looking for, and the distressed finish adds a rustic charm. It's well-made and offers plenty of storage space for all my clothes and belongings.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    shortDesc:
      "Add a contemporary touch to your living room with the Modern Coffee Table. Featuring a sleek design and durable construction, this table is both stylish and functional.",
    description:
      "The Modern Coffee Table is the perfect addition to any modern living room. Its clean lines and minimalist design create a sleek and sophisticated look that complements a variety of decor styles. Whether you're enjoying a morning cup of coffee or entertaining guests, this table provides the perfect surface for drinks, snacks, and decorative accents.",
    reviews: [
      {
        rating: 4.7,
        text: "I love my Modern Coffee Table! It's sleek, stylish, and just the right size for my living room. The quality is excellent, and it was easy to assemble. Highly recommend!",
      },
      {
        rating: 4.9,
        text: "This coffee table exceeded my expectations! The design is so modern and chic, and the quality is top-notch. It's become the focal point of my living room, and I couldn't be happier with it.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    shortDesc:
      "Sink into comfort with the Cozy Armchair. Featuring plush cushions and a stylish design, this armchair is perfect for relaxing after a long day.",
    description:
      "The Cozy Armchair is designed for ultimate comfort and relaxation. Its plush cushions and padded armrests provide a cozy place to unwind after a long day. Whether you're reading a book, watching TV, or simply taking a nap, this armchair offers the perfect combination of style and comfort.",
    reviews: [
      {
        rating: 4.5,
        text: "I love my Cozy Armchair! It's incredibly comfortable and looks great in my living room. The cushions are so plush, and the design is stylish yet practical.",
      },
      {
        rating: 4.6,
        text: "This armchair is exactly what I was looking for! It's super cozy and inviting, and the quality is excellent. It's become my favorite spot to relax in the evenings.",
      },
    ],
    avgRating: 4.55,
  },

  {
    id: "10",
    productName: "Apple iPhone 12 Pro",
    imgUrl: phone01,
    category: "mobile",
    price: 799,
    shortDesc:
      "Illuminate your space with the Industrial Pendant Light. Featuring a metal cage design and vintage-inspired Edison bulb, this light adds a touch of industrial charm to any room.",
    description:
      "The Industrial Pendant Light is a stylish and functional addition to any space. Its metal cage design and vintage-inspired Edison bulb create a warm and inviting atmosphere that's perfect for both residential and commercial settings. Whether you're lighting up a kitchen island or adding ambiance to a dining room, this pendant light is sure to make a statement.",
    reviews: [
      {
        rating: 4.7,
        text: "I'm obsessed with my Industrial Pendant Light! It adds so much character to my kitchen, and the Edison bulb gives off the perfect amount of warm light. It's well-made and looks even better in person.",
      },
      {
        rating: 4.8,
        text: "This pendant light is a game-changer! The industrial design is exactly what I was looking for, and the Edison bulb adds a vintage touch. It's become the focal point of my kitchen, and I couldn't be happier with it.",
      },
    ],
    avgRating: 4.75,
  },
  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg10,
    category: "chair",
    price: 99,
    shortDesc:
      "Add a nostalgic touch to your space with the Vintage Wall Clock. Featuring a classic design and distressed finish, this clock is both functional and stylish.",
    description:
      "The Vintage Wall Clock is a timeless accent piece for any room. Its classic design and distressed finish evoke a sense of nostalgia, while its large numerals make it easy to read from a distance. Whether you hang it in the kitchen, living room, or office, this clock adds vintage charm to any space.",
    reviews: [
      {
        rating: 4.6,
        text: "I adore my Vintage Wall Clock! It's beautifully crafted and adds a nostalgic touch to my kitchen. The distressed finish gives it a vintage look, and it keeps perfect time.",
      },
      {
        rating: 4.5,
        text: "This wall clock exceeded my expectations! The vintage design is exactly what I was looking for, and the distressed finish adds so much character. It's a beautiful addition to my home.",
      },
    ],
    avgRating: 4.55,
  },
  {
    id: "11",
    productName: "Apple iPhone 12 Max",
    imgUrl: phone02,
    category: "mobile",
    price: 799,
    shortDesc:
      "Gather around the Modern Dining Table for stylish meals with family and friends. Featuring a sleek design and spacious surface, this table is perfect for everyday dining and entertaining.",
    description:
      "The Modern Dining Table is the perfect centerpiece for your dining room. Its sleek design and spacious surface provide ample room for family meals, dinner parties, and more. Crafted from high-quality materials, this table is built to last and will elevate any dining space with its modern aesthetic.",
    reviews: [
      {
        rating: 4.8,
        text: "I'm in love with my Modern Dining Table! It's sleek, stylish, and the perfect size for my dining room. The quality is exceptional, and it was easy to assemble. I've received so many compliments on it already!",
      },
      {
        rating: 4.7,
        text: "This dining table exceeded my expectations! It's even more beautiful in person, and the quality is top-notch. It's the perfect blend of modern design and functionality, and I couldn't be happier with my purchase.",
      },
    ],
    avgRating: 4.75,
  },

  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    shortDesc:
      "Display your favorite books and decor with the Rustic Bookshelf. Featuring a charming farmhouse design and ample shelving, this bookshelf adds both style and function to any room.",
    description:
      "The Rustic Bookshelf is a charming addition to any home. Its farmhouse-inspired design and distressed finish add rustic charm to any room, while its ample shelving provides plenty of space for displaying books, decor, and more. Whether you use it in the living room, home office, or bedroom, this bookshelf adds both style and function to your space.",
    reviews: [
      {
        rating: 4.6,
        text: "I absolutely adore my Rustic Bookshelf! It's beautifully crafted and adds so much character to my living room. The distressed finish gives it a rustic look, and the ample shelving is perfect for displaying my favorite books and decor.",
      },
      {
        rating: 4.5,
        text: "This bookshelf is exactly what I was looking for! The rustic design is so charming, and the quality is excellent. It was easy to assemble, and it looks fantastic in my home. I highly recommend it to anyone looking for a stylish and functional bookshelf.",
      },
    ],
    avgRating: 4.55,
  },

  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    shortDesc:
      "Add a touch of retro charm to your living room with the Mid-Century Coffee Table. Featuring a sleek design and tapered legs, this table is both stylish and functional.",
    description:
      "The Mid-Century Coffee Table is a stylish addition to any living room. Its sleek design and tapered legs evoke the retro charm of mid-century modern furniture, while its spacious surface provides plenty of room for drinks, snacks, and decor. Whether you're hosting a gathering or simply relaxing at home, this coffee table adds both style and function to your space.",
    reviews: [
      {
        rating: 4.7,
        text: "I'm thrilled with my Mid-Century Coffee Table! It's the perfect blend of style and functionality, and it looks fantastic in my living room. The quality is top-notch, and assembly was a breeze. I couldn't be happier with my purchase!",
      },
      {
        rating: 4.8,
        text: "This coffee table is a game-changer! The mid-century design is exactly what I was looking for, and the quality exceeded my expectations. It's sturdy, stylish, and the perfect size for my living room. I'm so glad I purchased it!",
      },
    ],
    avgRating: 4.75,
  },

  {
    id: "14",
    productName: "Apple iPhone 13 Pro",
    imgUrl: phone05,
    category: "mobile",
    price: 899,
    shortDesc:
      "Keep your smartphone within reach with the Smartphone Holder. Featuring a sturdy clamp and adjustable design, this holder is perfect for hands-free use at home or on the go.",
    description:
      "The Smartphone Holder is a must-have accessory for anyone who uses their phone frequently. Whether you're watching videos, video calling with friends and family, or following a recipe in the kitchen, this holder keeps your phone securely in place for hands-free use. Its sturdy clamp attaches easily to desks, countertops, and more, while its adjustable design allows you to position your phone at the perfect angle for optimal viewing. Say goodbye to arm fatigue and neck strain with the Smartphone Holder!",
    reviews: [
      {
        rating: 4.5,
        text: "I love my Smartphone Holder! It's so convenient for watching videos and video calling with friends. The clamp is sturdy and holds my phone securely in place, and the adjustable design allows me to position it at the perfect angle. It's a game-changer!",
      },
      {
        rating: 4.4,
        text: "This smartphone holder is exactly what I needed! It's well-made, easy to use, and holds my phone securely. I use it all the time for watching videos and following recipes while cooking. It's a great investment!",
      },
    ],
    avgRating: 4.45,
  },

  {
    id: "15",
    productName: "Samsung Galaxy S22",
    imgUrl: phone06,
    category: "mobile",
    price: 699,
    shortDesc:
      "Enjoy wireless freedom with the Wireless Earbuds. Featuring Bluetooth connectivity and premium sound quality, these earbuds are perfect for music lovers on the go.",
    description:
      "The Wireless Earbuds deliver an unparalleled listening experience. With Bluetooth connectivity, you can enjoy wireless freedom and seamless pairing with your favorite devices. Whether you're commuting, working out, or simply relaxing at home, these earbuds provide crisp, clear sound with deep bass and immersive audio quality. Plus, with their ergonomic design and secure fit, they're comfortable to wear for extended periods. Say goodbye to tangled wires and hello to wireless convenience with the Wireless Earbuds!",
    reviews: [
      {
        rating: 4.8,
        text: "I'm blown away by the sound quality of these Wireless Earbuds! The bass is deep, the highs are crisp, and the overall audio quality is exceptional. Plus, they're so comfortable to wear, I often forget I have them in. The battery life is impressive too. Highly recommended!",
      },
      {
        rating: 4.7,
        text: "These earbuds exceeded my expectations! The sound quality is amazing, and the Bluetooth connectivity is rock solid. They're comfortable to wear for long periods, and the battery life is excellent. I use them every day and couldn't be happier with my purchase!",
      },
    ],
    avgRating: 4.75,
  },

  {
    id: "16",
    productName: "Rolex Watch",
    imgUrl: watch01,
    category: "watch",
    price: 299,
    shortDesc:
      "Take your music anywhere with the Portable Bluetooth Speaker. Featuring compact design and powerful sound, this speaker is perfect for outdoor adventures and indoor gatherings.",
    description:
      "The Portable Bluetooth Speaker is your go-to music companion wherever you go. With its compact design and built-in rechargeable battery, you can take it on outdoor adventures, road trips, picnics, and more. Despite its small size, this speaker delivers powerful sound with rich bass and clear highs, filling any space with your favorite tunes. Plus, with Bluetooth connectivity, you can easily stream music from your smartphone or tablet without the hassle of wires. Whether you're relaxing at home or exploring the great outdoors, the Portable Bluetooth Speaker ensures your music goes wherever you do.",
    reviews: [
      {
        rating: 4.6,
        text: "I'm impressed by the sound quality of this Portable Bluetooth Speaker! It's surprisingly loud for its size, and the bass is punchy. The Bluetooth connectivity is seamless, and the battery life is excellent. Plus, it's so compact and easy to take anywhere. Highly recommend!",
      },
      {
        rating: 4.5,
        text: "This speaker is perfect for outdoor adventures! It's rugged, durable, and delivers great sound quality. The Bluetooth connectivity is reliable, and the battery life lasts for hours. Whether I'm camping, hiking, or hanging out in the backyard, this speaker never disappoints!",
      },
    ],
    avgRating: 4.55,
  },

  {
    id: "17",
    productName: "Timex Easy Reader Watch",
    imgUrl: watch02,
    category: "watch",
    price: 299,
    shortDesc:
      "Capture life's moments in stunning detail with the Digital Camera. Featuring high-resolution image capture and advanced shooting modes, this camera is perfect for photography enthusiasts.",
    description:
      "The Digital Camera is designed to help you capture life's moments with incredible clarity and detail. With its high-resolution image sensor and advanced shooting modes, you can take stunning photos and videos in any environment. Whether you're photographing landscapes, portraits, or action shots, this camera delivers professional-quality results every time. Plus, with its compact and lightweight design, it's easy to take with you wherever you go. Elevate your photography game with the Digital Camera!",
    reviews: [
      {
        rating: 4.7,
        text: "I'm amazed by the image quality of this Digital Camera! The photos are sharp, detailed, and vibrant, even in low light. The camera is easy to use, and the advanced shooting modes allow for creative flexibility. Whether I'm shooting landscapes or portraits, I can always count on this camera to deliver outstanding results.",
      },
      {
        rating: 4.6,
        text: "This Digital Camera is a game-changer for my photography! The image quality is exceptional, and the camera's features allow for endless creative possibilities. It's lightweight and portable, making it perfect for travel and on-the-go shooting. Whether you're a beginner or a seasoned pro, this camera is sure to impress!",
      },
    ],
    avgRating: 4.65,
  },

  {
    id: "18",
    productName: "Rolex Watch",
    imgUrl: watch03,
    category: "watch",
    price: 299,
    shortDesc:
      "Track your fitness goals with the Fitness Tracker. Featuring heart rate monitoring, activity tracking, and smartphone connectivity, this tracker helps you stay motivated and on track.",
    description:
      "The Fitness Tracker is your personal fitness companion, helping you reach your health and wellness goals with ease. With its built-in heart rate monitor and activity tracking features, you can monitor your progress in real-time and make adjustments to your workout routine as needed. Plus, with smartphone connectivity, you can receive notifications, track your workouts, and analyze your data with ease. Whether you're running, cycling, or hitting the gym, the Fitness Tracker keeps you motivated and on track to a healthier lifestyle.",
    reviews: [
      {
        rating: 4.3,
        text: "I love my Fitness Tracker! It's helped me stay motivated and accountable on my fitness journey. The heart rate monitor is accurate, and the activity tracking features are easy to use. Plus, the battery life is impressive, lasting for days on a single charge. Highly recommend!",
      },
      {
        rating: 4.2,
        text: "This Fitness Tracker has exceeded my expectations! It's comfortable to wear, even during intense workouts, and the heart rate monitor is surprisingly accurate. I love being able to track my workouts and monitor my progress over time. It's a great tool for anyone looking to improve their fitness level!",
      },
    ],
    avgRating: 4.25,
  },

  {
    id: "19",
    productName: "Apple Watch",
    imgUrl: watch04,
    category: "watch",
    price: 399,
    shortDesc:
      "Stay powered up on the go with the Portable Power Bank. Featuring high-capacity battery and fast charging technology, this power bank ensures you never run out of battery life when you need it most.",
    description:
      "The Portable Power Bank is a must-have accessory for anyone who's always on the go. Whether you're traveling, commuting, or spending a day outdoors, this power bank keeps your devices powered up and ready for action. With its high-capacity battery and fast charging technology, you can quickly recharge your smartphone, tablet, or other USB-powered devices whenever you need a boost. Plus, its compact and lightweight design makes it easy to take with you wherever you go. Never run out of battery life again with the Portable Power Bank!",
    reviews: [
      {
        rating: 4.5,
        text: "I rely on this Portable Power Bank every day, and it never disappoints! The battery capacity is impressive, and the fast charging technology ensures my devices are charged up quickly. Plus, it's so compact and lightweight, I can easily carry it in my bag wherever I go. Highly recommend!",
      },
      {
        rating: 4.4,
        text: "This power bank is a lifesaver when I'm traveling or spending long days out and about. It holds a charge for a long time and charges my devices quickly when needed. Plus, it's compact and lightweight, making it easy to carry in my pocket or bag. I never leave home without it!",
      },
    ],
    avgRating: 4.45,
  },

  {
    id: "20",
    productName: "Beat Studio Wireless",
    imgUrl: wireless01,
    category: "wireless",
    price: 199,
    shortDesc:
      "Experience superior sound quality with the Beat Studio Wireless headphones. With advanced noise cancellation technology and ergonomic design, these headphones are perfect for music lovers on the go.",
    description:
      "The Beat Studio Wireless headphones deliver immersive sound and all-day comfort. Whether you're commuting, working out, or just relaxing at home, these headphones provide crystal-clear audio and a comfortable fit. Plus, with up to 22 hours of battery life, you can enjoy your favorite music for longer.",
    reviews: [
      {
        rating: 4.8,
        text: "I'm blown away by the sound quality of these headphones. The noise cancellation feature works like a charm, and the battery life is impressive.",
      },
      {
        rating: 4.9,
        text: "These headphones are worth every penny. They're comfortable to wear for long periods, and the sound quality is top-notch. Highly recommend!",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Beat EP Headphones",
    imgUrl: wireless03,
    category: "wireless",
    price: 199,
    shortDesc:
      "Enjoy your favorite music on the go with the Beat EP Headphones. Featuring a lightweight design and clear sound, these headphones are perfect for everyday use.",
    description:
      "The Beat EP Headphones are designed for music lovers who appreciate simplicity and quality. With their durable construction and comfortable ear cushions, these headphones are built to last. Whether you're commuting to work or working out at the gym, the Beat EP Headphones provide reliable performance and great sound.",
    reviews: [
      {
        rating: 4.8,
        text: "I'm impressed with the build quality of these headphones. They're lightweight yet sturdy, and the sound is clear and balanced.",
      },
      {
        rating: 4.9,
        text: "These headphones are a great value for the price. They're comfortable to wear and provide excellent sound quality. Highly recommend!",
      },
    ],
    avgRating: 4.8,
  },
];
