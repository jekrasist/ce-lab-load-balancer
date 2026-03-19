for i in {1..20}; do curl -s http://YOUR-ALB-DNS-HERE | grep "Instance:" | sed 's/.*Instance: //'; done | sort | uniq -c
