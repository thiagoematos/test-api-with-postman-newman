ENV uma_variavel="Ola, eu sou o valor da variável"

FROM postman/newman:5-alpine
RUN echo $uma_variavel
