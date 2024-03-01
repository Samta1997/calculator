import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`
@font-face{
    font-family:'Digital-7';
    src:url('./digital/digital-7') format('ttf');
    font-weight:normal;
    font-style:normal;
}
body,html{
    box-sizing:border-box;
    background-color:#b0f5d1;
    margin:0;
}
#root{
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
}
.container{
    background-color:#151a20;
    width:380px;
    margin-top:-30px;
    border:4px solid black;
}
#exp{
    color:white;
    width:380px;
    text-align:right;
    font-family: "Copse", serif;
}
#display-1{
    min-height:20px;
    font-size:15px;
    color:#52f847;
    
      
}
#display{
    font-size:20px;
    width:100%;   
}
.grid{
    color:white;
    background-color:grey;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-template-rows:repeat(5,55px);
    margin:4px;
    font-family: "Copse", serif;
}
.grid-items{
    border:1px solid black;
    &:active{
        background-color:#b2d4fc;
    }
    display:flex;
    align-items:center;
    justify-content:center;   
}
#clear{
    grid-area:1/1/2/3;
    background-color:#f53648;
}
#zero{
    grid-area:5/1/6/3;
    background-color:#57626e; 
}
#equals{
    grid-area:4/4/6/5;
    background-color:#362cd7;
}
#one, #two, #three, #four,#five, #six, #seven, #eight, #nine, #decimal{
    background-color:#57626e;
    &:active{
        background-color:#b2d4fc;
    }
}
#footer{
    text-align:center;
    font-family: "Copse", serif;
    margin-top:20px;
    font-size:13px;
}

@media(max-width:767px){
    .container{
        width:280px;
    }
    #exp{
        width:280px;
    }
    
    

}

`
