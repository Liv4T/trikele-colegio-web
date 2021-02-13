<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Anuncios</h3>
                    <div class="card-body">
                        <table
                            class="table table-responsive-xl table-hover table-striped center"
                        >
                            <tbody>
                                <tr>
                                    <td width="10px">
                                        <a
                                            href="/anuncio_mc"
                                            class="btn btn-warning btn-sm"
                                            >v</a
                                        >
                                    </td>
                                    <td>
                                        <img
                                            width="70px"
                                            height="70px"
                                            src="../assets/img/QUIMICA.png"
                                        />
                                    </td>
                                    <td>Química</td>
                                </tr>
                                <tr>
                                    <td width="10px">
                                        <a
                                            href="/vactivity"
                                            class="btn btn-warning btn-sm"
                                            >v</a
                                        >
                                    </td>
                                    <td>
                                        <img
                                            width="70px"
                                            height="70px"
                                            src="../assets/img/FISICA.png"
                                        />
                                    </td>
                                    <td>Física</td>
                                </tr>
                                <tr>
                                    <td width="10px">
                                        <a
                                            href="/vactivity"
                                            class="btn btn-warning btn-sm"
                                            >v</a
                                        >
                                    </td>
                                    <td>
                                        <img
                                            width="70px"
                                            height="70px"
                                            src="../assets/img/MATEMATICAS.png"
                                        />
                                    </td>
                                    <td>Matemáticas</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {}
};
</script>
<style></style>
