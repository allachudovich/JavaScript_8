$(function() {

    function Human(name, age) {
        this.name = name || 'unknown';
        this.age = age || 0;
        this.gender = 'unknown';
        this.height = 'unknown';
        this.weight = 'unknown';
    }

    function Worker(name, age, job, salary) {
        Human.call(this, name, age);
        this.company = job || 'unknown';
        this.salary = salary || 'unknown';
    }


    function Student(name, age, gender, study, grant) {
        Human.call(this, name, age, gender);
        this.study = study || 'unknown';
        this.grant = grant || 'unknown';
    }

    Worker.prototype = new Human();
    Student.prototype = new Human();


    var Alla = new Worker('Алла', 31, 'Microsoft', 10000);
    console.log(Alla.name + ' ' + Alla.age + ' ' + Alla.company + ' ' + Alla.salary);

    var Oleg = new Student('Oleg', 17, 'male', 'GoiT', 5000);
    console.log(Oleg.name + ' ' + Oleg.age + ' ' + Oleg.gender + ' ' + Oleg.study + ' ' + Oleg.grant);

});
