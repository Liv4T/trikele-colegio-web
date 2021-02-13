<template>
    <div>
        <span class="text-muted"
            ><i class="fa fa-clock"></i> {{ ansSubmissionDate }}</span
        >
        <div class="media mt-2">
            <a href="#" class="pr-2">
                <img :src="user.avatar" />
            </a>
            <div class="media-body mt-1">
                <a class="etiqueta" href="#">{{ userData.name }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    props: ["model", "user"],
    data() {
        return {
            userData: this.user,
            date: ""
        };
    },

    computed: {
        ansSubmissionDate() {
            return moment(this.model.created_at)
                .subtract("hours", 5)
                .fromNow();
        }
    }
};
</script>

<style scoped></style>
