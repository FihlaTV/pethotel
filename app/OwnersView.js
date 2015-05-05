/**
 * 
 * @author user
 */
function OwnersView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
        var searchText = "%%";
        model.owners.params.lastNamePattern = searchText;
        model.owners.requery();
    };

    /**
     * Search button click event handler.
     * @param event Event object
     */
    form.btnSearch.onActionPerformed = function (event) {
        var searchText = "%" + form.txtSearch.text + "%";
        model.owners.params.lastNamePattern = searchText;
        model.owners.requery();
    };

    var refresh = function () {
        model.requery();
    };

    form.modelGrid.onMouseClicked = function (event) {
        if (event.clickCount > 1) {
            var ownerView = new OwnerView();
            ownerView.showModal(refresh, model.owners.cursor.OWNERS_ID);
        }
    };

    /**
     * Add button's click event handler.
     * @param event Event object
     */
    form.btnAdd.onActionPerformed = function (event) {
        var ownerView = new OwnerView();
        ownerView.showModal(refresh);
    };

    /**
     * Delete button's click event handler.
     * @param event Event object
     */
    form.btnDelete.onActionPerformed = function (event) {
        if (confirm("Delete owner?")) {
            for (var i in form.modelGrid.selected) {
                model.owners.splice(model.owners.indexOf(form.modelGrid.selected[i]), 1);
            }
            //model.save();
        }
    };

    form.btnReport.onActionPerformed = function (event) {
       var srvModule = new P.ServerModule("serverModule");
       srvModule.execute();
    };
}
