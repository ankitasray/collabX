import Header from '@/components/Header';
import Image from 'next/image';

export default function HOME() {
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center text-center px-6 py-12">
      
      <main className="flex flex-col items-center mt-16 text-center max-w-3xl">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <h2 className="text-5xl font-bold mt-6 leading-tight">
          Think, plan, and track <br />
          <span className="text-gray-400">all in one place</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg">Streamline your workflow with an intuitive and efficient task management system.</p>
        <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">Get free demo</button>
      </main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-lg font-semibold">📝 Take notes efficiently</p>
          <p className="text-gray-500 text-sm mt-2">Keep track of crucial details and enhance your productivity.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-lg font-semibold">⏰ Smart Reminders</p>
          <p className="text-gray-500 text-sm mt-2">Never miss a task with automatic reminders and notifications.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-lg font-semibold">📅 Task Management</p>
          <p className="text-gray-500 text-sm mt-2">Plan, prioritize, and track your progress effectively.</p>
        </div>
      </div>
    </div>
    </div>
    
  );
}
