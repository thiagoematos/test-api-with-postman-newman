FROM postman/newman:5-alpine
ENV UMA_VARIAVEL 'Hello, eu sou o valor de uma variavel'
RUN echo $UMA_VARIAVEL
