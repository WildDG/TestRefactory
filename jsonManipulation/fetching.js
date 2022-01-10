fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        fungsi1(data);
        fungsi2(data);
        fungsi3(data);
        fungsi4(data);
        fungsi5(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function fungsi1(data) {
    var mainContainer = document.getElementById("item1");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        if(data[i].placement.name=="Meeting Room"){
            div.innerHTML = 'Name: ' + data[i].name + ' Type: ' + data[i].type+ ' Placement : ' + data[i].placement.name;
        }
        mainContainer.appendChild(div);
    }
}

function fungsi2(data) {
    var mainContainer = document.getElementById("item2");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        if(data[i].type=="electronic"){
            div.innerHTML = 'Name: ' + data[i].name + ' Type: ' + data[i].type+ ' Placement : ' + data[i].placement.name;
        }
        mainContainer.appendChild(div);
    }
}

function fungsi3(data) {
    var mainContainer = document.getElementById("item3");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        if(data[i].tags[1]=="furniture"){
            div.innerHTML = 'Name: ' + data[i].name + ' Type: ' + data[i].type+ ' Placement : ' + data[i].placement.name;
        }
        mainContainer.appendChild(div);
    }
}

function fungsi4(data) {
    // var mainContainer = document.getElementById("item4");
    // for (var i = 0; i < data.length; i++) {
    //     var div = document.createElement("div");
    //     if(data[i].type=="electronic"){
    //         div.innerHTML = 'Name: ' + data[i].name + ' Type: ' + data[i].type+ ' Placement : ' + data[i].placement.name;
    //     }
    //     mainContainer.appendChild(div);
    // }
}

function fungsi5(data) {
    var mainContainer = document.getElementById("item5");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        if(data[i].tags[2]=="brown"){
            div.innerHTML = 'Name: ' + data[i].name + ' Type: ' + data[i].type+ ' Placement : ' + data[i].placement.name;
        }
        mainContainer.appendChild(div);
    }
}