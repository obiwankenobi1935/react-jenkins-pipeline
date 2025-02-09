pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the React project...'
                script {
                    // Run npm install and build commands for React
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                script {
                    // Run tests using your testing framework (e.g., Jest)
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the React app...'
                // Deployment commands (Docker, FTP, etc.)
                script {
                    // Example: Deploy using Docker or any tool of choice
                    // sh 'docker-compose up -d'
                }
            }
        }
    }
}
