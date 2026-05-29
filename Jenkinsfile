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
            bat 'npm ci'
        }
    }

    stage('Install Playwright Browsers') {
        steps {
            bat 'npx playwright install'
        }
    }

    stage('Run Tests') {
        steps {
            bat 'npx playwright test'
        }
    }
}

post {

    always {

        allure([
            includeProperties: false,
            jdk: '',
            results: [[path: 'allure-results']]
        ])

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
