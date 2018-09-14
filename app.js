$(document).ready(function() {

  displayCategoryButtons();

  // let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

  // localStorage.setItem("items", JSON.stringify(itemsArray));
  // const data = JSON.parse(localStorage.getItem("items"));

  // const liMaker = text => {
  //   const li = $("<li>" + text + "</li>");
  //   $(".display").append(li);
  // }

  // $("form").on("submit", function(event) {
  //   event.preventDefault();

  //   itemsArray.push($(".user-input-body").val());
  //   localStorage.setItem("items", JSON.stringify(itemsArray));
  //   liMaker($(".user-input-body").val());
  //   $(".user-input-body").val("");
  // });

  // data.forEach(item => {
  //   liMaker(item);
  // })





  // $('.add-text-btn').hide();
  // $('.user-input-body').hide();

  function displayCategoryButtons() {

    let buttonsArray = [];

    for (var i = 0; i < localStorage.length; i++) {

      buttonsArray.push([localStorage.key(i), localStorage.getItem(localStorage.key(i))]);

    }

    return buttonsArray.map(el => {

      let obj = {};

      el.forEach(item => {
        obj[el[0]] = item;
      });

      for (let key in obj) {

        let storedButton = $('<button class="category" data-name="' + key + '">' + 
          key + '</button>');

        $(".button-drop").append(storedButton);

        $(storedButton).on("click", function() {

          let listHtml = '<br><div class="display-category" data-storage-key="'+key+'"> ' + 
                         '---- ' + key + ' ----' + '</div><br>';

          let itemHtml = '<div class="display-item" data-storage-key="'+key+'"> ' + 
          localStorage.getItem(key) + '</div>';

          $(".display").html(listHtml + itemHtml);

          // let listHtml = '<br><div class="display-category" data-storage-key="'+key+'"> ' + 
          //                '----- ' + key + ' -----' + '</div><br>';

          // let itemList = '<div class="display-item" data-storage-key="'+key+'"> ' + 
          //                localStorage.getItem(key) + '</div>';

          // $(".display").html(listHtml);

          // $("ul").append(itemList);

        });
      }
    });
  }

  $(".add-text-btn").on("click", function(){

    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

  });
    $(".display-item").on("click", function(e){
      // plop the key:value back into the input boxes

      // get the values from the the divs?
      console.log("key=> ", e.target.dataset.storageKey); // user-input-title
      localStorage.getItem(e.target.dataset.storageKey); // user-input-body

      // set those values in the form fields
      $(".user-input-title").val(e.target.dataset.storageKey);
      $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
    });

  function submit() {
    // store values
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();

    // clear values
    $(".user-input-title").val("");
    $(".user-input-body").val("");

    localStorage.getItem(inputKey)

    // set key and value in local storage
    localStorage.setItem(inputKey, inputValue);

    // let itemsArray = localStorage.getItem(inputKey) ? 
    //                  JSON.parse(localStorage.getItem(inputKey)) : [];

    // localStorage.setItem(inputKey, JSON.stringify(itemsArray));
    // const data = JSON.parse(localStorage.getItem(inputKey));

    // let listItems = localStorage.setItem('items') ? 
    // JSON.parse(localStorage.setItem('items')) : [];
    
    //create a button for each category
    let categoryButton = $('<button class="category" data-name="' + 
      inputKey + '">' + inputKey + '</button>');

    // // drop button below title
    $(".button-drop").append(categoryButton)

    $(categoryButton).on("click", function() {
      let listHtml = '<div class="display-category" data-storage-key="'+inputKey+'"> ' + 
      '---- ' + inputKey + ' ----' + '</div><br>';
      let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + 
      localStorage.getItem(inputKey) + '</div>';

      $(".display").html(listHtml + itemHtml);
    });
  }

   // TODO add back in later
  $(".user-input-body").on("keyup", function() {
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();
    localStorage.setItem(inputKey, inputValue);

    let listHtml = '<br><div class="display-category" data-storage-key="'+inputKey+'"> ' + 
    '---- '+ inputKey + ' ----' + '</div><br>';
    let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + 
    localStorage.getItem(inputKey) + '</div>';

    $(".display").html(listHtml + itemHtml);
    // $(".display").text(localStorage.getItem(inputKey));
  });

  // $(".user-input-body").on("keypress", function(e) {
  //   let inputKey = $(".user-input-title").val();
  //   let inputValue = $(".user-input-body").val();
  //   let categoryButton = $('<button class="category" data-name="' + 
  //     inputKey + '">' + inputKey + '</button>');
  //   if (e.keyCode === 13) {
  //     // drop button below title
  //     $(".button-drop").append(categoryButton);
  //     $(".user-input-title").val("");
  //     $(".user-input-body").val("");
  //     $(".display").empty();
  //   }
  // });

  $(".del-text-btn").on("click", function(e) {
    e.preventDefault();
   // let t = event.currentTarget;
   // let deleteItem = $(t).attr("data-storage-key");
   // window.confirm('Delete item?'); // maybe change to a window.confirm
   // localStorage.removeItem(deleteItem); // grab the title and plop here
   $(".user-input-title").val("");
   $(".user-input-body").val("");
   $(".display").empty();
   // clearing display? what if I have multiple items?
   // after item is removed from local storage, redisplay items from local storage
   // refresh from storage?
  });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});