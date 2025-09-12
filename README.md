# 🛒  Quickloot -by vincloudops-Ecommerce-api_CICD

**Production-grade CI/CD DevOps capstone project** by [VinCloudOps](https://github.com/Vin22-03)  
Containerized FastAPI backend + React frontend deployed on AWS EKS with automation, blue-green Deployment, monitoring.

---

## 🎯 Project Objectives

- Build a **full-stack containerized E-commerce API** (FastAPI backend + React frontend)  
- Implement **end-to-end CI/CD pipeline** using Jenkins, Docker, Terraform and AWS ECR  
- Deploy on **AWS EKS** with **blue-green strategy** for zero-downtime updates  
- Integrate **real-time observability** using Prometheus and Grafana  
- Expose **custom metrics** via FastAPI `/metrics` endpoint  
- Enable **frontend hosting on S3** for public demo.  

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Tailwind CSS |
| Backend | FastAPI (Python) |
| Containerization | Docker |
| CI/CD | Jenkins (Groovy Pipeline), AWS ECR |
| Infrastructure | Terraform (VPC, Subnets, IAM, ALB, EKS) |
| Orchestration | Kubernetes (EKS) |
| Monitoring | Prometheus + Grafana via Helm |


---

## 🏗️ Architecture Overview

```text
GitHub → Jenkins Pipeline → Docker Build → ECR → EKS (Blue/Green Deploy)
                                  │
                                  └─> Prometheus scrapes FastAPI /metrics → Grafana dashboards
Frontend (React) → S3 Static Hosting (optional) → Connects to Backend ALB
```
- Backend pods are labeled version=blue/green for blue-green traffic switching

- ALB service routes traffic dynamically based on Jenkins patch stage

- Prometheus collects app & node metrics, visualized in Grafana dashboards

## 🔁 CI/CD Pipeline Steps

- Configure Kubeconfig for EKS in Jenkins

- Deploy Services (Optional): Apply frontend & backend YAML manifests

- Deploy to EKS (Dynamic Version):

- Render blue/green YAMLs via envsubst using VERSION_TAG and DEPLOY_COLOR

- Apply deployments with kubectl apply

## Patch Services to New Version:
```
kubectl patch svc backend-svc -p '{"spec":{"selector":{"app":"backend","version":"${DEPLOY_COLOR}"}}}'
kubectl patch svc frontend-service -p '{"spec":{"selector":{"app":"frontend","version":"${DEPLOY_COLOR}"}}}'
```

## Monitoring & Metrics: Scrape FastAPI /metrics with Prometheus → visualize in Grafana
```
Optional DevSecOps: Run Trivy scans, Syft SBOM, SonarQube code quality checks
```
## 📊 Monitoring Setup

- FastAPI /metrics exposed via prometheus_fastapi_instrumentator

- Prometheus targets include backend pods (blue/green)

## Grafana dashboards:

- Node Exporter Full (ID: 1860)

- Kubernetes Cluster Monitoring (ID: 11074)

- Custom FastAPI query: http_request_duration_seconds_count

## Screenshots:
# 1. Frontend UI: ![Frontend UI](https://github.com/Vin22-03/E-commerce-CICD/raw/main/screenshots/f1.png)
# 2. Backend productslist: ![Backend productslist](https://github.com/Vin22-03/E-commerce-CICD/blob/main/screenshots/b1.png)
# 3. Jenkins_Infra_Pipeline: ![Jenkins_Infra_Pipeline](https://github.com/Vin22-03/E-commerce-CICD/blob/main/screenshots/infra_pipeline.png)
# 4. Jenkins_Deploy_pipeline: ![Jenkins_Deploy_pipeline](https://github.com/Vin22-03/E-commerce-CICD/blob/main/screenshots/jenkins_deploy%20final.png)
# 5. Backend Blue-version: ![Backend Blue-version](https://github.com/Vin22-03/E-commerce-CICD/blob/main/screenshots/bkend_blue.png)
# 6. Backend Green-version: ![Backend Green-version](https://github.com/Vin22-03/E-commerce-CICD/blob/main/screenshots/backend%20v3%20green.png)
# 7. Frontend Orderstatus: ![Frontend Orderstatus](https://github.com/Vin22-03/E-commerce-CICD/blob/main/screenshots/f2.png)
# 8. F/B_Repos(ECR): ![F/B_Repos(ECR)](https://github.com/Vin22-03/E-commerce-CICD/blob/main/screenshots/frntend_bkend(repos).png)
# 9. Prometheus: ![Prometheus](https://github.com/Vin22-03/E-commerce-CICD/blob/main/screenshots/prometheus.png)
# 10. Grafana: ![Grafana](https://github.com/Vin22-03/E-commerce-CICD/blob/main/screenshots/grafana.png)





## 📈 Key Learnings

- Containerized full-stack app and versioned deployments

- Automated blue-green strategy for zero downtime

- Integrated real-time metrics collection and visualization

- Built a production-grade CI/CD pipeline with Jenkins + EKS + Docker + Helm

 ## Author

Vinay Bhajantri – @Vin22-03
From UPSC to Cloud & DevOps ☁️ | (portfolio)[www.vincloudops.tech]
