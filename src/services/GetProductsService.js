import Papa from "papaparse";

//TODO: refactor this file to get data from AWS

async function getProductsData(filter) {
  const fileList = [];
  if (filter === "All" || filter === "Rep Fitness") {
    fileList.push("./mock_data/rep_product_info.csv");
  }

  if (filter === "All" || filter === "Titan Fitness") {
    fileList.push("./mock_data/titan_product_info.csv");
  }

  if (filter === "All" || filter === "Force USA") {
    fileList.push("./mock_data/force_product_info.csv");
  }

  const response = [];
  for (let i = 0; i < fileList.length; i++) {
    var data = Papa.parse(await fetchCsv(fileList[i]));
    data = data.data.slice(1, -1).map((d) => {
      return {
        id: Math.random().toString(),
        name: d[0],
        orgPrice: d[1],
        price: d[2],
        image: d[3],
        url: d[4],
        source: "Source: To get from DB",
      };
    });
    response.push.apply(response, data);
  }

  shuffleArray(response)

  return response;
}

async function fetchCsv(file) {
  const response = await fetch(file);
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result.value);

  return csv;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export default getProductsData;
