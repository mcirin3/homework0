import "./style.css";
import uicLogo from "/uic.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<a href="https://graceful-cendol-0c8b7f.netlify.app/" target="_blank">
<img src="${uicLogo}" class="logo uic" alt="UIC logo" />
</a>
    <div class="card">
    welcome to the website of mcirin3@uic.edu. 
    </div>
`;
