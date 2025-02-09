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
                echo 'Deploying the React app... on netlify'
                script {
                    sh 'npm install -g netlify-cli'
                    sh 'netlify deploy --prod --auth $NETLIFY_AUTH_TOKEN --dir=dist'
                }
            }
        }
    }
}
