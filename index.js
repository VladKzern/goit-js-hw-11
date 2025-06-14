import{a as p,S as m,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function f(r){const s="50855341-73893dbf730abd886a634fcbe",a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return p.get("https://pixabay.com/api/",{params:a}).then(i=>i.data)}const l=document.querySelector(".loader"),c=document.querySelector(".gallery"),g=new m(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function h(r){const s=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:o,comments:u,downloads:d})=>`
    <li class="image-box">
        <a href="${i}">
        <img src="${a}" alt="${e}" width="300">
        </a>
        <div class="image-stats">
            <div class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${t}</span>
            </div>
            <div class="image-stat">
                <span class="label">Views</span>
                <span class="value">${o}</span>
            </div>
            <div class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${u}</span>
            </div>
            <div class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${d}</span>
            </div>
        </div>
    </li>`).join("");c.innerHTML=s,g.refresh()}function y(){c.innerHTML=""}function v(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const L=document.querySelector(".form");L.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements["search-text"].value.trim();if(s===""){n.warning({message:"Please enter a search term.",closeOnClick:!0,position:"topRight"});return}y(),v(),f(s).then(a=>{if(!a.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0,position:"topRight"});return}h(a.hits)}).catch(a=>n.error({message:`${a}`,closeOnClick:!0,position:"topRight"})).finally(()=>b())});
//# sourceMappingURL=index.js.map
