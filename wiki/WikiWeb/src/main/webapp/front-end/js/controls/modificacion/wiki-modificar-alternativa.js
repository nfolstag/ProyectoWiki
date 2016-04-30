(function ($) {

    $.fn.wikiModificarAlternativa = function (eval_1, sol_1, foo, des_1, alt_1, des, sol, eval, id) {

//Si es  1 es alternativa
        if (id === "m-1") {

            $("#left-row").empty();
            $("#right-row").empty();
            $("#row-content").empty();
            $("#row-foot").empty();
            $("#panel-foot").empty();
            $("#page-name").html("Formulario de modificación");
            $("#panel-heading-left").html("Alternativa");
            $("#panel-heading-right").html("Relaciones");
            $("#header").removeClass("hidden");
            $("#content").removeClass("hidden");
            $(".col-lg-6").removeClass("hidden");
            $("#row-foot").removeClass("hidden");
            $("#row-content")
                    .append($("<div>").addClass("form-group")
                            .append($("<label>").html("Alternativa"))
                            .append($("<select>").addClass("form-control").attr({"id": "slc-1-tp"})
                                    .append($("<option>").html("..."))

                                    )
                            .append($("<p>").addClass("help-block").html("Seleccione la Alternativa que que va a modificar."))
                            );
            //Se crea la parte izquierda del formulario
            $("#left-row")
                    .append($("<div>").addClass("form-group")
                            .append($("<label>").html("Nombre"))
                            .append($("<input>").addClass("form-control").attr({"id": "txt-1"}))
                            .append($("<p>").addClass("help-block").html("Ingreses el nombre de la alternativa."))
                            )
                    .append($("<div>").addClass("form-group")
                            .append($("<label>").html("Descripción"))
                            .append($("<textarea>").addClass("form-control").attr({"id": "txt-area-1"}))
                            .append($("<p>").addClass("help-block").html("Ingreses la descripción de la alternativa."))
                            )
                    .append($("<button>").attr({"id": "btn-1"}).addClass("btn btn-primary").html("Guardar").css({"margin-right": "10px"}).on("click", eventsave1))
                    .append($("<button>").addClass("btn btn-default").html("Reset Button"))
                    ;
            //Se crea la parte derecha del formulario
            $("#right-row")
                    .append($("<div>").addClass("form-group")
                            .append($("<label>").html("Decisión"))
                            .append($("<select>").addClass("form-control").attr({"id": "slc-7"})
                                    .append($("<option>").html("...").attr({"value": "0"}))
                                    )
                            .append($("<p>").addClass("help-block").html("Seleccione la decisión que tiene relación con la alternativa."))
                            )
                    .append($("<div>").addClass("form-group")
                            .append($("<label>").html("Solución"))
                            .append($("<select>").addClass("form-control").attr({"id": "slc-12"})
                                    .append($("<option>").html("...").attr({"value": "0"}))
                                    )
                            .append($("<p>").addClass("help-block").html("Seleccione la Solución que tiene relación con la alternativa."))
                            )
                    .append($("<div>").addClass("form-group")
                            .append($("<label>").html("Evaluación"))
                            .append($("<select>").addClass("form-control").attr({"id": "slc-8"})
                                    .append($("<option>").html("...").attr({"value": "0"}))
                                    )
                            .append($("<p>").addClass("help-block").html("Seleccione la Evaluación que tiene relación con la alternativa."))

                            )
                    ;
            $("#panel-foot")
                    .append($("<div>").addClass("col-lg-12")
                            .append($("<div>").addClass("col-lg-4").attr({"id": "row-foot-7"})
                                    .append($("<table>").addClass("table table-hover")
                                            .append($("<thead>")
                                                    .append($("<tr>").addClass("active")
                                                            .append($("<th>").html("Decisiónes"))
                                                            .append($("<th>"))
                                                            )
                                                    )
                                            .append($("<tbody>").attr({"id": "tbody-7"})

                                                    )
                                            )
                                    )

                            .append($("<div>").addClass("col-lg-4").attr({"id": "row-foot-12"})
                                    .append($("<table>").addClass("table table-hover")
                                            .append($("<thead>")
                                                    .append($("<tr>").addClass("active")
                                                            .append($("<th>").html("Soluciones"))
                                                            .append($("<th>"))
                                                            )
                                                    )
                                            .append($("<tbody>").attr({"id": "tbody-12"})

                                                    )
                                            )
                                    )

                            .append($("<div>").addClass("col-lg-4").attr({"id": "row-foot-8"})
                                    .append($("<table>").addClass("table table-hover")
                                            .append($("<thead>")
                                                    .append($("<tr>").addClass("active")
                                                            .append($("<th>").html("Evaluaciones"))
                                                            .append($("<th>"))
                                                            )
                                                    )
                                            .append($("<tbody>").attr({"id": "tbody-8"})

                                                    )
                                            )
                                    )
                            );
            $.each(alt_1, function (index, data) {
                $("#slc-1-tp").append($("<option>").html(data.name).attr({"value": data.id, "idClass": "1"}));
            });
           
            $.each(des, function (index, data) {
                $("#slc-7").append($("<option>").html(data.name).attr({"value": data.id, "idClass": "7"}));
            });
           
            $.each(sol, function (index, data) {
                $("#slc-12").append($("<option>").html(data.name).attr({"value": data.id, "idClass": "12"}));
            });
            
            $.each(eval, function (index, data) {
                $("#slc-8").append($("<option>").html(data.name).attr({"value": data.id, "idClass": "8"}));
            });
            
            $("#slc-1-tp").on("change", eventLoad);
           
            $("#slc-7").on("change", eventSelected1);
           
            $("#slc-12").on("change", eventSelected1);
           
            $("#slc-8").on("change", eventSelected1);
        }

//evento para remover de las tablas en las alternativas
        function eventRemove1() {
            $(this).parent().parent().remove();
            var tableId = $(this).parent().parent().attr("id");
            var idClass = $(this).parent().parent().attr("value");

            if (idClass === "7") {
                $("#slc-7 option").each(function () {

                    if (tableId === $(this).attr("value")) {
                        $(this).removeClass("hidden");
                    }

                });
            }

            if (idClass === "12") {
                $("#slc-12 option").each(function () {

                    if (tableId === $(this).attr("value")) {
                        $(this).removeClass("hidden");
                    }

                });
            }


            if (idClass === "8") {
                $("#slc-8 option").each(function () {

                    if (tableId === $(this).attr("value")) {
                        $(this).removeClass("hidden");
                    }

                });
            }

        }

//evento para llenar las tablas en las alternativas
        function eventSelected1() {

            var textOptionSelected = $('option:selected', this).html();
            var idClassOptionSelected = $('option:selected', this).attr("idClass");
            var idOptionSelected = $('option:selected', this).attr("value");
            //llena la tabla de desisiones
            if (idClassOptionSelected === "7") {

                $("#slc-7 option[value=" + 0 + "]").attr("selected", false);
                $("#slc-7 option:selected").addClass("hidden");
                $("#slc-7 option[value=" + 0 + "]").attr("selected", true);
                $("#tbody-7")
                        .append($("<tr>").attr({"id": idOptionSelected, "value": idClassOptionSelected})
                                .append($("<td>").html(textOptionSelected).attr({"width": "80%"}))
                                .append($("<td>")
                                        .append($("<button>").addClass("btn btn-danger btn-sm").on("click", eventRemove1)
                                                .append($("<span>").addClass("glyphicon glyphicon-minus").attr({"aria-hidden": "true"}))
                                                )
                                        )
                                );
            }
//llena la tabla de soluciones
            if (idClassOptionSelected === "12") {

                $("#slc-12 option[value=" + 0 + "]").attr("selected", false);
                $("#slc-12 option:selected").addClass("hidden");
                $("#slc-12 option[value=" + 0 + "]").attr("selected", true);
                $("#tbody-12")
                        .append($("<tr>").attr({"id": idOptionSelected, "value": idClassOptionSelected})
                                .append($("<td>").html(textOptionSelected).attr({"width": "80%"}))
                                .append($("<td>")
                                        .append($("<button>").addClass("btn btn-danger btn-sm").on("click", eventRemove1)
                                                .append($("<span>").addClass("glyphicon glyphicon-minus").attr({"aria-hidden": "true"}))
                                                )
                                        )
                                );
            }

//llena la tabla de evaluaciones
            if (idClassOptionSelected === "8") {

                $("#slc-8 option[value=" + 0 + "]").attr("selected", false);
                $("#slc-8 option:selected").addClass("hidden");
                $("#slc-8 option[value=" + 0 + "]").attr("selected", true);
                $("#tbody-8")
                        .append($("<tr>").attr({"id": idOptionSelected, "value": idClassOptionSelected})
                                .append($("<td>").html(textOptionSelected).attr({"width": "80%"}))
                                .append($("<td>")
                                        .append($("<button>").addClass("btn btn-danger btn-sm").on("click", eventRemove1)
                                                .append($("<span>").addClass("glyphicon glyphicon-minus").attr({"aria-hidden": "true"}))
                                                )
                                        )
                                );
            }

        }

//evento que guarda los datos de una alternativa
        function eventsave1() {

            var name = $("#txt-1").val();
            var description = $("#txt-area-1").val();
            var list7 = [];
            var list12 = [];
            var list8 = [];
            $.each($("#tbody-7 tr"), function (index, data) {
                list7.push($(data).attr("id"));
            });
            alert(list7);
            $.each($("#tbody-12 tr"), function (index, data) {
                list12.push($(data).attr("id"));
            });
            alert(list12);
            $.each($("#tbody-8 tr"), function (index, data) {
                list8.push($(data).attr("id"));
            });
            alert(list8);
            alert(name + " " + description);
        }


        function eventLoad() {

            var textOptionSelected = $('option:selected', this).html();
            
            if (textOptionSelected === '...') {
                $("#txt-1").val("");
                $("#txt-area-1").val("");

                $("#tbody-7 tr").each(function (index, data) {

                    $("#slc-7 option").each(function (index, data1) {
                        if ($(data).attr("id") === $(data1).attr("value")) {
                            $(data1).removeClass("hidden");
                        }
                    });
                });

                $("#tbody-12 tr").each(function (index, data) {

                    $("#slc-12 option").each(function (index, data1) {
                        if ($(data).attr("id") === $(data1).attr("value")) {
                            $(data1).removeClass("hidden");
                        }
                    });
                });

                $("#tbody-8 tr").each(function (index, data) {

                    $("#slc-8 option").each(function (index, data1) {
                        if ($(data).attr("id") === $(data1).attr("value")) {
                            $(data1).removeClass("hidden");
                        }
                    });
                });

                $("#tbody-7").empty();
                $("#tbody-12").empty();
                $("#tbody-8").empty();
            } else {

                $.each(foo, function (index, data) {

                    $("#txt-1").val(data.id);
                    $("#txt-area-1").val(data.name);

                    $.each(data.decisiones, function (index, data) {

                        $("#tbody-7")
                                .append($("<tr>").attr({"id": data.id,"value": "7"})
                                        .append($("<td>").html(data.name).attr({"width": "80%"}))
                                        .append($("<td>")
                                                .append($("<button>").addClass("btn btn-danger btn-sm").on("click", eventRemove1)
                                                        .append($("<span>").addClass("glyphicon glyphicon-minus").attr({"aria-hidden": "true"}))
                                                        )
                                                )
                                        );

                    });

                    $.each(data.soluciones, function (index, data) {

                        $("#tbody-12")
                                .append($("<tr>").attr({"id": data.id,"value": "12"})
                                        .append($("<td>").html(data.name).attr({"width": "80%"}))
                                        .append($("<td>")
                                                .append($("<button>").addClass("btn btn-danger btn-sm").on("click", eventRemove1)
                                                        .append($("<span>").addClass("glyphicon glyphicon-minus").attr({"aria-hidden": "true"}))
                                                        )
                                                )
                                        );

                    });

                    $.each(data.evaluaciones, function (index, data) {

                        $("#tbody-8")
                                .append($("<tr>").attr({"id": data.id,"value": "8"})
                                        .append($("<td>").html(data.name).attr({"width": "80%"}))
                                        .append($("<td>")
                                                .append($("<button>").addClass("btn btn-danger btn-sm").on("click", eventRemove1)
                                                        .append($("<span>").addClass("glyphicon glyphicon-minus").attr({"aria-hidden": "true"}))
                                                        )
                                                )
                                        );

                    });
                });

                $("#tbody-7 tr").each(function (index, data) {

                    $("#slc-7 option").each(function (index, data1) {
                        if ($(data).attr("id") === $(data1).attr("value")) {
                            $(data1).addClass("hidden");
                        }
                    });


                });

                $("#tbody-12 tr").each(function (index, data) {

                    $("#slc-12 option").each(function (index, data1) {
                        if ($(data).attr("id") === $(data1).attr("value")) {
                            $(data1).addClass("hidden");
                        }
                    });


                });
                
                $("#tbody-8 tr").each(function (index, data) {

                    $("#slc-8 option").each(function (index, data1) {
                        if ($(data).attr("id") === $(data1).attr("value")) {
                            $(data1).addClass("hidden");
                        }
                    });


                });

            }
        }

        return this;
    };
})(jQuery);

