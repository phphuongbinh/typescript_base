// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";
import { Permission } from "./utils/enums";
const reviews: {
  name: string;
  stars: number;
  premiumUser: boolean;
  date: string;
}[] = [
  {
    name: "ErauQs",
    stars: 4,
    premiumUser: true,
    date: "27/04/2023",
  },
  {
    name: "Gintama",
    stars: 10,
    premiumUser: false,
    date: "22/04/2023",
  },
  {
    name: "Phuong Binh",
    stars: 40,
    premiumUser: true,
    date: "09/04/2023",
  },
];

const travelItem: {
  image: string;
  name: string;
  totalReviews: number;
  rating: number;
  location: string;
  price: number;
  date: string;
  depature: string;
  feature: {
    wifi: boolean;
    parking: boolean;
    offer: boolean;
  };
}[] = [
  {
    image: "https://wallpapercave.com/wp/wp4111669.jpg",
    name: "Hạ Long Bay",
    totalReviews: 2450,
    rating: 4.6,
    location: "Hải Phòng",
    price: 400000,
    date: "27/1/2024",
    depature: "Sài gòn",
    feature: {
      wifi: true,
      parking: true,
      offer: true,
    },
  },
];
console.log(travelItem);

type Age = 18 | 25 | 30;

function App() {
  // const [count, setCount] = useState(0)
  function displayReviewInfo(
    name: string,
    totalReview: number,
    premium?: boolean
  ) {
    return (
      <div className="review-info">
        <Card description="" title=""></Card>
        Review total <strong>{totalReview}</strong> | Last review by{" "}
        <strong>{name}</strong>
        {premium ? "*" : ""}
      </div>
    );
  }

  const users: {
    fisrtname: string;
    lastName: string;
    age: Age;
    isTeacher: boolean;
    hobbies: (string | number)[];
    contact: [number, string];
    permission: Permission;
  } = {
    fisrtname: "Phan",
    lastName: "Binh",
    age: 25,
    isTeacher: true,
    hobbies: ["playgame", "music", 50],
    contact: [12124, "binh@gmail.com"],
    permission: Permission.ADMIN,
  };
  console.log(users);

  return (
    <>
      <div className="reviews">
        <div className="reviews-image">
          <img
            src="https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        {displayReviewInfo(reviews[0].name, reviews.length)}
      </div>
    </>
  );
}

export default App;
