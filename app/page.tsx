import React from "react";
import Link from "next/link";
import datacs from "@/data/csdata.json";
import datais from "@/data/isdata.json";

import CS from "@/app/pages/deansLister";
import { handleData } from "@/app/pages/deansLister";

export default function page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="flex flex-row space-x-12 justify-between">
        <Link
          href="/pages/cs-department"
          className="group h-[450px] w-[320px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="inline-block p-3 bg-purple-100 rounded-2xl"></div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  CS Department
                </h1>
                <p className="text-gray-600">
                  Access grades and academic records for Computer Science
                  students
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-600">System is active</span>
              </div>
            </div>
            <button
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-xl 
              shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-in-out 
              relative overflow-hidden group"
            >
              <span className="relative z-10">Access CS Portal</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>
        </Link>

        <Link
          href="/pages/is-department"
          className="group h-[450px] w-[320px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="inline-block p-3 bg-cyan-100 rounded-2xl"></div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  IS Department
                </h1>
                <p className="text-gray-600">
                  Manage Information Systems student records and grades
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-600">System is active</span>
              </div>
            </div>
            <button
              className="w-full h-12 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white font-semibold rounded-xl 
              shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-in-out
              relative overflow-hidden group"
            >
              <span className="relative z-10">Access IS Portal</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
