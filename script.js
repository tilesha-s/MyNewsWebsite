// Firebase URL
const FB_DB = 'https://mynewswebsite-bb964-default-rtdb.firebaseio.com/news.json';

// Fetch all news
async function fetchNews() {
  const res = await fetch(FB_DB);
  const data = await res.json();
  return data ? Object.values(data) : [];
}

// Render full news list (News page)
async function renderNewsList() {
  const newsData = await fetchNews();
  let container = document.getElementById("newsList");
  if (!container) return;
  container.innerHTML = "";

  newsData.reverse().forEach(n => {
    container.innerHTML += `
      <div class="card">
        <h3>${n.title}</h3>
        <p>${n.content}</p>  <!-- Show full content -->
      </div>
    `;
  });
}

// Render single news (single.html)
async function renderSingleNews() {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");

  const newsData = await fetchNews();
  const news = newsData.find(n => n.id == id);

  if (news) {
    document.getElementById("title").textContent = news.title;
    document.getElementById("content").textContent = news.content;
  }
}

// Admin: Add news
async function adminAddNews() {
  const title = document.getElementById("newTitle").value;
  const content = document.getElementById("newContent").value;

  const newsItem = { id: Date.now(), title, content };

  await fetch(FB_DB, {
    method: 'POST',
    body: JSON.stringify(newsItem),
    headers: { 'Content-Type': 'application/json' }
  });

  alert("News added successfully!");
  document.getElementById("newTitle").value = '';
  document.getElementById("newContent").value = '';
  renderAdminList();
}

// Admin: Render list with delete buttons
async function renderAdminList() {
  const res = await fetch(FB_DB);
  const data = await res.json();
  const adminList = document.getElementById("adminNews");
  if (!adminList) return;
  adminList.innerHTML = "";

  for (const key in data) {
  const n = data[key];
  adminList.innerHTML += `
    <div class="card admin-card">
      <div class="news-content">
        <h4>${n.title}</h4>
        <p>${n.content.substring(0, 100)}...</p> <!-- shows first 100 chars -->
      </div>
      <button onclick="deleteNews('${key}')">Delete</button>
    </div>
    `;
  }
}

// Admin: Delete news
async function deleteNews(key) {
  await fetch(`https://mynewswebsite-bb964-default-rtdb.firebaseio.com/news/${key}.json`, {
    method: 'DELETE'
  });
  alert("News deleted!");
  renderAdminList();
}
// Render Home page news (latest 3)
async function renderHomeNews() {
  const newsData = await fetchNews();
  let container = document.getElementById("newsList");
  if (!container) return;
  container.innerHTML = "";

  // Show only 3 latest news
  newsData.slice(-3).reverse().forEach(n => {
  container.innerHTML += `
    <div class="card home-card">
      <h3>${n.title}</h3>
      <p>${n.content.substring(0, 100)}...</p>
      <a href="single.html?id=${n.id}">Read more</a>
    </div>
    `;
  });
}
