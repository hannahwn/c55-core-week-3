function isBookApplicable(searchString) {
   if (!searchString) {          
        return false;
    }
    let cleanedSearch = searchString.trim().toLowerCase();

     if (cleanedSearch === "") {
        return false;
    }

    let bookTitle = "The fundamentals of JavaScript".toLowerCase();

     let isFound = bookTitle.includes(cleanedSearch);
}
