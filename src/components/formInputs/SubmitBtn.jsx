import { Loader2, MoreHorizontal } from "lucide-react";
import React from "react";

const SubmitBtn = ({ isLoading, title, loadingTitle }) => {
  return (
    <div className="w-full">
      {isLoading ? (
        <button
          disabled
          type="button"
          className="mt-5 py-2 px-5 rounded-lg sm:mt-6
                text-slate-600 text-sm font-medium text-center
                bg-gray-300 dark:bg-gray-700
                inline-flex items-center justify-center w-full"
        >
          <Loader2 className="text-sm mr-2 animate-spin text-yellow-600 dark:text-green-600" />
          {loadingTitle}
        </button>
      ) : (
        <button
          type="submit"
          className="mt-5 py-2 px-5 rounded-lg sm:mt-6
                text-white text-sm font-medium text-center
                bg-yellow-600 dark:bg-green-600
                hover:bg-yellow-700 dark:hover:bg-green-700
                inline-flex items-center justify-center w-full"
        >
          {title}
        </button>
      )}
    </div>
  );
};

export default SubmitBtn;
