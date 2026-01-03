//FLOOR
//avaliable floor options
let floors = {
    "empty":
    [0,0,0,0,0,0,0,
    0,0,0,1,0,0,0,
    0,2,2,2,2,2,0,
    0,3,4,0,5,3,0,
    0,3,6,0,7,3,0,
    0,4,0,0,0,5,0,
    0,8,9,0,10,11,0],
    "left":
    [0,0,0,0,0,0,0,
    0,0,0,1,0,0,0,
    0,13,2,2,2,2,0,
    0,12,14,3,3,3,0,
    0,12,12,16,3,3,0,
    0,12,12,12,14,3,0,
    0,8,9,12,10,11,0],
    "right":
    [0,0,0,0,0,0,0,
    0,0,0,1,0,0,0,
    0,2,2,2,2,18,0,
    0,3,3,3,15,12,0,
    0,3,3,17,12,12,0,
    0,3,15,12,12,12,0,
    0,8,9,12,10,11,0],
    "center":
    [0,0,0,0,0,0,0,
    0,0,0,1,0,0,0,
    0,2,2,2,2,2,0,
    0,3,15,12,14,3,0,
    0,17,12,12,12,16,0,
    0,12,12,12,12,12,0,
    0,8,9,12,10,11,0]
};
//active floor tileset
let floortile = 
    [0,0,0,0,0,0,0,
    0,0,0,1,0,0,0,
    0,2,2,2,2,2,0,
    0,3,4,0,5,3,0,
    0,3,6,0,7,3,0,
    0,4,0,0,0,5,0,
    0,8,9,0,10,11,0];

//set floortile to the different options of floors
function setFloor(option) {
    floortile = floors[option]
    loadroom();
}

let objects = {
    "bed": {
    "label": "Soft-Seating",
    "options": [
            {
            "id": 0,
            "label": "single-bed-solid",
            "size": {
                h: 2,
                w: 1
            }
            },
            {
            "id": 1,
            "label": "single-bed-plaid",
            "size": {
                h: 2,
                w: 1
            }
            },
            {
            "id": 2,
            "label": "single-bed-stripe",
            "size": {
                h: 2,
                w: 1
            }
            },
            {
            "id": 3,
            "label": "dark-two-seat-couch",
            "size": {
                h: 1,
                w: 2
            }
            },
            {
            "id": 4,
            "label": "light-two-seat-couch",
            "size": {
                h: 1,
                w: 2
            }
            },
         ],
    },
    "furniture": {
    "label": "Furniture",
    "options": [
            {
            "id": 0,
            "label": "side-table",
            "size": {
                h: 1,
                w: 1
            }
            },
        ]
    },
    "decor": {
    "label": "Decoration",
    "options": [
        {
            "id": 0,
            "label": "ralsei-plush",
            "size": {
                h: 1,
                w: 1
            }
            },
        {
            "id": 1,
            "label": "susie-plush",
            "size": {
                h: 1,
                w: 1
            }
            },
        {
            "id": 2,
            "label": "kris-plush",
            "size": {
                h: 1,
                w: 1
            }
            },
        {
            "id": 3,
            "label": "pillow",
            "size": {
                h: 1,
                w: 1
            }
            },
        {
            "id": 4,
            "label": "lamp",
            "size": {
                h: 2,
                w: 1
            }
            },
        {
            "id": 5,
            "label": "photo-set-1",
            "size": {
                h: 1,
                w: 2
            }
            },
        {
            "id": 6,
            "label": "photo-set-2",
            "size": {
                h: 1,
                w: 2
            }
            },
    ]
    },
    "rug": {
    "label": "Rugs",
    "options": [
            {
                "id": 0,
                "name": "Deltarune Rug",
                "label": "deltarune-rug-black",
                "size": {
                    h: 2,
                    w: 3
                }
            },
            {
                "id": 1,
                "name": "Deltarune Rug",
                "label": "deltarune-rug-green",
                "size": {
                    h: 2,
                    w: 3
                }
            },
        ]
    },
    "flooring": {
        "label": "Flooring",
        "options": [
            {   "label": `left`,
            },
            {   "label": `right`,
            },
            {   "label": `center`,
            },
            {   "label": `empty`,
            },
        ]
    },
    "wall": {
        "label": "Walls",
        "options": [
            {   "label": `Example`,
                "icon": '',
                "function": function() {}}
        ]
    }
}

