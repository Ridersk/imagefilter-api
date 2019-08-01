# Image Filter AWS

Repositório de teste para aprendizado da plataforma da AWS na construção de Arquitetura Serverless

## Produtos AWS Utilizados

* AWS Lambda
* Amazon S3
* Amazon IAM
* Api Gateway
* Amazon CloudWatch

## Outras tecnologias utilizadas

* __NPM:__ Gerenciador de pacotes para o NodeJs
* __Serverless Framework:__ Framework para facilitar a integração entre os produtos AWS, assim, facilitando o ciclo de deploys e "escalabilidade" no aumento de APIs Lambda, linkando os eventos da Api Gateway automaticamente.

## Configurando Ambiente de Desenvolvimento

### Serverless Framework

* __NodeJs:__ Siga as instruções para a seu Sistema Operacional no link <https://nodejs.org/en/download/>
* __Serverless Framework:__

        # Instalar o ServerlessFramework
        npm install serverless -g

        # Criar Novo Serviço
        serverless create

        # Deploy para o cloud provider
        serverless deploy

#### Plugins para o Serveless Framework

* __serverless-apigw-binary:__ Plugin para facilitar mandar arquivos binários para o Api Gateway por uma requisição POST. Instruções |<https://github.com/maciejtreder/serverless-apigw-binary>

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
