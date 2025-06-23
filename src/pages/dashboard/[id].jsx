import React, { useContext } from "react";
import SideBar from "../../components/SideBar";
import { useParams } from "react-router-dom";
import { Mycontext } from "../../context";

export default function BookDetails() {
  const { id } = useParams();
  const { books } = useContext(Mycontext);

  const bookDetail = books.find((book) => book.id == id);
  console.log(bookDetail);

  return (
    <div className="flex ">
      <SideBar />
      <div className="w-[80vw] p-20">
        {/* book detail */}

        <div className="flex justify-between gap-x-10">
          <div className=" w-[60%] flex flex-col gap-5">
            <h1 className="text-3xl font-semibold ">{bookDetail.name}</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, quisquam. Qui reprehenderit animi quaerat. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Facilis ab vel, id
              veritatis voluptatem mollitia sed optio et repellat porro illo
              dolorum illum rerum nemo fugit? Corrupti illum ipsum minima?
            </p>
            <span className="text-gray-700 text-xl font-medium">{bookDetail.author}</span>
          </div>
          <div className="w-[40%] h-[70vh] bg-amber-300 object-cover">
            <img src={bookDetail.cover} alt="hello" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
