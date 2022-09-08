$("#toDoList ul").sortable({
  items: "li:not('.weekday, .addItem')",
  //qua ho escluso dal sortable i giorni della settimana e il box di input
  connectWith: "ul",
  dropOnEmpty: true,
  //ovvero che gli elementi sono droppabili in uno spazio vuoto
  placeholder: "emptySpace",
});

$("input").keydown(function (e) {
  if (e.keyCode == 13) {
    //significa che se, usando la tastiera, il codice del tasto premuto
    //(ovvero "e") ha il codice 13, ovvero il codice del tasto Invio...

    var item = $(this).val();
    //... allora definisco una variabile chiamata item che ha il valore assegnato
    //a "this" ovvero all'input, cioè ciò che ho scritto nell'input

    $(this)
      .parent()
      .parent()
      .append("<li>" + item + "</li>");
    // poi "this", ovvero l'input, deve risalire di due parent ovvero prima risale
    //verso la <li> e poi verso la <ul>, e alla <ul> deve appendere una nuova
    // <li> che conterrà "item", quindi ciò che ho scritto nell'input.

    $(this).val("");
    //questo fa si che quello che c'è scritto nell'input si azzeri ogni volta
  }
});

$("#trash").droppable({
  drop: function (event, ui) {
    //questo è un default della funzione droppable
    ui.draggable.remove();
    //ovvero che ogni volta che trascino qualcosa qui dentro, va rimossa
  },
});
