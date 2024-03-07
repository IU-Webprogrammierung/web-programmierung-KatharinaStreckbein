document.addEventListener("DOMContentLoaded", function() {

    var accordionItems = document.querySelectorAll('.accordion-item');
 
  
    accordionItems.forEach(function(item) {
  
      item.addEventListener('click', function() {
  
        var answer = this.querySelector('.answer');
  
        var isActive = answer.classList.contains('active');
  
 
        // Schließe alle Antworten
  
        accordionItems.forEach(function(otherItem) {
  
          var otherAnswer = otherItem.querySelector('.answer');
  
          otherAnswer.classList.remove('active');
  
          otherAnswer.style.maxHeight = 0;  
        });
  

        // Öffne die Antwort, wenn sie nicht aktiv ist
  
        if (!isActive) {
          answer.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
  
        } 
      });  
    });
  });
