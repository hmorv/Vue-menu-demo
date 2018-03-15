var theThing = new Vue({

    // A DOM element to mount our view model.
    el: '#main',

    // This is the model.
    data: {
        active: 'home'
    },

    // Functions
    methods: {
        makeActive: function(item){
            this.active = item;
        }
    }
});