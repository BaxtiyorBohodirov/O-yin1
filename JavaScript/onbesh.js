let sonlar=document.getElementById('asosiy').children;
let arr=[];
let son=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
for (let item=0;item<sonlar.length-1;item++) {
    let r=Math.floor(Math.random()*(15-item));
    sonlar[item].innerHTML=son[r];
    let i={index:item,text:son[r]};
    son.splice(r,1);
    arr.push(i);
}
arr.push({index:15,text:''});
$('.sonlar').click(function(e){
    let item=e.target;
    let s;
    let index=arr.filter((x)=>x.text==item.innerHTML)[0].index;
    if(index>3){
        s='.sonlar:nth-child('+(index-3)+')';
        if($(s).text()=='')
        {
            let x=$(s).text();
            $(s).text(item.innerHTML);
            arr[index-4].text=item.innerHTML;
            item.innerHTML=x;
            arr[index].text=x;

        }
    }
    if(index<12){
        s='.sonlar:nth-child('+(index+5)+')';
        if($(s).text()=='')
        {
            let x=$(s).text();
            arr[index+4].text=item.innerHTML;
            $(s).text(item.innerHTML);
            item.innerHTML=x;
            arr[index].text=x;
        }
    }
    if(index%4!=0){
        s='.sonlar:nth-child('+(index)+')';
        if($(s).text()=='')
        {
            let x=$(s).text();
            arr[index-1].text=item.innerHTML;
            $(s).text(item.innerHTML);
            item.innerHTML=x;
            arr[index].text=x;
        }
    }
    if(index%4!=3){
        s='.sonlar:nth-child('+(index+2)+')';
        if($(s).text()=='')
        {
            let x=$(s).text();
            arr[index+1].text=item.innerHTML;
            $(s).text(item.innerHTML);
            item.innerHTML=x;
            arr[index].text=x;
        }
    }
    if(arr.filter(x=>(x.index+1)==x.text).length==15)
    {
        $('#winner').css('display','flex');
    }
});