//load the tiles of floortile
function loadroom() {
    if( $('#room').is(':empty') ) {
        for (let r = 0; r < 49; r++) {
            let tile = $(document.createElement('div'));
            console.log(tile);
            tile.attr("id", r)
            tile.addClass("tile")
            if(floortile[r] == 1) {
                tile.css("background-image", `url('assets/sprites/floor/${floortile[r]}.gif')`)
            } else {
                tile.css("background-image", `url('assets/sprites/floor/${floortile[r]}.svg')`)
            }
            $("#room").append(tile);

            $("#instructions-button").css('display', 'block');
        }
    } else {
            for (let r = 0; r < 49; r++) {
                if(floortile[r] == 1) {
                    $(`#${r}`).css("background-image", `url('assets/sprites/floor/${floortile[r]}.gif')`)
                } else {
                    $(`#${r}`).css("background-image", `url('assets/sprites/floor/${floortile[r]}.svg')`)
                }
        }
    }
}

function clearroom() {
    $('#room').html(``);
    setFloor('empty');
}

function changewindow(option) {
floortile[10] = option.id;
}

let activeObject = {
    "category": '',
    "object": ''
};

let activeHover = null;

function hoverObject(status, id) {
    if ( status == "out") {
        $(`.${activeHover}`).each(function() {
            $(this).remove();
        });
    }
    
    if (activeObject.category != '' && status == "in") {
        console.log("hover", objects[activeObject.category]["options"]);
        let h = objects[activeObject.category]["options"][activeObject.object].size.h * 7;
        let w = objects[activeObject.category]["options"][activeObject.object].size.w;
        let numid = Number(id);
        let c = 0;
        let rowid = numid
        let z = 1;
        switch (activeObject.category) {
            case "rug":
                z = 1;
                break;
            case "bed":
                z = 2;
                break;
            case "furniture":
                z = 3;
                break;
            case "decor":
                z = 4;
                break;
        
            default:
                break;
        }

        for (let j = numid; j < numid + h;) {
            for (i = rowid; i < rowid + w; i++) {
                var img = $('<img />', { 
                    class: 'hover-' + numid + " hover",
                    src: 'assets/sprites/' + activeObject.category + "/" + activeObject.object + "/" + c + ".svg",
                    alt: activeObject.category,
                    style: `z-index: ${z};`
                })
                $(`#${i}`).append(img);
                c++;
            }

            rowid = rowid + 7;
            j = j + 7;
        }
                
        activeHover = "hover-" + numid;
    }

    console.log('activeobject', activeObject)
    console.log('activehover', activeHover)
}

function selectObject(category, object) {
    console.log(this);
    console.log("selecting object")
    if(activeObject.category == category && activeObject.object == object) {
        activeObject = {
            "category": '',
            "object": ''
        };
    } else {
        activeObject = {
            "category": category,
            "object": object,
        };
    }
        console.log(activeObject);
}

function placeObject(id) {
    if (activeObject.category != '') {
        let h = objects[activeObject.category]["options"][activeObject.object].size.h * 7;
        let w = objects[activeObject.category]["options"][activeObject.object].size.w;
        let category = activeObject.category;
        let object = activeObject.object;
        let numid = Number(id);
        let c = 0;
        let rowid = numid;
        let z = 1;
        switch (activeObject.category) {
            case "rug":
                z = 1;
                break;
            case "bed":
                z = 2;
                break;
            case "furniture":
                z = 3;
                break;
            case "decor":
                z = 4;
                break;
        
            default:
                break;
        }


        for (let j = numid; j < numid + h;) {
            for (i = rowid; i < rowid + w; i++) {
                var img = $('<img />', { 
                    id: 'img-' + z + id,
                    class: 'img-' + z + id,
                    src: 'assets/sprites/' + activeObject.category + "/" + activeObject.object + "/" + c + ".svg",
                    alt: activeObject.category,
                    style: `z-index: ${z};`
                })
                img.click(function(){selectPlacedObject(id, category, object) })
                $(`#${i}`).append(img);
                c++;
            }

            rowid = rowid + 7;
            j = j + 7;
        }

        activeObject = {
            "category": '',
            "object": ''
        };

        activeHover = null;

        console.log('activeobject', activeObject)
        console.log('activehover', activeHover)

        $(`.hover`).each(function() {
            $(this).remove();
        });
    }
}

