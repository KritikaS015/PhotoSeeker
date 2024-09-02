const formEl = document.querySelector("form");
const InputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showmore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = InputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    searchResults.appendChild(imageWrapper);
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
  });
  page++;
  if (page > 1) {
    showmore.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});
showmore.addEventListener("click", () => {
  searchImages();
});

// let btn=document.querySelector(".fa-solid fa-toggle-on");

// let currmode="light";

// btn.addEventListener("click",() => {

//    if(currmode==="light"){
//     console.log(currmode="dark");
//     // document.querySelector("body").style.backgroundColor="black";
//     document.querySelector("body").classList.add("dark");
//     document.querySelector("body").classList.remove("white");

//     }else{
//         console.log(currmode="light");
//         // document.querySelector("body").style.backgroundColor="white";
//         document.querySelector("body").classList.add("white");
//         document.querySelector("body").classList.remove("dark");
//    }
// });
