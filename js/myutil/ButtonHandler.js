define([
    "../../dojo/_base/declare",
    "../../dojo/query",
    "../../dojo/on"
], function (declare, query, on) {

    return declare(null, {

        helloText: "Hello...thanks for pressing button!",

        init: function () {
            var button = query("#testBtn")[0],
                target = query("#test")[0];

            on(button, "click", function () {
                console.log("Button pressed");
                target.innerHTML = this.helloText;
            }.bind(this))
        }
    });
});
