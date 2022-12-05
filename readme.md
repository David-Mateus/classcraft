# Crie uma classe Book com as seguintes propriedades:

title: string <br/> 
description: string <br/>
author: string <br/>
Crie uma classe Library com a seguinte propriedade: <br/>
books: Book[] <br/>
e com os seguintes métodos: <br/>
adicionar: addBook(bookInfo: Omit<Book, 'id'>): Book <br/>
listar todos: getBooks(): Book[] <br/>
remover: removeBookById(id: string): void <br/>
mostrar um: getBookById(id: string): Book <br/>
editar um: updateBookById(id: string, info: { title?: string, description?: string, author?: string }): Book <br/>
Como desenvolvedor(a) que usarei seu programa, devo poder criar Books e Libraries e executar os métodos presentes em Library.
