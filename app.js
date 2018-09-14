$(document).ready(function() {

  displayCategoryButtons();

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
          JSON.parse(key) + '</button>');

        if (JSON.parse(key) !== "") {

        $(".button-drop").append(storedButton);

        $(storedButton).on("click", function() {

          let listHtml = '<br><div class="display-category" data-storage-key="'+key+'"> ' + 
                         '---- ' + JSON.parse(key) + ' ----' + '</div><br>';

          let itemHtml = '<div class="display-item" data-storage-key="'+key+'"> ' + 
          JSON.parse(localStorage.getItem(key))[0] + '</div>';

          $(".display").html(listHtml + itemHtml);

        });
        }
      }
    });
  }

  $(".add-text-btn").on("click", function(e) {

    e.preventDefault();
    // let items = {};
    // let inputKey = JSON.stringify($(".user-input-title").val());
    // let inputValue = $(".user-input-body").val();
       
    // items[inputKey] = [];
       
    // for (let key in items) {
    //   items[key].push(inputValue);      
    // }

    // localStorage.setItem(inputKey, JSON.stringify(items[inputKey]));

    // let listHtml = '<br><div class="display-category" data-storage-key="'+items[inputKey]+'"> ' + 
    // '---- '+ JSON.parse(inputKey) + ' ----' + '</div><br>';

    // let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + 
    // items[inputKey][0] + '</div>';

    // $(".display").html(listHtml + itemHtml);

    // for (var i = 0; i < items[inputKey].length; i++) {

    //   console.log(inputKey, items[inputKey][i]);
    // }
    setAndDisplay();
    
    createCategoryButton();

    // clear values
    $(".user-input-title").val("");
    $(".user-input-body").val("");
    // $(".display").empty();
    // $(".display").hide();
    // $(".display").html();
  });

  // create a button for each category
  var createCategoryButton = function() {
    let inputKey = JSON.stringify($(".user-input-title").val());
    let categoryButton = $('<button class="category" data-name="' + 
      inputKey + '">' + JSON.parse(inputKey) + '</button>');

    // drop button below title
    $(".button-drop").append(categoryButton)

    $(categoryButton).on("click", function() {
      let listHtml = '<br><div class="display-category" data-storage-key="'+inputKey+'"> ' + 
      '---- ' + JSON.parse(inputKey) + ' ----' + '</div><br>';
      let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + 
      JSON.parse(localStorage.getItem(inputKey))[0] + '</div>';

      $(".display").html(listHtml + itemHtml);
    });
  }

  let setAndDisplay = function() {
    let items = {};
    let inputKey = JSON.stringify($(".user-input-title").val());
    let inputValue = $(".user-input-body").val();
       
    items[inputKey] = [];
       
    for (let key in items) {
      items[key].push(inputValue);      
    }

    localStorage.setItem(inputKey, JSON.stringify(items[inputKey]));
    // iterateValues();

    for (var i = 0; i < items[inputKey].length; i++) {

      let listHtml = '<br><div class="display-category" data-storage-key="'+items[inputKey]+'"> ' + 
      '---- '+ JSON.parse(inputKey) + ' ----' + '</div><br>';

      let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + 
      items[inputKey][0] + '</div>';

      $(".display").html(listHtml + itemHtml);
    }


  }

  // let iterateValues = function() {
  //   for (var i = 0; i < items[inputKey].length; i++) {

  //     let listHtml = '<br><div class="display-category" data-storage-key="'+items[inputKey]+'"> ' + 
  //     '---- '+ JSON.parse(inputKey) + ' ----' + '</div><br>';

  //     let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + 
  //     items[inputKey][0] + '</div>';

  //     $(".display").html(listHtml + itemHtml);
  //   }
  // }

  // $(".display-item").on("click", function(e){
  //   // plop the key:value back into the input boxes

  //   // get the values from the the divs?
  //   console.log("key=> ", e.target.dataset.storageKey); // user-input-title
  //   localStorage.getItem(e.target.dataset.storageKey); // user-input-body

  //   // set those values in the form fields
  //   $(".user-input-title").val(e.target.dataset.storageKey);
  //   $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
  // });


  $(".user-input-body").on("keyup", function() {
    // setAndDisplay();

    let items = {};
    let inputKey = JSON.stringify($(".user-input-title").val());
    let inputValue = $(".user-input-body").val();
       
    items[inputKey] = [];
       
    for (let key in items) {
      items[key].push(inputValue);      
    }

    // localStorage.setItem(inputKey, JSON.stringify(items[inputKey]));
    // iterateValues();

    for (var i = 0; i < items[inputKey].length; i++) {

      let listHtml = '<br><div class="display-category" data-storage-key="'+items[inputKey]+'"> ' + 
      '---- '+ JSON.parse(inputKey) + ' ----' + '</div><br>';

      let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + 
      items[inputKey][0] + '</div>';

      $(".display").html(listHtml + itemHtml);
    }

    // let inputKey = $(".user-input-title").val();
    // let inputValue = $(".user-input-body").val();
    // localStorage.setItem(inputKey, inputValue);

    // let listHtml = '<br><div class="display-category" data-storage-key="'+inputKey+'"> ' + 
    // '---- '+ inputKey + ' ----' + '</div><br>';
    // let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + 
    // localStorage.getItem(inputKey) + '</div>';

    // $(".display").html(listHtml + itemHtml);
    // $(".display").hide();
  });


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

});