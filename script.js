function orderedList(source) {
    
    var item1_price = 5;
    var item2_price = 4;
    var item3_price = 6;
    var item4_price = 13;
    var item5_price = 14;
    var item6_price = 11;
    var item7_price = 5;
    var item8_price = 7;
    var item9_price = 3;
    var item10_price = 2;
    var item11_price = 3;
    var item12_price = 4;

    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
    var item4 = document.getElementById("item4");
    var item5 = document.getElementById("item5");
    var item6 = document.getElementById("item6");
    var item7 = document.getElementById("item7");
    var item8 = document.getElementById("item8");
    var item9 = document.getElementById("item9");
    var item10 = document.getElementById("item10");
    var item11 = document.getElementById("item11");
    var item12 = document.getElementById("item12");
    
    if (item1.checked || item2.checked || item3.checked || item4.checked || item5.checked || item6.checked || item7.checked ||
        item8.checked || item9.checked || item10.checked || item11.checked || item12.checked) {
    

        if (item1.checked == true) {
            localStorage.setItem('item1', "Beef Burger.................................................................$"+ item1_price);
        }
        if (item2.checked == true) {
            localStorage.setItem('item2', "Chicken Burger...........................................................$"+ item2_price);
        }
        if (item3.checked == true) {
            localStorage.setItem('item3', "Shrimp Burger............................................................$"+ item3_price);
        }
        if (item4.checked == true) {
            localStorage.setItem('item4', "Spicy Pizza..................................................................$"+ item4_price);
        }
        if (item5.checked == true) {
            localStorage.setItem('item5', "Italian Pizza................................................................$"+ item5_price);
        }
        if (item6.checked == true) {
            localStorage.setItem('item6', "Mexican Pizza...........................................................$"+ item6_price);
        }
        if (item7.checked == true) {
            localStorage.setItem('item7', "Fried Chicken..............................................................$"+ item7_price);
        }
        if (item8.checked == true) {
            localStorage.setItem('item8', "Shawarma.....................................................................$"+ item8_price);
        }
        if (item9.checked == true) {
            localStorage.setItem('item9', "French Fries..................................................................$"+ item9_price);
        }
        if (item10.checked == true) {
            localStorage.setItem('item10', "Coke / Pepsi.................................................................$"+ item10_price);
        }
        if (item11.checked == true) {
            localStorage.setItem('item11', "Fruit Juice.....................................................................$"+ item11_price);
        }
        if (item12.checked == true) {
            localStorage.setItem('item12', "Milk Shake....................................................................$"+ item12_price);
        }

    } else {
        alert("you have to choose at least one item to proceed!");
        return false;
    }

    
}

function checkItem(item) {
    console.log('Loaded');
    var item1 = localStorage.getItem('item1');
    var item2 = localStorage.getItem('item2');
    var item3 = localStorage.getItem('item3');
    var item4 = localStorage.getItem('item4');
    var item5 = localStorage.getItem('item5');
    var item6 = localStorage.getItem('item6');
    var item7 = localStorage.getItem('item7');
    var item8 = localStorage.getItem('item8');
    var item9 = localStorage.getItem('item9');
    var item10 = localStorage.getItem('item10');
    var item11 = localStorage.getItem('item11');
    var item12 = localStorage.getItem('item12');
    //var total = localStorage.getItem('total');
    //var total = item1_price + item2_price + item3_price + item4_price + item5_price + item6_price + item7_price + item8_price + item9_price + item10_price + item11_price + item12_price;
    

    document.getElementById("list1").innerHTML = item1;
    document.getElementById("list2").innerHTML = item2;
    document.getElementById("list3").innerHTML = item3;
    document.getElementById("list4").innerHTML = item4;
    document.getElementById("list5").innerHTML = item5;
    document.getElementById("list6").innerHTML = item6;
    document.getElementById("list7").innerHTML = item7;
    document.getElementById("list8").innerHTML = item8;
    document.getElementById("list9").innerHTML = item9;
    document.getElementById("list10").innerHTML = item10;
    document.getElementById("list11").innerHTML = item11;
    document.getElementById("list12").innerHTML = item12;

    //document.getElementById("total").value = total;
    localStorage.clear();
}

function confirmPay(cnfrmpay){
    var c =  confirm('Are you Sure?\nClick OK to proceed. Click Cancel to Stay on this page.');    
    if(c == true){
        alert("Payment Successful !!!\nGoing Back to the Food Menu Page . . .");
        return true;
    }else{
        return false;
    }
}