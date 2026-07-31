*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:linear-gradient(135deg,#0f172a,#1e293b,#111827);
color:white;
min-height:100vh;
}

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
background:rgba(255,255,255,.08);
backdrop-filter:blur(12px);
position:sticky;
top:0;
}

.logo{
font-size:28px;
font-weight:700;
}

nav a{
color:white;
text-decoration:none;
margin-left:25px;
transition:.3s;
}

nav a:hover{
color:#60a5fa;
}

.hero{
text-align:center;
padding:70px 20px;
}

.hero h1{
font-size:56px;
margin-bottom:15px;
}

.hero p{
max-width:700px;
margin:auto;
opacity:.8;
font-size:18px;
}

.generator-box{
margin:40px auto;
max-width:700px;
background:rgba(255,255,255,.08);
padding:30px;
border-radius:20px;
backdrop-filter:blur(18px);
}

input{
width:100%;
padding:18px;
border:none;
border-radius:12px;
font-size:18px;
margin-bottom:20px;
}

.options{
display:flex;
gap:15px;
margin-bottom:20px;
}

select{
flex:1;
padding:15px;
border:none;
border-radius:12px;
font-size:16px;
}

button{
width:100%;
padding:18px;
border:none;
border-radius:12px;
background:#2563eb;
color:white;
font-size:18px;
cursor:pointer;
transition:.3s;
}

button:hover{
background:#1d4ed8;
transform:scale(1.02);
}

.result-section{
padding:50px 20px;
display:flex;
justify-content:center;
}

.image-card{
background:rgba(255,255,255,.08);
padding:20px;
border-radius:20px;
max-width:700px;
width:100%;
text-align:center;
}

#image{
width:100%;
display:none;
border-radius:15px;
margin-bottom:20px;
}

#status{
opacity:.8;
margin-bottom:20px;
}

@media(max-width:768px){

.hero h1{
font-size:38px;
}

.options{
flex-direction:column;
}

.navbar{
flex-direction:column;
gap:15px;
}

nav{
display:flex;
gap:15px;
flex-wrap:wrap;
justify-content:center;
}

}
