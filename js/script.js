$(function() {
    function Human() {
        this.name = 'unknown';
        this.age = 'unknown';
        this.gender = 'unknown';
        this.height = 'unknown';
        this.weight = 'unknown';
    }

    function Worker(job, salary) {
        this.company = 'unknown';
        this.salary = 'unknown';
    }


    function Student() {
        this.study = 'GoIt';
        this.grant = 'unknown';
    }

    Worker.prototype = new Human();
    Student.prototype = new Human();

    var Alla = new Worker();
    Alla.name = 'Alla';
    Alla.age = '31';
    Alla.gender = 'female';
    Alla.company = 'Microsoft';
    Alla.salary = '$1000';
    console.log(Alla);

    var Oleg = new Student();
    Oleg.name = 'Oleg';
    Oleg.grant = '$100';
    console.log(Oleg);

});
