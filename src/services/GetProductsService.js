import Papa from "papaparse";

//TODO: refactor this file to get data from AWS

async function getProductsData() {
  const data = Papa.parse(await fetchCsv());
  return data.data.slice(1, -1).map((d) => {
    return {
      name: d[0],
      price: d[2],
      image: d[3],
      url: d[4],
      description: "LOOOOL",
    };
  });
}

async function fetchCsv() {
  const response = await fetch("./mock_data/rep_product_info.csv");
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result.value);

  return csv;
}

export default getProductsData;
