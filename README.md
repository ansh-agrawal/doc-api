```powershell
$uri = "http://localhost:3000/schedule_appointment"
$body = @{
    doctorId = 1
    patientName = "Alice Johnson"
    appointmentDate = "2025-02-10T10:00:00"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri $uri -Method Post -ContentType "application/json" -Body $body
$response

