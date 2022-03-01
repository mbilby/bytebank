﻿## Sistema de Funcionários e Clientes - ByteBank - Curso de Programação Orientado ao Objeto -Alura

Exploramos muito mais esse mundo da orientação a objetos e de como trabalhar de maneira segura, de maneira confiável, reutilizando código e compartilhando comportamentos dentro dos objetos.

Terminamos de fazer nosso sistema de tratamento de contas para o ByteBank, então temos uma classe mãe Conta, onde conseguimos ter todo o comportamento que é compartilhado entre todas as contas. Vimos que faz sentido essa classe ser abstrata, porque eu não quero que ninguém a instancie diretamente, então vimos classes abstratas.

Vimos métodos abstratos, porque vimos que cada tipo de conta vai ter uma ligeira diferença no método sacar(), então eu quero garantir que todo mundo implemente, pergunte se não souber, como isso tem que ser implementado para o nosso cliente, para o ByteBank ter que especificar isso para nós.

O método abstrato serve para definirmos uma interface padrão, que todo mundo vai ter esse método, mas temos que definir como cada um vai realmente executá-lo.

Vimos métodos privados para conseguirmos chamá-los e reaproveitar mais código. Vimos herança, como temos a nossa classe Conta base, conseguimos herdar dela e só mudar o que precisávamos. Sobrescrever métodos, vimos também sobrescritas de métodos.

Criamos nossa ContaSalario, nossa ContaCorrente, nossa ContaPoupanca, de uma maneira fácil de trabalharmos, sem precisarmos criar outro tipo de conta ou criar algum comportamento específico para cada tipo de conta, nós conseguimos.

Se quisermos um comportamento geral que vai ser compartilhado, nós conseguimos trazer para a Conta também. Vimos várias formas de trabalhar com conta, encapsulamento, métodos abstratos e classes abstratas.

Além de vermos agora no final polimorfismo, que é a propriedade superimportante de orientação a objetos, onde tratamos objetos diferentes de uma maneira similar. Temos nosso Diretor, nosso Gerente, nosso Cliente, todos sendo tratados da mesma maneira pelo nosso sistema de autenticação, já que é um único sistema de autenticação e eu quero reutilizar código o máximo possível.

Lógico que sempre pensando nas boas práticas de programação e mantendo a legibilidade e a comunicação no nosso código de uma maneira eficiente.

Não adianta eu só reutilizar código loucamente se não estou comunicando direito, se aquele código não fala com a pessoa que o está desenvolvendo ou com um cliente de uma maneira legal.

Uma coisa que falamos muito no primeiro curso e continuamos falando aqui é da importância de termos métodos, interfaces e maneiras de comunicar no código a nossa intenção.

Código é muito sobre intenção, vamos receber o pedido de um cliente e queremos interagir, colocar isso em código, colocar isso na linguagem que estamos trabalhando dentro do sistema.

Porque estamos trabalhando com uma intenção e essa intenção tem que estar clara para todo mundo que depois vai olhar aquele código e falar: "Eu consigo ler isso aqui como se ele fosse português", por exemplo. "Eu não preciso entender de código especificamente para entender o que isso daqui está querendo fazer", pelo menos num nível mais alto de abstração, como falamos.

Lógico que em algum momento você vai ter os pormenores ali e o detalhe da linguagem, assim como temos aqui no ehAutenticavel, eu tenho que conhecer o operador in, o operador instanceof, mas no geral, esse método, se eu não souber de nada disso, eu estou perguntando, ele é autenticável? Se ele não é, eu não quero fazer mais nada.

Então temos essa comunicação dentro do nosso código muito legal, que deixa o nosso código muito fácil de entender e mais fácil ser trabalhado por todo o resto da equipe.

Foi um curso de orientação a objetos, vimos vários conceitos, mas tem muitas outras coisas de boas práticas que vimos também aqui no meio. E acabamos fazendo um sistema bem grande, então terminamos nosso sistema de contas, fizemos o sistema básico de funcionários, fizemos o sistema de autenticação, várias coisas que aprendemos nesse curso.
