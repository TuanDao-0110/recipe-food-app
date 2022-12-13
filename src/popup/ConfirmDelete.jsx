import React from "react";

export default function ConfirmDelete({ handleDelete, setDeleteConfirm, id }) {
  return (
    <div className="absolute bg-slate-500  shadow-md rounded-md shadow-slate-600 z-50 w-full h-full flex items-center justify-center -top-1 right-0 ">
      <div className="flex justify-around w-full ">
        <button
          className="text-red-300 bg-indigo-500 rounded-md p-2 hover:bg-indigo-900 focus:text-red-900 transition-all duration-100"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Confirm Delete
        </button>
        <button
          className="text-red-300 bg-indigo-500 rounded-md p-2 hover:bg-indigo-900 focus:text-red-900 transition-all duration-100"
          onClick={() => {
            setDeleteConfirm(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}
