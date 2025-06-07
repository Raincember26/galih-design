const GHOST_URL = "https://galih-design-cms.fly.dev"; // Ganti dengan URL Ghost lokal
const API_KEY = "1136fa3e402278881621fedb4f"; // Dapatkan dari Ghost Admin

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
  container.className = "space-y-6";

  posts.forEach((post, index) => {
    // Wrapper article dengan efek hover dan link
    const postEl = document.createElement("a");
    postEl.href = `post.html?slug=${post.slug}`;
    postEl.className = "block group transition-all duration-300 hover:translate-x-2";
    postEl.innerHTML = `
      <article>
        <h2 class="text-xl font-semibold text-gray-800 mb-1 group-hover:text-gray-900">${post.title}</h2>
        <p class="text-gray-400 line-clamp-1 mb-4">${post.excerpt || "No excerpt"}</p>
      </article>
    `;

    // Divider line kecuali untuk post terakhir
    if (index < posts.length - 1) {
      const divider = document.createElement("div");
      divider.className = "border-b border-gray-200";
      container.appendChild(postEl);
      container.appendChild(divider);
    } else {
      container.appendChild(postEl);
    }
  });
}

// Jalankan saat halaman load
document.addEventListener("DOMContentLoaded", loadPosts);