function selectPlacedObject(id, category, object) {
    let z = 0;
    switch (category) {
        case "rug":
            z = 1;
            break;
        case "bed":
            z = 2;
            break;
        case "furniture":
            z = 3;
            break;
        case "decor":
            z = 4;
            break;
    
        default:
            break;
    }

    console.log(`.img-${z}${id}`);

    if(activeHover == null) {
        console.log("select null");
        selectObject(category, object);
    $(`.img-${z}${id}`).each(function() {
        $(this).remove();
     });
    }
}

function deleteObject() {
    console.log("delete?");
    activeObject = {
        "category": '',
        "object": ''
    };
    activeHover = null;
    console.log(activeObject);
}

//MENU
// function previewMenu(menu, option, optionid, label) {
//     console.log("previewMenu", colorid, label);
//     // $(`#${option} img`).attr("data-color", colorid);
//     $(`#${option} img`).attr("src", `assets/sprites/${menu}/${optionid}/${label}.svg`)
// }

//Load item menu
function loadMenu(menu) {
    let menuCategory = objects[menu];

    $("#heading").html(menuCategory.label);
    $('.items-active').addClass("items-hidden");
    $('.items-active').removeClass("items-active");
    $(`#${menu}`).removeClass("items-hidden");
    $(`#${menu}`).addClass("items-active");

    console.log(menu);
}

//Load menu
// function loadMenu(menu) {
//     let menuCategory = objects[menu];

//     $("#heading").html(menuCategory.label);
//     $("#items").html("");

//     menuCategory.options.forEach(option => {
//         console.log(option.size.h, option.size.w);
        
//         for (let h = 0; h < option.size.h; h++) {
//             for (let w = 0; w < option.size.w; w++) {
//                 console.log("yayy");
//             }   
//         }
//     });

//     // menuCategory.options.forEach(option => {

//     //     //create main button div
//     //     let button = $(document.createElement('div'));
//     //     button.addClass("item");
//     //     button.attr('id', option.label)
//     //     button.attr('aria-label', option.label)
//     //     switch (menu) {
//     //         case "flooring":
//     //             button.on("click", (e) => {
//     //                 e.preventDefault();
//     //                 setfloor(option.label);
//     //             });
//     //             break;
//     //         case "bed":
//     //         case "rug":
//     //         case "furniture":
//     //         case "decor":
//     //             button.on("click", (e) => {
//     //                 e.preventDefault();
//     //                 console.log(e.target.id);
//     //                 selectObject(menu, option.colors[$(`#${e.target.id}`).attr('data-color')], option.id);
//     //             });
//     //             break;
//     //         default:
//     //             break;
//     //     }
//     //     button.on("click", (e) => {
//     //         e.preventDefault();

//     //         console.log("this is undefined?", e.target.id, $(`#${e.target.id}`).attr('data-color'));
//     //     })
//     //     $("#items").append(button);

//     //     //create image
//     //     // let img = $(document.createElement('img'));
//     //     // img.attr('id', `img-${option.label}`);
//     //     // img.attr("data-color", 0);
//     //     // img.attr("src", `assets/sprites/${menu}/${option.id}/${option.colors[0]}.svg`)
//     //     // $(`#${option.label}`).append(img);

//     //     //create options div
//     //     // let options = $(document.createElement('div'));
//     //     // options.attr('id', `select-${option.label}`);
//     //     // options.addClass("options");
//     //     // $(`#${option.label}`).append(options);

//     //     //add color options
//     //     // for (let c = 0; c < option.colors.length; c++) {
//     //     //     const color = option.colors[c];
//     //     //     let select = $(document.createElement('button'));
//     //     //     select.addClass("color-select");
//     //     //     if(c == 0) {
//     //     //     select.addClass("active-color");
//     //     //     }
//     //     //     select.attr('id', `select-${option.label}-${c}`);
//     //     //     select.attr("data-color", c);
//     //     //     select.attr("style", `background-image: url(assets/sprites/colors/${color}.svg`)
//     //     //     select.html("<span></span>")
//     //     //     select.on("click", (e) => {
//     //     //         e.preventDefault();
//     //     //         previewMenu(menu, option.label, option.id, c, color);

