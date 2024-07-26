export const baseUrl = "https://newsapi.org/v2";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const APIkey = "6d2774723fe7454d9f15505bf40e8cef";


export function getArticles(keyword) {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 7);
  const toDate = new Date();

  const url = `${baseUrl}/everything?q=${keyword}&apiKey=${APIkey}&from=${fromDate.toISOString()}&to=${toDate.toISOString()}&pageSize=100`;

  return fetch(url)
    .then(checkResponse)
    .then((data) => {
      return data.articles.map((article) => ({
        sourceName: article.source.name,
        title: article.title,
        publishedAt: formatDate(article.publishedAt),
        description: article.description,
        imageUrl: article.urlToImage,
      }));
    });
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export function saveArticle(article, token) {
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(article),
  }).then(checkResponse);
}

export function deleteArticle(articleId, token) {
  return fetch(`${baseUrl}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}


export const getSavedArticles = () => {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/articles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
