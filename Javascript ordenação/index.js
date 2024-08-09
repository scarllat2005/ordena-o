const Livro = require('./listaLivros')

let maisBarato = 0;

for (let atual = 0;atual < precosLivro.length; atual++){
    if (precosLivro[atual].preco <precosLivro[maisBarato].preco){
        maisBarato = atual;
    }
  //  console.log(livros [maisBarato].preco);
};


console.log(`O Livro mais barato é ${precosLivro[maisBarato].preco} e o titulo é ${livro[maisBarato].titulo}`)
