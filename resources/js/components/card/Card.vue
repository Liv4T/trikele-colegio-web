<template>
    <div class="container" @click="flip">
        <div class="card-memoria" :class="{ flipped: option.flipped }">
            <img
                v-if="option.cardName === '8-ball'"
                class="card-memoria front"
                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/burrito_Mesa%20de%20trabajo%201.jpg?alt=media&token=e1fdac4b-4659-4723-8c4b-6dbc749df0e6"
            />
            <img
                v-if="option.cardName === 'baked-potato'"
                class="card-memoria front"
                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/gallito_Mesa%20de%20trabajo%201.jpg?alt=media&token=bf1dec33-5923-46fc-bc82-198c19eb75a1"
            />
            <img
                v-if="option.cardName === 'dinosaur'"
                class="card-memoria front"
                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/marranito_Mesa%20de%20trabajo%201.jpg?alt=media&token=e87eb1d4-57f4-4599-b952-a0a0318d6854"
            />
            <img
                v-if="option.cardName === 'kronos'"
                class="card-memoria front"
                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ovejita_Mesa%20de%20trabajo%201.jpg?alt=media&token=3a0b3dad-86b9-4c26-867f-c74c3447edf3"
            />
            <img
                v-if="option.cardName === 'rocket'"
                class="card-memoria front"
                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/perrito_Mesa%20de%20trabajo%201.jpg?alt=media&token=7a23cff8-a55b-4279-9d97-e511e0dff737"
            />
            <img
                v-if="option.cardName === 'skinny-unicorn'"
                class="card-memoria front"
                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/pollito_Mesa%20de%20trabajo%201.jpg?alt=media&token=8f8f3b7f-f5e3-45bd-b8f9-94f79f3f972e"
            />
            <img
                v-if="option.cardName === 'that-guy'"
                class="card-memoria front"
                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/torito_Mesa%20de%20trabajo%201.jpg?alt=media&token=8f0dcc59-20d9-4b47-bb1e-bdcd13644fac"
            />
            <img
                v-if="option.cardName === 'zeppelin'"
                class="card-memoria front"
                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/vaquita_Mesa%20de%20trabajo%201.jpg?alt=media&token=8b244495-e04a-4198-9e07-8ce6e3ebe9b0"
            />

            <img
                class="card-memoria back-foto"
                src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/portada%20memoria_Mesa%20de%20trabajo%201.jpg?alt=media&token=a41cf3a8-b781-4f0a-8f1b-43cf1869b033"
            />
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    components: {},
    props: {
        option: {
            type: Object,
            default() {
                return {
                    flipped: false,
                    cardName: ""
                };
            }
        }
    },

    methods: {
        ...mapActions(["flipCard"]),
        flip() {
            if (this.option.flipped) {
                return;
            }
            this.flipCard(this.option);
            this.$emit("flipped", this.option);
        }
    }
};
</script>

<style scoped>
.container {
    width: 100px;
    height: 121px;
    margin-right: 3px;
    cursor: pointer;
    position: relative;
    perspective: 800px;
    padding: 7px;
}

.card-memoria {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
}

.card-memoria.flipped {
    transform: rotateY(180deg);
}

.card-memoria img {
    display: block;
    height: auto;
    width: 100px;
    position: absolute;
    backface-visibility: hidden;
    border: outset;
    border-radius: 20px;
}

.card-memoria.back-foto {
    background: blue;
    transform: rotateY(0deg);
}
.card-memoria.front {
    background: blue;
    transform: rotateY(180deg);
}

@media screen and (max-width: 545px) {
    .container {
        width: 92px;
        height: 111px;
        margin-right: 1px;
        padding: 10px;
    }
}

@media screen and (max-width: 380px) {
    .container {
        width: 85px;
        height: 102px;
        margin-right: 1px;
    }
}

@media screen and (max-width: 360px) {
    .container {
        width: 70px;
        height: 84px;
        margin-right: 1px;
    }
}
</style>
