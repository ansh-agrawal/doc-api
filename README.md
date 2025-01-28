$uri = "http://localhost:3000/add_doctor"


$body = @{
    name = "Dr. Emily White"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri $uri -Method Post -ContentType "application/json" -Body $body


$response
