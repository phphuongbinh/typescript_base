// import { useState } from 'react'
import "./App.css";
import { ranker } from "./utils/generics";
import { devices, getDevicesKeys } from "./utils/generic-keyof";
// const reviews: {
//   name: string;
//   stars: number;
//   premiumUser: boolean;
//   date: string;
// }[] = [
//   {
//     name: "ErauQs",
//     stars: 4,
//     premiumUser: true,
//     date: "27/04/2023",
//   },
//   {
//     name: "Gintama",
//     stars: 10,
//     premiumUser: false,
//     date: "22/04/2023",
//   },
//   {
//     name: "Phuong Binh",
//     stars: 40,
//     premiumUser: true,
//     date: "09/04/2023",
//   },
// ];

// const travelItem: {
//   image: string;
//   name: string;
//   totalReviews: number;
//   rating: number;
//   location: string;
//   price: number;
//   date: string;
//   depature: string;
//   feature: {
//     wifi: boolean;
//     parking: boolean;
//     offer: boolean;
//   };
// }[] = [
//   {
//     image: "https://wallpapercave.com/wp/wp4111669.jpg",
//     name: "Hạ Long Bay",
//     totalReviews: 2450,
//     rating: 4.6,
//     location: "Hải Phòng",
//     price: 400000,
//     date: "27/1/2024",
//     depature: "Sài gòn",
//     feature: {
//       wifi: true,
//       parking: true,
//       offer: true,
//     },
//   },
// ];
// console.log(travelItem);

// type Age = 18 | 25 | 30;

console.log(ranker([1, 2, 3, 4, 5], (number) => number * 5));
console.log(getDevicesKeys(devices, "name"));

function App() {
  // const [count, setCount] = useState(0)
  // const [valueStr, setValueStr] = simpleUseState("ErauQs");
  // console.log(valueStr);
  // setValueStr("binh");
  // console.log(valueStr);

  // function displayReviewInfo(
  //   name: string,
  //   totalReview: number,
  //   premium?: boolean
  // ) {
  //   return (
  //     <div className="review-info">
  //       <Card description="" title=""></Card>
  //       Review total <strong>{totalReview}</strong> | Last review by{" "}
  //       <strong>{name}</strong>
  //       {premium ? "*" : ""}
  //     </div>
  //   );
  // }

  // const users: {
  //   fisrtname: string;
  //   lastName: string;
  //   age: Age;
  //   isTeacher: boolean;
  //   hobbies: (string | number)[];
  //   contact: [number, string];
  //   permission: Permission;
  // } = {
  //   fisrtname: "Phan",
  //   lastName: "Binh",
  //   age: 25,
  //   isTeacher: true,
  //   hobbies: ["playgame", "music", 50],
  //   contact: [12124, "binh@gmail.com"],
  //   permission: Permission.ADMIN,
  // };
  // console.log(users);

  return <></>;
}

export default App;
