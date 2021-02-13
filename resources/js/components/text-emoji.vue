<template>
    <div class="back">
        <form
            class="needs-validation"
            v-on:submit.prevent="createEvent"
            novalidate
        >
            <div class="input-group">
                <!--input id="btn-input" type="text" class="form-control input-lg" placeholder="Type your message here..." v-model="message" @keyup.enter="store()" autofocus /-->
                <div class="wrapper">
                    <textarea
                        class="regular-input"
                        v-model="input"
                        id="area"
                    ></textarea>
                    <emoji-picker @emoji="append" :search="search">
                        <div
                            class="emoji-invoker"
                            slot="emoji-invoker"
                            slot-scope="{ events: { click: clickEvent } }"
                            @click.stop="clickEvent"
                        >
                            <svg
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                                />
                            </svg>
                        </div>

                        <div
                            slot="emoji-picker"
                            slot-scope="{ emojis, insert, display }"
                        >
                            <div class="emoji-picker">
                                <div class="emoji-picker__search">
                                    <input
                                        type="text"
                                        v-model="search"
                                        v-focus
                                    />
                                </div>
                                <div>
                                    <div
                                        v-for="(emojiGroup, category) in emojis"
                                        :key="category"
                                    >
                                        <h5>{{ category }}</h5>
                                        <div class="emojis">
                                            <span
                                                v-for="(emoji,
                                                emojiName) in emojiGroup"
                                                :key="emojiName"
                                                @click="insert(emoji)"
                                                :title="emojiName"
                                                >{{ emoji }}</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </emoji-picker>
                </div>
            </div>
            <div class="modal-footer">
                <input type="submit" class="btn btn-warning" value="Guardar" />
            </div>
        </form>
    </div>
</template>
<script>
import EmojiPicker from "vue-emoji-picker";
export default {
    props: ["foro"],
    data() {
        return {
            input: "",
            search: ""
        };
    },
    components: { EmojiPicker },
    methods: {
        append(emoji) {
            this.input += emoji;
        },
        getMenu() {
            window.location = "/showQuestion/" + this.foro;
        },
        createEvent() {
            var url = "/storeAnswer";

            axios
                .post(url, {
                    //Cursos generales
                    id_question: this.foro,
                    body: this.input
                })
                .then(response => {
                    this.getMenu();
                    toastr.success("Nueva respuesta creada exitosamente");
                })
                .catch(error => {});
        }
    }
};
</script>
