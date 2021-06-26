setInterval(()=>{
d = new Date()
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
hrotation = htime*30 + mtime/2;
mrotation = 6*mtime;
srotation = 6*stime;

hourly.style.transform =`rotate(${hrotation}deg)`
minutes.style.transform =`rotate(${mrotation}deg)`
seconds.style.transform =`rotate(${srotation}deg)`
},1000)