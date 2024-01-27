const icons = document.querySelectorAll(".icon");
const searchInput = document.querySelector("#search");
const posts = document.querySelectorAll(".post");

icons.forEach((icon) => {
  icon.onclick = () => {
    const postElement = icon.closest(".post");
    icon.classList.toggle("filled");
    if (postElement) {
      postElement.classList.toggle("border__filled");
    }
  };
});

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase()

  posts.forEach((post) => {
    const postTitle = post.querySelector('.post__title').textContent.toLowerCase()
    if(postTitle.includes(term)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }

    if (term == '') {
      post.style.display = 'block';
    }
  })
});
