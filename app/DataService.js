
angularFormsApp.factory('DataService', function () {
	var getEmployee = function(id){
		if(id == 123){
			return {
				id: 123,
				fullName: "Alex Tenche",
				notes: "The ideal employee.  Just don't ask him about bolsevics.",
				department: "Administration",
				dateHired: "05/25/2015",
				breakTime: "05/25/2015 3:00 PM",
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