const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Hello world',
            navList: ['Home', 'About', 'Contact'],
            firstName: "",
            anyThings:'anyThings',
            htmlContent: "<b>Hello, I am bold!</b> <i>And I am italic!</i>"
            
        }
    },
    methods: {
        addBtn() {
            console.log('button click')
            console.log('firstName',this.firstName)
        },
        showMessage(message){

            return message;

        }
    }



}).mount('#app')
