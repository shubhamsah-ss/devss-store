import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const getPaginationRange = () => {
    const totalNumbers = 5;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      let pages = [1];
      if (startPage > 2) {
        pages.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);

      return pages;
    }
    
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const paginationRange = getPaginationRange();

  return (
    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-xs h-8">
      <li>
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="disabled:hidden flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 dark:text-gray-400 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <small>{"<<"}</small>
        </button>
      </li>
      <li>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="disabled:hidden flex items-center justify-center px-3 h-8 leading-tight text-gray-500 dark:text-gray-400 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <small>{"<"}</small>
        </button>
      </li>
      {paginationRange.map((page, index) => (
        <li key={index}>
          {page === '...' ? (
            <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
              {page}
            </span>
          ) : (
            <button
              disabled={currentPage === page}
              onClick={() => setCurrentPage(page)}
              className="disabled:bg-yellow-600 dark:disabled:bg-green-600 disabled:text-white flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page}
            </button>
          )}
        </li>
      ))}
      <li>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="disabled:hidden flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <small>{">"}</small>
        </button>
      </li>
      <li>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className="disabled:hidden flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <small>{">>"}</small>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;