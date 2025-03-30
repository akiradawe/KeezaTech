document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const expandBtn = item.querySelector('.expand-btn');
    const accordionInner = item.querySelector('.accordion-inner');
    
    // Function to toggle the accordion
    function toggleAccordion() {
      accordionInner.classList.toggle('expanded');
      expandBtn.classList.toggle('active');
    }
    
    // Add click event to the entire header
    header.addEventListener('click', function(e) {
      // Only trigger if not clicking the button itself
      if (!e.target.closest('.expand-btn')) {
        toggleAccordion();
      }
    });
    
    // Add click event to the button
    expandBtn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent the header click from also firing
      toggleAccordion();
    });
  });

  // Accordion functionality
  const accordionTitles = document.querySelectorAll('.accordion-title');
  accordionTitles.forEach(title => {
    title.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isActive = this.classList.contains('active');
      
      // Close all other accordions
      accordionTitles.forEach(otherTitle => {
        if (otherTitle !== this) {
          otherTitle.classList.remove('active');
          otherTitle.nextElementSibling.style.display = 'none';
        }
      });
      
      // Toggle current accordion
      this.classList.toggle('active');
      content.style.display = isActive ? 'none' : 'block';
    });
  });

  // Publication filtering functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const publications = document.querySelectorAll('.publication-box');

  // Function to update button counts
  function updateButtonCounts() {
    filterButtons.forEach(button => {
      const filterValue = button.getAttribute('data-filter');
      let count = 0;

      publications.forEach(publication => {
        const authors = publication.querySelector('.authors').textContent.toLowerCase();
        if (filterValue === 'all' || authors.includes(filterValue.toLowerCase())) {
          count++;
        }
      });

      // Update button text with count
      const originalText = filterValue === 'all' ? 'Show All Articles' : filterValue;
      button.textContent = `${originalText} (${count})`;
    });
  }

  // Initial count update
  updateButtonCounts();

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      publications.forEach(publication => {
        const authors = publication.querySelector('.authors').textContent.toLowerCase();
        
        if (filterValue === 'all') {
          publication.classList.remove('hidden');
        } else if (authors.includes(filterValue.toLowerCase())) {
          publication.classList.remove('hidden');
        } else {
          publication.classList.add('hidden');
        }
      });
    });
  });
}); 