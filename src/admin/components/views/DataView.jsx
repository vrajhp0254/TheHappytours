import React, { useState, useEffect } from "react";
import axios from "axios";
import EditView from "../views/EditView"; // Import EditView component

const DataView = () => {
  const [data, setData] = useState([]);

  const [editMode, setEditMode] = useState(false); // State for edit mode
  const [editData, setEditData] = useState(null); // State for data being edited

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiKey = "2ef777de-b546-4421-871c-d7899916f860"; // Replace 'your_api_key_here' with your actual API key
      const config = {
        headers: {
          "x-api-key": apiKey,
        },
      };

      const response = await axios.get(
        "https://fyserver.vercel.app/getCountries",
        config
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRefresh = () => {
    fetchData();
  };

  const handleEdit = (index) => {
    // Set edit mode and data for the country being edited
    setEditMode(true);
    setEditData(data[index]);
  };

  const handleDelete = async (index) => {
    // Ask for confirmation
    const confirmed = window.confirm("Are you sure you want to delete this item?");
  
    if (confirmed) {
      try {
        const apiKey = '2ef777de-b546-4421-871c-d7899916f860'; // Your API key
        const config = {
          headers: {
            'x-api-key': apiKey
          }
        };
  
        // Make sure `data` is accessible
        const response = await axios.delete(
          `https://fyserver.vercel.app/deleteCountry/${data[index]._id}`,
          config
        );
  
        // Assuming fetchData is defined and accessible
        fetchData(); // Update data after successful deletion
        window.alert("Item deleted successfully.");
      } catch (error) {
        console.error("Error deleting item:", error);
        window.alert("Failed to delete item. Please try again later.");
      }
    }
  };
  

  return (
    <div className="container mx-auto py-10">
      {editMode ? (
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={() => setEditMode(false)} // Add onClick to toggle edit mode
          >
            Back
          </button>
          <EditView
            data={editData}
            onCancel={() => setEditMode(false)}
            onSave={() => {
              setEditMode(false);
              fetchData();
            }}
          />
        </div>
      ) : (
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={handleRefresh}
          >
            Refresh
          </button>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Welcome Line</th>
                <th className="border px-4 py-2">Categories</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="border">
                    <td className="px-4 py-2 ">{item.title}</td>
                    <td className="px-4 py-2 ">{item.welcomeline}</td>
                    <td className="px-4 py-2 ">{item.categories.join(", ")}</td>
                    <td className="flex items-center space-x-2 px-4 py-2">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataView;
