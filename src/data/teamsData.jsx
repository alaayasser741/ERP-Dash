import { CheckIcon, TrashIcon, XIcon } from "../assets/icons";

export const teamData = [
  {
    id: 1,
    name: "Ahmed Ali",
    role: "Software Engineer",
    email: "ahmed@gmail.com",
    phone: "1234567890",
    start_date: "12/12/2021",
    active: true,
  },
  {
    id: 2,
    name: "Sara Ibrahim",
    role: "Product Manager",
    email: "sara.ibrahim@gmail.com",
    phone: "2345678901",
    start_date: "03/15/2020",
    active: true,
  },
  {
    id: 3,
    name: "Mohammed Hassan",
    role: "UI/UX Designer",
    email: "mohammed.hassan@gmail.com",
    phone: "3456789012",
    start_date: "06/20/2022",
    active: true,
  },
  {
    id: 4,
    name: "Fatima Khalid",
    role: "Backend Developer",
    email: "fatima.khalid@gmail.com",
    phone: "4567890123",
    start_date: "09/01/2019",
    active: false,
  },
  {
    id: 5,
    name: "Omar Salah",
    role: "DevOps Engineer",
    email: "omar.salah@gmail.com",
    phone: "5678901234",
    start_date: "11/10/2021",
    active: true,
  },
  {
    id: 6,
    name: "Hana Youssef",
    role: "HR Manager",
    email: "hana.youssef@gmail.com",
    phone: "6789012345",
    start_date: "08/05/2018",
    active: true,
  },
  {
    id: 7,
    name: "Khalid Mustafa",
    role: "Front-end Developer",
    email: "khalid.mustafa@gmail.com",
    phone: "7890123456",
    start_date: "01/18/2023",
    active: false,
  },
  {
    id: 8,
    name: "Layla Ahmed",
    role: "Marketing Specialist",
    email: "layla.ahmed@gmail.com",
    phone: "8901234567",
    start_date: "04/25/2022",
    active: true,
  },
  {
    id: 9,
    name: "Yousef Ali",
    role: "Data Scientist",
    email: "yousef.ali@gmail.com",
    phone: "9012345678",
    start_date: "02/14/2021",
    active: false,
  },
  {
    id: 10,
    name: "Rania Omar",
    role: "QA Engineer",
    email: "rania.omar@gmail.com",
    phone: "0123456789",
    start_date: "10/22/2020",
    active: true,
  },
  {
    id: 11,
    name: "Hassan Nabil",
    role: "Business Analyst",
    email: "hassan.nabil@gmail.com",
    phone: "1234509876",
    start_date: "07/13/2019",
    active: true,
  },
  {
    id: 12,
    name: "Noor Saleh",
    role: "Customer Support",
    email: "noor.saleh@gmail.com",
    phone: "2345609875",
    start_date: "05/17/2022",
    active: true,
  },
  {
    id: 13,
    name: "Salma Reda",
    role: "Project Manager",
    email: "salma.reda@gmail.com",
    phone: "3456709874",
    start_date: "12/31/2018",
    active: false,
  },
];

export const teamColumns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <img
            src={
              row.values.image ||
              `https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010`
            }
            alt="profile"
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          />
          <span>{row.values.name}</span>
        </div>
      );
    },
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "E-Mail",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Start Date",
    accessor: "start_date",
  },
  {
    Header: "Active",
    accessor: "active",
    Cell: ({ row }) => {
      return (
        <div style={{ color: "red" }}>
          {" "}
          {row.values.active ? <CheckIcon /> : <XIcon />}
        </div>
      );
    },
  },
  {
    accessor: "action",
    Cell: ({ row }) => {
      return (
        <div>
          <button>
            <TrashIcon />
          </button>
        </div>
      );
    },
  },
];
