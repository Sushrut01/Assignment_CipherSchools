var data = {
    "all" : [
        {
            "name" : "Cake Items",
            "price" : "$10",
            "image" : "./images/cakes.jpg"
        },
        {
            "name" : "Cupcake Items",
            "price" : "$2",
            "image" : "./images/cupcakes1.jpg"
        },
        {
            "name" : "Sweets Items",
            "price" : "$8",
            "image" : "./images/sweets1.jpg"
        },
        {
            "name" : "Doughnuts Items",
            "price" : "$3",
            "image" : "./images/doughnuts1.jpg"
        }
    ],
    "cakes" : [
            {
                "name" : "cake1",
                "price" : "$10",
                "image" : "./images/cakes.jpg"
            },
            {
                "name" : "cake2",
                "price" : "$12",
                "image" : "./images/cakes2.jpg"
            },
            {
                "name" : "cake3",
                "price" : "$15",
                "image" : "./images/cakes3.jpg"
            }],
    "cupcakes" : [  {
                "name" : "cupcake1",
                "price" : "$2",
                "image" : "./images/cupcakes1.jpg"
            },
            {
                "name" : "cupcake2",
                "price" : "$4",
                "image" : "./images/cupcakes2.jpg"
            },
            {
                "name" : "cupcake1",
                "price" : "$5",
                "image" : "./images/cupcakes3.jpg"
            }],
    "sweets" : [{
                "name" : "sweets1",
                "price" : "$8",
                "image" : "./images/sweets1.jpg"
            },
            {
                "name" : "sweets2",
                "price" : "$10",
                "image" : "./images/sweets2.jpg"
            },
            {
                "name" : "sweets3",
                "price" : "$10",
                "image" : "./images/sweets3.jpg"
            }],
    "doughnuts" : [ {
                "name" : "doughnut1",
                "price" : "$3",
                "image" : "./images/doughnuts1.jpg"
            },
            {
                "name" : "doughnut2",
                "price" : "$4",
                "image" : "./images/doughnuts2.jpg"
            },
            {
                "name" : "doughnut3",
                "price" : "$5",
                "image" : "./images/doughnuts3.jpg"
            }]
        }
    $(document).ready(function(){
        var source = $("#items-template").html();
        var template = Handlebars.compile(source);
        $("#cards").html(template(data.all));

        $("#all").click(function(){
            $("#cards").html(template(data.all));
        });

        $("#cakes").click(function(){
            $("#cards").html(template(data.cakes));
        });

        $("#cupcakes").click(function(){
            $("#cards").html(template(data.cupcakes));
        });

        $("#sweets").click(function(){
            $("#cards").html(template(data.sweets));
        });

        $("#doughnuts").click(function(){
            $("#cards").html(template(data.doughnuts));
        });
    });


    //for searching the items via search bar
    const searchItems = () => {
        var filter = document.getElementById("itemSearch").value.toUpperCase();
        var cards = document.getElementById("cards");
        var list = cards.getElementsByClassName("extra");
        for(var i=0; i< list.length; i++)
        {
            let a = list[i].getElementsByClassName("card")[0];
            let textvalue = a.textContent || a.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1)
            {
                list[i].style.display = " ";
            }
            else
            {
                list[i].style.display = "none";
            }
        }
    }