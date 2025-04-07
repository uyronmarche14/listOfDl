import StudentTable from "@/app/components/StudentTable";

interface Student {
  GWA: string;
  [key: string]: any;
}

interface DataHandler {
  (data: Student[]): Student[];
}

export const handleData = (data: Student[]): Student[] => {
  return data;
};

interface HomeProps {
  data: Student[];
}

export default function Home({ data }: HomeProps) {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-purple-900 via-violet-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-purple-400 rounded-full"></div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                College of Informattion and Communcation Technology
              </h1>
            </div>
            <p className="text-purple-200 ml-4">Dean's Lister</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="relative bg-white dark:bg-slate-900 p-6 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-lg shadow-purple-900/5">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 rounded-full bg-purple-400 animate-pulse"></div>
            <h3 className="text-sm text-slate-600 dark:text-slate-400">
              Total Students
            </h3>
            <p className="text-3xl font-bold text-purple-900 dark:text-purple-400">
              {data.length}
            </p>
          </div>
          <div className="relative bg-white dark:bg-slate-900 p-6 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-lg shadow-purple-900/5">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 rounded-full bg-purple-400 animate-pulse"></div>
            <h3 className="text-sm text-slate-600 dark:text-slate-400">
              Average GWA
            </h3>
            <p className="text-3xl font-bold text-purple-900 dark:text-purple-400">
              {(
                data.reduce((acc, curr) => acc + parseFloat(curr.GWA), 0) /
                data.length
              ).toFixed(2)}
            </p>
          </div>
          <div className="relative bg-white dark:bg-slate-900 p-6 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-lg shadow-purple-900/5">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 rounded-full bg-purple-400 animate-pulse"></div>
            <h3 className="text-sm text-slate-600 dark:text-slate-400">
              Year Levels
            </h3>
            <p className="text-3xl font-bold text-purple-900 dark:text-purple-400">
              4
            </p>
          </div>
          <div className="relative bg-white dark:bg-slate-900 p-6 rounded-xl border border-purple-100 dark:border-purple-900/50 shadow-lg shadow-purple-900/5">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 rounded-full bg-purple-400 animate-pulse"></div>
            <h3 className="text-sm text-slate-600 dark:text-slate-400">
              Dean's Listers
            </h3>
            <p className="text-3xl font-bold text-purple-900 dark:text-purple-400">
              {data.length} {/* Changed to show all students */}
            </p>
          </div>
        </div>

        {/* Student Table */}
        <StudentTable data={handleData(data)} />
      </main>

      {/* Footer */}
      <footer className="mt-8 py-4 text-center">
        <p className="text-sm text-purple-600 dark:text-purple-400">
          Computer Organization Analytics • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
