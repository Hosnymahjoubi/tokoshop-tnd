/* Blanter Tokoshop v3.0.0 | GLOBAL SCRIPT | (c) 2019-2021 Dunia Blanter | idblanter.com */
var _0x5109=['FWxdUvdcR8oRWQTi','y2HLy2TVDxq', ...]; // باقي مصفوفة _0x5109 كما هي
var _0x4bfa32=_0x45b5,_0x29a8cb=_0x2075;(function(_0x2b9bdd,_0x424964){ ... })(_0x5109,0x3092c); // نفس وظيفة التشفير كما هي
var _0x2cb0=[...]; // باقي المصفوفة كما هي

document[_0x2cb0[2]](_0x2cb0[1])[_0x2cb0[0]] = localStorage[_0x2cb0[4]](_0x2cb0[3]);
null === localStorage[_0x2cb0[4]](_0x2cb0[5]) ? $(_0x2cb0[8])[_0x2cb0[7]](_0x2cb0[6]) : $(_0x2cb0[8])[_0x2cb0[7]](localStorage[_0x2cb0[4]](_0x2cb0[5]));

var select1 = $(_0x2cb0[9])[_0x2cb0[7]](),
    select2 = $(_0x2cb0[0xa])[_0x2cb0[7]]();

// تعديل دالة تحويل الأرقام للعملة التونسية
function angkaToTND(angka){
    var number_string = angka.toString(),
        sisa = number_string.length % 3,
        tnd = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);
    if(ribuan){
        var separator = sisa ? '.' : '';
        tnd += separator + ribuan.join('.');
    }
    return 'د.ت ' + tnd; // أو "TND " + tnd
}

var getproduct, cart_pages = $(_0x2cb0[0x13])[_0x2cb0[0x7]]();

function getRandom(_0xede9ff){
    return _0xede9ff[Math[_0x2cb0[0x15]](Math[_0x2cb0[0x14]]() * _0xede9ff[_0x2cb0[0xf]])];
}

function _0x2075(_0x122f3b,_0x288886){ ... } // باقي الكود كما هو، بدون تغيير

// استبدال كل استدعاءات angkaToRp بـ angkaToTND
// مثال على استخدامه في السكريبت:
$('.product-price').each(function(){
    var harga = parseInt($(this).text().replace(/\D/g,''));
    $(this).text(angkaToTND(harga));
});

// باقي السكريبت كما هو
