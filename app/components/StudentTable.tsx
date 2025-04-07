"use client";
import { useState } from "react";

interface Student {
  "Student No.": string;
  Name: string;
  "Year Level": string;
  GWA: string;
}

interface StudentTableProps {
  data: Student[];
}

export default function StudentTable({ data }: StudentTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("All");

  const filteredData = data.filter((student) => {
    const matchesSearch =
      student.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student["Student No."].toLowerCase().includes(searchTerm.toLowerCase());

    const matchesYear =
      yearFilter === "All" || student["Year Level"] === yearFilter;

    return matchesSearch && matchesYear;
  });

  return (
    <>
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
          <div className="absolute right-3 top-2.5 text-purple-400">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <select
          className="px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/50"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
        >
          <option value="All">All Year Levels</option>
          <option value="1">Year 1</option>
          <option value="2">Year 2</option>
          <option value="3">Year 3</option>
          <option value="4">Year 4</option>
        </select>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-lg shadow-purple-900/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-purple-900 dark:text-purple-400 uppercase tracking-wider">
                  Student No.
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-purple-900 dark:text-purple-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-purple-900 dark:text-purple-400 uppercase tracking-wider">
                  Year Level
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-purple-900 dark:text-purple-400 uppercase tracking-wider">
                  GWA
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-purple-900 dark:text-purple-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 dark:divide-slate-800">
              {filteredData.map((student) => (
                <tr
                  key={student["Student No."]}
                  className="hover:bg-purple-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-4 py-3 text-sm font-medium">
                    {student["Student No."]}
                  </td>
                  <td className="px-4 py-3 text-sm">{student.Name}</td>
                  <td className="px-4 py-3 text-sm">{student["Year Level"]}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                      {student.GWA}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Dean's Lister
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
