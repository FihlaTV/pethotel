/**
 * Allows to edit the owner, add and edit his/her pets and pets visit to the hotel. 
 * @author vv
 * @name OwnerView
 */

var DEFAULT_PET_TYPE = 2;// Dog

/**
 * Save button's click event handler.
 * @param evt Event object
 */
function btnSaveActionPerformed(evt) {//GEN-FIRST:event_btnSaveActionPerformed
    if (model.modified) {
        var message = validate();
        if (!message) {
            model.save(function() {
                close(owner.OWNERS_ID);
            });
        } else {
            alert(message);
        }
    } else {
        close();
    }
}//GEN-LAST:event_btnSaveActionPerformed

/**
 * Cancel button's click event handler.
 * @param evt Event object
 */
function btnCancelActionPerformed(evt) {//GEN-FIRST:event_btnCancelActionPerformed
    close();
}//GEN-LAST:event_btnCancelActionPerformed

/**
 * Data model's OnRequired event handler.
 * @param evt Event object
 */
function owner_OnRequeried(evt) {//GEN-FIRST:event_owner_OnRequeried
    if (!ownerID) {
        owner.insert();
    }
}//GEN-LAST:event_owner_OnRequeried

/**
 * Add pet button's click event handler.
 * @param evt Event object
 */
function btnAddPetActionPerformed(evt) {//GEN-FIRST:event_btnAddPetActionPerformed
    pets.insert(
            pets.md.OWNER, owner.OWNERS_ID,
            pets.md.TYPE, DEFAULT_PET_TYPE
            );
}//GEN-LAST:event_btnAddPetActionPerformed

/**
 * Delete pet button's click event handler. Deletes selected pet.
 * @param evt Event object
 */
function btnDeletePetActionPerformed(evt) {//GEN-FIRST:event_btnDeletePetActionPerformed
    if (confirm('Delete pet?')) {
        pets.deleteRow();
    }
}//GEN-LAST:event_btnDeletePetActionPerformed

/**
 * Add visit button's click event handler.
 * @param evt Event object
 */
function btnAddVisitActionPerformed(evt) {//GEN-FIRST:event_btnAddVisitActionPerformed
    if (pets.PETS_ID)
        visits.insert();//(visits.md.PET, pets.PETS_ID);
    else
        alert("Select a pet please.");
}//GEN-LAST:event_btnAddVisitActionPerformed

/**
 * Delete visit button's click event handler.
 * @param evt Event object
 */
function btnDeleteVisitActionPerformed(evt) {//GEN-FIRST:event_btnDeleteVisitActionPerformed
    if (confirm('Delete visit?')) {
        visits.deleteRow();
    }
}//GEN-LAST:event_btnDeleteVisitActionPerformed

/**
 * Pet's entity cursor movement event handler.
 * @param evt Event object
 */
function petsWillScroll(evt) {//GEN-FIRST:event_petsWillScroll
    Logger.info('Pets scroll event.');
    var message = validateVisits();
    if (message) {
        alert(message);
        return false;
    }
    return true;
}//GEN-LAST:event_petsWillScroll

/**
 * Validates the view.
 * @return Validation error message or empty String if form is valid
 */
function validate() {
    var message = validateOwner();
    message += validatePets();
    message += validateVisits();
    return message;
}

/**
 * Validates owner's properties.
 * @return Validation error message or empty String if form is valid
 */
function validateOwner() {
    var message = "";
    if (!owner.FIRSTNAME) {
        message += "First name is required.\n";
    }
    if (!owner.LASTNAME) {
        message += "Last name is required.\n";
    }
    if (!owner.ADDRESS) {
        message += "Address is required.\n";
    }
    if (!owner.CITY) {
        message += "City is required.\n";
    }
    if (!owner.TELEPHONE) {
        message += "Phone number is required.\n";
    }
    return message;
}

/**
 * Validates pets entity.
 * @return Validation error message or empty String if form is valid
 */
function validatePets() {
    var message = "";
    pets.forEach(function(pet) {
        if (!pet.NAME) {
            message += "Pet's name is required.\n";
        }
        if (!pet.BIRTHDATE) {
            message += "Pet's birthdate is required.\n";
        }
        if (!pet.TYPE) {
            message += "Pet's type is required.\n";
        }
    });
    return message;
}

/**
 * Validates visits entity.
 * @return Validation error message or empty String if form is valid
 */
function validateVisits() {
    var message = "";
    visits.forEach(function(visit) {
        if (!visit.FROMDATE) {
            message += "Visit from date is required.\n";
        }
        if (!visit.TODATE) {
            message += "Visit to date is required.\n";
        }
        if (visit.FROMDATE >= visit.TODATE) {
            message += "Visit 'from' date must be before 'to' date.\n";
        }
    });
    return message;
}