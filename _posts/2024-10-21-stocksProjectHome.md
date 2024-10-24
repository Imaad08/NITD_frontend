---
layout: none
hide: false
permalink: /stocks/home
title: Stocks Home
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Open Finance Styled Page</title>
  <style>
    /* General styles */
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif; /* Use modern Google font */
      background: linear-gradient(135deg, #0D0D0D, #1B1B1B);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow: hidden;
      background-size: 200% 200%;
      animation: gradient-animation 10s ease infinite; /* Moving gradient background */
    }
    @keyframes gradient-animation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    /* Top bar */
    .topbar {
      position: fixed;
      top: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 20px;
      background: transparent;
    }

    .topbar ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
    }

    .topbar ul li {
      margin-right: 20px;
    }

    .topbar ul li a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
    }

    .login-button {
      position: absolute;
      right: 20px;
      border: 2px solid white;
      border-radius: 50px;
      padding: 10px 20px;
      background-color: transparent;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .login-button:hover {
      background-color: white;
      color: black;
    }

    /* Gradient Bar in the middle */
    .gradient-bar {
      position: absolute;
      width: 200px;
      height: 500px;
      background: linear-gradient(180deg, #86A8E7, #7F7FD5, #E684AE);
      border-radius: 100px;
      z-index: -1; /* Make sure it appears behind the main content */
    }

    /* Main content styles */
    .main-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: -50px; /* Adjust to move the title higher */
      z-index: 1; /* Ensure it stays on top of the gradient bar */
    }

    .main-content h1 {
      font-size: 4rem;
      letter-spacing: 0.2rem;
      color: white;
      text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.8); /* Glowing effect */
      transition: color 0.3s ease; /* Smooth transition on hover */
    }

    .main-content h1:hover {
      color: #86A8E7; /* Changes color on hover */
    }

    .main-content p {
      font-size: 1.5rem;
      color: #c5c6c7;
      margin-bottom: 40px;
    }

    /* Floating elements */
    .float-element {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(135deg, #86A8E7, #7F7FD5, #E684AE); /* All circles have the same gradient */
      text-align: center;
      color: white;
      font-weight: bold;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .float-element:hover {
      transform: scale(1.1); /* Elements scale up on hover */
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.4);
    }

    .float1 {
      top: 30%;
      left: 10%;
    }

    .float2 {
      top: 50%;
      right: 15%;
    }

    .float3 {
      bottom: 10%;
      left: 30%;
    }

    .float4 {
      bottom: 15%;
      right: 25%;
    }

    /* Parallax effect for circles */
    @keyframes float-animation {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .float-element {
      animation: float-animation 4s ease-in-out infinite; /* Floating animation */
    }

    /* Footer / button to start */
    .get-started {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background-color: white;
      color: black;
      padding: 10px 25px;
      border-radius: 50px;
      font-weight: bold;
      text-decoration: none;
      transition: background-color 0.3s, box-shadow 0.3s ease;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2); /* Adding shadow */
    }

    .get-started:hover {
      background-color: #FF6E6E;
      color: white;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); /* Shadow on hover */
    }

  </style>
</head>
<body>

  <!-- Top bar -->
  <div class="topbar">
    <ul>
      <li><a href="#">Why Meridian</a></li>
      <li><a href="#">Community</a></li>
      <li><a href="#">Case Studies</a></li>
    </ul>
    <button class="login-button">Login</button>
  </div>

  <!-- Gradient bar in the middle -->
  <div class="gradient-bar"></div>

  <!-- Main content -->
  <div class="main-content">
    <h1>NITD FINANCE</h1>
    <p>Leading open-source financial technology that works</p>  
  </div>

  <!-- Floating elements -->
  <div class="float-element float1">
    <p>Nisarg Shah</p>
  </div>

  <div class="float-element float2">
    <p>Dinesh Sahai</p>
  </div>

  <div class="float-element float3">
    <p>Imaad Muzaffer</p>
  </div>

  <!-- Fourth floating element -->
  <div class="float-element float4">
    <p>Tanay Shah</p>
  </div>

  <!-- Footer -->
  <a href="#" class="get-started">Login →</a>

</body>
</html>