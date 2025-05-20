import { useState, useEffect } from 'react';
import { FiHome, FiVideo, FiMapPin, FiCalendar, FiUser, FiLogOut } from 'react-icons/fi';
import { motion } from 'framer-motion';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('online');
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [upcomingClasses, setUpcomingClasses] = useState([]);
  const [completedClasses, setCompletedClasses] = useState([]);

  // Sample data - replace with API calls in real implementation
  useEffect(() => {
    // Mock data for demonstration
    setAddresses([
      { id: 1, address: '123 Main St, New York, NY' },
      { id: 2, address: '456 Park Ave, Brooklyn, NY' }
    ]);
    
    setUpcomingClasses([
      { id: 1, type: 'online', title: 'Mathematics Advanced', date: '2023-06-15', time: '10:00 AM', tutor: 'Dr. Smith' },
      { id: 2, type: 'offline', title: 'Physics Lab', date: '2023-06-17', time: '2:00 PM', tutor: 'Prof. Johnson', address: '123 Main St' }
    ]);
    
    setCompletedClasses([
      { id: 3, type: 'online', title: 'Chemistry Basics', date: '2023-06-10', time: '9:00 AM', tutor: 'Dr. Brown' },
      { id: 4, type: 'offline', title: 'Biology Workshop', date: '2023-06-05', time: '1:00 PM', tutor: 'Prof. Davis', address: '456 Park Ave' }
    ]);
  }, []);

  const handleAddAddress = () => {
    if (newAddress.trim()) {
      const newId = addresses.length > 0 ? Math.max(...addresses.map(a => a.id)) + 1 : 1;
      setAddresses([...addresses, { id: newId, address: newAddress }]);
      setNewAddress('');
    }
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(address => address.id !== id));
  };

  const joinClass = (classId) => {
    alert(`Joining class ${classId}`);
    // In real app, this would redirect to the online class or show offline class details
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700">Student Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, John Doe</span>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FiUser className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FiLogOut className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`flex items-center px-4 py-3 font-medium text-sm ${activeTab === 'online' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('online')}
          >
            <FiVideo className="mr-2" />
            Online Classes
          </button>
          <button
            className={`flex items-center px-4 py-3 font-medium text-sm ${activeTab === 'offline' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('offline')}
          >
            <FiHome className="mr-2" />
            Offline Classes
          </button>
          <button
            className={`flex items-center px-4 py-3 font-medium text-sm ${activeTab === 'addresses' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('addresses')}
          >
            <FiMapPin className="mr-2" />
            My Addresses
          </button>
        </div>

        {/* Online Classes Tab */}
        {activeTab === 'online' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Upcoming Online Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {upcomingClasses.filter(c => c.type === 'online').map((classItem) => (
                <div key={classItem.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900">{classItem.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        Online
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <p><span className="font-medium">Tutor:</span> {classItem.tutor}</p>
                      <p><span className="font-medium">Date:</span> {classItem.date}</p>
                      <p><span className="font-medium">Time:</span> {classItem.time}</p>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => joinClass(classItem.id)}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-150 ease-in-out"
                      >
                        Join Class
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-4">Completed Online Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedClasses.filter(c => c.type === 'online').map((classItem) => (
                <div key={classItem.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900">{classItem.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        Online
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <p><span className="font-medium">Tutor:</span> {classItem.tutor}</p>
                      <p><span className="font-medium">Date:</span> {classItem.date}</p>
                    </div>
                    <div className="mt-4">
                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition duration-150 ease-in-out">
                        View Recording
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Offline Classes Tab */}
        {activeTab === 'offline' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <label htmlFor="address-select" className="block text-sm font-medium text-gray-700 mb-1">
                Select Preferred Address for Offline Classes
              </label>
              <select
                id="address-select"
                className="w-full md:w-1/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedAddress}
                onChange={(e) => setSelectedAddress(e.target.value)}
              >
                <option value="">Select an address</option>
                {addresses.map((address) => (
                  <option key={address.id} value={address.id}>
                    {address.address}
                  </option>
                ))}
              </select>
            </div>

            <h2 className="text-xl font-semibold mb-4">Upcoming Offline Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {upcomingClasses.filter(c => c.type === 'offline').map((classItem) => (
                <div key={classItem.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900">{classItem.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Offline
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <p><span className="font-medium">Tutor:</span> {classItem.tutor}</p>
                      <p><span className="font-medium">Date:</span> {classItem.date}</p>
                      <p><span className="font-medium">Time:</span> {classItem.time}</p>
                      <p><span className="font-medium">Location:</span> {classItem.address}</p>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => alert(`Directions to ${classItem.address}`)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-150 ease-in-out"
                      >
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-4">Completed Offline Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedClasses.filter(c => c.type === 'offline').map((classItem) => (
                <div key={classItem.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900">{classItem.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Offline
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <p><span className="font-medium">Tutor:</span> {classItem.tutor}</p>
                      <p><span className="font-medium">Date:</span> {classItem.date}</p>
                      <p><span className="font-medium">Location:</span> {classItem.address}</p>
                    </div>
                    <div className="mt-4">
                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition duration-150 ease-in-out">
                        View Materials
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Address Management Tab */}
        {activeTab === 'addresses' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">My Addresses</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Add New Address
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <div className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="flex">
                        <input
                          type="text"
                          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter your full address"
                          value={newAddress}
                          onChange={(e) => setNewAddress(e.target.value)}
                        />
                        <button
                          type="button"
                          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={handleAddAddress}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Saved Addresses
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {addresses.map((address) => (
                    <li key={address.id} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FiMapPin className="flex-shrink-0 h-5 w-5 text-gray-400" />
                          <p className="ml-3 text-sm font-medium text-gray-900">
                            {address.address}
                          </p>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <button
                            onClick={() => handleDeleteAddress(address.id)}
                            className="ml-2 bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
                          >
                            <span className="sr-only">Delete</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;