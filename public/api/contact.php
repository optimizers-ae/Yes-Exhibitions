<?php
// Set headers for JSON response and CORS
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// Configuration
$resend_api_key = getenv('RESEND_API_KEY') ?: '';
$to_email = getenv('CONTACT_TO_EMAIL') ?: 'optimizersae@gmail.com';
$from_email = 'YES Exhibitions <onboarding@resend.dev>'; // Change to your verified domain (e.g. info@yourdomain.com)

// Load from .env if running in PHP environment without global env vars
if (empty($resend_api_key)) {
    $possible_env_paths = [
        __DIR__ . '/../../.env',
        __DIR__ . '/../.env',
        __DIR__ . '/.env'
    ];
    foreach ($possible_env_paths as $env_file) {
        if (file_exists($env_file)) {
            $lines = file($env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                $line = trim($line);
                if (empty($line) || strpos($line, '#') === 0) continue;
                if (strpos($line, '=') !== false) {
                    list($k, $v) = explode('=', $line, 2);
                    $k = trim($k);
                    $v = trim($v, " \t\n\r\0\x0B\"'");
                    if ($k === 'RESEND_API_KEY' && empty($resend_api_key)) {
                        $resend_api_key = $v;
                    }
                    if ($k === 'CONTACT_TO_EMAIL' && $to_email === 'optimizersae@gmail.com') {
                        $to_email = $v;
                    }
                }
            }
            if (!empty($resend_api_key)) break;
        }
    }
}

// Read raw JSON input
$raw_input = file_get_contents('php://input');
$data = json_decode($raw_input, true);

if (!$data) {
    // Check if form data was submitted as standard POST
    $data = $_POST;
}

$name = isset($data['name']) ? htmlspecialchars(trim($data['name'])) : 'N/A';
$email = isset($data['email']) ? htmlspecialchars(trim($data['email'])) : 'N/A';
$phone = isset($data['phone']) ? htmlspecialchars(trim($data['phone'])) : 'N/A';
$company = isset($data['company']) ? htmlspecialchars(trim($data['company'])) : 'N/A';
$cityCountry = isset($data['cityCountry']) ? htmlspecialchars(trim($data['cityCountry'])) : '';
$standType = isset($data['standType']) ? htmlspecialchars(trim($data['standType'])) : '';
$standSize = isset($data['standSize']) ? htmlspecialchars(trim($data['standSize'])) : '';
$eventName = isset($data['eventName']) ? htmlspecialchars(trim($data['eventName'])) : '';
$eventDate = isset($data['eventDate']) ? htmlspecialchars(trim($data['eventDate'])) : '';
$eventLocation = isset($data['eventLocation']) ? htmlspecialchars(trim($data['eventLocation'])) : '';
$budget = isset($data['budget']) ? htmlspecialchars(trim($data['budget'])) : '';
$message = isset($data['message']) ? nl2br(htmlspecialchars(trim($data['message']))) : 'No message provided';

$features_str = '';
if (isset($data['selectedFeatures']) && is_array($data['selectedFeatures'])) {
    $features_str = implode(', ', array_map('htmlspecialchars', $data['selectedFeatures']));
} elseif (isset($data['selectedFeatures']) && is_string($data['selectedFeatures'])) {
    $features_str = htmlspecialchars($data['selectedFeatures']);
}

// Build HTML email body
$html_body = '
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
  <h2 style="color: #D49942; border-bottom: 2px solid #D49942; padding-bottom: 10px; margin-top: 0;">New Exhibition Inquiry</h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
    <tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold; width: 35%;">Name:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $name . '</td></tr>
    <tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Email:</td><td style="padding: 8px 12px; border: 1px solid #eee;"><a href="mailto:' . $email . '">' . $email . '</a></td></tr>
    <tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Phone:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $phone . '</td></tr>
    <tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Company:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $company . '</td></tr>
    ' . ($cityCountry ? '<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">City/Country:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $cityCountry . '</td></tr>' : '') . '
    ' . ($standType ? '<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Stand Type:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $standType . '</td></tr>' : '') . '
    ' . ($standSize ? '<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Stand Size:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $standSize . '</td></tr>' : '') . '
    ' . ($budget ? '<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Budget Range:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $budget . '</td></tr>' : '') . '
    ' . ($eventName ? '<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Event Name:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $eventName . '</td></tr>' : '') . '
    ' . ($eventDate ? '<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Event Date:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $eventDate . '</td></tr>' : '') . '
    ' . ($eventLocation ? '<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Event Location:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $eventLocation . '</td></tr>' : '') . '
    ' . ($features_str ? '<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Requested Features:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $features_str . '</td></tr>' : '') . '
    <tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Project Brief / Message:</td><td style="padding: 8px 12px; border: 1px solid #eee;">' . $message . '</td></tr>
  </table>
  <p style="font-size: 11px; color: #888; margin-top: 20px; text-align: center;">Sent from YES Exhibitions Website Inquiry System (Hostinger PHP)</p>
</div>
';

// Prepare payload for Resend API
$payload = [
    'from' => $from_email,
    'to' => [$to_email],
    'subject' => 'New Website Inquiry - ' . ($name !== 'N/A' ? $name : 'Client') . ' (' . ($company !== 'N/A' ? $company : 'Exhibitions Inquiry') . ')',
    'html' => $html_body
];

if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $payload['reply_to'] = $email;
}

// Send email using cURL via Resend API
$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $resend_api_key,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_error = curl_error($ch);
curl_close($ch);

if ($curl_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "cURL Error: " . $curl_error]);
    exit;
}

$res_data = json_decode($response, true);

if ($http_code >= 200 && $http_code < 300) {
    http_response_code(200);
    echo json_encode(["success" => true, "data" => $res_data]);
} else {
    http_response_code($http_code ?: 500);
    $err_msg = isset($res_data['message']) ? $res_data['message'] : (isset($res_data['error']) ? $res_data['error'] : 'Failed to send email');
    echo json_encode(["success" => false, "message" => $err_msg]);
}
