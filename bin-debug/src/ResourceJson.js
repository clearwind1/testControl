/**
 * Created by pior on 15/12/28.
 */
function getResjson() {
    var resjson = {
        "groups": [
            {
                "keys": "bgImage,egretIcon,logo_png,logoloading_png",
                "name": "preload"
            }
        ],
        "resources": [
            {
                "name": "bgImage",
                "type": "image",
                "url": "assets/bg.jpg"
            },
            {
                "name": "egretIcon",
                "type": "image",
                "url": "assets/egret_icon.png"
            },
            {
                "name": "description",
                "type": "json",
                "url": "config/description.json"
            },
            {
                "name": "logo_png",
                "type": "image",
                "url": "assets/logo.png"
            },
            {
                "name": "logoloading_png",
                "type": "image",
                "url": "assets/logoloading.png"
            }
        ]
    };
    return resjson;
}
