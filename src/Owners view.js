/**
 * Shows the owners list.
 * @author vv
 * @name Owners
 */

/**
 * Add button's click event handler.
 * @param evt Event object
 */
function btnAddActionPerformed(evt) {//GEN-FIRST:event_btnAddActionPerformed
    var ownerForm = new OwnerForm();
    ownerForm.showModal(refresh);
}//GEN-LAST:event_btnAddActionPerformed

/**
 * Delete button's click event handler.
 * @param evt Event object
 */
function btnDeleteActionPerformed(evt) {//GEN-FIRST:event_btnDeleteActionPerformed
    if (confirm("Delete owner?")) {
        owners_Query.deleteRow();
        model.save();
    }
}//GEN-LAST:event_btnDeleteActionPerformed

/**
 * Edit selected owner button's click event handler.
 * @param evt Event object
 */
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
    var ownerForm = new OwnerForm();
    ownerForm.OwnerId = owners_Query.OWNERS_ID;
    ownerForm.showModal(refresh);
}

function refresh() {
    model.requery();
}