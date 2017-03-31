window.onload=function(){
    var aPicLi=document.getElementById('pic_list').getElementsByTagName('li');
    var aTextLi=document.getElementById('text_list').getElementsByTagName('li');
    var oIcoUl=document.getElementById('ico_list').getElementsByTagName('ul')[0];
    var aIcoLi=document.getElementById('ico_list').getElementsByTagName('li');
    var oBtnPrev=document.getElementById('btn_prev');
    var oBtnNext=document.getElementById('btn_next');
    var iNowUlLeft=0;
    var i=0;
    var iNow=0;
    oBtnPrev.onclick=function()
    {
        if(iNowUlLeft>0)
        {
            iNowUlLeft--;
            oIcoUl.style.left=-aIcoLi[0].offsetWidth*iNowUlLeft+'px';
        }
    }
    oBtnNext.onclick=function()
    {
        if(iNowUlLeft<aIcoLi.length-7)
        {
            iNowUlLeft++;
            oIcoUl.style.left=-aIcoLi[0].offsetWidth*iNowUlLeft+'px';
        }
    }
    for(i=0;i<aIcoLi.length;i++)
    {
        aIcoLi[i].index=i;
        aIcoLi[i].onclick=function()
        {
            for(i=0;i<aIcoLi.length;i++)
            {
                if(iNow==this.index)
                {
                    return;
                }
                aIcoLi[i].className='';
                aTextLi[i].getElementsByTagName('h2')[0].className='';
                aPicLi[i].style.filter='alpha(opacity:0)';
                aPicLi[i].style.opacity=0;
                clearInterval(aPicLi[i].timer);
            }
            this.className='active';
            aTextLi[this.index].getElementsByTagName('h2')[0].className='show';
            startMove(aPicLi[this.index],{opacity:100});
            iNow=this.index;
        }
    } 
}