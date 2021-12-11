/**
import Papa from "papaparse";

async function getProductsMockData(filter) {
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
 */

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function getProductsData(filter) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    mode: "cors",
  };

  var url = "https://nkuhbsd8a9.execute-api.us-east-1.amazonaws.com/prod?";

  if (filter !== "All") {
    url = url + "source=" + filter;
  }

  var data = fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (products) {
      return products.map((d) => {
        return {
          id: Math.random().toString(),
          name: d["name"],
          orgPrice: d["regular_price"],
          price: d["sale_price"],
          image: d["img_url"],
          url: d["href"],
          source: d["source"],
        };
      });
    });

  shuffleArray(data);
  return data;
}

export default getProductsData;

//https://nkuhbsd8a9.execute-api.us-east-1.amazonaws.com/prod?source=Rogue%20Fitness
