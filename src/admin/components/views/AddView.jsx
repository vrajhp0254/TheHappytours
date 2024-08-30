import React, { useState, useEffect } from "react";

const AddView = () => {
  const [formData, setFormData] = useState({
    path: "",
    title: "",
    welcomeline: "",
    greatline: "",
    imageUrl: "",
    categories: [],
    CountryPackages: [
      {
        subpath: "",
        title: "",
        imageUrl: "",
        tripdata: "",
        timelineDatas: [],
        inclusions: [],
      },
    ],
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    formData.CountryPackages.map((packages, index) => {
      packages.subpath = `/${formData.path}/${packages.subpath}`;
    });
    fetch("https://fyserver.vercel.app/createCountry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "2ef777de-b546-4421-871c-d7899916f860",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setSubmitting(true);
  
    // Simulate a delay for form submission (replace with actual submission logic)
    setTimeout(() => {
      // Hide submitting message
      setSubmitting(false);
      // Clear form data
      setFormData({
        path: "",
        title: "",
        welcomeline: "",
        greatline: "",
        imageUrl: "",
        categories: [],
        CountryPackages: [
          {
            subpath: "",
            title: "",
            imageUrl: "",
            tripdata: "",
            timelineDatas: [],
            inclusions: [],
          },
        ],
      });
    }, 2000); // Change the delay time as needed
  
    // Display submitting message as an alert
    alert("Submitted");
    document.getElementById("countryForm").reset();
  };
  

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "categories") {
      // If the checkbox is checked, add the value to the array
      // If it's unchecked, remove the value from the array
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          categories: [...prevData.categories, value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          categories: prevData.categories.filter(
            (category) => category !== value
          ),
        }));
      }
    } else if (name === "title") {
      setFormData((prevData) => ({
        ...prevData,
        path: value.toLowerCase().split(" ").join("-"),
        [name]: value,
      }));
    } else {
      // For other inputs, update the state as usual
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handlePackageChange = (index, field, value) => {
    if (field === "title") {
      const updatedPackages = [...formData.CountryPackages];
      updatedPackages[index][field] = value;
      updatedPackages[index].subpath = value.toLowerCase().split(" ").join("-");

      setFormData({
        ...formData,
        CountryPackages: updatedPackages,
      });
    }
    const updatedPackages = [...formData.CountryPackages];
    updatedPackages[index][field] = value;
    setFormData({
      ...formData,
      CountryPackages: updatedPackages,
    });
  };

  const handleAddTimelineData = (index) => {
    const updatedPackages = [...formData.CountryPackages];
    updatedPackages[index].timelineDatas.push("");
    setFormData({
      ...formData,
      CountryPackages: updatedPackages,
    });
  };
  const handleRemoveTimelineData = (index, dataIndex) => {
    const updatedPackages = [...formData.CountryPackages];
    updatedPackages[index].timelineDatas.splice(dataIndex, 1);
    setFormData({
      ...formData,
      CountryPackages: updatedPackages,
    });
  };
  const handleAddInclusions = (index) => {
    const updatedPackages = [...formData.CountryPackages];
    updatedPackages[index].inclusions.push("");
    setFormData({
      ...formData,
      CountryPackages: updatedPackages,
    });
  };

  const handleRemoveInclusions = (index, dataIndex) => {
    const updatedPackages = [...formData.CountryPackages];
    updatedPackages[index].inclusions.splice(dataIndex, 1);
    setFormData({
      ...formData,
      CountryPackages: updatedPackages,
    });
  };

  const handleAddPackage = () => {
    setFormData((prevData) => ({
      ...prevData,
      CountryPackages: [
        ...prevData.CountryPackages,
        {
          subpath: "",
          title: "",
          imageUrl: "",
          tripdata: "",
          timelineDatas: [],
          inclusions: [],
        },
      ],
    }));
  };

  const handleRemovePackage = (index) => {
    const updatedPackages = [...formData.CountryPackages];
    updatedPackages.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      CountryPackages: updatedPackages,
    }));
  };

  return (
    <div className=" p-6 bg-gray-100 rounded-lg shadow-md ">
      <form id="countryForm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="welcomeline" className="block font-semibold mb-2">
            Welcome Line:
          </label>
          <input
            type="text"
            id="welcomeline"
            name="welcomeline"
            value={formData.welcomeline}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="greatline" className="block font-semibold mb-2">
            Great Line:
          </label>
          <input
            type="text"
            id="greatline"
            name="greatline"
            value={formData.greatline}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block font-semibold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
            required
          />
          {formData.imageUrl && (
            <img
              className="h-[150px] p-4"
              src={formData.imageUrl}
              alt="image preview"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Categories:</label>
          <div>
            <label
              htmlFor="internationalHolidays"
              className="flex items-center mb-2"
            >
              <input
                type="checkbox"
                id="internationalHolidays"
                name="categories"
                value="International Holidays"
                checked={formData.categories.includes("International Holidays")}
                onChange={handleChange}
                className="mr-2"
              />
              International Holidays
            </label>
          </div>
          <div>
            <label htmlFor="incredibleIndia" className="flex items-center mb-2">
              <input
                type="checkbox"
                id="incredibleIndia"
                name="categories"
                value="Incredible India"
                checked={formData.categories.includes("Incredible India")}
                onChange={handleChange}
                className="mr-2"
              />
              Incredible India
            </label>
          </div>
          <div>
            <label htmlFor="honeymoonPackages" className="flex items-center">
              <input
                type="checkbox"
                id="honeymoonPackages"
                name="categories"
                value="Honeymoon Packages"
                checked={formData.categories.includes("Honeymoon Packages")}
                onChange={handleChange}
                className="mr-2"
              />
              Honeymoon Packages
            </label>
          </div>
        </div>
        {formData.CountryPackages.map((packages, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-semibold mb-2 border-b border-t text-center">
              Package {index + 1}
            </h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="font-semibold mb-1">Title:</td>
                  <td>
                    <input
                      type="text"
                      id={`title-${index}`}
                      name={`title-${index}`}
                      value={packages.title}
                      onChange={(e) =>
                        handlePackageChange(index, "title", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold mb-1 w-[20%]">Image URL:</td>
                  <td className="w-[60%]">
                    <input
                      type="text"
                      id={`imageUrl-${index}`}
                      name={`imageUrl-${index}`}
                      value={packages.imageUrl}
                      onChange={(e) =>
                        handlePackageChange(index, "imageUrl", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                      required
                    />
                  </td>
                </tr>
                {packages.imageUrl && (
                  <tr>
                    <td></td>
                    <td>
                      <img
                        className="h-[150px] p-4"
                        src={packages.imageUrl}
                        alt="image preview"
                      />
                    </td>
                  </tr>
                )}
                <tr>
                  <td className="font-semibold mb-1">Trip Data:</td>
                  <td>
                    <input
                      type="text"
                      id={`tripdata-${index}`}
                      name={`tripdata-${index}`}
                      value={packages.tripdata}
                      onChange={(e) =>
                        handlePackageChange(index, "tripdata", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                      required
                    />
                  </td>
                </tr>

                <tr className="border-b border-t ">
                  <td className="font-semibold mb-1">Timeline Data:</td>
                  <td>
                    <div className="mb-4">
                      {packages.timelineDatas.map((data, dataIndex) => (
                        <div key={dataIndex} className="flex items-center mb-2">
                          <input
                            type="text"
                            id={`timelineDatas-${index}-${dataIndex}`}
                            name={`timelineDatas-${index}-${dataIndex}`}
                            value={data}
                            onChange={(e) =>
                              handlePackageChange(
                                index,
                                "timelineDatas",
                                packages.timelineDatas.map((item, index) =>
                                  index === dataIndex ? e.target.value : item
                                )
                              )
                            }
                            className="w-full border border-gray-300 rounded-md py-2 px-3 mr-2 focus:outline-none focus:border-blue-500"
                            required
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveTimelineData(index, dataIndex)
                            }
                            className="bg-red-500 text-white px-2 py-1 rounded"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => handleAddTimelineData(index)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Add Timeline Data
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold mb-1">Inclusions:</td>
                  <td>
                    <div className="mb-4">
                      {packages.inclusions.map((data, dataIndex) => (
                        <div key={dataIndex} className="flex items-center mb-2">
                          <input
                            type="text"
                            id={`inclusions-${index}-${dataIndex}`}
                            name={`inclusions-${index}-${dataIndex}`}
                            value={data}
                            onChange={(e) =>
                              handlePackageChange(
                                index,
                                "inclusions",
                                packages.inclusions.map((item, index) =>
                                  index === dataIndex ? e.target.value : item
                                )
                              )
                            }
                            className="w-full border border-gray-300 rounded-md py-2 px-3 mr-2 focus:outline-none focus:border-blue-500"
                            required
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveInclusions(index, dataIndex)
                            }
                            className="bg-red-500 text-white px-2 py-1 rounded"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => handleAddInclusions(index)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Add Inclusions
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              onClick={() => handleRemovePackage(index)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Remove Package
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddPackage}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 mr-4"
        >
          Add Package
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddView;
