terraform {
  required_version = ">= 1.6.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # 🪣 Optional: backend "s3" {} can be added later for remote state
}

provider "aws" {
  region = var.aws_region
}
