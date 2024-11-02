import { BetaAnalyticsDataClient } from "@google-analytics/data";

const aDataClient = new BetaAnalyticsDataClient();

async function getData(property_id: string) {
  const [response] = await aDataClient.runReport({
    property: `properties/${property_id}`,
    dateRanges: [
      {
        startDate: "30daysAgo",
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "date",
      },
    ],
    metrics: [{ name: "activeUsers" }],
  });
  console.log("Report Result:");
  if (response.rows) {
    response.rows.forEach((row) => {
      console.log(row);
    });
  }
}

getData("325436357");
