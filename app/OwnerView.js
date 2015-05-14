/**
 * Allows to edit the owner, add and edit his/her pets and pets visit to the hotel. 
 * @author vv
 * @name OwnerView
 */
function OwnerView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var onSucsess;
    var owner;
    self.show = function () {
        form.show();
    };

    self.showModal = function (aOnSucsess, aOwner) {
        P.Logger.info(aOwner);
        owner = aOwner;
        form.edFirstName.data = owner;
        form.edLastName.data = owner;
        form.edAddress.data = owner;
        form.edCity.data = owner;
        form.edPhone.data = owner;
        form.edEmale.data = owner;
        onSucsess = aOnSucsess;

        model.petsQuery.params.owner_id = owner.OWNERS_ID;
        model.visitsQuery.params.ownerID = owner.OWNERS_ID;
        model.requery();

        form.showModal();
    };

    /**
     * Validates the view.
     * @return Validation error message or empty String if form is valid
     */
    function validate() {
        var message = validatePets();
        message += validateVisits();
        return message;
    }

    /**
     * Validates owner's properties.
     * @return Validation error message or empty String if form is valid
     */
    function validateOwner() {
        var message = "";
        if (!form.edFirstName.value) {
            message += "First name is required.\n";
        }
        if (!form.edLastName.value) {
            message += "Last name is required.\n";
        }
        if (!form.edAddress.value) {
            message += "Address is required.\n";
        }
        if (!form.edCity.value) {
            message += "City is required.\n";
        }
        if (!form.edPhone.value) {
            message += "Phone number is required.\n";
        }
        if (!form.edEmale.value) {
            message += "E-Mail is required.\n";
        }
        return message;
    }
//
    /**
     * Validates pets entity.
     * @return Validation error message or empty String if form is valid
     */
    function validatePets() {
        var message = "";
        model.petsQuery.forEach(function (pet) {
            if (!pet.name) {
                message += "Pet's name is required.\n";
            }
            if (!pet.birthdate) {
                message += "Pet's birthdate is required.\n";
            }
            if (!pet.type_id) {
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
        form.grdVisits.data.forEach(function (visit) {
            if (!visit.fromdate) {
                message += "Visit from date is required.\n";
            }
            if (!visit.todate) {
                message += "Visit to date is required.\n";
            }
            if (visit.fromdate >= visit.todate) {
                message += "Visit 'from' date must be before 'to' date.\n";
            }
        });
        return message;
    }

    var deleteVisits = function () {
        for (var i in form.grdVisits.selected) {
            model.visitsQuery.splice(model.visitsQuery.indexOf(form.grdVisits.selected[i]), 1);
        }
        model.save();
    };


    form.btnAddPet.onActionPerformed = function (event) {
        model.petsQuery.push({});
    };

    form.btnDeletePet.onActionPerformed = function (event) {
        if (confirm("Delete selected pets?")) {
            for (var i in form.grdPets.selected) {
                model.petsQuery.splice(model.petsQuery.indexOf(form.grdPets.selected[i]), 1);
            }
            model.save();
        }
    };

    form.btnAddVisit.onActionPerformed = function (event) {
        model.visitsQuery.push({});
        model.visitsQuery.cursor.FROMDATE = new Date();
    };

    form.btnDeleteVisit.onActionPerformed = function (event) {
        if (confirm("Delete selected visits?")) {
            for (var i in form.grdVisits.selected) {
                model.visitsQuery.splice(model.visitsQuery.indexOf(form.grdVisits.selected[i]), 1);
            }
            model.save();
        }
    };
    form.btnCancel.onActionPerformed = function (event) {
        onSucsess();
        form.close();
    };
    
    
    form.btnSave.onActionPerformed = function (event) {
        owner.fullName = owner.firstname + " " + owner.lastname;
        var message = validateOwner();

        if (model.modified) {
            message += validate();
            if (!message) {
                model.save(function () {
                    onSucsess(); 
                }, function () {
                    P.Logger.Info("Failed on save");
                });
            }
        }
        if (!message) {
            form.close();
        } else {
            alert(message);
        }

    };

}