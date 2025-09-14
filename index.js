import{a as u,S as d,i as s}from"./assets/vendor-2NRXftFG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(o){return u.get("https://pixabay.com/api/",{params:{key:"52255318-c301db47a64feee351027f4f6",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}var p=new d(".gallery a",{captionData:"alt"});const c=document.querySelector(".gallery");function m(o){let t=[];o.map(i=>{t.push(`
      <a href="${i.largeImageURL}" class="gallery-item" style="background-image: url('${i.webformatURL}')">
        <ul class="gallery-item-info">
          <li>Likes<br><span>${i.likes}</span></li>
          <li>Views<br><span>${i.views}</span></li>
          <li>Comments<br><span>${i.comments}</span></li>
          <li>Downloads<br><span>${i.downloads}</span></li>
        </ul>
      </a>
    `)}),c.innerHTML=t.join(""),p.refresh()}function g(){c.innerHTML=""}function y(){document.querySelector(".loader").classList.remove("hidden")}function h(){document.querySelector(".loader").classList.add("hidden")}const L=document.querySelector(".form"),l=document.querySelector(".formInput");L.addEventListener("submit",o=>{o.preventDefault(),l.value.trim()==""?s.warning({title:"😱",message:"Enter text in input",position:"topRight"}):(g(),y(),f(l.value).then(t=>t.data).then(t=>{t.hits.length==0?s.warning({title:"⛔",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(m(t.hits),h())}).catch(t=>console.log(t)))});
//# sourceMappingURL=index.js.map
