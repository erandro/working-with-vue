const app = new Vue({
    el: "#firstDiv",
    data: {
        name: "eran",
        age: 32
    },
    template: `
    <div>
        <h1>Name: {{name}}</h1>
        <h2>Age: {{age}}</h2>
    </div>`
})