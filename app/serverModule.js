/**
 * 
 * @author jskonst
 * @stateless
 * @public
 */
define('serverModule', ['orm','logger'], function (Orm,Logger, ModuleName) {
    function module_constructor() {
        var self = this, model = Orm.loadModel(ModuleName);

        self.execute = function (reportSuccessCallback) {
            Logger.severe("inExecute");
            require('OwnersReport', function (OwnersReport) {
                Logger.severe("inReport");
                var oReport = new OwnersReport();
                oReport.execute(reportSuccessCallback);
            });

        };
    }
    return module_constructor;
});

