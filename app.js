const app = new Vue({
    el: "#firstDiv",
    data: {
        eran: {
            first: "Eran",
            last: "Dromy",
            age: 32
        },
        natalie: {
            first: "Natalie",
            last: "Schneider",
            age: 31
        }
    },
    computed: {
        eranFullName() {
            return `${this.eran.first} ${this.eran.last}`
        },
        natalieFullName() {
            return `${this.natalie.first} ${this.natalie.last}`
        }
    },
    filters: {
        fullName(val) {
            return `${val.first} ${val.last}`
        }
    },
    template: `
    <div>
        <h3>Name: {{eran | fullName}}</h3>
        <h4>Age: {{eran.age}}</h4>
        <h3>Name: {{natalieFullName}}</h3>
        <h4>Age: {{natalie.age}}</h4>
    </div>`
})