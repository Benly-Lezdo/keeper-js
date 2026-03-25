// here when profileId and visibleProfileIds matches then show Personal Details from links
// if not matches then show all the links

// example 1
const profileId = 12;

const links = [
  { name: "Personal Details", url: "/admin/setting/details" },
  { name: "Company Details", url: "/admin/setting/details" },
  { name: "Companies ", url: "/admin/setting/companies" },
  { name: "Work Locations", url: "/admin/setting/location" },
  { name: "Departments", url: "/admin/setting/department" },
  { name: "Designations", url: "/admin/setting/designation" },
];

const visibleProfileIds = [2, 3, 4, 5, 6, 7, 8];
const filteredLinks = visibleProfileIds.includes(profileId)
  ? [links[0]]
  : links;

console.log("filteredLinks", filteredLinks);

// example 2 => when profileId not mayches all the links1 will be shown when matches
// when matches profileId1 and links1 same id only be in o/p
const profileId1 = 6;

const links1 = [
  { name: "Personal Details", url: "/admin/setting/details", id: 1 },
  { name: "Company Details", url: "/admin/setting/details", id: 2 },
  { name: "Companies ", url: "/admin/setting/companies", id: 3 },
  { name: "Work Locations", url: "/admin/setting/location", id: 4 },
  { name: "Departments", url: "/admin/setting/department", id: 5 },
  { name: "Designations", url: "/admin/setting/designation", id: 6 },
];

const visibleProfileIds1 = [2, 3, 4, 5, 6, 7, 8];
const filteredLinks1 = visibleProfileIds1.includes(profileId1)
  ? links1.filter((item) => item.id == profileId1)
  : links1;

console.log("filteredLinks1", filteredLinks1);

// example 3 =>
// toLowerCase() converts a string to all lowercase letters so comparison becomes case-insensitive.
// includes() checks if a string contains a specific word or character and returns true or false.

import { useState } from "react";

function App() {
  const data = [
    { id: 1, value: "blue" },
    { id: 2, value: "red" },
    { id: 3, value: "orange" },
  ];

  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const filteredData = data.filter((item) =>
    item.value.toLowerCase().includes(search.toLowerCase()),
  );
  console.log(filteredData);
  return (
    <div style={{ width: "200px", position: "relative" }}>
      <input
        type="text"
        placeholder="Search color..."
        value={search}
        onClick={() => setShow(true)}
        onChange={(e) => {
          setSearch(e.target.value);
          setShow(true);
        }}
      />

      {show && (
        <div style={{ border: "1px solid #ccc", background: "#fff" }}>
          {filteredData.map((item) => (
            <div
              key={item.id}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => {
                setSearch(item.value);
                setShow(false);
              }}
            >
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

// example 4 =>
const d = [
  { id: 1, value: "blue" },
  { id: 2, value: "red" },
  { id: 3, value: "orange" },
];

const v = "o";

const filteredData = d.filter((item) =>
  item.value.toLowerCase().includes(v.toLowerCase()),
);
console.log(filteredData);

// example 5 =>
const vv = 'reddit'
const cc = 'R'
console.log(vv.toLowerCase().includes(cc.toLowerCase()))

const vvv = 'rEDdit'
const ccc = 'reDDiT'
console.log(vvv.toLowerCase().includes(ccc.toLowerCase()))