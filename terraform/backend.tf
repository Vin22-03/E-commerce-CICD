terraform {
  backend "s3" {
    bucket         = "vincloudops-tfstate-bucket"          # 🔁 Use your actual bucket name
    key            = "ecommerce-app/terraform.tfstate"     # 📂 Folder structure in the bucket
    region         = "us-east-1"
    dynamodb_table = "vincloudops-tfstate-lock"            # 🔒 Optional, for state locking (recommended)
    encrypt        = true
  }
}
