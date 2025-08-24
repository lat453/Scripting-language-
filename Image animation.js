<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Simple Image Animation</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; background:#f9fafc; }
  h2 { color:#2c3e50; }
  #myImage {
    width: 200px;
    opacity: 0.5;
    border-radius: 10px;
    box-shadow: 2px 4px 10px rgba(0,0,0,0.2);
    transition: transform 0.3s;
  }
  #myImage:hover { transform: scale(1.05); }
  button {
    margin-top: 15px;
    padding: 8px 15px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover { background:#2980b9; }
</style>
</head>
<body>
  <h2>Portfolio Image</h2>
  <img id="myImage" src="https://via.placeholder.com/200" alt="Design">
  <br><br>
  <button id="animateBtn">Animate Image</button>

  <script>
    let expanded = false;
    $("#animateBtn").click(function(){
      if(!expanded){
        $("#myImage").animate({ opacity: 1, width: "300px" }, 800);
        $(this).text("Shrink Image");
      } else {
        $("#myImage").animate({ opacity: 0.5, width: "200px" }, 800);
        $(this).text("Animate Image");
      }
      expanded = !expanded;
    });
  </script>
</body>
</html>
