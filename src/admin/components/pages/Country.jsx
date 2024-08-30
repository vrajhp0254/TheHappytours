import React, { useState } from "react";
import "boxicons";
import DataView from "../views/DataView";
import AddView from "../views/AddView";


const ParentComponent = () => {
  const [showAddView, setShowAddView] = useState(false);

  const toggleAddView = () => {
    setShowAddView(!showAddView);
  };

  return (
    <>
      {showAddView ? (
        <AddViewComponent goBack={toggleAddView} />
      ) : (
        <CountryComponent showAddView={toggleAddView} />
      )}
    </>
  );
};

const CountryComponent = ({ showAddView }) => {
  return (
    <div className="pt-10 md:p-10">
      <div className="flex h-auto gap-5">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          Countries
        </h1>
        <div
          className="flex border border-black rounded-lg items-center cursor-pointer px-2 transition-all hover:scale-110 duration-500"
          onClick={showAddView}
        >
          add <box-icon name="plus"></box-icon>
        </div>
      </div>

      <DataView />
    </div>
  );
};

const AddViewComponent = ({ goBack }) => {
  return (
    <div className="pt-10 md:p-10">
      <h1 className="text-3xl font-bold">Add Country</h1>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
        onClick={goBack}
      >
        Back
      </button>
      <AddView />
    </div>
  );
};

export default ParentComponent;
