/**
 * 
 * @author vv
 * @name OwnerForm
 */

function btnSaveActionPerformed(evt) {//GEN-FIRST:event_btnSaveActionPerformed
    var message = validate();
    if (!message) {
        model.save(function() {
            close(owner.OWNERS_ID);
        });
    } else {
        alert(message, title);
    }
}//GEN-LAST:event_btnSaveActionPerformed

function btnCancelActionPerformed(evt) {//GEN-FIRST:event_btnCancelActionPerformed
    close();
}//GEN-LAST:event_btnCancelActionPerformed

function owner_OnRequeried(evt) {//GEN-FIRST:event_owner_OnRequeried
    if (!OwnerId) {
        owner.insert();
    }
}//GEN-LAST:event_owner_OnRequeried

function btnAddPetActionPerformed(evt) {//GEN-FIRST:event_btnAddPetActionPerformed
    pets.insert();
    pets.OWNER = owner.OWNERS_ID;
}//GEN-LAST:event_btnAddPetActionPerformed

function btnDeletePetActionPerformed(evt) {//GEN-FIRST:event_btnDeletePetActionPerformed
    if (confirm('Delete pet?', title)) {
        pets.deleteRow();
    }
}//GEN-LAST:event_btnDeletePetActionPerformed

function btnAddVisitActionPerformed(evt) {//GEN-FIRST:event_btnAddVisitActionPerformed
    visits.insert();
    //visits.PET = pets.PETS_ID;
}//GEN-LAST:event_btnAddVisitActionPerformed

function btnDeleteVisitActionPerformed(evt) {//GEN-FIRST:event_btnDeleteVisitActionPerformed
    if (confirm('Delete visit?', title)) {
        visits.deleteRow();
    }
}//GEN-LAST:event_btnDeleteVisitActionPerformed

function petsWillScroll(evt) {//GEN-FIRST:event_petsWillScroll
    Logger.info('Pets scroll event.');
    var message = validateVisits();
    if (message) {
        alert(message);
        return false;
    }
    return true;
}//GEN-LAST:event_petsWillScroll

function validate() {
    var message = validateOwner();
    message += validatePets();
    message += validateVisits();
    return message;
}

function validateOwner() {
    var message = "";
    if (!owner.FIRSTNAME) {
        message += "First name is required.\n"
    }
    if (!owner.LASTNAME) {
        message += "Last name is required.\n"
    }
    if (!owner.ADDRESS) {
        message += "Address is required.\n"
    }
    if (!owner.CITY) {
        message += "City is required.\n"
    }
    if (!owner.TELEPHONE) {
        message += "Phone number is required.\n"
    }
    return message;
}

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
            message += "Visit 'from' date must me before 'to' date.\n";
        }
    });
    return message;
}