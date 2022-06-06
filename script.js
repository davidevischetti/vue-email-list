const myApp = new Vue ({
    el : '#app',

    data : {
        emailList : []
    },

    mounted () {     
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ((result) => {
                const newEmail = result.data.response;
                this.emailList.push(newEmail)
                console.log(newEmail);
            });
            
        };

    }
});
