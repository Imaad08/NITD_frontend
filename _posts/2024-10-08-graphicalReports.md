---
layout: none
hide: false
permalink: /graphs
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/home.css">
    <script src="https://kit.fontawesome.com/23cecef777.js" crossorigin="anonymous"></script>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <title>Personal Finance Dashboard</title>
<style>
    /* Reset padding and margin for all elements */
    * {
        padding: 0;
        margin: 0;
    }

    /* Body styling */
    body {
        background-color: #121212;
        font-family: 'Montserrat', sans-serif;
        color: white; /* Ensures all text is white */
    }

    /* Sidebar styling */
    .sidebar {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 196px;
        background-color: #000000;
        padding: 24px;
    }

    .sidebar .logo img {
        width: 130px;
    }

    .sidebar .navigation ul {
        list-style: none;
        margin-top: 20px;
    }

    .sidebar .navigation ul li {
        padding: 10px 0px;
    }

    .sidebar .navigation ul li a {
        color: #b3b3b3;
        text-decoration: none;
        font-weight: bold;
        font-size: 13px;
    }

    .sidebar .navigation ul li a:hover,
    .sidebar .navigation ul li a:active,
    .sidebar .navigation ul li a:focus {
        color: #ffffff;
    }

    .sidebar .navigation ul li .fa {
        font-size: 20px;
        margin-right: 10px;
    }

    .sidebar .policies {
        position: absolute;
        bottom: 100px;
    }

    .sidebar .policies ul {
        list-style: none;
    }

    .sidebar .policies ul li {
        padding-bottom: 5px;
    }

    .sidebar .policies ul li a {
        color: #b3b3b3;
        font-weight: 500;
        text-decoration: none;
        font-size: 10px;
    }

    .sidebar .policies ul li a:hover,
    .sidebar .policies ul li a:active,
    .sidebar .policies ul li a:focus {
        text-decoration: underline;
    }

    /* Main container styling */
    .main-container {
        margin-left: 245px;
        margin-bottom: 100px;
        padding: 20px; /* Added padding for better spacing */
    }

    /* Topbar styling */
    .topbar {
        display: flex;
        justify-content: space-between;
        background-color: #101010;
        padding: 14px 30px;
    }

    .topbar .prev-next-buttons button {
        color: #7a7a7a;
        cursor: not-allowed;
        width: 34px;
        height: 34px;
        border-radius: 100%;
        font-size: 18px;
        border: 0px;
        background-color: #090909;
        margin-right: 10px;
    }

    .topbar .navbar {
        display: flex;
        align-items: center;
    }

    .topbar .navbar ul {
        list-style: none;
    }

    .topbar .navbar ul li {
        display: inline-block;
        margin: 0px 8px;
        width: 70px;
    }

    .topbar .navbar ul li a {
        color: #b3b3b3;
        text-decoration: none;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 1px;
    }

    .topbar .navbar ul li a:hover,
    .topbar .navbar ul li a:active,
    .topbar .navbar ul li a:focus {
        color: #ffffff;
        font-size: 15px;
    }

    .topbar .navbar button {
        background-color: #ffffff;
        color: #000000;
        font-size: 16px;
        font-weight: bold;
        padding: 14px 30px;
        border: 0px;
        border-radius: 40px;
        cursor: pointer;
        margin-left: 20px;
    }

    .topbar .navbar button:hover,
    .topbar .navbar button:active,
    .topbar .navbar button:focus {
        background-color: #f2f2f2;
    }

    /* Spotify playlists styling */
    .spotify-playlists {
        padding: 20px 40px;
    }

    .spotify-playlists h2 {
        color: #ffffff;
        font-size: 22px;
        margin-bottom: 20px;
    }

    /* Preview bar styling */
    .preview {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to right, #ae2896, #509bf5);
        padding: 15px 40px;
        display: flex;
        justify-content: space-between;
    }

    .preview h6 {
        color: #ffffff;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 12px;
        margin-bottom: 10px;
    }

    .preview p {
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
    }

    .preview button {
        background-color: #ffffff;
        color: #000000;
        font-size: 16px;
        font-weight: bold;
        padding: 14px 30px;
        border: 0px;
        border-radius: 40px;
        cursor: pointer;
    }

    /* Grid styling */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Set to 2 columns */
        gap: 20px; /* Space between grid items */
    }

    .grid-item {
        background-color: #000000;
        border: 1px solid #ddd;
        border-radius: 8px;
        border-color: #B3B3B3;
        padding: 20px;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.3s;
        color: #54AF71;
    }

    .grid-item:hover {
        background-color: #e2e2e2;
    }

    /* Button styling */
    button {
        background-color: #1db954;
        color: white;
        padding: 15px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        width: 300px;
        margin: 10px 0; /* Adds spacing between buttons */
    }

    button:hover {
        background-color: #179343;
    }

    /* Headings styling */
    .h3 {
        color: #54AF71;
    }

</style>

</head>
<body>

<div class="sidebar">
    <div class="logo">
        <a href="#">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" />
        </a>
    </div>
    <div class="navigation">
        <ul>
            <li>
                <a href="#" onclick="toggleExpenseInput()">
                    <span class="fa fas fa-plus-square"></span>
                    <span>Add Expense</span>
                </a>
            </li>
            <li>
                <a href="#" onclick="viewHistory()">
                    <span class="fa fas fa-book"></span>
                    <span>View History</span>
                </a>
            </li>
            <li>
                <a href="#" onclick="removeSelectedExpense()">
                    <span class="fa fas fa-minus-square"></span>
                    <span>Remove Expense</span>
                </a>
            </li>
        </ul>
    </div>
</div>

<div class="main-container">
    <div class="topbar">
        <div class="prev-next-buttons">
            <button type="button" class="fa fas fa-chevron-left"></button>
            <button type="button" class="fa fas fa-chevron-right"></button>
        </div>
        <div class="navbar">
            <ul>
                <li><a href="#">Premium</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Download</a></li>
                <li class="divider">|</li>
            </ul>
        </div>
    </div>

    <div class="spotify-playlists">
        <h2>Expense Tracker</h2>

        <!-- Input Form for Adding Expenses -->
        <div id="expense-input" style="display: none;">
            <h3>Add a New Expense</h3>
            <input type="text" id="expenseName" placeholder="Expense Name">
            <input type="number" id="expenseAmount" placeholder="Amount">
            <button onclick="addExpense()">Add</button>
        </div>

        <!-- Table for Viewing Expenses -->
        <div id="expense-history" style="display: none;">
            <h3>Expense History</h3>
            <ul id="expense-list"></ul>
        </div>

        <!-- Plotly Graph -->
        <div id="graph" style="width:100%;max-width:700px;">
            <h3>Expense Graph</h3>
            <div id="expenseGraph"></div>
            <button onclick="generateGraph()">Generate Graph</button>
        </div>
    </div>

</div>

<script>

</script>

</body>
</html>
