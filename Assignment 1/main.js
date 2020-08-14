
//for VeryEasy1
const conversionIntoSeconds = (minutes) =>
{
    document.getElementById("result").innerHTML = "Result after converting " + minutes + " minutes into seconds is : " +
    (minutes * 60) + " seconds"; 
}

//for VeryEasy2
const divideAbyB = (a,b) => {
    var res = a%b;
    if(res === 0)
    {
        document.getElementById("result").innerHTML = "Result is : true";
    }
    else
    {
        document.getElementById("result").innerHTML = "Result is : false";
    }
}

//for Easy1
const countRepitition = (str1,str2) => {
    var count = 0;
    for(var i = 0; i < str2.length; i++)
    {
        if(str1[0] === str2[i]){
            count++;
        }
    }
    console.log(count);
    document.getElementById("result").innerHTML = "It is repeated " + count + " times";
}

//for Easy2
const addAllNumbers = (number) =>{
    var sum = 0;
    for(var i=1; i <= number; i++)
    {
        sum += i;
    }
    document.getElementById("result").innerHTML = "Sum from 1 till " + number + " is : " + sum;
}

//for Easy3
const replaceVowels = (string) =>{
    var str = string.split('');
    for(var t = 0; t < str.length; t++){
        if(str[t] == 'a')
        {
            str[t] = '1';
        }
        if(str[t] == 'e')
        {
            str[t] = '2';
        }
        if(str[t] == 'i')
        {
            str[t] = '3';
        }
        if(str[t] == 'o')
        {
            str[t] = '4';
        }
        if(str[t] == 'u')
        {
            str[t] = '5';
        }
    }
    str.join('');
    for(var t = 0; t < str.length; t++){
        document.getElementById("result").innerHTML = "Result after replacing is : " + str;
    }

}

//For Medium1
const specialReverse = (str1,str2) => {
    var wordArray = str1.split(' ');
    var size = wordArray.length;
    for(var i = 0; i < size; i++)
    {
        if(wordArray[i][0] === str2)
        {
            var temp = wordArray[i].split('').reverse();
            wordArray[i] = temp.join('');
        }
    }

    document.getElementById("result").innerHTML = wordArray.join(' ');
}

//For Medium2
const testJackpot = (params) => {
    if(params.map(p => p === params[0]).filter(a=>a).length = 4)
    {
        var res = "true";
    }
    if(params.map(p => p === params[0]).filter(a=>a).length != 4)
    {
        var res = "false";
    }
    document.getElementById('result').innerHTML = "Are all the four strings same? : " + res; 
}

