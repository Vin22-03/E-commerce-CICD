resource "aws_lb" "frontend_alb" {
  name               = "vincloudops-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = ["sg-09d0d8d1d8ee2054d"]
  subnets            = var.public_subnet_ids
}

resource "aws_lb_target_group" "frontend_tg" {
  name     = "frontend-tg"
  port     = 3001
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id
  target_type = "ip"

  health_check {
    path                = "/health"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 3
    unhealthy_threshold = 2
    matcher             = "200-399"
  }
}

resource "aws_lb_listener" "frontend_listener" {
  load_balancer_arn = aws_lb.frontend_alb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.frontend_tg.arn
  }
}
