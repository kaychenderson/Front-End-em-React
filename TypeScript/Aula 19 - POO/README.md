# PROGRAMAÇÃO ORIENTADA A OBJETOS (POO):

Paradigma da programação que foca na modelagem das entidades envolvidas em um problema (objetos) e na interação entre elas.

## Principais caracteristicas:
- 1. Reutilização do código;
- 2. Modularização;
- 3. Integração simples entre código;
- 4. Reaproveitamento de Módulos em outros sistemas (se possivel);

## Elementos presentes na POO:

### 🔷 Classes:
- Abstração de algum elemento do mundo real.

Ex.: Pessoa, Smartphone, Cachorro.

### 🔷 Objetos:
- Uma representação "concreta" da abstração feita através da classe.

Ex.: Kayc, Samsung, Beethovem.

### 🔶 Atríbutos:
Caracteristicas comuns apresentadas pelos objetos de uma determinada classe.

Ex.: 
- Nome, Idade e Altura (Pessoa);
- Memória, Processador e Câmera (Smartphone);
- Raça (Cachorro);

### 🔶 Métodos:
Ações comuns realizadas pelos objetos de uma determinada classe.

Ex.: 
- Comer, Dormir e Falar (Pessoa);
- Ligar, Instalar App e Tirar Foto (Smartphone);
- Latir, Rolar e Correr (Cachorro);

## Pincipios essenciais na modelagem do paradigma de POO:
### 1. 🔴 Encapsulamento:
Cada classe deve conter todas as informações necessárias para seu funcionamento bem como todos os métodos necessários para alterar essas informações. Idealmente, apenas objetos da própria classe poderão alterar seus atríbutos, e objetos de outras classes irão interagir com eles através de métodos.
- private;
- readonly;
- accessor;

### 2. 🟡 Herança:
Se várias classes terão atríbutos e métodos em comum, não devemos ter que redigitá-los várias vezes. Ao invés disso, criamos uma classe com esses atríbutos comuns e as outras classes irão herdá-las.

### 3. 🟢 Polimorfísmo:
Objetos de diferentes classes herdeiras de uma mesma classe mãe podem ser tratados genericamente como objetos pertencentes à classe mãe.