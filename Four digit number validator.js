<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Four-Digit Number Validator</title>
  <style>
    body { font-family: Arial, sans-serif; background:#f9fafc; padding:30px; }
    h2 { color:#2c3e50; }
    input { padding:8px; font-size:16px; border:1px solid #ccc; border-radius:5px; }
    button { padding:8px 15px; background:#3498db; color:white; border:none; 
             border-radius:5px; cursor:pointer; margin-left:5px; }
    button:hover { background:#2980b9; }
    #msg { margin-top:10px; font-weight:bold; }
    .error { color:#e74c3c; }
    .success { color:#27ae60; }
  </style>
  <script>
    function validateNumber() {
      let num = document.getElementById("number").value;
      let msg = document.getElementById("msg");

      if(!/^\d{4}$/.test(num)) {
        msg.innerHTML = "Enter exactly 4 digits!";
        msg.className = "error";
        return;
      }
      if(num[0] === '0') {
        msg.innerHTML = "First digit cannot be zero!";
        msg.className = "error";
        return;
      }
      for(let i = 0; i < 3; i++) {
        if(num[i] >= num[i+1]) {
          msg.innerHTML = " Digits must be strictly ascending!";
          msg.className = "error";
          return;
        }
      }
      msg.innerHTML = "Valid number!";
      msg.className = "success";
    }
  </script>
</head>
<body>
  <h2>Four-Digit Number Validator</h2>
  <input type="text" id="number" maxlength="4" placeholder="Enter 4-digit number">
  <button onclick="validateNumber()">Validate</button>
  <div id="msg"></div>
</body>
</html>
