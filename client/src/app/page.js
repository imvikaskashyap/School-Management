import { Plus, School } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 mx-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">School Management Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Link href="/addschool">
            <div className="block p-10 bg-white shadow-md rounded-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
              <Plus className='text-blue-600' size={80} />
                <h2 className="text-2xl font-semibold  mt-2">Add a School</h2>
                <p className="text-gray-600 mt-2 text-center">Click here to add a new school to the database.</p>
              </div>
            </div>
          </Link>

          <Link href="/allschools">
            <div className="block p-10  bg-white shadow-md rounded-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
              <School className='text-green-600' size={80}/>
                <h2 className="text-2xl font-semibold mt-2">All Schools</h2>
                <p className="text-gray-600 mt-2 text-center">Click here to view all registered schools.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
