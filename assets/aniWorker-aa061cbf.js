(function(){"use strict";const i=["ani-home","ani-quest","ani-weapon","ani-gun","ani-genericSkill","ani-uniqueSkill","ani-uniqueCombo","ani-uniqueFS","ani-uniqueVictory","ani-uniqueOther","ani-misc","ani-extra"],s=t=>t.map(u=>({...u,fullName:u.name})),m=t=>{const u=s(t.common),e=t.Male.map(n=>({...n,fullName:`Male ${n.name}`})),o=t.Female.map(n=>({...n,fullName:`Female ${n.name}`}));return[...u,...e,...o]},c=t=>Object.entries(t).flatMap(([e,o])=>o.map(n=>({...n,fullName:`${e} ${n.name}`,icon:`weapon_${e}`}))),l={Long:"Long Range",Close:"Close Range",Rapid:"Rapid Fire"},a={"ani-home":m,"ani-weapon":c,"ani-gun":t=>Object.entries(t).flatMap(([e,o])=>o.map(n=>({...n,fullName:`${l[e]} Manacaster ${n.name}`,icon:`gun_${e}`}))),"ani-genericSkill":c,"ani-uniqueSkill":t=>Object.values(t).flat().map(e=>({...e,fullName:e.subtitle?`${e.subtitle} ${e.name}`:e.name})),"ani-uniqueVictory":t=>Object.values(t).flat().map(e=>({...e,userName:e.name,fullName:`${e.name} Victory`,name:"Victory"})),"ani-uniqueFS":t=>Object.values(t).flat().map(e=>({...e,userName:e.name,fullName:`${e.name} ${e.subtitle||""} Force Strike`,name:"Force Strike"})),"ani-uniqueCombo":t=>Object.values(t).flat().map(e=>({...e,userName:e.name,fullName:`${e.name} ${e.subtitle||""} Combo`,name:"Combo"})),"ani-uniqueOther":t=>Object.values(t).flat().flatMap(({user:e,name:o,animations:n})=>n.map(r=>({...r,user:e,fullName:`${o} ${r.name}`}))),"ani-extra":t=>Object.values(t).flat().map(e=>({...e,fullName:e.name}))};addEventListener("message",({data:t})=>{const u=i.flatMap(e=>{var n;const o=t[e];return((n=a[e])==null?void 0:n.call(a,o))??s(o)});postMessage(u)})})();
