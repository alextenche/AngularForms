
angularFormsApp.factory('DataService', function () {
	var getEmployee = function(id){
		if(id == 456){
				return {
					id: 456,
					fullName: "Alex Tenche",
					notes: "The ideal employee.  Just don't ask him about bolsevics.",
					department: "Administration",
					dateHired: "July 11 2014",
					perkCar: true,
					perkStock: false,
					perkSixWeeks: true,
					payrollType: "none"
				};
			}
			return undefined;
		};
		
		var insertEmployee = function(newEmployee){
			return true;
		};
		
		var updateEmployee = function(employee){
			return true;
		};
		
		return {
			insertEmployee: insertEmployee,
			updateEmployee: updateEmployee,
			getEmployee: getEmployee
		};
    });