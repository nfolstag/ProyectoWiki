function animate(elems, animations, all) {
    if(typeof elems.in[0] === "undefined") {
        elems.in = [elems.in];
    }
    if(typeof elems.out[0] === "undefined") {
        elems.out = [elems.out];
    }
    if (elems.in[0].id !== elems.out[0].id) {
        animateOut(elems.out, animations.out, all, function () {
            animateIn(elems.in, animations.in, all);
        });
    }
}

function animateIn(elem, animation, all) {
    $(elem).show();
    $(elem).children().show();
    MotionUI.animateIn(all ? document.getElementById("content") : elem, animation);
}

function animateOut(elem, animation, all, cb) {
    MotionUI.animateOut(all ? document.getElementById("content") : elem, animation, function () {
        $(elem).hide();
        $(elem).children().hide();
        cb();
    });
}
