import React, { useState } from 'react';
import Layout from '../layouts/Layout';

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "Lanz Joseph Tarrosa Villanueva",
    birthDate: "2002-03-19",
    age: 23,
    gender: "Male",
    citizenship: "Filipino",
    religion: "Roman Catholic",
    civilStatus: "Single",
    learnerRefNo: "40415150399",
    birthPlace: "Bacolod City",
    email: "ljt.villanueva@gmail.com",
    facebook: "Lanz Joseph Tarrosa Villanueva",
    contact: "+63 961-5244-774",
    landline: "04-41-0750",
    address: {
      unit: "B20, L24, Regent Pearl Homes, Villa Angela",
      street: "San Bartolome St.",
      barangay: "Vista Alegre",
      city: "Bacolod City",
      zip: "6100",
      province: "Negros Occidental",
      district: "Lone district"
    },
    course: "BS CpE - Bachelor of Science in Computer Engineering",
    campus: "Visayas",
    department: "College",
    financialSupport: "Parents",
    isPWD: false,
    isIP: false,
    isListahan: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProfile((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <Layout>
      <div className="min-h-screen text-black">
        <div className="max-w-5xl mx-auto bg-[#1c1e21] p-8 rounded-2xl shadow-lg space-y-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Personal Information</h2>
            </div>
            <img src="/user.png" alt="Profile" className="rounded-lg object-cover w-24 h-28 border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Learner Reference No.</label>
              <input
                type="text"
                name="learnerRefNo"
                value={profile.learnerRefNo}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Birth Date</label>
              <input
                type="date"
                name="birthDate"
                value={profile.birthDate}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Age</label>
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Gender</label>
              <input
                type="text"
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Birth Place</label>
              <input
                type="text"
                name="birthPlace"
                value={profile.birthPlace}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Citizenship</label>
              <input
                type="text"
                name="citizenship"
                value={profile.citizenship}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Religion</label>
              <input
                type="text"
                name="religion"
                value={profile.religion}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Civil Status</label>
              <input
                type="text"
                name="civilStatus"
                value={profile.civilStatus}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
          </div>

          <hr className="border-gray-600" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Facebook</label>
              <input
                type="text"
                name="facebook"
                value={profile.facebook}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Contact</label>
              <input
                type="text"
                name="contact"
                value={profile.contact}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Landline</label>
              <input
                type="text"
                name="landline"
                value={profile.landline}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
          </div>

          <hr className="border-gray-600" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400">Campus</label>
              <input
                type="text"
                name="campus"
                value={profile.campus}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Department</label>
              <input
                type="text"
                name="department"
                value={profile.department}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Course</label>
              <input
                type="text"
                name="course"
                value={profile.course}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">Financial Support</label>
              <input
                type="text"
                name="financialSupport"
                value={profile.financialSupport}
                onChange={handleChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
          </div>

          <hr className="border-gray-600" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400">Permanent Address</label>
              <textarea
                name="unit"
                value={`${profile.address.unit}, ${profile.address.street}, ${profile.address.barangay}, ${profile.address.city}, ${profile.address.province}, ${profile.address.zip}`}
                readOnly
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400">District</label>
              <input
                type="text"
                name="district"
                value={profile.address.district}
                onChange={handleAddressChange}
                className="mt-1 w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
          </div>

          <div className="pt-4 text-sm text-gray-400 space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isIP"
                checked={profile.isIP}
                onChange={handleCheckboxChange}
              /> Indigenous People (IP)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isPWD"
                checked={profile.isPWD}
                onChange={handleCheckboxChange}
              /> Person with Disabilities (PWD)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isListahan"
                checked={profile.isListahan}
                onChange={handleCheckboxChange}
              /> Listahan
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
