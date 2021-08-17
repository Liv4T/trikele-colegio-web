<template>
  <div>
    <div>
      <div id="crud" class="col-sm-12">
        <div class="card-container">
          <div class="card text-center">
            <div class="card-header">
              <h3>Notas</h3>
            </div>

            <div class="card-body">
              <table class="table table-responsive-xl table-hover table-striped center">
                <thead>
                  <tr>
                    <th>Nombre de la materia</th>

                    <th>Observación</th>
                  </tr>
                </thead>
                <tbody v-for="(area, t) in areas" :key="t">
                  <tr>
                    <td>{{ area.text }}</td>

                    <td>-</td>
                  </tr>
                </tbody>
              </table>
              <div class="modal-footer">
                <input type="submit" class="btn btn-warning" value="Guardar" />
              </div>
            </div>
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
    methods: {},
  };
</script>
<style></style>
