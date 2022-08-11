var JFL_221211287237045 = new JotformFeedback({
    formId: '221211287237045',
    base: 'https://form.jotform.com/',
    windowTitle: 'AWSUGN',
    background: '#FFA500',
    fontColor: '#FFFFFF',
    type: '0',
    height: 500,
    width: 700,
    openOnLoad: false
});

var JFL_222086222464552 = new JotformFeedback({
    formId: '222086222464552',
    base: 'https://form.jotform.com/',
    windowTitle: 'AWSUGN',
    background: '#FFA500',
    fontColor: '#FFFFFF',
    type: '0',
    height: 500,
    width: 700,
    openOnLoad: false
});

function closePopup() {
    document.getElementById("popup-container").style.display = "none";
}

function openPopup() {
    document.getElementById("popup-container").style.display = "flex";
}

// var db = openDatabase("trackDB", "1.0", "Tracking user movement database.", 65535); // itemDB is the database name
var db = window.indexedDB.open("trackDB", 1);

$(function () {
    var ip;
    var country;
    var rent_now;
    var rent_with_price;
    var visits;
    var learned;

    $.getJSON("https://api.myip.com", function (data) {
        ip = data.ip;
        country = data.country;

        var track = {
            ip: data.ip,
            country: data.country,
            rent_now: 0,
            rent_with_price: 0,
            visits: 1,
            learned: 0,
        };

        var tx = db.result.transaction("trackDB", "readwrite");

        tx.oncomplete = ev => {
            console.log(ev);
        }

        let store = tx.objectStore("trackDB");
        var req = store.add(track);

        // db.transaction(function (transaction) {
        //     var sql = "SELECT IP FROM Tracking WHERE IP='" + ip + "'";

        //     transaction.executeSql(sql, [], function (results) {
        //         if (results.rows.length > 0) {
        //             sql = "UPDATE Tracking SET RNP=RNP+1, No_Visit=No_Visit+1 WHERE IP='" + ip + "'";
        //             transaction.executeSql(sql);
        //         } else {
        //             rent_now = 0;
        //             rent_with_price = 0;
        //             visits = 1;
        //             learned = 0;
        //             sql = "INSERT INTO Tracking(IP, Country, RN, RNP, No_Visit, Learn_Size) VALUES(?,?)";
        //             transaction.executeSql(sql, [ip, country, rent_now, rent_with_price, visits, learned]);
        //         }
        //     })
        // })
    });

    $(".new-item").click(function () {
        db.transaction(function (transaction) {
            var sql = "UPDATE Tracking SET RN=RN+1, No_Visit=No_Visit+1 WHERE IP='" + ip + "'";
            transaction.executeSql(sql);
        })
    })
    $(".item").click(function () {
        db.transaction(function (transaction) {
            var sql = "UPDATE Tracking SET RNP=RNP+1, No_Visit=No_Visit+1 WHERE IP='" + ip + "'";
            transaction.executeSql(sql);
        })
    })

})