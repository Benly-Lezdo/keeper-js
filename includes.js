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
