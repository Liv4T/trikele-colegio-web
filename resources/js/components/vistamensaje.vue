<template>
  <div class="back">
    <div class="container-mensaje">
      <div class="row">
        <label for="nombre" class="label-mensaje">De:</label>
      </div>
      <input
        class="input-mensaje"
        id="nombre"
        name="nombre"
        disabled
        placeholder="ejemplo@email.com"
      />
      <div class="row">
        <label for="email">Para:</label>
      </div>
      <input
        class="input-mensaje"
        id="email"
        name="email"
        type="email"
        placeholder="ejemplo@email.com"
        disabled
      />
      <div class="row">
        <label for="nombre" class="label-mensaje">Asunto:</label>
      </div>
      <input class="input-mensaje" id="nombre" name="nombre" disabled placeholder="Asunto" />
      <div class="row">
        <label for="mensaje">Mensaje:</label>
      </div>

      <textarea
        class="input-mensaje mensajes"
        id="mensaje"
        name="mensaje"
        placeholder="Mensaje"
        disabled
      ></textarea>
      <div class="modal-footer">
        <a href="/mensajes" class="btn btn-warning float-right">Volver</a>
      </div>
    </div>
  </div>
</template>


<script >
</script>
<style>
.label-mensaje {
  display: block;
}

.container-mensaje {
  display: block;
  margin: 0 auto;
  width: 510px;
  color: #666666;
  font-family: Arial;
}

.input-mensaje {
  width: 380px;
  height: 27px;
  background: #f5f5f5;
  border: 2px solid #f6f6f6;
  padding: 10px;
  color: black;
}

.mensajes {
  height: 150px;
}
</style>
