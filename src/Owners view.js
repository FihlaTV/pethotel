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
        owners.deleteRow();
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
    lastNamePattern = '%' + txtSearch.text + '%';
}//GEN-LAST:event_btnSearchActionPerformed

/**
 * Report button click event handler.
 * @param evt Event object
 */
function btnReportActionPerformed(evt) {//GEN-FIRST:event_btnReportActionPerformed
    var ownersReport = new Report("OwnersReport");
    ownersReport.lastNamePattern = lastNamePattern;
    ownersReport.show();
}//GEN-LAST:event_btnReportActionPerformed

/**
 * Search text control event handler.
 * @param evt Event object
 */
function txtSearchActionPerformed(evt) {//GEN-FIRST:event_txtSearchActionPerformed
    btnSearchActionPerformed(null);
}//GEN-LAST:event_txtSearchActionPerformed

/**
 * Pet's column onRender handler.
 * @param evt onRender event object
 * @returns true to apply changes to the cell
 */
function petsOnRender(evt) {//GEN-FIRST:event_petsOnRender
    var txt = '';
    ownersPets.find(ownersPets.md.OWNERS_ID, evt.id).forEach(function(aPet) {
        if(txt.length > 0) {
            txt += ' ';
        }
        txt += aPet.NAME ? aPet.NAME : '';
    });
    evt.cell.display = txt;
    return true;
}//GEN-LAST:event_petsOnRender

/**
 * Called then data is ready in ownersPets entity.
 * @param evt Event object
 */
function ownersPetsOnRequeried(evt) {//GEN-FIRST:event_ownersPetsOnRequeried
    owners.params.lastNamePattern = ownersPets.params.lastNamePattern;
    owners.requery();
}//GEN-LAST:event_ownersPetsOnRequeried

function editOwner() {
    var ownerView = new OwnerView();
    ownerView.ownerID = owners.OWNERS_ID;
    ownerView.showModal(refresh);
}

function refresh() {
    var owner = owners.getRow(owners.rowIndex);
    model.requery(function() {
        grdOwners.makeVisible(owner, true);
    });
}