const apiKey = "6d2774723fe7454d9f15505bf40e8cef";
const baseUrl = "https://newsapi.org/v2";

// Check the response
export const checkResponse = (res) => {
  if (res.ok) {
    return res.json().catch((err) => {
      console.error("Failed to parse JSON:", err);
      return Promise.reject("Failed to parse JSON");
    });
  }
  return res.text().then((text) => {
    console.error("Error response text:", text);
    return Promise.reject(`Error: ${res.status}`);
  });
};

export function searchArticles(keyword) {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 7);
  const toDate = new Date();

  const url = `${baseUrl}/everything?q=${keyword}&from=${fromDate.toISOString()}&to=${toDate.toISOString()}&apiKey=${apiKey}&pageSize=100`;
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return fetch(url)
    .then(checkResponse)
    .then((data) => {
      return data.articles.map((article) => ({
        ...article,
        keyword: capitalize(keyword),
        sourceName: article.source.name,
        title: article.title,
        publishedAt: formatDate(article.publishedAt),
        description: article.description,
        imageUrl: article.urlToImage,
      }));
    })
    .catch((error) => {
      throw new Error(
        "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
      );
    });
}

// Format the date
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

