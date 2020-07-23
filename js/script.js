
/*mouseparallax*/
$("#container").mousemove(function(e) {
    parallaxIt(e, ".slide", -100);
    parallaxIt(e, "img", -30);
});

function parallaxIt(e, target, movement) {
    var $this = $("#container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
}

/*Team*/
const team = [{
        name: 'Bert',
        link: ''

    },
    {
        name: 'Lucia',
        link: ''

    },
    {
        name: 'Joyce',
        link: ''

    },
    {
        name: 'Christophe',
        link: ''

    },
    {
        name: 'Casimir',
        link: ''

    },
    {
        name: 'Ilia',
        link: ''

    },
    {
        name: 'Joeri',
        link: ''

    },
    {
        name: 'Panithi',
        link: ''

    },
    {
        name: 'Heloise',
        link: ''

    },
    {
        name: 'Tommy',
        link: ''
    },
    {
        name: 'Thomas',
        link: ''
    },
    {
        name: 'Karel',
        link: ''
    },
    {
        name: 'Indy',
        link: ''
    },
    {
        name: 'Evgeniia',
        link: ''
    },
    {
        name: 'Roger',
        link: ''
    },
    {
        name: 'Frederik',
        link: ''
    },
    {
        name: 'Ekatherina',
        link: ''
    }
];

let mozaiek = document.getElementById('mozaiek');
let breakpoint = 7;
let extension = 'jpg';

for (let i = 0; i < team.length; i++) {
    if (i === breakpoint) {
        mozaiek.innerHTML += '<div class="single-content col-sm-6 col-md-4 col-lg-2 my-2">\n' +
            '                                <div class="plate-gradient h-100 p-2">' +
            '                                    <a class="plate-link" href="https://www.linkedin.com/company/creative-code-vision/" target="_blank">\n' +
            '                                        <p class="plate-text text-white font-weight-bold uppercase text-left">check <br>us <br>out</p>\n' +
            '                                    </a>\n' +
            '                                </div>\n' +
            '                        </div>';
    } else if (team[i].extension !== '') {
        mozaiek.innerHTML += '<div class="single-content col-sm-6 col-md-4 col-lg-2 my-2">\n' +
            '                            <img class="pfp img-fluid" src="img/profile_pictures/' + team[i].name + '.jpg" alt="">\n' +
            '                            <div class="text-content d-flex flex-column justify-content-between">\n' +
            '                                <div class="d-flex flex-row-reverse">\n' +
            '                                    <a class="pfp-link font-weight-bold uppercase p-1" href="' + team[i].link + '">info</a>\n' +
            '                                </div>\n' +
            '                                <div class="d-flex">\n' +
            '                                    <p class="pfp-name font-weight-bold uppercase">' + team[i].name + '</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>';
    } else {
        mozaiek.innerHTML += '<div class="single-content col-sm-6 col-md-4 col-lg-2 my-2">\n' +
            '                            <img class="pfp img-fluid" src="img/profile_pictures/' + team[i].name + '.' + extension + '" alt="">\n' +
            '                            <div class="text-content d-flex flex-column justify-content-between">\n' +
            '                                <div class="d-flex flex-row-reverse">\n' +
            '                                    <a class="pfp-link font-weight-bold uppercase p-1" href="' + team[i].link + '">info</a>\n' +
            '                                </div>\n' +
            '                                <div class="d-flex">\n' +
            '                                    <p class="pfp-name font-weight-bold uppercase">' + team[i].name + '</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>';
    }
}
