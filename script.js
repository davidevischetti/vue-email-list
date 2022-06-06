const myApp = new Vue ({
    el : '#app',

    data : {
        email : '',
        emailList : []
    },

    mounted () {     
        while (this.emailList.length < 10) {
            this.emailList.push(this.email);

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ((result) => {
                const newEmail = result.data.response;
                this.email = newEmail;
                console.log(this.email);
            });
        };
    }
});
