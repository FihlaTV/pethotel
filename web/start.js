/**
 * Do not edit this file manualy, it will be overwritten by Platypus Application Designer.
 */
if (!platypus) {
	var platypus = {}
}
platypus.ready = function() {
	require(['OwnersView'], function(){
		var f = new OwnersView()
		f.show()
	})
}
