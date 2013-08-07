/**
 * Shows the owners list.
 * @author vv
 * @name OwnersView
 */

/**
 * Add button's click event handler.
 * @param evt Event object
 */
function btnAddActionPerformed(evt) {//GEN-FIRST:event_btnAddActionPerformed
    var ownerView = new OwnerView();
    ownerView.showModal(refresh);
}//GEN-LAST:event_btnAddActionPerformed

/**
 * Delete button's click event handler.
 * @param evt Event object
 */
function btnDeleteActionPerformed(evt) {//GEN-FIRST:event_btnDeleteActionPerformed
    if (confirm("Delete owner?")) {
        ownersQuery.deleteRow();
        model.save();
    }
}//GEN-LAST:event_btnDeleteActionPerformed

/**
 * Grid click event handler.
 * @param evt Event object
 */
function grdOwnersMouseClicked(evt) {//GEN-FIRST:event_grdOwnersMouseClicked
    if (evt.clickCount > 1) {
        editOwner();
    }
}//GEN-LAST:event_grdOwnersMouseClicked

/**
 * Search button click event handler.
 * @param evt Event object
 */
function btnSearchActionPerformed(evt) {//GEN-FIRST:event_btnSearchActionPerformed
	LastNamePattern = '%' + txtSearch.text + '%';
}//GEN-LAST:event_btnSearchActionPerformed

function editOwner() {
    var ownerView = new OwnerView();
    ownerView.OwnerId = ownersQuery.OWNERS_ID;
    ownerView.showModal(refresh);
}

function refresh() {
    model.requery();
}