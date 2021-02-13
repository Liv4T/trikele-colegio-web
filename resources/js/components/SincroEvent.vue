<template>
  <auto-responsive>
    <div class="background2">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header">Encuentros sincronicos</h3>
            <form class="needs-validation" novalidate>
              <div class="card-body">
                <div class="form-group row">
                  <div class="col">
                    <strong>Cantidad de encuentros sincronicos</strong>
                    <br />
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck1"
                        v-model="newRegional"
                      />
                      <label class="custom-control-label" for="gridCheck1">1</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck2"
                        v-model="newWorld"
                      />
                      <label class="custom-control-label" for="gridCheck2">2</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck3"
                        v-model="newWor"
                      />
                      <label class="custom-control-label" for="gridCheck3">3</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck4"
                        v-model="newW"
                      />
                      <label class="custom-control-label" for="gridCheck4">4</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck5"
                        v-model="newWo"
                      />
                      <label class="custom-control-label" for="gridCheck5">5</label>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields1">
                  <strong>Primer encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields2">
                  <strong>Primer encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Segundo encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields3">
                  <strong>Primer encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Segundo encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Tercero encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields4">
                  <strong>Primer encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Segundo encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Tercero encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Cuarto encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields5">
                  <strong>Primer encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Segundo encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Tercero encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Cuarto encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Quinto encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newFromW"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <a href="/freeUnit" class="btn btn-primary float-right">Guardar</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </auto-responsive>
</template>
<script>
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
$(function() {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var checkbox1 = $("#gridCheck2");
  var checkbox2 = $("#gridCheck3");
  var checkbox3 = $("#gridCheck4");
  var checkbox4 = $("#gridCheck5");

  var hidden = $("#hidden_fields1");
  var hidden1 = $("#hidden_fields2");
  var hidden2 = $("#hidden_fields3");
  var hidden3 = $("#hidden_fields4");
  var hidden4 = $("#hidden_fields5");

  hidden.hide();

  hidden1.hide();

  hidden2.hide();

  hidden3.hide();

  hidden4.hide();

  checkbox.change(function() {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.

      hidden.show();
    } else {
      hidden.hide();
      checkbox1.show();
    }
  });
  checkbox1.change(function() {
    if (checkbox1.is(":checked")) {
      // Show the hidden fields.
      hidden1.show();
    } else {
      hidden1.hide();
    }
  });
  checkbox2.change(function() {
    if (checkbox2.is(":checked")) {
      // Show the hidden fields.
      hidden2.show();
    } else {
      hidden2.hide();
    }
  });
  checkbox3.change(function() {
    if (checkbox3.is(":checked")) {
      // Show the hidden fields.
      hidden3.show();
    } else {
      hidden3.hide();
    }
  });
  checkbox4.change(function() {
    if (checkbox4.is(":checked")) {
      // Show the hidden fields.
      hidden4.show();
    } else {
      hidden4.hide();
    }
  });
});
import AutoResponsive from "autoresponsive-vue";

Vue.use(AutoResponsive);

export default {
  data() {
    return {
      inputs: [
        {
          name: ""
        }
      ],
      inputs1: [
        {
          name: ""
        }
      ],
      Uoptions: ["3", "4"],
      subcategories: [],
      TypeUsers: [],
      classes: [],
      myOptions: ["On-Line", "Virtual"],
      newDescription: "",
      newName: "",
      newId_subcategories: "",
      newSubject: "",
      newObjetive: "",
      newFromW: "",
      newToW: "",
      newFromH: "",
      newToH: "",
      newQuiz: "",
      newIndicator: "",
      newPercent: "",
      newLocal: "",
      newRegional: "",
      newContry: "",
      newWorld: "",
      newId_user: "",
      fillC: {
        id: "",
        name: "",
        description: "",
        id_user: "",
        id_category: "",
        id_subcategory: "",
        subject: "",
        objetive: "",
        fromW: "",
        toW: "",
        fromH: "",
        toH: "",
        quiz: "",
        indicator: "",
        percent: "",
        local: "",
        regional: "",
        world: ""
      },
      errors: []
    };
  },
  mounted() {
    var urlsel = "GetCategories";
    axios.get(urlsel).then(response => {
      this.categories = response.data;
    });
    var urlsel = "GetTypeU";
    axios.get(urlsel).then(response => {
      this.TypeUsers = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    add(index) {
      this.inputs.push({ name: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({ name: "" });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },
    editClasses(clas) {
      this.fillC.id = clas.id;
      this.fillC.description = clas.description;
      this.fillC.name = clas.name;
      this.fillC.id_user = clas.id_user;
      this.fillC.id_category = clas.id_category;
      this.fillC.id_subcategory = clas.id_subcategory;
      this.fillC.subject = clas.subject;
      this.fillC.objetive = clas.objetive;
      this.fillC.fromW = clas.fromW;
      this.fillC.toW = clas.toW;
      this.fillC.fromH = clas.fromH;
      this.fillC.toH = clas.toH;
      this.fillC.quiz = clas.quiz;
      this.fillC.indicator = clas.indicator;
      this.fillC.percent = clas.percent;
      this.fillC.local = clas.local;
      this.fillC.regional = clas.regional;
      this.fillC.world = clas.world;
      $("#edit").modal("show");
    },
    updateClasses(id) {
      var url = "classes/" + id;
      axios
        .put(url, this.fillC)
        .then(response => {
          this.getClasses();
          (this.fillC = {
            id: "",
            name: "",
            description: "",
            id_user: "",
            id_category: "",
            id_subcategory: "",
            subject: "",
            objetive: "",
            fromW: "",
            toW: "",
            fromH: "",
            toH: "",
            quiz: "",
            indicator: "",
            percent: "",
            local: "",
            regional: "",
            world: ""
          }),
            (this.errors = []);
          $("#edit").modal("hide");
          toastr.success("Class successfully edited");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    deleteClasses(clas) {
      var url = "classes/" + clas.id;
      axios.delete(url).then(response => {
        // eliminar
        this.getClasses(); //lista
        toastr.success("Successfully removed"); //mensaje
      });
    },
    createClasses() {
      var url = "classes";
      this.newId_user = 36;
      axios
        .post(url, {
          id_user: this.newId_user,
          description: this.newDescription,
          name: this.newName,
          id_category: this.Category,
          id_subcategory: this.newId_subcategories,
          subject: this.newSubject,
          objetive: this.newObjetive,
          fromW: this.newFromW,
          toW: this.newToW,
          fromH: this.newFromH,
          toH: this.newToH,
          quiz: this.newQuiz,
          indicator: this.newIndicator,
          percent: this.newPercent,
          local: this.newLocal,
          regional: this.newRegional,
          world: this.newWorld
        })
        .then(response => {
          this.getClasses();
          this.newDescription = "";
          this.newId_user = "";
          this.newName = "";
          this.newId_subcategories = "";
          this.newSubject = "";
          this.newObjetive = "";
          this.newToW = "";
          this.newFromW = "";
          this.newFormH = "";
          this.newToH = "";
          this.newQuiz = "";
          this.newIndicator = "";
          this.newPercent = "";
          this.newLocal = "";
          this.newRegional = "";
          this.newContry = "";
          this.newWorld = "";
          this.errors = [];
          $("#create").modal("hide");
          toastr.success("New class created successfully");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    getSubcategories() {
      var urlse = "GetSubcategories/" + this.Category;
      axios.get(urlse).then(response => {
        this.subcategories = response.data;
      });
    }
  }
};
</script>
<style>
.background1 {
  background: url(../assets/img/Fondo5.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
</style>