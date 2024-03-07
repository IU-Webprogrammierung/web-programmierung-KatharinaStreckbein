document.addEventListener("DOMContentLoaded", function() {

    var accordionItems = document.querySelectorAll('.accordion-item');
 
  
    accordionItems.forEach(function(item) {
  
      item.addEventListener('click', function() {
  
        var answer = this.querySelector('.answer');
  
        var isActive = answer.classList.contains('active');
  
 
        /* Alle Antworten schließen*/
  
        accordionItems.forEach(function(otherItem) {
  
          var otherAnswer = otherItem.querySelector('.answer');
  
          otherAnswer.classList.remove('active');
  
          otherAnswer.style.maxHeight = 0;  
        });
  

        /* Antwort öffnen, wenn nicht aktiv */
  
        if (!isActive) {
          answer.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
  
        } 
      });  
    });
  });
