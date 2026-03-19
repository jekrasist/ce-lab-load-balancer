# Lab M3.03 - Highly Available Application Load Balancer

## Reflection Questions

**1. How does the load balancer know if an instance is healthy?**
The ALB continuously pings the designated Health Check path (`/health` on port 80). If the instance responds with a `200 OK` HTTP status code consistently, it is marked healthy.

**2. What happens when an instance fails a health check?**
The ALB immediately stops routing new user traffic to that instance to prevent users from seeing errors. It redistributes the load among the remaining healthy instances. 

**3. Why deploy instances across multiple Availability Zones?**
For High Availability (HA) and disaster recovery. If a power outage takes out an entire data center (AZ), the ALB will automatically route all traffic to the servers sitting safely in the secondary AZ. 

**4. What is the purpose of the `/health` endpoint?**
It proves the actual application logic is running. A server might be powered on, but if the Node.js app crashes, the `/health` endpoint will fail, letting the ALB know the app is actually down.

**5. How would you implement sticky sessions? When would you need them?**
Sticky sessions are enabled in the Target Group attributes. It uses cookies to bind a user's session to a specific EC2 instance. This is required for older stateful applications where user data (like a shopping cart) is stored in the local server RAM instead of a shared database.
