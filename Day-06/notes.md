# 🎮 Events in JavaScript

Events in JavaScript are actions or occurrences that happen in the browser, triggered by user interactions or the browser itself. They serve as signals that something of interest has occurred, enabling dynamic and interactive web pages.

## 📋 Types of Events

### 1. ⚡ Inline Event Handlers:
Directly embedding JavaScript code within HTML attributes, such as:

```html:example-inline.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Day-06</title>
</head>
<body>

    <div class="container">
        <!-- Inline event handler -->
        <button onclick="alert('Button Clicked')">Click Me!</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### 2. 🔄 Event Listener Properties:

```html:example-property.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Day-06</title>
</head>
<body>

    <div class="container">
        <button class="btn">Click Me!</button>
    </div>

    <script>
        const btn = document.querySelector(".btn");
        btn.onclick = () => {
            alert("Hello!")
        }
    </script>
</body>
</html>
```

### 3. 🎧 addEventListener() and removeEventListener()

```html:example-addeventlistener.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Day-06</title>
    <style>
        body{
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container{
            height: 320px;
            width: 350px;
            background-color: lightseagreen;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
        }
        button{
            height: 55px;
            width: 150px;
            background-color: dodgerblue;
            color: whitesmoke;
            font-size: 1.2rem;
        }
        button:hover{
            background-color: rgba(0, 191, 255, 0.589);
        }
        button:active{
            background-color: deepskyblue;
        }
        span{
            font-size: 2rem;
        }
    </style>
</head>
<body>

    <div class="container">
        <span>&#x2665;&#xfe0f;</span>
        <button class="btn">Click Me!</button>
    </div>

    <script>
        const btn = document.querySelector(".btn");
        const heart = document.querySelector("span");

        function messageAdd(){
            alert("Button Clicked");
        }

        function removeEvent()
        {
            btn.removeEventListener('click', messageAdd);
            alert("Event Listener Removed");
        }

        btn.addEventListener('click', messageAdd);

        heart.addEventListener('click', removeEvent);
        
    </script>
</body>
</html>
```

### 🎯 Event Object (event)

When an event occurs, an event object is automatically passed to the event handler.

```html:example-event-object.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Day-06</title>
</head>
<body>

    <div class="container">
        <button class="btn">Click Me!</button>
    </div>

    <script>
        const btn = document.querySelector(".btn");

        btn.addEventListener('click', message);

        function message(event){
            console.log(event);
            console.log(event.type);
            console.log(event.target);
        }
    </script>
</body>
</html>
```
