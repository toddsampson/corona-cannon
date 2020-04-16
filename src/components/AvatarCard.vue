<template>
<div class="col-12">
    <div class="row">
<div class="col-12 col-md-6" v-for="creator in creators" v-bind:key="creator.name">
    <v-card min-height="100%">
        <div class="v-list-item--doc v-list-item v-list-item--link theme--light primary--text" tabindex="0">
            <v-avatar class="v-list-item__avatar grey" style="height: 40px; min-width: 40px; width: 40px;">
                <v-img
                    v-if="creator.photourl"
                    :src="creator.photourl"
                    >
                </v-img>
                <v-icon v-else aria-hidden="true" class="v-icon notranslate mdi mdi-account"></v-icon>

            </v-avatar>
            <div class="v-list-item__content">
            <div class="v-list-item__title"><strong>{{creator.name}}</strong></div>
            <div class="v-list-item__subtitle" style="white-space: normal;"><span>
                <a v-if="creator.linkedin_url" :href="creator.linkedin_url" style="text-decoration:none">
                <v-icon aria-hidden="true" class="v-icon notranslate mdi mdi-linkedin"></v-icon>
                </a>

                <a v-if="creator.twitter_url" :href="creator.twitter_url" style="text-decoration:none">
                <v-icon aria-hidden="true" class="v-icon notranslate mdi mdi-twitter"></v-icon>
                </a>


                </span></div>
            </div>
        </div>
    </v-card>
</div>
</div>
</div>
</template>


<script>
export default {
    message: '',
    data: function(){
        return {
            creators: [
                {
                    name: 'Todd Sampson',
                    photourl: 'https://media-exp1.licdn.com/dms/image/C5103AQHYdLdrcES7lw/profile-displayphoto-shrink_800_800/0?e=1592438400&v=beta&t=HeymagfZXLR3zCIQ45TUHYfIWNEb6XD7MdYLgA7A9eg',
                    linkedin_url: "https://www.linkedin.com/in/toddsampson/",
                    twitter_url: "https://www.linkedin.com/in/toddsampson/",
                    },
                { name: 'Avram'},
                { name: 'Miller'},
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
// .modelcard {
//   margin: 0 0 40px 0;
// }
</style>
