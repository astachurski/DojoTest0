/**
 * Created by adrianSSD on 11/9/2014.
 */
define(function () {
    // Once all modules in the dependency list have loaded, this
    // function is called to define the demo/myModule module.
    //
    // The dojo/dom module is passed as the first argument to this
    // function; additional modules in the dependency list would be
    // passed in as subsequent arguments.


    // This returned object becomes the defined value of this module
    return {

        logMe: function (text) {

            console.log(text);
        }

        /* setText: function (id, text) {
         var node = dom.byId(id);
         oldText[id] = node.innerHTML;
         node.innerHTML = text;
         },

         restoreText: function (id) {
         var node = dom.byId(id);
         node.innerHTML = oldText[id];
         delete oldText[id];
         }*/
    };
});
