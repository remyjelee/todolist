(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>a});var o=t(601),r=t.n(o),i=t(314),d=t.n(i)()(r());d.push([e.id,'/* General Styles */\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #333333; /* Charcoal Gray background */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #333333; /* Charcoal Gray text */\n    overflow-x: hidden; /* Prevent horizontal scrolling */\n}\n\n.header {\n    width: 100%;\n    padding: 1rem;\n    text-align: center;\n    background-color: #A8DADC; /* Mint Green */\n    color: #333333; /* Charcoal Gray text */\n    font-size: 1.5rem;\n    font-weight: bold;\n    position: sticky;\n    top: 0;\n    z-index: 1000;\n}\n\n.contents {\n    width: 90%;\n    max-width: 800px;\n    margin: 1rem auto;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    background-color: #FFFFFF; /* White background for contrast */\n    border-radius: 5px;\n    padding: 1rem;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n/* Back Button */\n.backButton {\n    position: absolute; /* Position it absolutely within the parent container */\n    top: 10px; /* Distance from the top */\n    left: 10px; /* Distance from the left */\n    background-color: white; /* Mint Green */\n    color: #333333; /* Charcoal Gray text */\n    padding: 0.5rem 1rem;\n    border: 1px solid #A8DADC; /* Mint Green border */\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 0.9rem; /* Slightly smaller text */\n    font-weight: bold; /* Bold text for consistency */\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */\n    transition: background-color 0.2s, box-shadow 0.2s;\n    z-index: 1000; /* Ensure it\'s always on top */\n    width: 150px;\n}\n\n.backButton:hover {\n    background-color: #A8DADC; /* Darker Mint Green on hover */\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly more pronounced shadow on hover */\n    border: 1px solid #93C9C8; /* Slightly darker border */\n}\n\n.backButton:active {\n    transform: scale(0.95); /* Tactile feedback on click */\n}\n\n/* Project and Todo List Styles */\n.projectItem, .todoItem {\n    position: relative;\n    padding: 1rem;\n    border: 1px solid #A8DADC; /* Mint Green border */\n    border-radius: 5px;\n    background-color: #FFFFFF; /* White background for contrast */\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    transition: transform 0.2s, box-shadow 0.2s;\n    font-size: 16px;\n    font-weight: bold;\n    color: #333333; /* Charcoal Gray text */\n}\n\n.projectItem:hover, .todoItem:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n/* Delete Button - Modern Design */\n.deleteButton {\n    position: absolute;\n    top: 8px; /* Adjusted for alignment */\n    right: 8px; /* Adjusted for alignment */\n    background-color: #FF4D4D;\n    color: white;\n    border: none;\n    width: 24px; /* Smaller size */\n    height: 24px; /* Smaller size */\n    border-radius: 12px; /* Perfectly circular button */\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 0.8rem; /* Slightly smaller font */\n    font-weight: bold;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); /* Subtle shadow for depth */\n    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;\n}\n\n.deleteButton:hover {\n    background-color: #E63939; /* Slightly darker red on hover */\n    transform: scale(1.1); /* Subtle zoom effect on hover */\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly more pronounced shadow on hover */\n}\n\n.deleteButton:active {\n    transform: scale(0.95); /* Slightly smaller on click for tactile feedback */\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); /* Reduced shadow on active */\n}\n\n/* Todo Checkbox and Priority */\n.statusWrapper {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n/* Customize Checkbox */\n.todoCheckbox {\n    -webkit-appearance: none; /* Remove default styling */\n    -moz-appearance: none;\n    appearance: none;\n    width: 20px;\n    height: 20px;\n    border: 2px solid #333333; /* Charcoal Gray border */\n    border-radius: 3px; /* Optional: for slightly rounded corners */\n    background-color: #FFFFFF; /* White background */\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    transition: background-color 0.2s ease, border-color 0.2s ease;\n}\n\n.todoCheckbox:hover {\n    background-color: #F0F0F0; /* Slightly darker background on hover */\n    border-color: #555555; /* Slightly darker border on hover */\n}\n\n.todoCheckbox:checked {\n    background-color: #FFFFFF; /* White background */\n    border-color: #333333; /* Charcoal border for consistency */\n}\n\n.todoCheckbox:checked::after {\n    content: "✓"; /* Add a checkmark */\n    color: #333333; /* Charcoal Gray checkmark */\n    font-size: 1rem; /* Adjust size as needed */\n    font-weight: bold;\n    position: absolute;\n}\n\n.todoPriority {\n    font-size: 0.9rem;\n    color: #555;\n    font-weight: bold;\n}\n\n/* Forms */\n.formContainer {\n    padding: 1rem;\n    background-color: #FFFFFF; /* White background for forms */\n    border: 1px solid #A8DADC; /* Mint Green border */\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n#toggleTodoForm {\n    margin-bottom: 1rem;\n    background-color: #A8DADC; /* Mint Green */\n    color: #333333; /* Charcoal Gray text */\n    border: none;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: bold; /* Ensures bold text for "+ Create Todo" */\n}\n\n#toggleTodoForm:hover {\n    background-color: #93C9C8;\n}\n\n#createTodoForm button {\n    margin-top: 1rem;\n    background-color: #A8DADC; /* Mint Green */\n    color: #333333; /* Charcoal Gray text */\n    border: none;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: bold; /* Ensures bold text for "Create" button */\n}\n\n#createTodoForm button:hover {\n    background-color: #93C9C8;\n}\n\n#toggleProjectForm {\n    margin-bottom: 1rem;\n    background-color: #A8DADC; /* Mint Green */\n    color: #333333; /* Charcoal Gray text */\n    border: none;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n#toggleProjectForm:hover {\n    background-color: #93C9C8;\n}\n\n#createProjectForm {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n#createProjectForm input {\n    margin: 0;\n    color: #333333; /* Ensure input text is visible */\n    background-color: #FFFFFF; /* Ensure input background is white */\n}\n\n#createProjectForm button {\n    margin-top: 1rem;\n    background-color: #A8DADC; /* Mint Green */\n    color: #333333; /* Charcoal Gray text */\n    border: none;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n#createProjectForm button:hover {\n    background-color: #93C9C8;\n}\n\n#createTodoForm {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n#createTodoForm select {\n    margin-bottom: 1rem;\n}\n\ninput, textarea, select, button {\n    padding: 0.5rem;\n    font-size: 1rem;\n    border: 1px solid #A8DADC; /* Mint Green */\n    border-radius: 5px;\n    outline: none;\n    width: 100%;\n    color: #333333; /* Ensure text color is visible */\n    background-color: #FFFFFF; /* White background */\n}\n\ntextarea {\n    resize: vertical;\n}\n\nbutton {\n    background-color: #A8DADC; /* Mint Green */\n    color: #333333; /* Charcoal Gray text */\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.2s;\n}\n\nbutton:hover {\n    background-color: #93C9C8;\n}\n\n/* Todo Details Page */\n.todoDetails {\n    background: #FFFFFF; /* White background for details */\n    padding: 1.5rem;\n    border-radius: 8px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    color: #333333; /* Charcoal Gray text */\n    border: 1px solid #A8DADC; /* Mint Green border */\n}\n\n.todoDetailRow {\n    margin: 0.5rem 0;\n    font-size: 1rem;\n    color: #333333;\n}\n\n.todoDetailRow strong {\n    color: #555;\n}\n\n/* Edit Button */\n.editButton {\n    align-self: flex-start;\n    padding: 0.75rem 1.5rem;\n    background: #A8DADC; /* Mint Green */\n    color: #333333; /* Charcoal Gray text */\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.editButton:hover {\n    background: #93C9C8;\n}\n\n/* Edit Form */\n.editTodoForm {\n    padding: 1.5rem;\n    background: #FFFFFF; /* White background */\n    border: 1px solid #A8DADC; /* Mint Green */\n    border-radius: 8px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.editTodoForm div {\n    margin-bottom: 1rem;\n}\n\n.editTodoForm label {\n    display: block;\n    margin-bottom: 0.5rem;\n    font-weight: bold;\n    color: #333333; /* Ensure labels are visible */\n}\n\n.editTodoForm input,\n.editTodoForm textarea,\n.editTodoForm select {\n    padding: 0.75rem;\n    width: 100%;\n    border: 1px solid #A8DADC; /* Mint Green */\n    border-radius: 5px;\n    font-size: 1rem;\n    color: #333333; /* Ensure input text is visible */\n    background-color: #FFFFFF; /* Ensure consistent background for inputs */\n}\n\n.editTodoForm select {\n    background-color: #FFFFFF;\n    cursor: pointer;\n}\n\n.editTodoForm button {\n    padding: 0.75rem 1.5rem;\n    background-color: #A8DADC; /* Mint Green */\n    color: #333333; /* Charcoal Gray text */\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.editTodoForm button:hover {\n    background-color: #93C9C8;\n}\n\n/* Responsive Design */\n@media (max-width: 600px) {\n    .contents {\n        width: 95%;\n    }\n\n    .header {\n        font-size: 1.2rem;\n    }\n\n    .backButton {\n        font-size: 0.9rem;\n        padding: 0.4rem 0.8rem;\n    }\n\n    .editButton, .editTodoForm button {\n        font-size: 0.9rem;\n        padding: 0.5rem 1rem;\n    }\n}\n',""]);const a=d},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],s=o.base?c[0]+o.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var b=r(m,o);o.byIndex=a,n.splice(a,0,{identifier:u,updater:b,references:1})}d.push(u)}return d}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=t(i[d]);n[a].references--}for(var c=o(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),d=t.n(i),a=t(659),c=t.n(a),s=t(56),l=t.n(s),u=t(540),p=t.n(u),m=t(113),b=t.n(m),h=t(365),g={};g.styleTagTransform=b(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=p(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;const f=e=>{document.querySelector(".header").innerHTML=e};function y(e,n){f(n.title),v();const t=document.querySelector(".contents"),o=document.createElement("button");o.classList.add("backButton"),o.innerHTML=`< ${e.name}`,o.addEventListener("click",(()=>x("project",e))),t.appendChild(o);const r=document.createElement("div");r.classList.add("todoDetails");const i=n.daysUntilDue>0?`${n.daysUntilDue} days`:0===n.daysUntilDue?"Due today!":"Overdue!";r.innerHTML=`\n        <div class="todoDetailRow"><strong>Description:</strong> ${n.description||"No description provided."}</div>\n        <div class="todoDetailRow"><strong>Due Date:</strong> ${n.dueDate.toDateString()}</div>\n        <div class="todoDetailRow"><strong>Days Until Due:</strong> ${i}</div>\n        <div class="todoDetailRow"><strong>Status:</strong> ${n.completed?"Completed":"Incomplete"}</div>\n    `,t.appendChild(r);const d=document.createElement("button");d.classList.add("editButton"),d.innerHTML="Edit Todo",d.addEventListener("click",(()=>function(e,n){v();const t=document.querySelector(".contents"),o=document.createElement("button");o.classList.add("backButton"),o.innerHTML="< Back",o.addEventListener("click",(()=>y(e,n))),t.appendChild(o);const r=document.createElement("form");r.classList.add("editTodoForm"),r.innerHTML=`\n        <div>\n            <label for="editTodoTitle">Title</label>\n            <input type="text" id="editTodoTitle" value="${n.title}" required />\n        </div>\n        <div>\n            <label for="editTodoDescription">Description</label>\n            <textarea id="editTodoDescription">${n.description||""}</textarea>\n        </div>\n        <div>\n            <label for="editTodoDueDate">Due Date</label>\n            <input type="date" id="editTodoDueDate" value="${n.dueDate.toISOString().split("T")[0]}" required />\n        </div>\n        <div>\n            <label for="editTodoPriority">Priority</label>\n            <select id="editTodoPriority">\n                <option value="High" ${"High"===n.priority?"selected":""}>High</option>\n                <option value="Medium" ${"Medium"===n.priority?"selected":""}>Medium</option>\n                <option value="Low" ${"Low"===n.priority?"selected":""}>Low</option>\n            </select>\n        </div>\n        <button type="submit">Save Changes</button>\n    `,r.addEventListener("submit",(t=>{t.preventDefault();const o=document.getElementById("editTodoTitle").value.trim(),r=document.getElementById("editTodoDescription").value.trim(),i=document.getElementById("editTodoDueDate").value,d=document.getElementById("editTodoPriority").value;o&&i&&(n.title=o,n.description=r,n.dueDate=new Date(i),n.priority=d,y(e,n))})),t.appendChild(r)}(e,n))),t.appendChild(d)}function v(){document.querySelector(".contents").innerHTML=""}function x(e,n,t){switch(e){case"projectList":(()=>{f("Projects"),v();const e=document.querySelector(".contents"),{projects:n}=L.instance;n.forEach((n=>{let t=document.createElement("div");t.classList.add("projectItem");const o=document.createElement("button");o.classList.add("deleteButton"),o.innerHTML="X",o.addEventListener("click",(e=>{e.stopPropagation(),L.instance.deleteProject(n.id),x("projectList")})),t.appendChild(o);let r=document.createElement("div");r.innerHTML=n.name,r.classList.add("itemTitle"),t.appendChild(r),t.addEventListener("click",(()=>{x("project",n)})),e.appendChild(t)}));const t=document.createElement("div");t.classList.add("formContainer"),t.innerHTML='\n        <button id="toggleProjectForm">+ Create Project</button>\n        <form id="createProjectForm" style="display: none;">\n            <input type="text" placeholder="New Project Name" id="newProjectName" required />\n            <button type="submit">Create</button>\n        </form>\n    ',e.appendChild(t),document.getElementById("toggleProjectForm").addEventListener("click",(()=>{const e=document.getElementById("createProjectForm");e.style.display="none"===e.style.display?"block":"none"})),document.getElementById("createProjectForm").addEventListener("submit",(e=>{e.preventDefault();const n=document.getElementById("newProjectName").value.trim();n&&(L.instance.addProject(n),x("projectList"))}))})();break;case"project":(e=>{f(e.name),v();const n=document.querySelector(".contents"),t=document.createElement("button");t.classList.add("backButton"),t.innerHTML="< Back",t.addEventListener("click",(()=>x("projectList"))),n.appendChild(t);const{todos:o}=e;o.forEach((t=>{let o=document.createElement("div");o.classList.add("todoItem");const r=document.createElement("button");r.classList.add("deleteButton"),r.innerHTML="X",r.addEventListener("click",(n=>{n.stopPropagation(),e.deleteTodo(t.id),x("project",e)})),o.appendChild(r);let i=document.createElement("div");i.innerHTML=t.title,i.classList.add("itemTitle"),o.appendChild(i);let d=document.createElement("div");d.classList.add("statusWrapper");let a=document.createElement("input");a.type="checkbox",a.checked=t.completed,a.classList.add("todoCheckbox"),a.addEventListener("click",(n=>{n.stopPropagation(),t.completed=a.checked,x("project",e)}));let c=document.createElement("span");c.innerHTML=`Priority: ${t.priority}`,c.classList.add("todoPriority"),d.appendChild(a),d.appendChild(c),o.appendChild(d);let s=document.createElement("div");s.innerHTML=t.dueDate.toDateString(),s.classList.add("todoDueDate"),o.appendChild(s),o.addEventListener("click",(()=>{x("todo",e,t)})),n.appendChild(o)}));const r=document.createElement("div");r.classList.add("formContainer"),r.innerHTML='\n        <button id="toggleTodoForm">+ Create Todo</button>\n        <form id="createTodoForm" style="display: none;">\n            <label for="todoTitle">Title</label>\n            <input type="text" id="todoTitle" required />\n            <label for="todoDescription">Description</label>\n            <textarea id="todoDescription"></textarea>\n            <label for="todoDueDate">Due Date</label>\n            <input type="date" id="todoDueDate" required />\n            <label for="todoPriority">Priority</label>\n            <select id="todoPriority">\n                <option value="High">High</option>\n                <option value="Medium">Medium</option>\n                <option value="Low">Low</option>\n            </select>\n            <button type="submit">Create</button>\n        </form>\n    ',n.appendChild(r),document.getElementById("toggleTodoForm").addEventListener("click",(()=>{const e=document.getElementById("createTodoForm");e.style.display="none"===e.style.display?"block":"none"})),document.getElementById("createTodoForm").addEventListener("submit",(n=>{n.preventDefault();const t=document.getElementById("todoTitle").value.trim(),o=document.getElementById("todoDescription").value.trim(),r=document.getElementById("todoDueDate").value,i=document.getElementById("todoPriority").value;t&&r&&(e.addTodo({title:t,description:o,dueDate:r,priority:i}),x("project",e))}))})(n);break;case"todo":y(n,t);break;default:console.log("Error: Invalid transition type.")}}const D={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let F;const k=new Uint8Array(16);function C(){if(!F){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");F=crypto.getRandomValues.bind(crypto)}return F(k)}const w=[];for(let e=0;e<256;++e)w.push((e+256).toString(16).slice(1));const T=function(e,n,t){if(D.randomUUID&&!n&&!e)return D.randomUUID();const o=(e=e||{}).random||(e.rng||C)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n){t=t||0;for(let e=0;e<16;++e)n[t+e]=o[e];return n}return function(e,n=0){return(w[e[n+0]]+w[e[n+1]]+w[e[n+2]]+w[e[n+3]]+"-"+w[e[n+4]]+w[e[n+5]]+"-"+w[e[n+6]]+w[e[n+7]]+"-"+w[e[n+8]]+w[e[n+9]]+"-"+w[e[n+10]]+w[e[n+11]]+w[e[n+12]]+w[e[n+13]]+w[e[n+14]]+w[e[n+15]]).toLowerCase()}(o)};class E{constructor(e,n,t,o){this.id=T(),this.title=e,this.description=n,this.dueDate=new Date(t),this.priority=o,this.completed=!1}get daysUntilDue(){const e=new Date,n=this.dueDate-e;return Math.ceil(n/864e5)}set priority(e){if(!["High","Medium","Low"].includes(e))throw new Error("Invalid priority value.");this._priority=e}get priority(){return this._priority}update({title:e,description:n,dueDate:t,priority:o}){e&&(this.title=e),n&&(this.description=n),t&&(this.dueDate=new Date(t)),o&&(this.priority=o)}markAsComplete(){this.completed=!0}markAsIncomplete(){this.completed=!1}isOverdue(){const e=new Date;return!this.completed&&this.dueDate<e}}class j{constructor(e){this.id=T(),this.name=e,this.todos=[]}addTodo({title:e,description:n,dueDate:t,priority:o}){const r=new E(e,n,t,o);this.todos.push(r)}deleteTodo(e){const n=this.todos.findIndex((n=>n.id===e));-1!==n?(this.todos.splice(n,1),console.log(`Todo with ID ${e} deleted.`)):console.log(`Todo with ID ${e} not found.`)}}class L{static instance;constructor(){if(L.instance)return L.instance;this.projects=[],L.instance=this;const e=new j("My Project");this.projects.push(e),console.log('Default project "My Project" created.')}addProject(e){if(this.projects.some((n=>n.name===e)))return void console.log(`Project "${e}" already exists.`);const n=new j(e);this.projects.push(n),console.log(`Project "${e}" added.`)}deleteProject(e){const n=this.projects.findIndex((n=>n.id===e));if(-1!==n){const e=this.projects.splice(n,1);console.log(`Project "${e[0].name}" deleted.`)}else console.log(`Project with ID "${e}" not found.`)}getProject(e){return this.projects.find((n=>n.name===e))||null}listProjects(){console.log("Projects:"),this.projects.forEach(((e,n)=>{console.log(`${n+1}. ${e.name}`)}))}}new L,x("projectList")})();