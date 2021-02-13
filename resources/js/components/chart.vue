<template>
    <div class="back">
        <div id="crud" class="row justify-content-center">
            <div class="col-sm-10">
                <div class="custom-card text-center">
                    <h3 class="card-header fondo">Usuarios estudiantes</h3>
                    <div class="card-body">
                        <ejs-button
                            class="btn btn-warning"
                            cssClass="e-flat"
                            isPrimary="true"
                            v-on:click.native="onClick"
                            id="exportBtn"
                            float="left"
                            >Exportar</ejs-button
                        >
                        <ejs-chart
                            ref="chart"
                            id="container"
                            :title="title"
                            :primaryXAxis="primaryXAxis"
                        >
                            <e-series-collection>
                                <e-series
                                    :dataSource="seriesData"
                                    type="Column"
                                    xName="mes"
                                    yName="cantidad"
                                    name="Gold"
                                ></e-series>
                            </e-series-collection>
                        </ejs-chart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import {
    ChartPlugin,
    ColumnSeries,
    Category,
    Export
} from "@syncfusion/ej2-vue-charts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ChartPlugin);
Vue.use(ButtonPlugin);

export default {
    data: function() {
        return {
            seriesData: [
                { mes: "Enero", cantidad: 50 },
                { mes: "Febrero", cantidad: 40 },
                { mes: "Marzo", cantidad: 70 },
                { mes: "Abril", cantidad: 60 },
                { mes: "Mayo", cantidad: 50 },
                { mes: "Junio", cantidad: 40 }
            ],
            primaryXAxis: {
                valueType: "Category",
                title: "Meses"
            },
            title: "Usuarios registrados"
        };
    },
    provide: {
        chart: [ColumnSeries, Category, Export]
    },
    methods: {
        onClick: function(args) {
            let chart1 = document.getElementById("container").ej2_instances[0];
            chart1.exportModule.export("PDF", "Chart", null, [chart1]);
        }
    }
};
</script>
<style>
#container {
    height: 350px;
}
.e-export-icon::before {
    content: "\e728";
}
</style>
