/**
 * 
 * @author vv
 * @name Owners
 */



function btnAddActionPerformed(evt) {//GEN-FIRST:event_btnAddActionPerformed
    var ownerForm = new OwnerForm();
    ownerForm.showModal(refresh);
}//GEN-LAST:event_btnAddActionPerformed

function btnDeleteActionPerformed(evt) {//GEN-FIRST:event_btnDeleteActionPerformed
    if (confirm("Delete owner?")) {
        owners_Query.deleteRow();
        model.save();
    }
}//GEN-LAST:event_btnDeleteActionPerformed

function btnEditActionPerformed(evt) {//GEN-FIRST:event_btnEditActionPerformed
    editOwner();
}//GEN-LAST:event_btnEditActionPerformed

function grdOwnersMouseClicked(evt) {//GEN-FIRST:event_grdOwnersMouseClicked
    if (evt.clickCount > 1) {
        editOwner();
    }
}//GEN-LAST:event_grdOwnersMouseClicked


function editOwner() {
    var ownerForm = new OwnerForm();
    ownerForm.OwnerId = owners_Query.OWNERS_ID;
    ownerForm.showModal(refresh);
}

function refresh() {
    model.requery();
}