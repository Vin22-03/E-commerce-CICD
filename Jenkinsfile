pipeline {
  agent any

  environment {
    TF_DIR = 'terraform'
    AWS_PROFILE = 'aws-ecr'             // ✅ Use this profile
    AWS_REGION = 'us-east-1'

  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'main', url: 'https://github.com/Vin22-03/E-commerce-CICD.git'
      }
    }

    stage('Terraform Init') {
      steps {
        dir("${env.TF_DIR}") {
          sh 'terraform init'
        }
      }
    }

    stage('Terraform Validate') {
      steps {
        dir("${env.TF_DIR}") {
          sh 'terraform validate'
        }
      }
    }

    stage('Terraform Plan') {
      steps {
        dir("${env.TF_DIR}") {
          sh 'terraform plan -out=tfplan'
        }
      }
    }

    stage('Terraform Apply') {
      steps {
        dir("${env.TF_DIR}") {
          sh 'terraform apply -auto-approve tfplan'
        }
      }
    }
  }

  post {
    failure {
      echo '❌ Terraform pipeline failed!'
    }
    success {
      echo '✅ Terraform infra applied successfully!'
    }
  }
}
