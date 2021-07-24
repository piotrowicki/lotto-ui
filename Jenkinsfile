pipeline {
    agent any
    environment {
        IMAGE_NAME = 'lotto-ui-image'
    }
    stages {
        stage('Preparation') {
            steps {
                git branch: 'master', url: 'https://github.com/piotrowicki/lotto-ui.git'
            }
        }
        stage('Build image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker service update --force lotto-ui'
            }
        }
    }
}