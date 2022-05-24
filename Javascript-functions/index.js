// 1. undefined



function myfun(...myVars) // String[] vars
{
    var x = 10; 
    console.log(x);
    for(i=0; i<5; i++)
    {
        console.log(myVars[i])
    }
}


//console.log(x);

export default myfun;