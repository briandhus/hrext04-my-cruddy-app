$(document).ready(function() {

  displayCategoryButtons();

  function displayCategoryButtons() {
    let buttonsArray = [];

    for (var i = 0; i < localStorage.length; i++) {
      buttonsArray.push(localStorage.key(i));
    }

    return buttonsArray.map(el => {

      storedButton = $('<button class="category" data-name="' + el + '">' + el + '</button>');
      $(".button-drop").append(storedButton);
      
      $(storedButton).on("click", function() {
        let itemHtml = '<div class="display-item" data-storage-key="'+el+'"> ' + 
        localStorage.getItem(el) + '</div>';

        $(".display").html(itemHtml);
      });
    })

    
    // $(storedButton).on("click", function() {
    //   let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + 
    //   inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';

    //   $(".display").html(itemHtml);
    // });

  }

  // $(".category").on("click", function() {

  // }) 


  $(".add-text-btn").on("click", function(){
    // e.preventDefault();
    // store values
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();

    // clear values
    $(".user-input-title").val("");
    $(".user-input-body").val("");

    // set key and value in local storage
    localStorage.setItem(inputKey, inputValue);

    // let listItems = localStorage.setItem('items') ? 
    // JSON.parse(localStorage.setItem('items')) : [];

    // console.log(listItems)
    
    //create a button for each category
    let categoryButton = $('<button class="category" data-name="' + 
      inputKey + '">' + inputKey + '</button>');

    // drop button below title
    $(".button-drop").append(categoryButton)

    $(categoryButton).on("click", function() {
      let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + 
      localStorage.getItem(inputKey) + '</div>';

      $(".display").html(itemHtml);
    });

    // let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
    // $(".display").html(itemHtml);
    // console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

    $(".display-item").on("click", function(e){
      // plop the key:value back into the input boxes

      // get the values from the the divs?
      console.log("key=> ", e.target.dataset.storageKey); // user-input-title
      localStorage.getItem(e.target.dataset.storageKey); // user-input-body

      // set those values in the form fields
      $(".user-input-title").val(e.target.dataset.storageKey);
      $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
    });

  });

   // TODO add back in later
   // $(".user-input").on("keyup", function(){
   //   let inputValue = $(".user-input").val();
   //   localStorage.setItem("testStorage", inputValue);
   //   $(".display").text(localStorage.getItem("testStorage"));
   // });

   $(".del-text-btn").on("click", function() {
     window.confirm('Delete item?'); // maybe change to a window.confirm
     localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
     $(".user-input-title").val("");
     $(".user-input-body").val("");
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});