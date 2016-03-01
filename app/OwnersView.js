/**
 * 
 * @author user
 */
define('OwnersView', ['orm', 'forms', 'ui','rpc','logger'], function (Orm, Forms, Ui,Rpc,Logger, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

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
                require('OwnerView', function (OwnerView) {
                    var ownerView = new OwnerView();
                    ownerView.showModal(refresh, model.owners.cursor);
                });
            }
        };

        /**
         * Add button's click event handler.
         * @param event Event object
         */
        form.btnAdd.onActionPerformed = function (event) {
            model.owners.push({});
            require('OwnerView', function (OwnerView) {
                var ownerView = new OwnerView();
                ownerView.showModal(refresh, model.owners.cursor);
            });

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
                model.save();
            }
        };

        var reportCallback = function (report) {
            Logger.info("Hello");
            report.show();
        };

        form.btnReport.onActionPerformed = function (event) {
           
            var srvReport =new Rpc.Proxy('serverModule');
                srvReport.execute(reportCallback);
        };

        form.onWindowClosing = function (event) {
            if (model.modified) {
                if (confirm("Save changes")) {
                    model.save();
                }
            }
        };
        form.btnSave.onActionPerformed = function (event) {
            if (model.modified) {
                if (confirm("Save changes")) {
                    model.save();
                }
            }
        };

        form.txtSearch.onActionPerformed = function (event) {
            form.btnSearch.onActionPerformed();
        };
    }
    return module_constructor;
});