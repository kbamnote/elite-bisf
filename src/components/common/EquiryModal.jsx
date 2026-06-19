// import { X } from "lucide-react";
// import { useState } from "react";

// export default function EnquiryModal({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneNo: "",
//     age: "",
//     gender: "",
//     message: "",
//     productCompany: "BISF",
//   });

//   if (!isOpen) return null;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // 🔗 API call here
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

//         {/* Header */}
//         <div className="mb-4 flex items-center justify-between">
//           <h2 className="text-xl font-semibold">Product Enquiry</h2>
//           <button onClick={onClose}>
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             required
//           />

//           <input
//             type="tel"
//             name="phoneNo"
//             placeholder="Phone Number"
//             value={formData.phoneNo}
//             onChange={handleChange}
//             className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             required
//           />

//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             required
//           />

//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>

//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="3"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="text"
//             value={formData.productCompany}
//             disabled
//             className="w-full rounded-lg border bg-gray-100 px-4 py-2 text-gray-600"
//           />

//           <button
//             type="submit"
//             className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
