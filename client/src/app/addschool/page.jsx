"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HomeIcon, MoveLeft, School } from "lucide-react";
import Link from "next/link";
import { apiRequest } from "@/utils/apiRequest";

export default function AddSchool() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email_id: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "This field is required";
    if (!formData.address) newErrors.address = "This field is required";
    if (!formData.city) newErrors.city = "This field is required";
    if (!formData.state) newErrors.state = "This field is required";
    if (!formData.contact) newErrors.contact = "This field is required";
    if (!formData.email_id) {
      newErrors.email_id = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email_id)) {
      newErrors.email_id = "Invalid email address";
    }
    if (!formData.image) newErrors.image = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

 
    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }

    try {
      const response = await apiRequest({
        endUrl: 'school/create', 
        method: 'POST',
        body: data,
      });

      if (response.status === 201) {
        setErrors({});
        alert("School added successfully!");
        router.push("/allschools");
      } else {
        alert("Failed to add school. Please try again with another email.");
      }
    } catch (error) {
      console.error("Error adding school:", error);
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      address: "",
      city: "",
      state: "",
      contact: "",
      email_id: "",
      image: null,
    });
    setErrors({});
  };

  return (
    <>
      <div className="text-center p-10 pb-4 relative">
        <button
          onClick={() => router.back()}
           className="absolute top-0 left-0 mt-10 ml-2 lg:ml-16 py-2 px-4  bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          <MoveLeft />
        </button>
        <h1 className="font-bold text-4xl mt-16 mb-4">Add a School</h1>
        <Link href="/allschools">
          <button class="Btn ">
            <div class="sign"> <School/></div>

            <div class="text">Schools</div>
          </button>
        </Link>
        <Link href="/">
          <button class="Btn2 ">
            <div class="sign"><HomeIcon /></div>

            <div class="text">Home</div>
          </button>
        </Link>
      </div>
      <div className="mb-12 p-8 rounded border border-gray-200 max-w-2xl mx-auto bg-white shadow-lg">
        <p className="text-gray-600 mt-6 text-center">
          Please fill out the form below to add a new school.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter school name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="address"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter school address"
              />
              {errors.address && (
                <span className="text-red-500 text-sm">{errors.address}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="city"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter city"
              />
              {errors.city && (
                <span className="text-red-500 text-sm">{errors.city}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="state"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter state"
              />
              {errors.state && (
                <span className="text-red-500 text-sm">{errors.state}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="contact"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Contact
              </label>
              <input
                type="number"
                name="contact"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter contact number"
                onKeyDown={(e) =>
                  (e.key === "e" || e.key === "+" || e.key === "-") &&
                  e.preventDefault()
                }
                style={{ appearance: "textfield" }}
              />
              {errors.contact && (
                <span className="text-red-500 text-sm">{errors.contact}</span>
              )}
              <style jsx>{`
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
                input[type="number"] {
                  -moz-appearance: textfield;
                }
              `}</style>
            </div>
            <div>
              <label
                htmlFor="email_id"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email_id"
                id="email_id"
                value={formData.email_id}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="yourmail@provider.com"
              />
              {errors.email_id && (
                <span className="text-red-500 text-sm">{errors.email_id}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="image"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleChange}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />
              {errors.image && (
                <span className="text-red-500 text-sm">{errors.image}</span>
              )}
            </div>
          </div>
          <div className="space-x-4 mt-8 flex justify-center">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add School
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="py-2 px-4 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
