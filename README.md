<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serververse - Welcome</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, #1e1e2f, #27273f);
            color: white;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 10%;
            background-color: rgba(0, 0, 0, 0.8);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #4CAF50;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-weight: 500;
        }

        nav a:hover {
            color: #4CAF50;
        }

        .hero {
            text-align: center;
            padding: 100px 20px;
            background: linear-gradient(135deg, #4CAF50, #3c3c5c);
            clip-path: ellipse(110% 80% at 50% 10%);
        }

        .hero h1 {
            font-size: 3rem;
            font-weight: 700;
        }

        .hero p {
            font-size: 1.2rem;
            margin: 20px 0;
        }

        .cta-button {
            background-color: #4CAF50;
            color: white;
            padding: 15px 30px;
            font-size: 1rem;
            text-transform: uppercase;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        }

        .cta-button:hover {
            background-color: #45A049;
        }

        .about {
            text-align: center;
            padding: 60px 20px;
        }

        .about h2 {
            font-size: 2rem;
            margin-bottom: 20px;
        }

        .about p {
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: #27273f;
            color: #aaa;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">Serververse</div>
        <nav>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section class="hero">
        <h1>Hello, I'm [Your Name]</h1>
        <p>Welcome to Serververse. I build innovative solutions to power your digital world.</p>
        <button class="cta-button">Learn More</button>
    </section>

    <section class="about" id="about">
        <h2>About Me</h2>
        <p>
            I am a passionate developer and founder of Serververse. With years of experience in technology, I specialize in creating seamless and efficient systems for businesses and individuals.
        </p>
    </section>

    <footer>
        &copy; 2025 Serververse | All Rights Reserved
    </footer>
</body>
</html>
