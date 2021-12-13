pipeline {
    agent any 
    stages {
        stage('Compile and Clean') { 
            steps {

                sh "mvn clean compile"
            }
        }
       

        stage('deploy') { 
            steps {
                sh "mvn package"
            }
        }


        stage('Build Docker image'){
            steps {
              
                sh 'docker build -t  susmithachilaka/Producer-0.0.1-SNAPSHOT.jar:latest  .'
            }
        }

        stage('Docker Login'){
            
            steps {
                 withCredentials([string(credentialsId: 'DockerId', variable: 'Dockerpwd')]) {
                    sh "docker login -u susmithachilaka -p Monster@1998"
                }
            }                
        }

        stage('Docker Push'){
            steps {
                sh 'docker push susmithachilaka/Producer-0.0.1-SNAPSHOT.jar:latest'
            }
        }
        
        stage('Docker deploy'){
            steps {
               
                sh 'docker run -itd -p  8768:8768 susmithachilaka/Producer-0.0.1-SNAPSHOT.jar:latest'
            }
        }

        
        stage('Archving') { 
            steps {
                 archiveArtifacts '**/target/*.jar'
            }
        }
    }
}