//     //     //         //change active
//     //     //         console.log(e.target.id);
//     //     //         let optionid = e.target.id.substring(0, e.target.id.length - 2);
//     //     //         $(`#${optionid} .active-color`).removeClass('active-color');
//     //     //         $(`#${e.target.id}`).addClass('active-color');
//     //     //     })

//     //     //     $(`#${option.label} .options`).append(select);
//     //     // }
//     // });
    
// }

//Load menu
// function loadMenu(menu) {
//     let menuCategory = objects[menu];

//     $("#heading").html(menuCategory.label);
//     $("#items").html("");

//     menuCategory.options.forEach(option => {

//         //create main button div
//         let button = $(document.createElement('div'));
//         button.addClass("item");
//         button.attr('id', option.label)
//         button.attr('aria-label', option.label)
//         switch (menu) {
//             case "flooring":
//                 button.on("click", (e) => {
//                     e.preventDefault();
//                     setfloor(option.label);
//                 });
//                 break;
//             case "bed":
//             case "rug":
//             case "furniture":
//             case "decor":
//                 button.on("click", (e) => {
//                     e.preventDefault();
//                     console.log(e.target.id);
//                     selectObject(menu, option.colors[$(`#${e.target.id}`).attr('data-color')], option.id);
//                 });
//                 break;
//             default:
//                 break;
//         }
//         button.on("click", (e) => {
//             e.preventDefault();

//             console.log("this is undefined?", e.target.id, $(`#${e.target.id}`).attr('data-color'));
//         })
//         $("#items").append(button);

//         //create image
//         let img = $(document.createElement('img'));
//         img.attr('id', `img-${option.label}`);
//         img.attr("data-color", 0);
//         img.attr("src", `assets/sprites/${menu}/${option.id}/${option.colors[0]}.svg`)
//         $(`#${option.label}`).append(img);

//         //create options div
//         let options = $(document.createElement('div'));
//         options.attr('id', `select-${option.label}`);
//         options.addClass("options");
//         $(`#${option.label}`).append(options);

//         //add color options
//         for (let c = 0; c < option.colors.length; c++) {
//             const color = option.colors[c];
//             let select = $(document.createElement('button'));
//             select.addClass("color-select");
//             if(c == 0) {
//             select.addClass("active-color");
//             }
//             select.attr('id', `select-${option.label}-${c}`);
//             select.attr("data-color", c);
//             select.attr("style", `background-image: url(assets/sprites/colors/${color}.svg`)
//             select.html("<span></span>")
//             select.on("click", (e) => {
//                 e.preventDefault();
//                 previewMenu(menu, option.label, option.id, c, color);

//                 //change active
//                 console.log(e.target.id);
//                 let optionid = e.target.id.substring(0, e.target.id.length - 2);
//                 $(`#${optionid} .active-color`).removeClass('active-color');
//                 $(`#${e.target.id}`).addClass('active-color');
//             })

//             $(`#${option.label} .options`).append(select);
//         }
//     });
    
// }

function openInstructions() {
    console.log('open', $("#instructions"));
    $("#instructions").addClass('show-instructions');
    $("#instructions").removeClass('hide-instructions');
}

function closeInstructions() {
    console.log('close', $("#instructions"));
    $("#instructions").addClass('hide-instructions');
    $("#instructions").removeClass('show-instructions');
}

$(document).ready(function () {
    loadroom();

    $(document).on("click",".tile", function () {
        let id = $(this).attr('id');
        placeObject(id);
    });

    $(document).on("click",".menu-button", function () {
        $('.button-active').removeClass('button-active');
        $(this).addClass('button-active');
    });
    
    $(document).on({
        mouseenter: function () {
            if (activeObject.category != '') {
                let id = $(this).attr('id');
                hoverObject("in", id);
            }
        },
        mouseleave: function () {
            if (activeObject.category != '') {
                let id = $(this).attr('id');
                hoverObject("out", id);
            }
        }
    }, ".tile");

    $(document).click(function() {
        if(activeHover != null) {
            deleteObject();
        }
    });
});

//room
//0, 1, 2, 3, 4, 5, 6,
//7, 8, 9, 10, 11, 12, 13
//14, 15, 16, 17, 18, 19, 20
//21, 22, 23, 24, 25, 26, 27
//28, 29, 30, 31, 32, 33, 34
//35, 36, 37, 38, 39, 40, 41
//42, 43, 44, 45, 46, 47, 48

//0=void,1=window,2=partialfloor