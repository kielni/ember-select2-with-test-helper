module.exports = {
  description: '',

    afterInstall: function() {
        var self = this;
        var bower = ['select2'].map(function(pkg) {
            return {
                name: pkg
            };
        });
        return this.addBowerPackagesToProject(bower);
    }
};
