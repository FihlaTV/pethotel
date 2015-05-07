/**
 * 
 * @author jskonst
 * @constructor
 * @public
 */ 
function serverModule() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.execute = function (reportSuccessCallback) {
        var oReport = new OwnersReport();
        oReport.execute(reportSuccessCallback);
    };
}
