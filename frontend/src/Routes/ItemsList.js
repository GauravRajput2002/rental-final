import React, { useState, useEffect, useContext } from "react";
import { ItemCard } from "../components/subComp/ItemCard";
import Carousel from "../components/subComp/Carousel";
import GoToTop from "../components/subComp/GoToTop";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CategoryOfferCard from "../components/subComp/CategoryOfferCard";

const ItemsList = () => {
  const [smallBanner, setSmallBanner] = useState(false);
  const Category_Offer_Data = [
    {
      category: "Furniture",
      offer: "30%-80%",
      img: "https://static.asianpaints.com/content/dam/asian_paints/blog/wood/benefits-of-wooden-furniture/image-1-asian-paints-m.jpeg  ",
    },
    {
      category: "Gadgets",
      offer: "20%-30%",
      img: "https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg",
    },
    {
      category: "Home-Appliances",
      offer: "25%-60%",
      img: "https://5.imimg.com/data5/OV/KM/CR/ANDROID-37090388/product-jpeg.jpg",
    },
  ];


  return (
    <SkeletonTheme baseColor="white" highlightColor="#C8C6C5 ">
      <div className="max-w-[1400px] mx-auto">
        <div className=" mb-5  mt-5 h-[80px] sm:h-[150px] border  w-full relative overflow-hidden shadow-md grid grid-cols-2 ">
          {smallBanner ? null : <Skeleton className="absolute w-full h-full" />}
          <img
            src="https://media3.giphy.com/media/5WicJTpJwpSiwZK2oF/giphy.gif?cid=ecf05e47kkh6e8l5lqhdz13uobazwkn1a3r0v4e52pnwm0x2&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            className="w-full  max-h-[150px] object-contain "
          />
          <img
            src="https://media1.giphy.com/media/48WFMRHaQ6mFhE8JdJ/200w.webp?cid=ecf05e47esdrmzf0gyfm6crog1ssdp0ai054gxuzpk43gyvf&ep=v1_gifs_search&rid=200w.webp&ct=g"
            className="w-full max-h-[150px]   object-contain "
            onLoad={() => {
              setSmallBanner(true);
            }}
          />
        </div>
        <div>
          <Carousel
            slides={[
              
              "https://content.jdmagicbox.com/comp/mysore/d6/0821px821.x821.181026172029.s5d6/catalogue/a-to-z-dslr-camera-rental-bn-road-mysore-dslr-cameras-on-hire-p2wwbvdtgr.jpg?clr=","https://i0.wp.com/evduniya.com/wp-content/uploads/2022/03/electric-vehicle-rental-and-ride-sharing-startups-in-india.jpeg?resize=1024%2C512&ssl=1",
              "https://img.freepik.com/free-vector/moving-concept-illustration_114360-5449.jpg?size=626&ext=jpg&ga=GA1.2.959245531.1643520531&semt=ais",
            ]}
          />
        </div>

        <p className="font-bold text-lg mt-8 text-center uppercase ">
          SHOP by category
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10   items-center justify-center mt-8 w-[90%] sm:w-full mx-auto">
          {Category_Offer_Data.map((item) => {
            return <CategoryOfferCard item={item} />;
          })}
        </div>

          <p className="text-xl font-bold  text-center  mt-5  ">Trending</p>
        <div>
          <div className="relative py-2 grid text-sm sm:text-base sm:grid-cols-4 grid-cols-2 lg:grid-cols-6  gap-0 bg shadow-lg  mt-5 min-h-[200px]  ">
            <ItemCard />
          </div>
        </div>
        <GoToTop />
      </div>
    </SkeletonTheme>
  );
};

export default ItemsList;
