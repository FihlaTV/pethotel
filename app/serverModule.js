/**
 * 
 * @author jskonst
 * @constructor
 * @public
 */ 
function serverModule() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    // TODO : place constructor code here
    
    self.execute = function () {
        var oReport = new OwnersReport();
        oReport.execute();
    };
}
