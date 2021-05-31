class Company {
    constructor() {
        this.departments = []
        this.departmentsCombined = []
    }


    addEmployee(username, salary, position, department) {
        if (!(username && position && department)) {
            throw new Error('Invalid input!')
            if (salary < 0 || salary == null || salary == '' || salary == undefined) {
                throw new Error('Invalid input!')
            }
        }
        const objEmployee = {
            username,
            salary,
            position,
            department
        }
        return (`New employee is hired. Name: ${username}. Position: ${position}`)
    }

    bestDepartment() {
    }
}

let c = new Company();
c.addEmployee("Gosho", 1350, "HR", "Human resources");
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.departments)
