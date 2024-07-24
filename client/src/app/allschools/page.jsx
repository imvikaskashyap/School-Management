"use client";
import { HomeIcon, MoveLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/utils/apiRequest";
import Link from "next/link";
import SchoolCard from "@/components/schoolCard";

const AllSchools = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiRequest({ endUrl: "school" });
        setSchools(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="text-center p-10 pb-0 relative">
        <button
          onClick={() => router.back()}
          className="absolute top-0 left-0 mt-10 ml-0 lg:ml-16 py-2 px-4  bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          <MoveLeft />
        </button>
        <h1 className="font-bold text-xl lg:text-4xl mt-16  mb-4">
          All Schools
        </h1>
        <Link href="addschool">
          <button class="Btn ">
            <div class="sign">+</div>

            <div class="text">Add</div>
          </button>
        </Link>
        <Link href="/">
          <button class="Btn2 ">
            <div class="sign"><HomeIcon /></div>

            <div class="text">Home</div>
          </button>
        </Link>
      </div>

      <section
        id="Projects"
        className="mt-28 lg:mt-20 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {schools
          .map((school, i) => <SchoolCard key={i} school={school} />)
          .reverse()}
      </section>
    </>
  );
};

export default AllSchools;