//                $.each(alt_1, function (index, data) {
//
//                    $("#txt-1").val(data.name);
//                    $("#txt-area-1").val(data.description);
//
//                });
//
//                $.each(des_1, function (index, data) {
//                    $("#tbody-7")
//                            .append($("<tr>").attr({"id": data.id, "value": "7"})
//                                    .append($("<td>").html(data.name).attr({"width": "80%"}))
//                                    .append($("<td>")
//                                            .append($("<button>").addClass("btn btn-danger btn-sm").on("click", eventRemove1)
//                                                    .append($("<span>").addClass("glyphicon glyphicon-minus").attr({"aria-hidden": "true"}))
//                                                    )
//                                            )
//                                    );
//                });
//
//                $.each(sol_1, function (index, data) {
//                    $("#tbody-12")
//                            .append($("<tr>").attr({"id": data.id, "value": "12"})
//                                    .append($("<td>").html(data.name).attr({"width": "80%"}))
//                                    .append($("<td>")
//                                            .append($("<button>").addClass("btn btn-danger btn-sm").on("click", eventRemove1)
//                                                    .append($("<span>").addClass("glyphicon glyphicon-minus").attr({"aria-hidden": "true"}))
//                                                    )
//                                            )
//                                    );
//                });
//
//                $.each(eval_1, function (index, data) {
//                    $("#tbody-8")
//                            .append($("<tr>").attr({"id": data.id, "value": "8"})
//                                    .append($("<td>").html(data.name).attr({"width": "80%"}))
//                                    .append($("<td>")
//                                            .append($("<button>").addClass("btn btn-danger btn-sm").on("click", eventRemove1)
//                                                    .append($("<span>").addClass("glyphicon glyphicon-minus").attr({"aria-hidden": "true"}))
//                                                    )
//                                            )
//                                    );
//                });
//
//                $("#tbody-7 tr").each(function (index, data) {
//
//                    $("#slc-7 option").each(function (index, data1) {
//                        if ($(data).attr("id") === $(data1).attr("value")) {
//                            $(data1).addClass("hidden");
//                        }
//                    });
//                });
//
//                $("#tbody-12 tr").each(function (index, data) {
//
//                    $("#slc-12 option").each(function (index, data1) {
//                        if ($(data).attr("id") === $(data1).attr("value")) {
//                            $(data1).addClass("hidden");
//                        }
//                    });
//                });
//
//                $("#tbody-8 tr").each(function (index, data) {
//
//                    $("#slc-8 option").each(function (index, data1) {
//                        if ($(data).attr("id") === $(data1).attr("value")) {
//                            $(data1).addClass("hidden");
//                        }
//                    });
//                });


