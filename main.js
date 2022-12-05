class Book{
    constructor(){
        this.title = 'titulo'
        this.description = 'descrição'
        this.author = 'autor'
        this.book = []
        this.id = 0
    }
    addBook(titulo, descricao, autor){
        this.id += 1
        this.title = titulo;
        this.description = descricao;
        this.author = autor
        this.book.push([this.id, this.title, this.description, this.author])
        
    }
    allBook(){
        return this.book
    }
    searchOneBook(index){
        return this.book[index]
    }
    removeOneBook(index){
      return delete this.book[index + 1]

    }
    editBook(id, newNome, newDescription, newAuthor){
        let new_name = this.book[id][1] = newNome
        let new_description = this.book[id][2] = newDescription
        let new_author = this.book[id][3] = newAuthor
        return new_name, new_description, new_author
    }
}