// Iterators are new way to loop collection in Javascript

const allFavouriteAuthors = {
    authors: {
       fiction: [
           'J K Rowling',
           'Dr. Seuss',
           'Christie',
       ],
       scienceFiction: [
           'Arthur Clarke',
           'Issac Asimov',
           'Robert Heinleiv',
       ],
       fantasy: [
           'J K Rowling',
           'Terry Pratchett',
           'Tolkien',
       ],
    },
    getAuthors() {
        const authors = [];
        for(const fictionAuthor of this.authors.fiction){
            authors.push(fictionAuthor)
        }
        for(const scienceFiction of this.authors.scienceFiction){
            authors.push(scienceFiction)
        }
        for(const fantasy of this.authors.fantasy){
            authors.push(fantasy)
        }
        return authors;
    }
}


console.log(allFavouriteAuthors.getAuthors())