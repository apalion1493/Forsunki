
// // switching phone in header
// let phoneMas = ['.tel-phone__rus', '.tel-phone__ucr', '.tel-phone__brus'];
// $('select[name="country"]').change(function(){
//     let el = $(this).val();
//     for (let i = 1; i < 4; i++) {
//         if(el == i) {
//             $('.tel-phone__item').removeClass('active');
//             $(phoneMas[i+1]).addClass('active');
//         }
//     }
// });
// //

// customization select in header
let x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("select-header");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            let y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    let x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);
//

$('.card-product__border-btn').click(function () {
    $(this).parent().parent().children().toggleClass('active');
});


$('.list-logos__hidden-link').click(function () {
    if($(this).hasClass('active')) {
        $(this).text('Остальные 20');
        $(this).removeClass('active');
        $(this).siblings('.list-logos__hidden-block').removeClass('active');
    } else {
        $(this).text('Скрыть');
        $(this).addClass('active');
        $(this).siblings('.list-logos__hidden-block').addClass('active');
    }
});