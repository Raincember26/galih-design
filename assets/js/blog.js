const GHOST_URL = "http://localhost:2368"; // Ganti dengan URL Ghost lokal
const API_KEY = "f711cf22cdca7eb23f49c4c66c"; // Dapatkan dari Ghost Admin

async function loadPosts() {
  try {
    const response = await fetch(
      `${GHOST_URL}/ghost/api/content/posts/?key=${API_KEY}&include=tags`
    );
    const { posts } = await response.json();
    renderPosts(posts);
  } catch (error) {
    console.error("Error loading posts:", error);
  }
}

function renderPosts(posts) {
  const container = document.getElementById("ghost-posts");
  
  posts.forEach(post => {
    const postEl = document.createElement("article");
    postEl.className = "group transition-all duration-300 hover:translate-y-1";
    postEl.innerHTML = `
      <h2 class="text-xl font-semibold text-gray-700 mb-2">${post.title}</h2>
      <p class="text-gray-700 leading-relaxed">${post.excerpt || "No excerpt"}</p>
      <a href="post.html?slug=${post.slug}" class="mt-4 inline-block text-gray-400 hover:text-gray-700 transition">
        Read more ➤
      </a>
    `;
    container.appendChild(postEl);
  });
}

// Jalankan saat halaman load
document.addEventListener("DOMContentLoaded", loadPosts);