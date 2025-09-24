import Layout from "../layouts/Layout";

const teachers = [
  {
    name: "Engr. Jayson John J. Quintanilla",
    role: "Program Head",
    status: "IN FACULTY",
    isHead: true,
  },
  {
    name: "Engr. Azriel Martin Padernal",
    role: "Professor",
    status: "IN FACULTY",
  },
  {
    name: "Engr. Crhiz Q. Salillas",
    role: "Professor",
    status: "IN CLASS",
  },
  {
    name: "Engr. Allen Joseph C. Apawan",
    role: "Professor",
    status: "OFF CAMPUS",
  },
];

const statusStyles = {
  "IN FACULTY": "text-green-600",
  "IN CLASS": "text-yellow-500",
  "OFF CAMPUS": "text-red-600",
};

export default function TeachersPage() {
  const head = teachers.find((t) => t.isHead);
  const subs = teachers.filter((t) => !t.isHead);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-16 px-4">
        {/* Head Box */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-md shadow-md border px-6 py-4 text-center">
            <div className="w-20 h-20 border-2 border-black rounded-full mx-auto mb-2"></div>
            <p className="font-medium">{head.name}</p>
            <p className="font-semibold">{head.role}</p>
            <p className={`font-bold ${statusStyles[head.status]}`}>{head.status}</p>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-1 h-10 bg-black"></div>

          {/* Horizontal Line */}
          <div className="hidden md:block w-[600px] h-1 bg-black relative">
            <div className="absolute top-0 left-0 w-1 h-7 bg-black"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-7 bg-black"></div>
            <div className="absolute top-0 right-0 w-1 h-7 bg-black"></div>
          </div>
        </div>

        {/* Subordinate Boxes */}
        <div className="flex flex-col gap-8 mt-6 md:flex-row md:gap-16 items-center">
          {subs.map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white rounded-md shadow-md border px-6 py-4 text-center">
                <div className="w-20 h-20 border-2 border-black rounded-full mx-auto mb-2" />
                <p className="font-medium">{t.name}</p>
                <p className="font-semibold">{t.role}</p>
                <p className={`font-bold ${statusStyles[t.status]}`}>{t.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
