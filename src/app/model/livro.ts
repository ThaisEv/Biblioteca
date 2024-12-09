export class Livro {
    id = '';
    volumeInfo = {
        title: '', 
        subtitle: '', 
        authors: [],
        publisher: '',
        publishedDate: '',
        description: '',
        imageLinks: {smallThumbnail: '', thumbnail: ''},
        language: '',
        categories: [],
        pageCount: '',
        ratingsCount: 0,
        averageRating: 0
     }
     saleInfo = {
        saleability: '',
        listPrice: { amount: 0 }
    }
}