// build time:Wed Jul 31 2019 16:51:48 GMT+0800 (GMT+08:00)
onload=function(){var e=0;var a=document.getElementsByTagName("html")[0];var t=document.getElementsByTagName("body")[0];a.onclick=function(a){var n=document.createElement("b");n.style.color="#87CEFA";n.style.zIndex=9999;n.style.position="absolute";n.style.select="none";var r=a.pageX;var s=a.pageY;n.style.left=r-10+"px";n.style.top=s-20+"px";clearInterval(l);switch(++e){case 10:n.innerText="φ(≧ω≦*)♪";break;case 20:n.innerText="╰(*°▽°*)╯";break;case 30:n.innerText="(๑•́ ₃ •̀๑)";break;case 40:n.innerText="(๑•̀_•́๑)";break;case 50:n.innerText="(*￣(エ)￣)";break;case 60:n.innerText="(╯°口°)╯(┴—┴";break;case 70:n.innerText="૮( ᵒ̌皿ᵒ̌ )ა";break;case 80:n.innerText="(ノへ￣、)";break;case 90:n.innerText="( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";break;case 100:case 101:case 102:n.innerText="(￣ε(#￣)☆╰╮o(￣皿￣///)";case 103:case 104:case 105:n.innerText="(ꐦ°᷄д°᷅)";break;default:n.innerText="(*/ω＼*)";break}n.style.fontSize=Math.random()*10+8+"px";var c=0;var l;setTimeout(function(){l=setInterval(function(){if(++c==150){clearInterval(l);t.removeChild(n)}n.style.top=s-20-c+"px";n.style.opacity=(150-c)/120},8)},70);t.appendChild(n)}};
//rebuild by neat 