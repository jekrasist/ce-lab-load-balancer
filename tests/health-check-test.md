# Health Check & Failover Test
Stopped one EC2 instance manually. The ALB health check (pinging `/health` every 15s) marked the target as `unhealthy` after it failed consecutive checks. The ALB automatically stopped routing traffic to the dead instance and perfectly split the remaining traffic 50/50 between the two surviving instances.
