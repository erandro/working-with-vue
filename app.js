const app = new Vue({
    el: "#firstDiv",
    data: {
        residents: [
            {
                first: "Eran",
                last: "Dromy",
                age: 32
            },
            {
                first: "Natalie",
                last: "Schneider",
                age: 31
            }
        ]
    },
    filters: {
        fullName(val) {
            return `${val.first} ${val.last}`
        }
    },
    methods: {
        incrementAge(name) {
            name.age++
        },
        decrementAge(name) {
            name.age++
        }
    },
    template: `
    <div>
        <h2 v-for="resident in residents">
        <h4>Name: {{resident | fullName}}</h4>
        <h4>Age: {{resident.age}}</h4>
        <button v-on:click="incrementAge(resident)">+</button>
        <button v-on:click="decrementAge(resident)">-</button>
        <input v-model="resident.first" />
        <input v-model="resident.last" />
        </h2>
    </div>
    `
    // template: `
    // <div>
    //     <h3>Name: {{eran | fullName}}</h3>
    //     <h4>Age: {{eran.age}}</h4>
    //     <h3>Name: {{natalieFullName}}</h3>
    //     <h4>Age: {{natalie.age}}</h4>
    // </div>`
})