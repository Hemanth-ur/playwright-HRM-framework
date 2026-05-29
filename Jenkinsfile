pipeline {
agent any

```
stages {

    stage('Checkout') {
        steps {
            git branch: 'main',
                url: 'https://github.com/Hemanth-ur/playwright-HRM-framework.git'
        }
    }

    stage('Install Dependencies') {
        steps {
            bat 'npm install'
        }
    }

    stage('Install Browsers') {
        steps {
            bat 'npx playwright install'
        }
    }

    stage('Run Tests') {
        steps {
            bat 'npx playwright test'
        }
    }

    stage('Generate Allure Report') {
        steps {
            bat 'npx allure generate allure-results --clean -o allure-report'
        }
    }
}

post {

    always {
        archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
    }

    success {
        echo 'Tests Passed'
    }

    failure {
        echo 'Tests Failed'
    }
}
```

}
