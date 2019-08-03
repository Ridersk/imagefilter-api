# Image Filter AWS

Repositório de teste para aprendizado da plataforma da AWS na construção de Arquitetura Serverless

## Produtos AWS Utilizados

* AWS Lambda
* Amazon S3
* Amazon IAM
* Api Gateway
* Amazon CloudWatch
* DynamoDB

## Outras tecnologias utilizadas

* __NPM:__ Gerenciador de pacotes para o NodeJs
* __Serverless Framework:__ Framework para facilitar a integração entre os produtos AWS, assim, facilitando o ciclo de deploys e "escalabilidade" no aumento de APIs Lambda, linkando os eventos da Api Gateway automaticamente.
* __AWS SDK:__ Api para controlar os produtos da AWS remotamente

## Configurando Ambiente de Desenvolvimento

### NPM

* __NodeJs:__ Siga as instruções para a seu Sistema Operacional no link <https://nodejs.org/en/download/>
* __AWS SDK:__

        # Instalar Modulo
        npm install aws-sdk --save-dev

* __[serverless-apigw-binary](https://github.com/maciejtreder/serverless-apigw-binary):__ Plugin para facilitar mandar arquivos binários para o Api Gateway por uma requisição POST.

* __UUID__ : Gerar ids aleatórios para as imagens

* __[serverless-offline](https://www.npmjs.com/package/serverless-offline):__(Opcicional) Plugin para rodar o serverless localmente e conseguir debugar com mais facilidade

### Serverless Framework

* __Serverless Framework:__

        # Instalar o ServerlessFramework
        npm install serverless -g

        # Criar Novo Serviço
        serverless create

        # Deploy para o cloud provider
        serverless deploy
* Referência: <https://serverless.com/>

### Usuário AWS (IAM)

#### Criar Usuário IAM AWS(Opcional)

* __Siga as instruções:__ <https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/introduction.html>
* __Obs:__ Se desejar pode simplesmente utilizar o usuário Root da AWS

#### Configurar Chaves de Acesso do Usuário AWS no Computador Local

* Crie uma Pasta para colocar as credenciais:

        # Linux, macOS, ou Unix
        $ ls  ~/.aws

        # Windows
        C:\> dir "%UserProfile%\.aws"

* Criar arquivo com as credenciais de seu usuário em ~/.aws/credentials

        [default]
        aws_access_key_id=AKIAIOSFODNN7EXAMPLE
        aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

* __Referência:__ <https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html>

### Arquitetura do Projeto

![Arch](architecture.png)

### Http-Handler Serverless

* Antes de Utilizar a API em sua conta AWS deve-se criar uma role com o seu usuário, que dê permissões para os serviços de lambda-AWS, S3 e DynamoDB.
* O id dessa role deve ser referenciado na propriedade __role__ da __function__ localizada no arquivo de configurações serverless.yml
* Deve-se criar um bucket S3 em sua conta da AWS para ser referenciado na váriavel __BUCKET__ Localizada no arquivo /http-handler/services/s3Service.js
* Deve-se criar uma tabela na sua conta da AWS para ser referenciado na váriavel __TABLE__ Localizada no arquivo /http-handler/services/dynamodbService.js

### Thumbnail-Handler Serverless

* Criar uma Role com permissões para cloudWatch, S3 e SQS
* Referenciar essa role em __role__ da __function__ localizada no arquivo de configurações serverless.yml
* Criar uma notificação quando um objeto é colocado no bucket S3, libera uma notificação para outras três lambdas(De acordo com a arquitetura).
* Colocar o Arn do SNS criado no arquivo serverless.yml do serverless thumnail

### Utilização

Faça uma requisição para a url <https://uhrnrklvhi.execute-api.us-east-1.amazonaws.com/dev/images> através de uma aplicação cliente, ou algum aplicativo que simule requisições, como o [Postman](https://www.getpostman.com/)
