$uri = "http://localhost:3000/add_doctor"


```powershell
$body = @{
    name = "Dr. Emily White"
    specialization = "Pediatrics"
} | ConvertTo-Json


$response = Invoke-RestMethod -Uri $uri -Method Post -ContentType "application/json" -Body $body


$response
