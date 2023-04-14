/*
> API REST
é um sofwere no back-end que permite a padronizaçao do site entre o back-end e front-end, para que voce possa
acessar o mesmo site em lugares diferentes.
Com a API ela fica com o mesmo softere

> API REST/RESTful
um conjunto de principios e regras que quando sao seguidos a API passa a se chamar de API REST.

> PRINCIPIOS DA API REST
. cada rota tem que executar somente uma função
. o back-end(servidor) e o front-end(cliente) devem ser feitos separados
. respostas auto-descritivas por exemplo 201 sucesso 404 error

> Const voce so pode trocar ela depois de criada se for um objeto ou array, Let voce pode trocar o valor sempre.

> Escopo global é quando esta na parte de fora, no contexto da aplicação e o escopo local é o que esta dentro de algo como um array.

> This significa o module.exports voce consegue importar um arquivo do mesmo modo por exemplo:
. this.person = person ao inves de module.exports = {person}
. No javascript o THIS faz referencia á:
Node = module.exports
Web = window

> TRY CATCH
. TRY = para voce proteger o seu codigo se der algum erro,
ele possa mostrar para voce exatamente o erro que ocorreu no espaço aonde voce colocou o try.
. CATCH = como se fosse o else e o try o if entao se ocorreu algum erro ele vai mardar pro catch aparecer a mensagem de erro.
. FINALLY = este vai mostrar quando o codugo acabou de rodar deois do try e catch.

exemplo:

app.post('/users',(request, response) => {
try {
    const {name, age} = request.body

    if(age < 18) throw new Error("Only allowed users over 18 years old")

    const user = { id: uuid.v4(), name, age}

    orders.push(user)

    return response.status(201).json(user)
} catch (err){
  return response.status(400).json({error:err.message})
} finally{
    console.log("finished")
}
})

> CLASSES 
. Serve para quando voce precisa criar varios usuarios por exemplo, 
  fazendo a classe ela cria um padrao de como usuario vai ser só acrescentar as caracteristicas depois 
  chamando a classe em cada novo usario.

class Person {
  constructor(name, age){
    console.log(`Hello, I'm ${name}`)

    this.name = name
    this.age = age
  }

  talk(){
    console.log(`and I'm ${this.age} years old`)
  }
}

const newPerson = new Person("Beatriz", 24)
newPerson.talk()

*/

