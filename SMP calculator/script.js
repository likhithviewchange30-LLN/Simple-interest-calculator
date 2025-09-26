const clacbtn= document.getElementById('calcbtn');
clacbtn.addEventListener('click', function(even){
    even.preventDefault();
    let p =document.getElementById('princpal').value;
    let t =document.getElementById('timespan').value;
    let r =document.getElementById('rateofint').value;

    p= Number(p);
    t= Number(t);
    r= Number(r);

    let result = getsimpleinterset(p,t,r);
    let amount = p+result;

    document.getElementById('p').innerHTML = p;
    document.getElementById('t').innerHTML = t;
    document.getElementById('r').innerHTML = r;
    document.getElementById('result').innerHTML = result;
    document.getElementById('amount').innerHTML = amount; 
})
 function getsimpleinterset(p,t,r){
    let si = (p*t*r)/100;
    return si;
 }