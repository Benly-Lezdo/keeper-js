// example => 1
const loginSummaryPieData = {
  loginDetailsPie: {
    data: [
      { label: "Successful Logins", value: 120 },
      { label: "Failed Logins", value: 30 },
      { label: "Timeouts", value: 15 },
      { label: "Invalid Attempts", value: 10 },
    ],
  },
};

// function => 1
const dataArray =
  loginSummaryPieData?.loginDetailsPie &&
  loginSummaryPieData?.loginDetailsPie?.data?.length > 0
    ? loginSummaryPieData?.loginDetailsPie?.data
    : [];
console.log(dataArray);

// function => 2
const d = loginSummaryPieData?.loginDetailsPie?.data;
console.log(d);

// So difference is: 👉🏻
// If loginDetailsPie does not exist or data is empty, it returns:
// d may become undefined
// dataArray will always be an array ([] if no data) dataArray adds a safety check:

// example => 2
const loginSummaryPieDataNew = {
  success: true, // Indicates if data retrieval was successful
  web: 150, // Number of logins from Web
  mobile: 100, // Number of logins from Mobile
};

const pieData =
  loginSummaryPieDataNew && loginSummaryPieDataNew.success
    ? [
        { label: "Web", value: loginSummaryPieDataNew.web },
        { label: "Mobile", value: loginSummaryPieDataNew.mobile },
      ]
    : [];

console.log(pieData);
