<template>
    <div id="memoria" class="back-menu">
        <div class="game-panel">
            <Dashboard></Dashboard>
            <Chessboard></Chessboard>
            <Status></Status>
        </div>
    </div>
</template>

<script>
import Game from "./Game";
import Dashboard from "./dashboard/Dashboard";
import Chessboard from "./card/Chessboard";
import Status from "./footer/PlayStatus";
import store from "../vuex/store";
import { mapActions } from "vuex";
import { STATUS } from "../vuex/store/statusEnum";
window.Vue = require("vue");

export default {
    components: { Dashboard, Chessboard, Status, store },
    created() {
        this.updateStatus(STATUS.READY);
        this.reset();
    },

    methods: {
        ...mapActions(["updateStatus", "reset"])
    }
};
</script>

<style scoped>
.game-panel {
    width: 545px;
    height: 670px;
    border: 4px solid #bdbdbd;
    border-radius: 2px;
    background-color: #faf8ef;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 545px) {
    .game-panel {
        width: 100%;
        height: 100%;
        justify-content: space-around;
    }
}
.back-menu {
    padding-left: 400px;
}
</style>
