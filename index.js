const url = "https://www.reddit.com/r/showerthoughts/random.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => main.innerHTML = showThought(data));

const showThought = (data) => {
    const thought = data[0].data.children[0].data.title;
    const url = data[0].data.children[0].data.url;
    const content = `
        <h2><a target="_blank" href="${url}" rel="noreferrer">${thought}</a></h2>
        <a href="#" onclick="window.location.reload(true);">
          <img height="50" width="50" alt="Load another shower thought" src="static/reload.png">
        </a>
    `;
    return content;
}
