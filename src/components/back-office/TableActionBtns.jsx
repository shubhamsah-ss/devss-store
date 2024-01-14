import { Download, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TableActionBtns = ({href, linkTitle}) => {
  return (
    <div
        className="rounded-xl p-5 shadow-lg 
      bg-slate-100 dark:bg-slate-800
      flex justify-between flex-col sm:flex-row
      "
      >
        <div className="flex gap-3 my-2 sm:my-0">
          <button className="flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="inline-flex items-center gap-2 px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0">
              <Download />
              <span>Import</span>
            </span>
          </button>

          <button className="flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="inline-flex items-center gap-2 px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0">
              <Download />
              <span>Export</span>
            </span>
          </button>
        </div>
        <div className="flex my-2 sm:my-0 sm:justify-end space-x-2">
          <button
            className="inline-flex items-center rounded-xl space-x-1
          px-4 py-2
          text-white font-medium text-center text-sm
          bg-red-700
          hover:bg-red-700/90 
          focus:ring-4 focus:outline-none focus:ring-red-700/50 
          dark:focus:ring-red-700/55"
          >
            <Trash2 />
            <span>Delete</span>
          </button>
          <Link
            href={href}
            className="inline-flex items-center rounded-xl space-x-1
          px-4 py-2
          text-white font-medium text-center text-sm
          bg-lime-600
          hover:bg-lime-600/90 
          focus:ring-4 focus:outline-none focus:ring-lime-600/50 
          dark:focus:ring-lime-600/55"
          >
            <Plus />
            <span>{linkTitle}</span>
          </Link>
        </div>
      </div>
  )
}

export default TableActionBtns