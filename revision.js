function getHistory()
{
    return document.getElementById("history-value").innerText;
}

function printHistory(num)
{
    document.getElementById("history-value").innerText=num;
}
function getOutput()
{
    return document.getElementById("output-value").innerText;

}

function printOutput(num)
{
    document.getElementById("output-value").innerText=num;


}
 

 

 var operator = document.getElementsByClassName("operator")

 for(var i=0;i<operator.length;i++)
 {
     operator[i].addEventListener('click',function()
     {
         if(this.id=="clear")
         {
             printHistory("");
             printOutput("");
         }

         if(this.id=="backspace")
         {
             var output = getOutput();

             output = output.substr(0,output.length-1);

             printOutput(output);
         }
         else{

            var output = getOutput();
            var history = getHistory();

            if(output != "")
            {
                history = history+output;

                if(this.id=="=")
                {
                    var result = eval(history);

                    printOutput(result);

                    printHistory("");
                }
                else{

                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }


            }
         }


     });
 }



var number = document.getElementsByClassName("number");

for(var i=0;i<number.length;i++)
{
    number[i].addEventListener('click',function()
    {

        var output = getOutput();

        if(output != NaN)
        {
            output = output+this.id;

            printOutput(output);
        }


        console.log(typeof this.id);






    });
}






