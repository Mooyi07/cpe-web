import Layout from "../layouts/Layout";

const teachers = [
    { name: "Engr. Maria Santos", status: "In Faculty" },
    { name: "Engr. John Dela Cruz", status: "In Class" },
    { name: "Engr. Anna Reyes", status: "In Faculty" },
    { name: "Engr. Carlo Gutierrez", status: "In Class" },
];

export default function TeachersPage() {
    return (
        <Layout>
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">CPE Faculty</h1>
                <div className="grid gap-4 md:grid-cols-2">
                    {teachers.map((teacher, index) => (
                        <div key={index} className="p-4 border rounded-xl shadow-md">
                            <h2 className="text-xl font-semibold">{teacher.name}</h2>
                            <p className={`mt-2 font-medium ${teacher.status === "In Class" ? "text-red-500" : "text-green-600"}`}>
                                {teacher.status}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
