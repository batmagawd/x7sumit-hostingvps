const pages = ["overview","servers","files","console","deploy","billing","settings"];
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove("show"),3200);
}
function showPage(name){
  if(!pages.includes(name)) return;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active-page"));
  document.getElementById("page-"+name).classList.add("active-page");
  document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===name));
  document.getElementById("pageCrumb").textContent = name.charAt(0).toUpperCase()+name.slice(1);
  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-page]").forEach(btn=>btn.addEventListener("click",()=>showPage(btn.dataset.page)));
document.querySelectorAll("[data-goto]").forEach(btn=>btn.addEventListener("click",()=>showPage(btn.dataset.goto)));
document.querySelectorAll("[data-toast]").forEach(btn=>btn.addEventListener("click",()=>showToast(btn.dataset.toast)));
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
document.querySelector(".close-notice").addEventListener("click",()=>document.querySelector(".notice").remove());
document.getElementById("clearConsole").addEventListener("click",()=>{
  document.getElementById("consoleOutput").innerHTML='<p class="prompt-line">x7sumit@panel:~$ <span class="cursor"></span></p>';
  showToast("Demo console cleared.");
});
document.getElementById("fileInput").addEventListener("change",event=>{
  const list=document.getElementById("fileList");
  const files=[...event.target.files];
  files.forEach(file=>{
    const row=document.createElement("div");
    row.className="file-row";
    const ext=(file.name.split(".").pop()||"FILE").toUpperCase().slice(0,3);
    const type=document.createElement("span"); type.className="file-type"; type.textContent=ext;
    const name=document.createElement("b"); name.textContent=file.name;
    const desc=document.createElement("small"); desc.textContent="Browser preview upload";
    const size=document.createElement("span"); size.textContent=file.size<1024?file.size+" B":(file.size/1024).toFixed(1)+" KB";
    row.append(type,name,desc,size); list.appendChild(row);
  });
  if(files.length) showToast(files.length+" file(s) added to this browser preview only.");
  document.getElementById("fileCount").textContent=(list.children.length)+" items";
  event.target.value="";
});
document.getElementById("deployBtn").addEventListener("click",()=>{
  const url=document.getElementById("repoUrl").value.trim();
  if(!url){showToast("Please enter your GitHub repository URL first.");return;}
  if(!/^https:\/\/github\.com\/[^/]+\/[^/]+/.test(url)){showToast("Enter a valid GitHub repository URL.");return;}
  showToast("Repository details captured in preview. A backend is needed to deploy it.");
});
document.addEventListener("click",event=>{
  if(window.innerWidth>720) return;
  const sidebar=document.getElementById("sidebar");
  if(sidebar.classList.contains("open")&&!sidebar.contains(event.target)&&!document.getElementById("menuBtn").contains(event.target)) sidebar.classList.remove("open");
});
