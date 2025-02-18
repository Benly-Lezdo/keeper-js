// example =>1
const loginSummaryPieData = {
    loginDetailsPie: {
        data: [
            { label: 'Successful Logins', value: 120 },
            { label: 'Failed Logins', value: 30 },
            { label: 'Timeouts', value: 15 },
            { label: 'Invalid Attempts', value: 10 },
        ],
    },
};

const dataArray =
    loginSummaryPieData?.loginDetailsPie &&
        loginSummaryPieData?.loginDetailsPie.data.length > 0
        ? loginSummaryPieData?.loginDetailsPie.data
        : [];

console.log(dataArray);


// example =>2 
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
