
// const arr = ['a','b','c','d','e','f'];
// // const [first,,third,,fifth] = arr;

// console.log(arr)
// const iterator = arr[Symbol.iterator]()
// console.log(iterator.next())
// // console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)


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

    [Symbol.iterator](){
        const genres = Object.values(this.authors) 
        console.log(genres)
        let currentAuthorIndex = 0;
        let currentGenreIndex = 0;
        return {
            next(){
                const authors = genres[currentGenreIndex];

                const doNotHaveMoreAuthors = !(currentAuthorIndex < authors.length);
                if(doNotHaveMoreAuthors){
                    currentGenreIndex ++;
                    currentAuthorIndex = 0;
                }

                const doNotHaveMoreGenres = !(currentGenreIndex < genres.length)
                if(doNotHaveMoreGenres){
                    return {
                        value: undefined,
                        done: true,
                    }
                }
                return {
                    value: genres[currentGenreIndex][currentAuthorIndex++],
                    done: false,
                }
            }
        }
    }
}

console.log(allFavouriteAuthors[Symbol.iterator]().next())