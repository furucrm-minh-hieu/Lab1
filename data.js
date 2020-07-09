var menuObj
x = "";
menuObj = [
    {
        "name": "Catalogies",
        "child": [
            {
                "name": "Mobile",
                "child": [
                    {
                        "name": "Apple"
                    },
                    {
                        "name": "SamSung"
                    },
                    {
                        "name": "Oppo"
                    }
                ]
            },
            {
                "name": "Tablet"
            },
            {
                "name": "Laptop",
                "child": [
                    {
                        "name": "13inc",
                        "child": [
                            {
                                "name": "Apple"
                            },
                            {
                                "name": "SamSung"
                            },
                            {
                                "name": "Oppo"
                            }
                        ]
                    },
                    {
                        "name": "15inc"
                    }
                ]
            }
        ]
    },
    {
        "name":"About Us",
    },
    {
        "name":"Contact Us"
    }
]
function Menu() {
    for (i in menuObj) {
        if (!jQuery.isEmptyObject(menuObj[i].child)) {
            x += '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle"'+ '" data-toggle="dropdown">' + menuObj[i].name + '</a>' + Menu1(menuObj[i]) + '</li>';
        } else {
            x += '<li class="nav-item"><a class="nav-link"'+ '">' + menuObj[i].name + "</a></li>";
        }
        $("#test").html(x);
    }
};
function Menu1(submenuObj) {
    y = '<ul class="dropdown-menu">';
    for (j in submenuObj.child) {
        if (!jQuery.isEmptyObject(submenuObj.child[j].child)) {
            y += '<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle">' + submenuObj.child[j].name + '</a>' + Menu1(submenuObj.child[j]) + "</li>";
        } else {
            y += '<li><a class="dropdown-item" '+ '">' + submenuObj.child[j].name + "</a></li>";
        }
    }
    y += "</ul>";
    return y;
}