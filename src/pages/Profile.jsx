import React from 'react';
import Layout from '../layouts/Layout';

const Profile = () => {
  const profile = {
    fullName: "Lanz Joseph Tarrosa Villanueva",
    birthDate: "03/19/2002",
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
  };

  return (
    <Layout>
      <div className="min-h-screen text-black">
        <div className="max-w-5xl mx-auto bg-[#1c1e21] p-8 rounded-2xl shadow-lg space-y-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Personal Information</h2>
              <p className="text-gray-400 text-sm">Step 1 of 4</p>
            </div>
            <img
              src="/user.png"
              alt="Profile"
              className="rounded-lg object-cover w-24 h-28 border"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400">Full Name</label>
              <div className="mt-1">{profile.fullName}</div>
            </div>
            <div>
              <label className="block text-gray-400">Learner Reference No.</label>
              <div className="mt-1">{profile.learnerRefNo}</div>
            </div>
            <div>
              <label className="block text-gray-400">Birth Date</label>
              <div className="mt-1">{profile.birthDate}</div>
            </div>
            <div>
              <label className="block text-gray-400">Age</label>
              <div className="mt-1">{profile.age}</div>
            </div>
            <div>
              <label className="block text-gray-400">Gender</label>
              <div className="mt-1">{profile.gender}</div>
            </div>
            <div>
              <label className="block text-gray-400">Birth Place</label>
              <div className="mt-1">{profile.birthPlace}</div>
            </div>
            <div>
              <label className="block text-gray-400">Citizenship</label>
              <div className="mt-1">{profile.citizenship}</div>
            </div>
            <div>
              <label className="block text-gray-400">Religion</label>
              <div className="mt-1">{profile.religion}</div>
            </div>
            <div>
              <label className="block text-gray-400">Civil Status</label>
              <div className="mt-1">{profile.civilStatus}</div>
            </div>
          </div>

          <hr className="border-gray-600" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400">Email Address</label>
              <div className="mt-1">{profile.email}</div>
            </div>
            <div>
              <label className="block text-gray-400">Facebook Account</label>
              <div className="mt-1">{profile.facebook}</div>
            </div>
            <div>
              <label className="block text-gray-400">Mobile Number</label>
              <div className="mt-1">{profile.contact}</div>
            </div>
            <div>
              <label className="block text-gray-400">Landline</label>
              <div className="mt-1">{profile.landline}</div>
            </div>
          </div>

          <hr className="border-gray-600" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400">Campus</label>
              <div className="mt-1">{profile.campus}</div>
            </div>
            <div>
              <label className="block text-gray-400">Department</label>
              <div className="mt-1">{profile.department}</div>
            </div>
            <div>
              <label className="block text-gray-400">Course</label>
              <div className="mt-1">{profile.course}</div>
            </div>
            <div>
              <label className="block text-gray-400">Financial Support</label>
              <div className="mt-1">{profile.financialSupport}</div>
            </div>
          </div>

          <hr className="border-gray-600" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400">Permanent Address</label>
              <div className="mt-1">
                {profile.address.unit}, {profile.address.street}, {profile.address.barangay}, {profile.address.city}, {profile.address.province}, {profile.address.zip}
              </div>
            </div>
            <div>
              <label className="block text-gray-400">Congressional District</label>
              <div className="mt-1">{profile.address.district}</div>
            </div>
          </div>

          <div className="pt-4 text-sm text-gray-400 space-y-1">
            <p>Indigenous People (IP): {profile.isIP ? "Yes" : "No"}</p>
            <p>Person with Disabilities (PWD): {profile.isPWD ? "Yes" : "No"}</p>
            <p>Listahan: {profile.isListahan ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
